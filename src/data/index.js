import { webpackRequire2map } from '@/utils/util'

const modules = webpackRequire2map(require.context('./home', false, /^\.\/[\s\S]+\/*\.js$/), [])

console.log(modules)
export default modules