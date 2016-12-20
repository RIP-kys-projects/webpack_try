'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
    context: __dirname + '/frontend', // чтобы не дублировать в entry пути ./frontend/home, ./frontend/about etc

    entry: {
        home: "./home",
        about: "./about",
        common: './common' // код отсюда плагин CommonChunksPlugin включит в результирующий файл common.js
    },
    output: {
        path: __dirname + '/public', // рекомендуется использовать именно абсолютный путь к директории
        filename: '[name].js',
        library: '[name]' // в переменной home  и about будут храниться экспортированные модули
    },

    watch: NODE_ENV == 'development',
    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: NODE_ENV == 'development' ? 'source-map' : null,

    plugins: [
        new webpack.NoErrorsPlugin(), // не позволяет webpack скомпилить файлы в случае ошибки
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: 2 // минимальное число модулей, для формирования чанков
        }) // для выделения общ. части у модулей для возможности подключения на странице файла с общей частью + сам плагин можно вызывать несколько раз
    ],

    resolve: {
        moduleDirectories: ['node_modules'],
        extensions: ['', '.js']
    },

    resolveLoader: {
        moduleDirectories: ['node_modules'],
        moduleTemplates: ['*-loader'],
        extensions: ['', '.js']
    },

    module: {

        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015'] // Чтобы хелперы babel не были в каждом модуле сборки, можно https://github.com/babel/babel-loader#babel-is-injecting-helpers-into-each-file-and-bloating-my-code
            }
        }]

    }
};

if(NODE_ENV == 'production'){
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    )
}