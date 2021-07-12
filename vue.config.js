const CompressionWebpackPlugin = require('compression-webpack-plugin'); //Gzip
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');// 代码压缩
const FileManagerPlugin = require('filemanager-webpack-plugin');
const isProduction = process.env.NODE_ENV !== 'development';
const outputDir = 'dist';
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1/',
                ws: true,
                changeOrigin: true
            }
        }
    },
    configureWebpack: (config) => {

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
                new FileManagerPlugin({  //初始化 filemanager-webpack-plugin 插件实例
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
                    },
                    runTasksInSeries: false,
                    runOnceInWatchMode: false,

                })
            );

        }
    },
    pluginOptions: {
        mock: { entry: './mock/index.js', debug: false, disable: true }
    },

};