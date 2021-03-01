const path = require("path");
const webpack = require("webpack");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = ["js", "css"];
function resolve (dir) {
    return path.join(__dirname, dir)
}


module.exports = {
    // 部署生产环境和开发环境下的URL。
    // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    // publicPath: process.env.NODE_ENV === "production" ? "https://pubser-res.zhenai.com/h5/dating/" : "/",
    // 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）（默认dist）
    outputDir: "dist",
    // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
    assetsDir: "static",
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [path.resolve(__dirname, "./src/styles/lib-mixins.less")] //引入全局less文件
        }
    },
    lintOnSave: true,
    devServer: {
        host: "0.0.0.0",
        port: process.env.port || 80,
        proxy: {
            [process.env.VUE_APP_BASE_API]: {
                target: process.env.PROXY_URL,
                changeOrigin: true,
                pathRewrite: {
                    ["^" + process.env.VUE_APP_BASE_API]: ""
                }
            }
        },
        disableHostCheck: true
    },
    chainWebpack: (config) => {
        config.resolve.alias
        .set('@', resolve('src'))
        .set('~assets', resolve('./assets'))
        .set('~pages', resolve('src/pages'))
        .set('~components', resolve('src/components'))
        .set('~view', resolve('src/view'))
        .set('~api', resolve('src/api'))
        .set('~utils', resolve('src/utils'))
        .set('~store', resolve('src/store'))
    },
    configureWebpack: {
        externals: {
            vue: "Vue",
            vuex: "Vuex",
            "vue-router": "VueRouter",
            axios: "axios"
        },
        plugins: [
            // 配置compression-webpack-plugin压缩 注意，7.x版本的都有问题
            new CompressionWebpackPlugin({
                algorithm: "gzip",
                test: /\.js/,  // todo css
                threshold: 10240,  //只处理比这个值大的资源。按字节计算
                minRatio: 0.8  //只有压缩率比这个值小的资源才会被处理
            }),
            new webpack.DefinePlugin({
                "process.env":{
                    ZONE:JSON.stringify(process.env.ZONE)
                }
            })
        ]
    }
};
// 多页面配置
// https://cli.vuejs.org/zh/config/#pages
