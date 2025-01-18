var randomMath = Math.random();
randomMath = randomMath*4;
randomMath = Math.floor(randomMath) +1;

$(document).ready(function () {
    var startKey = "";
    
    $(document).on('keydown', function (event) {
        startKey = event.key;
        starting();
    });
});



function starting(){
    switch(randomMath) {
        case 1:
            var red = new Audio('/sounds/red.mp3');
            red.play();
            setTimeout(function(){ $('.red').addClass('pressed');},0); 
            setTimeout(function(){ $('.red').removeClass('pressed');},200); 
            break;
        case 2:
            var green = new Audio('/sounds/green.mp3');
            green.play();
            setTimeout(function(){ $('.green').addClass('pressed');},0); 
            setTimeout(function(){ $('.green').removeClass('pressed');},200); 
            break;
        case 3:
            var blue = new Audio('/sounds/blue.mp3');
            blue.play();
            setTimeout(function(){ $('.blue').addClass('pressed');},0); 
            setTimeout(function(){ $('.blue').removeClass('pressed');},200); 
            break;
        case 4:
            var yellow = new Audio('/sounds/yellow.mp3');
            yellow.play();
            setTimeout(function(){ $('.yellow').addClass('pressed');},0); 
            setTimeout(function(){ $('.yellow').removeClass('pressed');},200); 
            break;
        default:
            alert("Error");
    }
}
    


$('.btn').click(function(event) {
    var buttonClass = event.target.classList[1];

    switch(buttonClass) {
        case 'red':
            setTimeout(function(){ $('.red').addClass('pressed');},0); 
            setTimeout(function(){ $('.red').removeClass('pressed');},200); 
            var audio = new Audio('/sounds/red.mp3');
            audio.play();
            break;
        case 'green':
            setTimeout(function(){ $('.green').addClass('pressed');},0); 
            setTimeout(function(){ $('.green').removeClass('pressed');},200); 
            var audio = new Audio('/sounds/green.mp3');
            audio.play();
            break;
        case 'blue':
            setTimeout(function(){ $('.blue').addClass('pressed');},0); 
            setTimeout(function(){ $('.blue').removeClass('pressed');},200); 
            var audio = new Audio('/sounds/blue.mp3');
            audio.play();
            break;
        case 'yellow':
            setTimeout(function(){ $('.yellow').addClass('pressed');},0); 
            setTimeout(function(){ $('.yellow').removeClass('pressed');},200); 
            var audio = new Audio('/sounds/yellow.mp3');
            audio.play();
            break;
        default:
            break;
    }
});

