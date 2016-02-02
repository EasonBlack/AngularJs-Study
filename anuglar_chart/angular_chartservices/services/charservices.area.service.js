angular.module('app')
.factory('chartArea', [function() {

        var chartArea = function(data) {
            var self = this;
            this.dataSet = data;
            this.config = {
                options: {
                    chart: {
                        type: 'area'
                    }
                },
                xAxis: {
                    labels: {
                        formatter: function(){
                            return self.dataSet.categories[this.value];
                        }
                    }
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

        return chartArea;

    }]);