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
                            'Content-Type': 'application/json'
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
