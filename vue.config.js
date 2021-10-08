const path = require("path");
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionWebpackPlugin = require('compression-webpack-plugin'); //Gzip
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // 代码压缩
const FileManagerPlugin = require('filemanager-webpack-plugin');
const isProduction = process.env.NODE_ENV !== 'development';
const APPID = process.env.VUE_APP_APPID || '';
const version = '1.0.1';
const versionName = 'vue-brush' + '-' + version;
const outputDir = APPID || versionName;
function resolve(dir) {
    return path.join(__dirname, dir);
}
console.log('VUE_APP_ENVTYPE===', process.env.VUE_APP_ENVTYPE);

module.exports = {
    outputDir: outputDir,
    chainWebpack: (config) => {
        //路径配置
        config.resolve.alias
            .set("assets", resolve("src/assets"))
            .set("styles", resolve("src/assets/styles"))
            .set("vue$", "vue/dist/vue.esm.js")
            .set("@", resolve("src"))
            .set("@public", resolve("public"))
            .set("@assets", resolve("src/assets"))
            .set("@components", resolve("src/components"))
            .set("@mixins", resolve("src/mixins"))
            .set("@pages", resolve("src/pages"))
            .set("@api", resolve("src/api"));

        config.plugin('define').tap(args => {
            args[0]['process.env'].VUE_APP_VERSION = JSON.stringify(version);
            return args;
        });
    },
    configureWebpack: (config) => {

        // if (isProduction || devNeedCdn) config.externals = cdns.externals;
        if (isProduction) {
            // 代码压缩
            config.plugins.push(
                new UglifyJsPlugin({
                    uglifyOptions: {
                        warnings: false,
                        compress: {
                            drop_debugger: true, // 注释debugger
                            drop_console: true, // 注释console
                            pure_funcs: ['console.log'] // 移除console
                        },
                    },
                    sourceMap: true,
                    parallel: true,
                })
            );
            // gzip压缩
            const productionGzipExtensions = ['html', 'js', 'css'];
            config.plugins.push(
                new CompressionWebpackPlugin({
                    filename: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: new RegExp(
                        '\\.(' + productionGzipExtensions.join('|') + ')$'
                    ),
                    threshold: 10240, // 只有大小大于该值的资源会被处理 10240
                    minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
                    deleteOriginalAssets: false // 删除原文件
                })
            );

            config.plugins.push(
                new FileManagerPlugin({
                    events: {
                        onEnd: {
                            mkdir: [`./${outputDir}`], // 新加的一句代码
                            delete: [   //首先需要删除项目根目录下的dist.zip
                                `./${outputDir}.zip`,
                            ],
                            archive: [ //然后我们选择dist文件夹将之打包成dist.zip并放在根目录
                                { source: `./${outputDir}`, destination: `./${outputDir}.zip` },
                            ]
                        }
                    }

                })
            );
            config.plugins.push(new BundleAnalyzerPlugin({
                analyzerPort: 8889
            }));
            config.plugins.push(new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/));
            config.optimization = {
                splitChunks: {
                    cacheGroups: {
                        'moment': {
                            name: 'moment',
                            test: /[\\/]node_modules[\\/]moment[\\/]/,
                            chunks: "all",
                            priority: 4,
                            reuseExistingChunk: true,
                            enforce: true
                        },
                        'vant': {
                            name: 'vant',
                            test: /[\\/]node_modules[\\/]vant[\\/]/,
                            chunks: "all",
                            priority: 4,
                            reuseExistingChunk: true,
                            enforce: true
                        },
                        'common': {
                            name: "chunk-common",
                            chunks: "initial",
                            minChunks: 2,
                            maxInitialRequests: 5,
                            minSize: 0,
                            priority: 1,
                            reuseExistingChunk: true,
                            enforce: true
                        },
                        'vendors': {
                            name: "chunk-vendors",
                            test: /[\\/]node_modules[\\/]/,
                            chunks: "initial",
                            priority: 2,
                            reuseExistingChunk: true,
                            enforce: true
                        },

                    }
                }
            };

        }
    },
    publicPath: "./",

    pages: {
        index: {
            entry: "src/main.js",
            chunks: ['chunk-vendors', 'chunk-common', 'vue', 'vue-router', 'vant', 'moment', 'index']
        },
    },

    // css: {
    //   loaderOptions: {
    //     // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
    //     // 因为 `scss` 语法在内部也是由 sass-loader 处理的
    //     // 但是在配置 `prependData` 选项的时候
    //     // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
    //     // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
    //   },
    // },

    // webpack-dev-server 相关配置
    devServer: {
        // 调试端口
        // port: 8989
        proxy: {

            "/api1": {
                target: "http://192.168.252.222/",
                changeOrigin: true,
                ws: true

            }

        },
    },
    pluginOptions: {
        // 如使用本地mock数据需要把disable设置为false
        mock: {
            entry: './mock/index.js',
            debug: false,
            disable: process.env.VUE_APP_MOCKJS == 'true' ? true : false,
            // disable: false
        }
    },
};