/*global module:false */

'use strict';

var settings = {

    basePath: '../../',

    frameworks: ['mocha', 'chai', 'sinon'],

    commonFiles: [
        'bower_components/angular/angular.js',
        'bower_components/angular-cookies/angular-cookies.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'bower_components/angular-translate/angular-translate.js',
        'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
        'bower_components/appverse-web-html5-core/dist/appverse-html5-core.js',
        'bower_components/angular-dynamic-locale/src/tmhDynamicLocale.js',

        // The rest
        'src/invocation-service/module.js',
        'src/invocation-service/serviceInvocation-service.js'
    ],

    unitFiles: [
        'test/unit/**/*.js'
    ],

    midwayFiles: [
        'bower_components/angular-cache/dist/angular-cache.min.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js',
        'bower_components/lodash/lodash.min.js',
        'bower_components/restangular/dist/restangular.min.js',
        'test/midway/**/*.js'
    ],

};


function Configurator() {
    this._files = [];
    this.basePath = settings.basePath;
    this.frameworks = settings.frameworks;
}

Configurator.prototype.filesForUnitTests = function () {
    return this.withCommonFiles().files(settings.unitFiles);
};

Configurator.prototype.filesForMidwayTests = function () {
    return this.withCommonFiles().files(settings.midwayFiles);
};

Configurator.prototype.withCommonFiles = function () {
    this._files = settings.commonFiles;
    return this;
};

Configurator.prototype.files = function (specificFiles) {
    return this._files.concat(specificFiles);
};

module.exports = new Configurator();
