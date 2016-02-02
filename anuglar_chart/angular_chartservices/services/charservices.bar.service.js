angular.module('app')
.factory('chartBar', [function() {

        var chartBar = function(data) {
            this.dataSet = data;
            this.config = {
                options: {
                    chart: {
                        type: 'bar'
                    }
                },
                xAxis: {
                    categories:  this.dataSet.categories
                },
                series: [{
                    name :this.dataSet.name,
                    data: this.dataSet.data
                }],
                title: {
                    text: this.dataSet.title
                },
                loading: false
            }

        }

        return chartBar;

    }]);