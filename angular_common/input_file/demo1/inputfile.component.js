angular.module('app')
    .component('appInputFile', {
        templateUrl: 'inputfile.component.tpl.html',
        bindings: {
            imagesrc: '=',
            h: '@',
            w: '@',
            setImageSrc: '&'
        },
        controller: function () {
            var self = this;
  
            self.onChange = (e) => {
  
                let file = e.target.files[0];
                console.log(file);
                var reader = new FileReader();
                reader.onload = (e) => {
                    var data = e.target.result;
                    // self.imageSrc = data;     
                    self.setImageSrc({img: {src: data}})              
                };
                reader.readAsDataURL(file)
            }
        }
    })