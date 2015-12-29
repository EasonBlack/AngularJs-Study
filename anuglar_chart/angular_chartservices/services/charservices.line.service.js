angular.module('app')
.factory('chartLine', [function() {

        var chartLine = function() {

            this.dataSet =  {
                type: 'line',
                categories: ['2001', '2002', '2003', '2004', '2005'],
                data: [10, 15, 12, 8, 7],
                name: 'xxxxx',
                title: 'AAAAA'
            }

            this.NGConfig = {
                options: {
                    chart: {
                        type: 'line'
                    }
                },
                xAxis: {
                    categories: this.dataSet.categories //['2001', '2002', '2003', '2004', '2005']
                },
                series: [{
                    name : this.dataSet.name,
                    data: this.dataSet.data //[10, 15, 12, 8, 7]
                }],
                title: {
                    text: this.dataSet.title
                },
                loading: false
            }

        }

        return chartLine;

    }]);