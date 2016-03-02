angular.module('app')
    .factory('chartCustomBar', [function() {


        var chartCustomBar = function(data) {
            var self = this;
            self.dataSet = data.data;
            self.categories = data.categories;
            var _config = {
                options: {
                    chart: {
                        type: 'bar',
                        marginLeft : 150
                    }
                },
                xAxis: [{
                    lineColor: 'transparent',
                    tickLength: 0,
                    title: {
                        text: null
                    },
                    labels : {
                        useHTML: true,
                        formatter: function() {
                            return '<img src="'+ self.categories[this.value].icon+ '" style="width: 30px; vertical-align: middle" />' + '<span class="store-name">' + self.categories[this.value].name + '</span>';
                        },
                        align: 'left',
                        x: -100,
                        y: -5

                    }
                }, {
                    lineColor: 'transparent',
                    tickLength: 0,
                    linkedTo: 0,
                    opposite: true,
                    labels : {
                        useHTML: true,
                        formatter: function() {
                            if(!self.dataSet[this.value]) return ;
                            return '<span class="store-index">' + self.categories[this.value].id + '</span>';
                        }
                    }
                }],
                yAxis: {
                    gridLineColor: 'transparent',
                    labels : {
                        enabled: false
                    },
                    min: 0,
                    title: {
                        text: '',
                        align: 'high'
                    }
                },
                series: [{
                    name :'',
                    data: self.dataSet
                }],
                title: {
                    text: ''
                },
                loading: false
            }

            return _config;

        }

        return chartCustomBar;

    }]);