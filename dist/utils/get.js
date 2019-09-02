'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadLocal = undefined;

var _constants = require('./constants');

var _downloadGitRepo = require('download-git-repo');

var _downloadGitRepo2 = _interopRequireDefault(_downloadGitRepo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const downloadLocal = exports.downloadLocal = (templateName, projectName) => {
  let api = `${_constants.URL}/${templateName}`;
  return new Promise((resolve, reject) => {
    //projectName 为下载到的本地目录
    (0, _downloadGitRepo2.default)(api, projectName, err => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};