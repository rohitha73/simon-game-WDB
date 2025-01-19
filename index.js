
$(document).ready(function () {
    var startKey = "";
    
    $(document).on('keydown', function (event) {
        startKey = event.key;
        starting();
    });
});


function starting(){

    for(var i = 0; i <= 4; i++){
        var randomMath = Math.random();
        randomMath = randomMath * 4;
        randomMath = Math.floor(randomMath) + 1;
    
        switch(randomMath) {
            case 1:
                setTimeout(function(){ $('.red').addClass('pressed');},300); 
                var red = new Audio('/sounds/red.mp3');
                setTimeout(() => {
                    red.play();
                }, 300);
                setTimeout(function(){ $('.red').removeClass('pressed');},600); 
                break;
            case 2:
                setTimeout(function(){ $('.green').addClass('pressed');},600); 
                var green = new Audio('/sounds/green.mp3');
                setTimeout(() => {
                    green.play();
                }, 600);
                setTimeout(function(){ $('.green').removeClass('pressed');},1200); 
                break;
            case 3:
                setTimeout(function(){ $('.blue').addClass('pressed');},1400); 
                var blue = new Audio('/sounds/blue.mp3');
                setTimeout(() => {
                    blue.play();
                }, 1400);
                setTimeout(function(){ $('.blue').removeClass('pressed');},1700); 
                break;
            case 4:
                setTimeout(function(){ $('.yellow').addClass('pressed');},2000); 
                var yellow = new Audio('/sounds/yellow.mp3',1700);
                setTimeout(() => {
                    yellow.play();
                }, 2000);
                setTimeout(function(){ $('.yellow').removeClass('pressed');},2300); 
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
}
    




