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
    angular.module('proteo.invocation-service', [])
        .config(config).run(run);


    /**
     * Preliminary configuration.
     *
     * Configures the integration between modules that need to be integrated
     * at the config phase.
     */
    function config($compileProvider, $injector, $provide, ModuleSeekerProvider, REST_CONFIG) {}
    config.$inject = ["$compileProvider", "$injector", "$provide", "ModuleSeekerProvider", "REST_CONFIG"];

    function run($log, REST_CONFIG) {
        $log.debug('Using proteo.invocation-service.');
    }
    run.$inject = ["$log", "REST_CONFIG"];


})();

(function() {
    'use strict';
    angular.module('proteo.invocation-service')

    .factory('serviceInvocation', ['$log', '$http', '$q', 'REST_CONFIG',
        function($log, $http, $q, REST_CONFIG) {

            $log.debug('serviceInvocationServices loading');

            var factory = {};

            factory.callService = function(relativeUrl, body, config) {
                $log.debug('Calling service with url:' + relativeUrl);
                var deferredPetition = $q.defer();
                if (!(relativeUrl.indexOf('/') === 0)) {
                    relativeUrl = '/' + relativeUrl;
                }
                $http({
                        method: 'POST',
                        url: REST_CONFIG.BaseUrl + relativeUrl,
                        data: body,
                        headers: {
                            'Content-Type': 'application/json',
                            'Api-Key': 'foobar'
                        }
                    })
                    .success(function(response) {
                        deferredPetition.resolve(response);
                    })
                    .error(function(error) {
                        $log.error(error);
                        deferredPetition.reject(error);
                    });
                //return RESTFactory.readListNoEmpty(relativeUrl);
                return deferredPetition.promise;
            };

            return factory;
        }
    ]);
}());
