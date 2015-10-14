(function() {
    'use strict';

    /**
     * @ngdoc module
     * @name  proteo4-invocation-service
     * @description Angular module to allow invocation of proteo4 services.
     */

    /**
     * proteo.invocation-service module.
     * Bootstraps the application by integrating services that have any relation.
     */
    angular.module('proteo.invocation-service', ['appverse.detection'])
        .config(config).run(run);


    /**
     * Preliminary configuration.
     *
     * Configures the integration between modules that need to be integrated
     * at the config phase.
     */
    function config($compileProvider, $injector, $provide, ModuleSeekerProvider, REST_CONFIG) {}

    function run($log, REST_CONFIG) {
        $log.debug('Using proteo.invocation-service.');
    }


})();
