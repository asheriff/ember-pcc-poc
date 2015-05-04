import DS from 'ember-data';

var S = {
  NONE: 0,
  ERROR: 1,
  CONNECTED: 2,
  ACTIVE: 3
};

let Camera = DS.Model.extend({
  name: DS.attr(),
  ip: DS.attr(),
  url: DS.attr()
});

Camera.reopenClass({
  FIXTURES: [
    { id: 0, ip: '120.121.123.125', url: 'rtsp://120.121.123.125/stream', state: S.CONNECTED, name: 'RoboSHOT 12 USB' },
    { id: 1, ip: '120.121.123.125', url: 'rtsp://120.121.123.125/stream', state: S.ACTIVE, name: 'RoboSHOT 30' },
    { id: 2, ip: '120.121.123.125', url: 'rtsp://120.121.123.125/stream', state: S.CONNECTED, name: 'RoboSHOT 12 HDMI' },
    { id: 3, ip: '120.121.123.125', url: 'rtsp://120.121.123.125/stream', state: S.ERROR, name: 'RoboSHOT 12 HDMI' },
    // { id: 4, ip: '120.121.123.125', url: 'rtsp://120.121.123.125/stream', state: S.CONNECTED, name: 'HD-20' },
    // { id: 5, ip: '120.121.123.125', url: 'rtsp://120.121.123.125/stream', state: S.CONNECTED, name: 'ZoomSHOT' },
    // { id: 6, state: S.NONE, name: 'None' },
    // { id: 7, state: S.NONE, name: 'None' }
  ]
});

export default Camera;
