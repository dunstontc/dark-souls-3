var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    mousePos = [-500, -500], // start offscreen
    dots = [],
    letters = [],
    width = document.documentElement.clientWidth,
    height = document.documentElement.clientHeight,
    startDotCount = width > 640 ? 300 : 200,
    currentDotCount = 0,
    amplitude = 400,
    frequency = .075,
    currentMarker = 0,
    visibleDuration = 20000, // lets us have a shorter invisble period than visible
    invisibleDuration = 3000,
    loadingText,
    isScreenClear = false,
    clearScreen = () => {
      // flip it, reverse it
      isScreenClear = !isScreenClear;

      // if not in clear mode, add the dots
      if (!isScreenClear) { createDots(); }

      // reschedule
      setTimeout(clearScreen, isScreenClear ? invisibleDuration : visibleDuration);
    }


canvas.width = width;
canvas.height = height;

if (window.devicePixelRatio > 1) {
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;

    canvas.width = canvasWidth * window.devicePixelRatio;
    canvas.height = canvasHeight * window.devicePixelRatio;
    canvas.style.width = canvasWidth;
    canvas.style.height = canvasHeight;

    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
}

let init = () => {
  createDots();
  loadingText = new LoadingText();
  draw();

  setTimeout(clearScreen, visibleDuration);
};

class Dot {
  constructor (opts) {
    this.ctx = opts.ctx;

    this.startTime = opts.startTime;
    this.frequency = opts.frequency || 5;
    this.amplitude = opts.amplitude || 400;

    this.fill = opts.fill; // boolean, determines if circle is filled or outlined
    this.color = opts.color || [0, 0, 0];
    this.size = 1;
    this.speed = 0;
    this.section = opts.section;
    this.opacity = 0;
    this.maxSize = opts.maxSize || 20;
    this.maxSpeed = opts.maxSpeed || 1;

    this.x = opts.x || Math.random() * width + (Math.random() * 8 - 8);
    this.direction = opts.direction;

    this.endFunc    = (typeof opts.endFunc    !== 'undefined') ? opts.endFunc.bind(this)    : undefined;
    this.removeFunc = (typeof opts.removeFunc !== 'undefined') ? opts.removeFunc.bind(this) : undefined;

    this.draw = this.draw.bind(this);
  }

  draw() {
    let x = this.x,
        y = this._getYPos(),
        pos = this.x * 2 * this.section,
        isOffScreenX = x >= width + this.size / 2,
        isOffScreenY = y <= 0 + this.size / 2,
        hasEndFunc    = typeof this.endFunc    !== 'undefined',
        hasRemoveFunc = typeof this.removeFunc !== 'undefined';

    // if we're ready to clear the screen and dot has exited the top of the
    // screen, call remove func. otherwise, if dot has exited right side,
    // reset x position to 0 so it begins on left again
    if      (isOffScreenY && isScreenClear && hasRemoveFunc) { this.removeFunc.call(); }
    else if (isOffScreenX && hasEndFunc)                     { this.endFunc.call();    }

    // when ready to clear screen, increase speed
    // of all dots so they exit quickly
    if (isScreenClear) { this.speed += .005; }

    // gradually increase speed, opacity, and size when
    // dots first appear/reappear on screen
    if (this.speed < this.maxSpeed) { this.speed += .01; }
    if (this.opacity < 1) { this.opacity += .025; }
    if (this.size < this.maxSize && this._nearCursor(pos, y)) {
      this.size +=  2;
    } else if (this.size < this.maxSize / 4) {
      var start = this.startTime + 1000,
          time = window.performance.now() - start,
          start = 0,
          end = this.maxSize / 4,
          duration = start + 2000;

      this.size = end * Math.easeInOutCubic(time > 0 ? time : 0, 0, 1, duration) + 1;
    } else if (this.size > this.maxSize / 4 + 1) {
      this.size -= 1;
    }

    // all dots are biased toward the right, but `x` in this case
    // is really more like a 'sequence' value as the tan function
    // in _getYPos causes dots to move mostly vertical
    this.x += this.speed;

    this.ctx.fillStyle = `rgba(${this.color.join(',')}, ${this.opacity})`;
    this.ctx.beginPath();
    this.ctx.arc(pos, y, this.size, 0, 2 * Math.PI);
    this.ctx.closePath();

    if (this.fill) { this.ctx.fill();   }
    else           { this.ctx.stroke(); }
  }

  // calculate y-position for a given time and x-position
  _getYPos() {
    return this.amplitude * (Math.tan(Math.PI * (this.x / width) * this.frequency - (this.x / 10))) + height / 2;
  }

  _nearCursor(x, y) {
    return Math.abs(x - mousePos[0]) < 50 && Math.abs(y - mousePos[1]) < 50;
  }
}

class LoadingText {
  constructor() {
    this.opacity = 0;
    this.align = 'center';
    this.font = '40px calibri';

    this.reposition();
  }

  reposition() {
    this.x = width / 2;
    this.y = height / 2;
  }

  draw() {
    let text = isScreenClear ? 'Finished' : 'DARK SOULS 3';

    ctx.textAlign = this.align;
    ctx.font = this.font;
    ctx.fillStyle = 'rgba(230, 230, 230, ' + this.opacity + ')';
    ctx.fillText(text, this.x, this.y);

    if (isScreenClear && this.opacity > 0) { this.opacity -= .075; }
    if (!isScreenClear && this.opacity < 1) { this.opacity += .01; }
  }
}

let createDots = () => {
  for (var i = 0; i <= startDotCount; i++) {
    let dot = new Dot({
      ctx: ctx,
      color: !!Math.floor(Math.random() * 4) ? [100, 100, 0] : [255, 50, 0],
      startTime: window.performance.now(),
      frequency: frequency,
      maxAmplitude: amplitude,
      maxSize: Math.random() * 10,
      maxSpeed: (Math.random() * .45) / (width > 640 ? 3 : 4),
      section: Math.random() * 5 / 2 + 1,
      fill: true,
      endFunc: function () { this.x = Math.random() * this.size - this.size * 2; },
      removeFunc: function () {
        dots.splice(dots.indexOf(this), 1);
        currentDotCount--;
      }
    });

    dots.push(dot);
    currentDotCount++;
  }
}


//
// Draw them janks.
//
let draw = () => {
  requestAnimationFrame(draw);

  ctx.clearRect(0, 0, width, height);

  var i = currentDotCount;
  while (--i) {
    dots[i].draw.call();

    if (startDotCount / 2 == i) {
      loadingText.draw();
    }
  }
}


//
// Resize if window changes or device rotates.
//
window.addEventListener('resize', () => {
  ctx.clearRect(0, 0, width, height);

  width  = window.innerWidth;
  height = window.innerHeight;

  canvas.width  = width;
  canvas.height = height;

  loadingText.reposition();
});

let mousemove  = (e) => { mousePos = [e.pageX, e.pageY]; },
    mouseleave = (e) => { mousePos = [-5000, -5000];     };

window.addEventListener('mousemove',  mousemove);
window.addEventListener('mouseleave', mouseleave);

window.addEventListener('touchmove',  mousemove);
window.addEventListener('touchend',   mouseleave)

// prevent window movement on touch devices
window.addEventListener('touchstart', (e) => { e.preventDefault(); });

Math.easeInOutCubic = function (t, b, c, d) {
  if ((t/=d/2) < 1) return c/2*t*t*t + b;
  return c/2*((t-=2)*t*t + 2) + b;
}


init();
