const areas = [
  {
    "name": "Cemetery of Ash",
    "areas": [
      { "bonfire": "Firelink Shrine", "location": "Cemetery of Ash", "boss": false },
      { "bonfire": "Cemetary of Ash", "location": "Cemetery of Ash", "boss": false },
      { "bonfire": "Iudex Gundyr", "location": "Cemetery of Ash", "boss": true },
      { "bonfire": "Untended Graves", "location": "Cemetery of Ash", "boss": false },
      { "bonfire": "Champion Gundyr", "location": "Cemetery of Ash", "boss": true },
    ],
  },
  {
    "name": "High Wall of Lothric",
    "areas": [
      { "bonfire": "High Wall of Lothric", "location": "High Wall of Lothric", "boss": false },
      { "bonfire": "Tower on the Wall", "location": "High Wall of Lothric", "boss": false },
      { "bonfire": "Vordt of the Boreal Valley", "location": "High Wall of Lothric", "boss": true },
      { "bonfire": "Dancer of the Boreal Valley", "location": "High Wall of Lothric", "boss": true },
      { "bonfire": "Oceiros, the Consumed King", "location": "High Wall of Lothric", "boss": true },
    ],
  },
  {
    "name": "Undead Settlement",
    "areas": [
      { "bonfire": "Foot of the High Wall", "location": "Undead Settlement", "boss": false },
      { "bonfire": "Undead Settlement", "location": "Undead Settlement", "boss": false },
      { "bonfire": "Cliff Underside", "location": "Undead Settlement", "boss": false },
      { "bonfire": "Dilapidated Bridge", "location": "Undead Settlement", "boss": false },
      { "bonfire": "Pit of Hollows", "location": "Undead Settlement", "boss": false },
    ],
  },
  {
    "name": "Road of Sacrifices",
    "areas": [
      { "bonfire": "Road of Sacrifices", "location": "Road of Sacrifices", "boss": false },
      { "bonfire": "Halfway Fortress", "location": "Road of Sacrifices", "boss": false },
      { "bonfire": "Crucifixion Woods", "location": "Road of Sacrifices", "boss": false },
      { "bonfire": "Crystal Sage", "location": "Road of Sacrifices", "boss": true },
      { "bonfire": "Farron Keep", "location": "Road of Sacrifices", "boss": false },
      { "bonfire": "Keep Ruins", "location": "Road of Sacrifices", "boss": false },
      { "bonfire": "Farron Keep Perimeter", "location": "Road of Sacrifices", "boss": false },
      { "bonfire": "Old Wolf of Farron", "location": "Road of Sacrifices", "boss": false },
      { "bonfire": "Abyss Watchers", "location": "Road of Sacrifices", "boss": true },
    ],
  },
  {
    "name": "Cathedral of the Deep",
    "areas": [
      { "bonfire": "Cathedral of the Deep", "location": "Cathedral of the Deep", "boss": false },
      { "bonfire": "Cleansing Chapel", "location": "Cathedral of the Deep", "boss": false },
      { "bonfire": "Rosarias Bed Chamber", "location": "Cathedral of the Deep", "boss": false },
      { "bonfire": "Deacons of the Deep", "location": "Cathedral of the Deep", "boss": true },
    ],
  },
  {
    "name": "Catacombs of Carthus",
    "areas": [
      { "bonfire": "Catacombs of Carthus", "location": "Catacombs of Carthus", "boss": false },
      { "bonfire": "High Lord Wolnir", "location": "Catacombs of Carthus", "boss": true },
      { "bonfire": "Abandoned Tomb", "location": "Catacombs of Carthus", "boss": false },
      { "bonfire": "Old Kings Antechamber", "location": "Catacombs of Carthus", "boss": false },
      { "bonfire": "Demon Ruins", "location": "Catacombs of Carthus", "boss": false },
      { "bonfire": "Old Demon King", "location": "Catacombs of Carthus", "boss": true },
    ],
  },
  {
    "name": "Irithyll of the Boreal Valley",
    "areas": [
      { "bonfire": "Irithyll of the Boreal Valley", "location": "Irithyll of the Boreal Valley", "boss": false },
      { "bonfire": "Central Irithyll", "location": "Irithyll of the Boreal Valley", "boss": false },
      { "bonfire": "Church of Yorshka", "location": "Irithyll of the Boreal Valley", "boss": false },
      { "bonfire": "Distant Manor", "location": "Irithyll of the Boreal Valley", "boss": false },
      { "bonfire": "Pontiff Sulyvahn", "location": "Irithyll of the Boreal Valley", "boss": true },
      { "bonfire": "Water Reserve", "location": "Irithyll of the Boreal Valley", "boss": false },
      { "bonfire": "Anor Londo", "location": "Irithyll of the Boreal Valley", "boss": false },
      { "bonfire": "Prison Tower", "location": "Irithyll of the Boreal Valley", "boss": false },
      { "bonfire": "Aldrich, Devourer of Gods", "location": "Irithyll of the Boreal Valley", "boss": true },
    ],
  },
  {
    "name": "Irithyll Dungeon",
    "areas": [
      { "bonfire": "Irithyll Dungeon", "location": "Irithyll Dungeon", "boss": false },
      { "bonfire": "Profaned Capital", "location": "Irithyll Dungeon", "boss": false },
      { "bonfire": "Yhorm the Giant", "location": "Irithyll Dungeon", "boss": true },
    ],
  },
  {
    "name": "Lothric Castle",
    "areas": [
      { "bonfire": "Lothric Castle", "location": "Lothric Castle", "boss": false },
      { "bonfire": "Dragon Barracks", "location": "Lothric Castle", "boss": false },
      { "bonfire": "Dragonslayer Armor", "location": "Lothric Castle", "boss": true },
      { "bonfire": "Grand Archives", "location": "Lothric Castle", "boss": false },
      { "bonfire": "Twin Princes", "location": "Lothric Castle", "boss": true },
    ],
  },
  {
    "name": "Archdragon Peak",
    "areas": [
      { "bonfire": "Archdragon Peak", "location": "Archdragon Peak", "boss": false },
      { "bonfire": "Dragon-Kin Mausoleum", "location": "Archdragon Peak", "boss": false },
      { "bonfire": "Great Belfry", "location": "Archdragon Peak", "boss": false },
      { "bonfire": "Nameless King", "location": "Archdragon Peak", "boss": true },
    ],
  },
  {
    "name": "Kiln of the First Flame",
    "areas": [
      { "bonfire": "Flameless Shrine", "location": "Kiln of the First Flame", "boss": false },
      { "bonfire": "Kiln of the First Flame", "location": "Kiln of the First Flame", "boss": true },
    ],
  },
  {
    "name": "The Painted World of Ariandel",
    "areas": [
      { "bonfire": "Snowfield", "location": "The Painted World of Ariandel", "boss": false },
      { "bonfire": "Rope Bridge Cave", "location": "The Painted World of Ariandel", "boss": false },
      { "bonfire": "Corvian Settlement", "location": "The Painted World of Ariandel", "boss": false },
      { "bonfire": "Snowy Mountain Pass", "location": "The Painted World of Ariandel", "boss": false },
      { "bonfire": "Ariandel Chapel", "location": "The Painted World of Ariandel", "boss": false },
      { "bonfire": "Sister Friede", "location": "The Painted World of Ariandel", "boss": false },
      { "bonfire": "Depth of the Painting", "location": "The Painted World of Ariandel", "boss": false },
      { "bonfire": "Champions Gravetender", "location": "The Painted World of Ariandel", "boss": true },
    ],
  },
  {
    "name": "The Dreg Heap",
    "areas": [
      { "bonfire": "The Dreg Heap", "location": "The Dreg Heap", "boss": false },
      { "bonfire": "Earthen Peak Ruins", "location": "The Dreg Heap", "boss": false },
      { "bonfire": "Within the Earthen Peak Ruins", "location": "The Dreg Heap", "boss": false },
      { "bonfire": "The Demon Prince", "location": "The Dreg Heap", "boss": true },
    ],
  },
  {
    "name": "The Ringed City",
    "areas": [
      { "bonfire": "Mausoleum Lookout", "location": "The Ringed City", "boss": false },
      { "bonfire": "Ringed Inner Wall", "location": "The Ringed City", "boss": false },
      { "bonfire": "Ringed City Streets", "location": "The Ringed City", "boss": false },
      { "bonfire": "Shared Grave", "location": "The Ringed City", "boss": false },
      { "bonfire": "Church of Filianore", "location": "The Ringed City", "boss": false },
      { "bonfire": "Darkeater Midir ", "location": "The Ringed City", "boss": true },
      { "bonfire": "Filianores Rest", "location": "The Ringed City", "boss": false },
      { "bonfire": "Slave Knight Gael", "location": "The Ringed City", "boss": true },
    ],
  },
];
