"use strict";

module.exports = function (config) {
    config.set({
            // Karma configuration

            // base path, that will be used to resolve files and exclude
            basePath: 'app',

            // Fix for "JASMINE is not supported anymore" warning
            frameworks: ["jasmine"],


// list of files / patterns to load in the browser
            files: [
                'bower_components/jquery/jquery.js',
                'bower_components/underscore/underscore.js',
                'bower_components/jquery-ui/ui/jquery.ui.widget.js',
                'bower_components/jquery-ui/ui/jquery.ui.mouse.js',
                'bower_components/angular/angular.js',
                'bower_components/angular-cookies/angular-cookies.js',
                'bower_components/angular-route/angular-route.js',
                'bower_components/angular-touch/angular-touch.js',
                'bower_components/angular-sanitize/angular-sanitize.js',
                'bower_components/angular-resource/angular-resource.js',
                'bower_components/angular-mocks/angular-mocks.js',
                'bower_components/angular-ui-select2/src/select2.js',
                'bower_components/jquery-ui/ui/jquery.ui.core.js',
                'bower_components/jquery-ui/ui/jquery.ui.widget.js',
                'bower_components/jquery-ui/ui/jquery.ui.mouse.js',
                'bower_components/jquery-ui/ui/jquery.ui.draggable.js',
                'bower_components/jquery-ui/ui/jquery.ui.droppable.js',
                'bower_components/jquery-ui/ui/jquery.ui.position.js',
                'bower_components/jquery-ui/ui/jquery.ui.tooltip.js',
                'scripts/*.js',
                'scripts/**/*.js',

                'views/**/*.html',

                '../test/spec/directives/myFoo.js'

            ],

            preprocessors: {
                'views/**/*.html': 'ng-html2js',
                'scripts/**/*.js': 'coverage',
                'scripts/*.js': 'coverage'
            },

            ngHtml2JsPreprocessor: {
                prependPrefix: '/'
            },


// list of files to exclude
            exclude: [],


            /*
             plugins : [
             'karma-html2js-preprocessor',
             'karma-coverage',
             'karma-junit-reporter',
             'karma-chrome-launcher',
             'karma-firefox-launcher',
             'karma-jasmine'
             ],
             */

// test results reporter to use
// possible values: dots || progress || growl
            reporters: ['dots', 'junit', 'coverage'],

// web server port
            port: 8080,

// cli runner port
            runnerPort: 9100,

// enable / disable colors in the output (reporters and logs)
            colors: true,

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
            logLevel: config.LOG_INFO,

// enable / disable watching file and executing tests whenever any file changes
            autoWatch: true,

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
            browsers: ['Chrome'],

// If browser does not capture in given timeout [ms], kill it
            captureTimeout: 5000,

// Continuous Integration mode
// if true, it capture browsers, run tests and exit
            singleRun: false,

            junitReporter: {
                outputFile: '../target/surefire-reports/TEST-karma.xml',
                suite: 'unit'
            },

            coverageReporter: {
                type: 'lcovonly',
                dir: '../target/karma-coverage'
            }
        }
    );
};
