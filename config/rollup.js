import typescript from 'rollup-plugin-typescript2'
import pkg from '../package.json'

// 兼容 axios-miniprogram-adapter 和 @bigMeow/axios-miniprogram-adapter
const name = pkg.name.split('/').pop()
const version = pkg.version

const banner =
`/*!
 * axios-miniprogram-adapter ${version} (https://github.com/theozhang32/axios-miniprogram-adapter)
 */
`

function getCompiler (opt) {
  return typescript(opt)
}

const external = [
  'axios/lib/helpers/buildURL',
  'axios/lib/core/buildFullPath',
  'axios/lib/utils',
  'axios/lib/core/settle',
  'axios/lib/core/AxiosError'
]

export default {
  name,
  banner,
  getCompiler,
  external
}
