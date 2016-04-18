import angular from 'angular';
import _ from 'lodash';

angular.module('app')
    .controller('addCtrl', ['$scope', '$http', '$timeout', function ($scope, $http, $timeout) {

        var self = this;

        $scope.card = {
            type: {
                title: "TYPE",
                //source: [{id:1,name:"a"},{id:2 , name:'b'}]
            },
            sourcetype: {
                title: "SOURCE TYPE",
            },
            sourcefrom: {
                title: 'SOURCE FROM',
            },
            time: {
                title: 'TIME',
            },
            leadto: {
                title: 'LEAD TO',
                source: [
                    {id: 1, name: 'aaa'},
                    {id: 2, name: 'bbb'},
                    {id: 3, name: 'ccc'}
                ]
            },
            relateto: {
                title: 'RELATE TO',
                source: [
                    {id: 1, name: 'dddd'},
                    {id: 2, name: 'eeee'},
                    {id: 3, name: 'ffff'}
                ]
            },
            content: {
                title: 'CONTENT'
            },
            key: {
                title: 'KEY'
            },
            used: {
                title: 'IS USED'
            },
            copy: {
                title: 'IS COPY'
            }
        }

        $http.get('/carditems')
            .then(function (response) {
                self.setCardItems(response.data)
            })



        self.setCardItems = (items) => {
            var _type = _.filter(items, (t)=> {
                return t.type == 'type'
            });
            var _sourcetype = _.filter(items, (t)=> {
                return t.type == 'source'
            });
            $scope.card.type.source = _type;
            $scope.card.sourcetype.source = _sourcetype;
        }



        $scope.getResult = ()=> {
            console.log($scope.card);
        }
    }])
