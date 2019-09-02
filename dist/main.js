'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _constants = require('./utils/constants');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 定义action
let actionMap = {
  init: {
    description: 'generate a new project form a template',
    usages: ['xiami init templateName projectName']
  }

  // 描述、别名、回调
};Object.keys(actionMap).forEach(action => {
  _commander2.default.command(action).description(actionMap[action].description).alias(actionMap[action].alias).action(() => {
    switch (action) {
      case 'init':
        (0, _index2.default)(action, ...process.argv.slice(3));
        break;

      default:
        break;
    }
  });
});

// 帮助信息
function help() {
  console.log('\r\nUsage:');
  Object.keys(actionMap).forEach(action => {
    actionMap[action].usages.forEach(usage => {
      console.log(`-${usage}`);
    });
  });
  console.log('\r');
}

_commander2.default.usage('<command>[options]');

_commander2.default.on('-h', help);
_commander2.default.on('--help', help);

// 版本号
_commander2.default.version(_constants.VERSION, '-v --version').parse(process.argv);

// 不带参数时
if (!process.argv.slice(2).length) {
  _commander2.default.outputHelp(make_green);
}

function make_green(text) {
  return _chalk2.default.green(text);
}