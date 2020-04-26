const proxyTarget = process.env.VUE_APP_BASE_URL;
module.exports = {
    publicPath: 'https://bj-mutou-1301404888.cos.ap-beijing.myqcloud.com/cdn/mutou-worker',
    devServer: {
        open: true, //浏览器自动打开页面
        https: false,
        hotOnly: false, //热更新（webpack已实现了，这里false即可）
        proxy: {
            //配置跨域
            '/api': {
                target: proxyTarget+"/mutou",
                ws:true,
                changOrigin:true,
                pathRewrite:{
                    '^/api':'/'
                }
            }
        }
    }
}
