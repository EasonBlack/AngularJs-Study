angular.module('app')
.service('chartLine', [function() {

        var self = this;
        this.setConfig = function(dataSet) {
            self.NGConfig = {
                options: {
                    chart: {
                        type: 'line'
                    }
                },
                xAxis: {
                    categories: dataSet.categories //['2001', '2002', '2003', '2004', '2005']
                },
                series: [{
                    name : dataSet.name,
                    data: dataSet.data //[10, 15, 12, 8, 7]
                }],
                title: {
                    text: dataSet.title
                },
                loading: false
            }
        }


    }]);