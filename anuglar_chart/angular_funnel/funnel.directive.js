angular.module('app')
.directive('funnelChart',function(){
       return {
           restrict: "E",
           template: '<div class="funnel-chart"></div>',
           link:  function(scope, ele, attr){
               var dataSet = [
                   {text : 'aaa', cornerText : 11, tip:'xxxxx xx sxxx sdf xxx'},
                   {text : 'bbb', cornerText : 22, tip:'xxx xxxxx'},
                   {text : 'ccc', cornerText : 33, tip:'xxxxxxd d  d   sd asdf xx'},
               ]

               var  height=600,
                   width=600,
                   margin = 25;

               var hexagon = function(){
                   this.topwidth = 500;
                   this.bottomwidth = 450;
                   this.offset = (this.topwidth - this.bottomwidth)/2;
                   this.height = 60;
                   this.interval = 10;
                   this.center = margin + this.topwidth/2 -15;

                   this.getNextPath = function(num) {
                       var initX =  this.offset * (this.height + this.interval)*num/this.height;
                       var topwidth = this.topwidth - initX*2;
                       var bottomwidth = topwidth -  this.offset*2;
                       var lefttop = {x: margin + initX,  y: margin + (this.height + this.interval)*num};
                       var righttop = {x: margin + initX + topwidth, y:  margin + (this.height + this.interval)*num};
                       var leftbottom = {x: margin + initX + this.offset, y: margin + (this.height + this.interval)*num+ this.height}
                       var rightbottom = {x: margin + initX + this.offset + bottomwidth, y: margin + (this.height + this.interval)*num+ this.height}

                       var path = [];
                       path.push(lefttop);
                       path.push(righttop);
                       path.push( rightbottom);
                       path.push(leftbottom);
                       path.push(lefttop);
                       return path;
                   }

                   this.getTextTransform = function(num) {
                       var centerX = margin + this.topwidth/2;
                       var centerY = margin + (this.height + this.interval)*num+ this.height/2 - 8;
                       return 'translate('+centerX+','+centerY+')';
                   }

                   this.getCornerTextTransform = function(num) {
                       var centerX = margin +  this.offset * (this.height + this.interval)*num/this.height + 10;
                       var centerY = margin + (this.height + this.interval)*num+ 15;
                       return 'translate('+centerX+','+centerY+')';
                   }

                   this.getTipTextTransform = function(num){
                       var centerX = margin + this.topwidth/2;
                       var centerY = margin + (this.height + this.interval)*num+ this.height/2+15;
                       return 'translate('+centerX+','+centerY+')';
                   }
               }

               var _hex = new hexagon();

               var drawHexagon =
                   d3.svg.line()
                       .x(function(d) { return d.x; })
                       .y(function(d) { return d.y; })

               var canvas = d3.select(ele[0])
                   .append('svg')
                   .attr("viewBox", "0 0 "+width+" "+ height)
                   .attr("preserveAspectRatio", "xMinYMin meet")
                   //.attr('width',  width)
                   //.attr('height', height);

               var group = canvas.append('g')
                   .attr('transform','translate('+margin+','+margin+')');

               var nodes = group.selectAll('g')
                   .data(dataSet)
                   .enter()
                   .append('g');

               nodes.append('path')
                   .attr('d',function(d,i){
                       return drawHexagon(_hex.getNextPath(i));
                   })
                   .attr("fill", "rgba(255,0,0,0.4)");

               nodes.append('text')
                   .text(function(d){
                       return d.text;
                   })
                   .attr("text-anchor", "middle")
                   .attr('transform',function(d,i){
                       return _hex.getTextTransform(i)
                   })
                   .attr('class', 'tra-center-text')

               nodes.append('text')
                   .text(function(d){
                       return d.tip;
                   })
                   .attr("text-anchor", "middle")
                   .attr('transform',function(d,i){
                       return _hex.getTipTextTransform(i)
                   })
                   .attr('class', 'tra-tip-text')

               nodes.append('text')
                   .text(function(d){
                       return 0;
                   })
                   .attr('transform',function(d,i){
                       return _hex.getCornerTextTransform(i)
                   })
                   .attr('class', 'tra-corner-text')
                   .transition()
                   .duration(1000)
                   .tween("text", function(d) {
                       var i = d3.interpolate(this.textContent, d.cornerText);
                       return function(t) {
                           this.textContent = Math.round(i(t)) + '%';
                       };
                   });

           }
       }
    });