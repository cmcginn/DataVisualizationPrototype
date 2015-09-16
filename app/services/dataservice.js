/**
 * Created by Chris on 9/16/2015.
 */

angular.module('myApp.dataservice',[]).factory('dataservice',['$http','$q',function($http,$q){
        var apiBaseRoute = ''
        var result={
            getSchemaModelAsync:function(id){
                return $q(function (resolve, reject) {
                    $http.get(apiBaseRoute + '/SchemaModel/'+id).
                        success(function (data, status, headers, config) {
                            resolve(data);
                        })
                        .error(function (data, status, headers, config) {
                            // called asynchronously if an error occurs
                            // or server returns response with an error status.
                        });
                });
            }
        };
        return result;
    }])
