const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, './src'),
 
    entry: {
        app: './app.js',
        load: './load/load.js',
        Menu:'./Menu.js',
        Convector:'./Convector/Convector.js',
        Table:'./Table/Table.js',
        Search:'./Search/Search.js',
        
      
    },
    output: {
        path: path.resolve(__dirname, './build/public'), //Изменили финальную директорию билда
        filename: '[name].bundle.js',
        publicPath: '/public' //Добавили публичную директорию (в нее и будет собираться весь наш код и другие ресурсы)
    },
    devServer: {
        contentBase: path.resolve(__dirname, './src')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                             presets: ['es2015', 'react'] }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    
    },

    devtool: 'source-map'
};
    /*if (NODE_ENV == 'production') {
        module.exports.plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                    drop_console: true
                }
            })
        );
    }
    */