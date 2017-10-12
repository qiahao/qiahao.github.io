let log = console.log;
// 转驼峰
export const toCamelCase = function (str) {
    let re=/-+(\w)/g;
    return str.replace(re, ($0,$1) => {
        return $1.toUpperCase()
    });
}

// webpack require.context 转为数组包装函数 
// export 使用 default
export const webpackRequire2array = (r, exinclude) => {
    let contents = []
    const paths = r.keys().filter((p, i) => {
        return exinclude.indexOf(p) == -1
    });
    for (let p of paths) {
        let fn = r(p).default ? r(p).default : r(p)
        if (fn instanceof Array) {
            contents = [...contents, ...fn]
        } else if (fn instanceof Object) {
            contents.push(fn)
        }
    }
    return contents
}



export const webpackRequire2map = function(requireContext, exinclude = []) {
    let sourceMap = {}
    let paths = requireContext.keys().filter((p, i) => {return exinclude.indexOf(p) == -1 });
    for (let p of paths) {
        let _module = {}
        let splits = p.split('/')
        let key = splits[splits.length - 1].split('.')[0]
        let fn = requireContext(p)
        key = toCamelCase(key)
        _module[key] = fn.default || fn
        Object.assign(sourceMap, _module)
    }
    return sourceMap
}