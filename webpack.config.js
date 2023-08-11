const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');



module.exports = {
    entry: { index: './test.js'},               // 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },              // 出口文件
    module: {
        rules: [{
            // 格式
            test: /\.(sass|scss|css)$/,
            //順序是由下到上 sass > css > style
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: './dist'
                }
            },
                'css-loader',
                'sass-loader'
            ],
        }]

    },              // 處裡對應模組
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "./[name].css"
        }),
        new HtmlWebpackPlugin({
            chunks: ['index'],  //選擇注入資源 chunk
            inject: 'body', //預設<body> js </body>  head or body
            template: './index.html',
            //來源
            filename: 'index.html'
            // 目的地
        })

    ],            // 對應的插件
    devServer: {
        contentBase: './dist',
        host: 'localhost',
        port: 3030,
        // 指定首頁檔案
        index: 'index.html',
        open: true
    },         // 服務器配置
    mode: 'development'      // 開發模式配置
}