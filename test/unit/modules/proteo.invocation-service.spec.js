/*jshint expr:true */
"use strict";

describe('Unit: Testing proteo.invocation-service module', function () {

    beforeEach(setupServiceInvocationTesting);

    it('should contain a serviceInvocation factory', inject(function (serviceInvocation) {
        expect(serviceInvocation).to.be.an.object;
    }));


    /////////////// HELPER FUNCTIONS

    function setupServiceInvocationTesting() {

        // Generate mock modules and providers
        mockDependencies();

        // Load the module to be tested
        module("proteo.invocation-service");
    }

    function mockDependencies() {

        // mock modules by creating empty ones
        //angular.module('appverse.configuration', []);
        //angular.module('jmdobry.angular-cache', []);

        // Provide the dependency injector with mock empty objects
        // instead of real ones
        module(function ($provide) {

            $provide.factory('$serviceInvocation', function(){
                return {};
            });
        });
    }
});
