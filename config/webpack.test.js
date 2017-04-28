var path = require('path');
var webpack = require("webpack");
module.exports = {
    target: 'web',
    resolve: {
        extensions: [".ts", ".tsx", '.js', '.jsx', 'json']
    },
    entry: "./src/index",
    devtool: 'source-map',
    module: {
        loaders: [
            {test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/},
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: ['babel-loader']
                // query:  {
                //     presets: ['latest', 'stage-0', 'react']
                // }
            },
            {
                test: /\.json$/,
                include: [
                    /node_modules/,
                    path.resolve(__dirname, '..')
                ],
                loader: 'json-loader'
            },
            {
                test:  /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
            },
            {
                test:  /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            //'__BASE_AUTH_URI__': JSON.stringify("http://localhost:60068/")
            '__BASE_AUTH_URI__': JSON.stringify("http://dev-api.myengagementcenter.com/auth"),
            '__BASE_BROADCASTMGRAPI_URI__': JSON.stringify("http://dev-api.myengagementcenter.com/realtime"),
            '__BASE_RESCHEDULER_URI__': JSON.stringify("http://dev-api.myengagementcenter.com/Scheduler"),
            '__BASE_ACCTMGT_URI__': JSON.stringify("http://dev-api.myengagementcenter.com/acctmgt"),
            '__BASE_MAPPING_URI__': JSON.stringify("http://dev-api.myengagementcenter.com/mapping")
        }),
    ],
    externals: {
            //'jsdom': 'window',
            //'cheerio': 'window',
            'react/lib/ExecutionEnvironment': true,
            'react/addons': true,
            'react/lib/ReactContext': 'window',
            //'sinon': 'window.sinon'
        }
    
}
