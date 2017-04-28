var webpackConfig = require('./config/webpack.test');
var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    basePath: '',
    logLevel: config.LOG_WARN,
    browsers: [ 'Chrome' ], //run in Chrome
    singleRun: true, //just run once by default
    frameworks: [ 'jasmine' ], //use the jasmine test framework
    resolve: {
        extensions: ['', ".ts", ".tsx", '.js', '.jsx']
    },
    mime: {
        'text/x-typescript': ['ts','tsx']
        },
    files: [
      './src/**/*.spec.ts*'
    ],
    preprocessors: {
      './src/**/*.spec.ts*': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'progress', 'kjhtml', 'dots', 'junit'], //report results in this format, click debug button to see jasmine output
    junitReporter: {
      useBrowserName: false,
      outputDir: '.',
      outputFile: 'test-results.xml'
    },
    webpack: webpackConfig , // //kind of a copy of your webpack config
    // {devtool: 'inline-source-map', //just do inline source maps instead of the default
    //   module: webpackConfig.module,
    //   resolve: webpackConfig.resolve,
    //   plugins: webpackConfig.plugins,
    //   externals: webpackConfig.externals,
    //   watch: true
    // },
    webpackServer: {
      noInfo: true //true = please don't spam the console when running in karma!
    },

  });
};
