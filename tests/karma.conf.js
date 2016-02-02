// Karma configuration
module.exports = function(config) {
  config.set({
    basePath: './tests',
    frameworks: [
        'browserify', 
        'jasmine',
        'sinon-chai'
    ],
    files: [
        'tests/**/*.js'
    ],
    exclude: [],
    preprocessors: {
        'tests/**/*.js': ['browserify']
    },
    browserify: {
        debug: true,
        transform: [ 'babelify' ]
    },
    reporters: ['nyan'],
    nyanReporter: {
      suppressErrorReport: true,
      suppressErrorHighlighting: true,
      numberOfRainbowLines: 100 // default is 4
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
