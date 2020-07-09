

module.exports = {
    publicPath: './', // 基本路径
    outputDir: 'dist', // 输出文件目录
    build:{
        assetsPublicPath: './',
        assetsSubDirectory: 'assets'
    },
    pages:{
        index:{
            entry:'src/main.js',
            // 模板来源
            template: 'public/index.html',
        }
    },

    // webpack-dev-server 相关配置
    devServer: {
        open: process.platform === 'darwin',
        host: 'localhost',
        port: 8080, // 端口
        https: false, // 启用https
        overlay: {
            warnings: true,
            errors: true
        }, // 错误、警告在页面弹出
        proxy: {
            '/api': {
                target: 'http://localhost:8089/',
                changeOrigin: true, // 允许websockets跨域
                // ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        } // 代理转发配置，用于调试环境
    },
    // 第三方插件配置
    pluginOptions: {}
}