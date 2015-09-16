/**
 * Created by Chris on 9/16/2015.
 */
'use strict';

describe('myApp.dataservice module', function() {

    //beforeEach(module('myApp'));
    beforeEach(module('myApp.dataservice'));
    describe('dataservice get schema model', function(){
        beforeEach(inject(function($q,$http,dataservice){
            spyOn(dataservice,'getSchemaModelAsync').and.callFake(function(){
                var deferred = $q.defer();
                deferred.resolve(mockData.schemaModel);
                return deferred.promise;
            });

        }));
        it('should define data service....', inject(function($http,dataservice) {
            var x = "u";
            expect(dataservice).toBeDefined();
        }));
        it('should return schemaModel',inject(function($rootScope,$q,$httpBackend,dataservice){

            dataservice.getSchemaModelAsync().then(function(d){
                expect(d.columns).toBeDefined()
                expect(d.columns.length).toBeGreaterThan(0);
            });
            $rootScope.$digest();

        }));


    });
});