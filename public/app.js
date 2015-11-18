//one way databinding example

angular.module('ngDesigners',[])
    .controller('MainCtrl', function(){
    this.hello = 'world';
    this.item = {
        name: "my name",
        description: 'this description'
    }
});