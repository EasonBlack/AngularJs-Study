angular.module('app')
.factory('chartCombine', [function() {

        var chartCombine = function(data) {
            this.dataSet = data;
            this.config = {

                series: this.dataSet.data,
                title: {
                    text: this.dataSet.title
                },
                loading: false
            }

        }

        return chartCombine;

    }]);