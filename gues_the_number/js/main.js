const BTN = document.getElementById('btn');
BTN.onclick = () => {
    let playerNumber = document.getElementById('input').value
    let input = document.getElementById('input');
    let screenArea = document.querySelector('.screenside_screen');
    let randomNumber = Math.floor(Math.random() * Math.floor(11))
    if(playerNumber > 10 || playerNumber < 0){
        screenArea.innerHTML = '<h3>Dight must be between 0 and 10</h3>'
        input.focus();
        input.classList.add('error');
        screenArea.classList.add('error') 
    }else if(isNaN(playerNumber)){
        screenArea.innerHTML = '<h3>Please enter a number</h3>';
        input.focus();
        input.classList.add('error');
        screenArea.classList.add('error') 
    }else if(!playerNumber){
        screenArea.innerHTML = '<h3>Field is empty</h3>';
        input.focus();
        input.classList.add('error');
        screenArea.classList.add('error');
    }else{
        input.classList.remove('error');  
        if(playerNumber == randomNumber){              
        screenArea.innerHTML = '<h3>You WIN</h3>';
        screenArea.classList.add('win')        
        }else{
        screenArea.innerHTML = `<h3>Try again <br>Number was <span>${randomNumber}</span></h3>`;
        screenArea.classList.remove('win'); 
        screenArea.classList.add('error'); 
        }
}   
    
}



