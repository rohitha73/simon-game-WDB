
$(document).ready(function () {
    
    $(document).on('keydown', function (event) {
        var startKey = "";
        startKey = event.key;
        starting();
    });
});

function getRandomMath() {
    let randomMath = Math.random();
    randomMath = randomMath * 4;
    randomMath = Math.floor(randomMath) + 1;
    return randomMath;
}


function starting(){

    let thePattern = [];
    console.log(thePattern);

    for(var i = 0; i <= 3; i++){
        getRandomMath();

        switch(getRandomMath()) {
            case 1:
                setTimeout(function(){ $('.red').addClass('pressed');},300); 
                var red = new Audio('/sounds/red.mp3');
                setTimeout(() => {
                    red.play();
                }, 300);
                setTimeout(function(){ $('.red').removeClass('pressed');},600); 
                thePattern.push(getRandomMath());
                console.log(thePattern);
                break;
            case 2:
                setTimeout(function(){ $('.green').addClass('pressed');},600); 
                var green = new Audio('/sounds/green.mp3');
                setTimeout(() => {
                    green.play();
                }, 600);
                setTimeout(function(){ $('.green').removeClass('pressed');},1200); 
                thePattern.push(getRandomMath());
                console.log(thePattern);
                break;
            case 3:
                setTimeout(function(){ $('.blue').addClass('pressed');},1400); 
                var blue = new Audio('/sounds/blue.mp3');
                setTimeout(() => {
                    blue.play();
                }, 1400);
                setTimeout(function(){ $('.blue').removeClass('pressed');},1700); 
                thePattern.push(getRandomMath());
                console.log(thePattern);
                break;
            case 4:
                setTimeout(function(){ $('.yellow').addClass('pressed');},2000); 
                var yellow = new Audio('/sounds/yellow.mp3',1700);
                setTimeout(() => {
                    yellow.play();
                }, 2000);
                setTimeout(function(){ $('.yellow').removeClass('pressed');},2300); 
                thePattern.push(getRandomMath());
                console.log(thePattern);
                break;
            default:
                alert("Error");
        }

        
    }

    $('.btn').click(function(event) {
        var buttonClass = event.target.classList[1];

        var includeOne = thePattern.includes(1);
        var includeTwo = thePattern.includes(2);
        var includeThree = thePattern.includes(3);
        var includeFour = thePattern.includes(4);


    
        switch(buttonClass) {
            case 'red':
                if(includeOne === true){ 
                    setTimeout(function(){ $('.red').addClass('pressed');},0); 
                    setTimeout(function(){ $('.red').removeClass('pressed');},200); 
                    var red = new Audio('/sounds/red.mp3');
                    red.play();
                }
                else{
                    var wrong = new Audio('/sounds/wrong.mp3');
                    setTimeout(() => {
                        wrong.play();
                        $('h1').html('Game Over');
                    }, 0);
                    setTimeout(() => {
                        $('h1').html('Press A Key to Start');
                    }, 700);
                }
                break;
            case 'green':
                if(includeTwo === true){
                    setTimeout(function(){ $('.green').addClass('pressed');},0); 
                    setTimeout(function(){ $('.green').removeClass('pressed');},200); 
                    var green = new Audio('/sounds/green.mp3');
                    green.play();
                }
                else{
                    var wrong = new Audio('/sounds/wrong.mp3');
                    setTimeout(() => {
                        wrong.play();
                        $('h1').html('Game Over');
                    }, 0);
                    setTimeout(() => {
                        $('h1').html('Press A Key to Start');
                    }, 700);
                }
                break;
            case 'blue':
                if(includeThree === true){
                    setTimeout(function(){ $('.blue').addClass('pressed');},0); 
                    setTimeout(function(){ $('.blue').removeClass('pressed');},200); 
                    var blue = new Audio('/sounds/blue.mp3');
                    blue.play();
                }
                else{
                    var wrong = new Audio('/sounds/wrong.mp3');
                    setTimeout(() => {
                        wrong.play();
                        $('h1').html('Game Over');
                    }, 0);
                    setTimeout(() => {
                        $('h1').html('Press A Key to Start');
                    }, 700);
                }
                break;
            case 'yellow':
                if(includeFour === true){
                    setTimeout(function(){ $('.yellow').addClass('pressed');},0); 
                    setTimeout(function(){ $('.yellow').removeClass('pressed');},200); 
                    var yellow = new Audio('/sounds/yellow.mp3');
                    yellow.play();
                }
                else{
                    var wrong = new Audio('/sounds/wrong.mp3');
                    setTimeout(() => {
                        wrong.play();
                        $('h1').html('Game Over');
                    }, 0);
                    setTimeout(() => {
                        $('h1').html('Press A Key to Start');
                    }, 700);
                }
                break;
            default:
                break;
        }
    });
}
    




