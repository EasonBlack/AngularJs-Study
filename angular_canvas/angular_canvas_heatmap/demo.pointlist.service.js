
angular.module('app')
.service('pointList', function() {



        this.init = function(dataSet) {
            this.points = [];
            this.dataSet = dataSet;
            this.currentIndex = 0;
            this.mapWidth  = 395693/1000;
            this.mapHeight = 196077/1000;
            this.times = {
                'fast': { totaltime: 500, time: 100},
                'normal': {totaltime: 1000, time:100},
                'slow': {totaltime:2000, time:100}
            };
            var _dataSet = dataSet.Beacon;
            for(var i= 0,ilen=_dataSet.length;i<ilen;i++){
                this.points.push(this.createNewPoint(_dataSet[i]));
            }

            this.setMax();
        }

        this.drawSolidPoint = function(ctx,r){
            ctx.clearRect(0, 0, ctx.canvas.width,  ctx.canvas.height);
            for(var i= 0,ilen=this.points.length;i<ilen;i++){
                var circle = this.points[i];
                ctx.beginPath();
                ctx.fillStyle = 'rgba(128,165,208,0.7)';
                ctx.arc(circle.x, circle.y, r, 0, 2 * Math.PI);
                ctx.fill();
                ctx.beginPath();
                ctx.fillStyle = '#0A1119';
                ctx.arc(circle.x, circle.y, 15, 0, 2 * Math.PI);
                ctx.fill();
                ctx.beginPath();
                ctx.fillStyle = '#3F444A';
                ctx.arc(circle.x, circle.y, 8, 0, 2 * Math.PI);
                ctx.fill()
            }
        }


        this.setSpeed = function(s){
            this.speed = s ;
            this.time = this.times[s].time;
            this.totaltime = this.times[s].totaltime;
            this.steps =  this.totaltime / this.time;
            this.setSpeedValue();
        }

        this.setSpeedValue = function(){
            var self = this;
            for(var i= 0,ilen=this.points.length;i<ilen;i++){
                var point = this.points[i];
                point.steps = []; //init
                for(var ii= 0,iilen=point.values.length;ii<iilen;ii++){
                    var _val = point.values[ii];
                    point.steps.push(_val);
                    if(ii+1<point.values.length) {
                        var _next_value = point.values[ii+1];
                        var _span = _next_value - _val;
                        var _step = _span / self.steps;
                        if(Math.abs(Math.floor(_step))>1) {
                            _step = Math.floor(_step);
                        } else {
                            _step = _step> 0 ? 1:-1;
                        }
                        for(var j=0;j<self.steps;j++) {
                            if(_next_value>_val && _val + j*_step <= _next_value) {
                                point.steps.push(_val + j*_step);
                            } else if(_next_value < _val &&  _val + j*_step >= _next_value)  {
                                point.steps.push(_val + j*_step);
                            }
                            else {
                                point.steps.push(_next_value);
                            }
                        }
                    }
                }
            }
            this.stepsLen = this.points[0].steps.length;
            console.log(this.points);
        }



        this.getOneLayerValue = function(index){
            var self = this;
            for(var i= 0,ilen=this.points.length;i<ilen;i++){
                var point = this.points[i];
                point.value = point.steps[index];
            }
            this.currentIndex = index;
            return this.points;
        }

        this.resetAxis = function(wrate,hrate){
            for(var i= 0,ilen=this.points.length;i<ilen;i++){
                var point = this.points[i];
                point.x = point.original_x * wrate;
                point.y =  point.original_y * hrate;
            }
        }


        this.setXY = function(x,y) {
            var _scale_x = 1050 / this.mapWidth;
            var _scale_y = 521 /  (this.mapHeight);
            return  _obj = {
                x: _scale_x*(x) + 150,
                y:_scale_y*(this.mapHeight - y + 16) + 150
            }
        }

        this.setMax = function(){
            var _max = 0,maxes=[];
            for(var i= 0,ilen=this.points.length;i<ilen;i++){
                var point = this.points[i];
                maxes.push(Math.max.apply(null,point.values));
            }
            this.max = Math.max.apply(null,point.values);
        }

        this.createNewPoint = function(obj) {
            var xy = this.setXY(obj.X, obj.Y);
            var _obj = {
                original_x : xy.x,
                original_y :  xy.y,
                x :  xy.x,
                y :  xy.y,
                value : null,
                next_value : null,
                values :obj.HOT_VALUE,
                steps : []
            };
            return _obj;
        }
});
