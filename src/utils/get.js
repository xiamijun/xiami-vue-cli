import {getAll} from './rc'
import {URL} from './constants'
import downloadGit from 'download-git-repo'

export const downloadLocal = (templateName, projectName) => {
  let api = `${URL}/${templateName}`
  return new Promise((resolve, reject) => {
    //projectName 为下载到的本地目录
    downloadGit(api, projectName, err => {
      if (err) {
        reject(err)
      }
      resolve()
    })
  })
}