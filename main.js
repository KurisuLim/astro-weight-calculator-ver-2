function calculate(userWeight, gravity){

    return userWeight * gravity
}

function myFunction(){

    var userWeight = document.getElementById('user-weight').value; 
    var gravity = 0;
    var planetName = document.getElementById('planets').value;
    
    switch(planetName){

        case 'Pluto':
        gravity = 0.06;
        break;

        case 'Neptune':
        gravity = 1.148;
        break;

        case 'Uranus':
        gravity = 0.917;
        break;

        case 'Saturn':
        gravity = 1.139;
        break;

        case 'Jupiter':
        gravity = 2.640;
        break;

        case 'Mars':
        gravity = 0.3895;
        break;

        case 'Moon':
        gravity = 0.1655;
        break;

        case 'Earth':
        gravity = 1;
        break;

        case 'Venus':
        gravity = 0.9032;
        break;

        case 'Mercury':
        gravity = 0.377;
        break;

        case 'Sun':
        gravity = 27.9;
        break;
    }

    var totalWeight = calculate(userWeight, gravity);
    var output = 'If you were on ' + planetName +', you would weigh ' + totalWeight + 'lbs!'
    console.log(output);
    document.getElementById('output').innerHTML = output;
}

document.getElementById('calculate-button').addEventListener('click', myFunction);