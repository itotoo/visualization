const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const CleanWebpackPlugin = require('clean-webpack-plugin'); 
const CopyWebpackPlugin = require('copy-webpack-plugin'); 

module.exports = {
    mode: 'development', //模式 development production
    entry:{ 
        "./assets/js":'./src/view/index.js'
    },
    output:{ 
        filename: '[name][hash:8].min.js',
        path: path.resolve(__dirname + '/build')
    },
    module:{ 
        rules:[
            {
                test: /\.json$/,
                type: 'javascript/auto',
                loader: 'json-loader'
            },
            {
                test: /(\.js$|.jsx?$)/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../"
                        }
                    },
                    "css-loader","sass-loader" 
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/view/index.html',
            filename: './index.html' 
        }),
        new MiniCssExtractPlugin({
            filename: './assets/css'+"main[hash:8].min.css",
            chunkFilename: "[id].css"
        }),
        new CleanWebpackPlugin(['build/'],{
            exclude: ['view']
        }),
        new CopyWebpackPlugin([
            {
                from: 'src/static',
                to: './static'
            }
        ])
    ],
    optimization: {
        splitChunks: {
          chunks: 'async',
          minSize: 30000,
          maxSize: 0,
          minChunks: 1,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          automaticNameDelimiter: '~',
          name: true,
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true
            }
          }
        }
    },
    watch: true ,
    devServer: {
        open: true,
        historyApiFallback: true,
        port: 7418
    }
}