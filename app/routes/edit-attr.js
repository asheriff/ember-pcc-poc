import Ember from 'ember';

var KEY_NAMES = {
  'trisync': 'Tryisync',
  'iris': 'Iris',
  'iris-gain': 'Iris Gain',
  'opwb': 'One Push White Balance',
  'red': 'Red Gain',
  'blue': 'Blue Gain',
  'chroma': 'Chroma',
  'gamma': 'Gamma',
  'brightness': 'Brightness',
  'contrast': 'Contrast',
  'detail': 'Detail',
  'pan': 'Pan Speed',
  'tilt': 'Tilt Speed',
  'zoom': 'Zoom Speed',
  'focus': 'Manual Focus'
};

export default Ember.Route.extend({
  model: function(args) {
    return {
      name: KEY_NAMES[args.key]
    };
  }
});
