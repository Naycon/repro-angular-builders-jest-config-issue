const path = require('path');

module.exports = {
  process(_src, filename, _config, _options) {
    return 'module.exports = { default: ' + JSON.stringify(path.basename(filename)) + ' };';
  },
};

