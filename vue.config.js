const isProd = process.env.MODE === 'prod'

let prodExports = {
    publicPath: 'https://bj-mutou-1301404888.cos.ap-beijing.myqcloud.com/cdn/mutou-worker',
}
let devExports = {}
module.exports = isProd ? prodExports : devExports
