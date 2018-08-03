import React from 'react';

const PageNotFound = (props) => {

  const style404 = {
    fontSize: 72,
    fontWeight: 'bold',
    color: 'papayawhip',
  };

  // let message = 'Page not found';

  // if (props.text) {
  //   message = props.text;
  // }

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={style404}>
        404
        <br/>
        ¯\_(ツ)_/¯
      </div>
    </div>
  );
};

export default PageNotFound;
