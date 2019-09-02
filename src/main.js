import program from 'commander'
import {
  VERSION
} from './utils/constants'
import apply from './index'
import chalk from 'chalk'

// 定义action
let actionMap = {
  init: {
    description: 'generate a new project form a template',
    usages: [
      'xiami init templateName projectName'
    ]
  }
}

// 描述、别名、回调
Object.keys(actionMap).forEach(action => {
  program.command(action).description(actionMap[action].description).alias(actionMap[action].alias).action(() => {
    switch (action) {
      case 'init':
        apply(action, ...process.argv.slice(3))
        break;

      default:
        break;
    }
  })
})

// 帮助信息
function help() {
  console.log('\r\nUsage:');
  Object.keys(actionMap).forEach(action=>{
    actionMap[action].usages.forEach(usage=>{
      console.log(`-${usage}`);      
    })
  })
  console.log('\r');  
}

program.usage('<command>[options]')

program.on('-h',help)
program.on('--help',help)

// 版本号
program.version(VERSION,'-v --version').parse(process.argv)

// 不带参数时
if (!process.argv.slice(2).length) {
  program.outputHelp(make_green)
}

function make_green(text) {
  return chalk.green(text)
}