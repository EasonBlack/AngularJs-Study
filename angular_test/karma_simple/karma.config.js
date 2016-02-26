module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      '../../vendor/angular.js',
      '../../vendor/angular-mocks.js',
      'source/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
      'karma-chrome-launcher',
      'karma-jasmine'
    ]

  });
};
