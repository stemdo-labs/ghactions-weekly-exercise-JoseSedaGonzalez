module.exports = function(config) {
    config.set({
      frameworks: ['jasmine'],
      browsers: ['ChromeHeadless'],
      files: [
        'src/**/*.spec.ts'
      ],
      preprocessors: {
        'src/**/*.spec.ts': ['karma-typescript']
      },
      reporters: ['progress'],
      singleRun: true
    });
  };
  