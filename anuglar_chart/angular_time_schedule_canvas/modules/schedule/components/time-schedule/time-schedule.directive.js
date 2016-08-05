let TimeScheduleCanvas = ()=> {


    let link = (scope)=> {

        var canvas = document.getElementById('canvas');
        var $canvas = $('#canvas');
        var ctx = canvas.getContext('2d');
        var container = $canvas.parent();
        var $container = $(container);
        $(window).resize(respondCanvas);
        scope.$on('$destroy', function () {
            $(window).off("resize");
        });
        function respondCanvas() {
            $canvas.attr('width', $container.width()); //max width
            $canvas.attr('height', $container.height()); //max height
            draw();
        }

        function draw() {
            ctx.fillStyle = "white";
            ctx.strokeStyle = "#555";
            ctx.lineWidth = 1;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.moveTo(0, 30)
            ctx.lineTo(canvas.width, 30);
            ctx.stroke();

            //draw cuts
            let _width = canvas.width / (scope.schedule.BgCut.length - 1);

            for (let i = 0; i < scope.schedule.BgCut.length; i++) {
                let _cut = scope.schedule.BgCut[i];

                ctx.beginPath();
                ctx.moveTo(_width * (i + 1), 30)
                ctx.lineTo(_width * (i + 1), 200);
                ctx.stroke();

                if (_cut.name) {
                    ctx.fillStyle = "#555";
                    ctx.textAlign = "center";
                    ctx.fillText(_cut.name, _width * (i), 15);
                }
            }

            //draw tasks
            let _itemWidth = _width / 4;
            let _taskStart = 0;
            for (let i = 0; i < scope.tasks.length; i++) {
                let _task = scope.tasks[i];
                ctx.beginPath();
                ctx.fillStyle = _task.color || 'white';
                if (_task.color) {
                    //ctx.fillRect(_taskStart, 80, _task.span * _itemWidth, 70);
                    let x1 = _taskStart;
                    let x2 = _taskStart + _task.span * _itemWidth;
                    let y1 = 80;
                    let y2 = 150;
                    ctx.beginPath();
                    ctx.fillStyle = _task.color;
                    ctx.moveTo(x1 + 10, 80);
                    ctx.lineTo(x2 - 10, 80);
                    ctx.quadraticCurveTo(x2, 80, x2, 90);
                    ctx.lineTo(x2, 140);
                    ctx.quadraticCurveTo(x2, 150, x2 - 10, 150);
                    ctx.lineTo(x1 + 10, 150);
                    ctx.quadraticCurveTo(x1, 150, x1, 140);
                    ctx.lineTo(x1, 90);
                    ctx.quadraticCurveTo(x1, 80, x1 + 10, 80);
                    ctx.fill();
                }
                _taskStart += _task.span * _itemWidth;
            }
        }

        scope.$watch('tasks', function (newVal) {
            console.log(scope.schedule);
            console.log(scope.tasks);
            console.log(scope.test);
            if (scope.tasks && scope.schedule) {
                respondCanvas();
            }
        }, false);

    }


    return {
        restrict: 'E',
        templateUrl: 'modules/schedule/components/time-schedule/time-schedule.directive.tmp.html',
        scope: {
            schedule: '=',
            tasks: '=',
            test: '='
        },
        link: link
    }
}

export default TimeScheduleCanvas