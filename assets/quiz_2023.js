var customerAnswers = {};

document.addEventListener("DOMContentLoaded", () => { 

    let nextButtons = document.querySelectorAll(".control-container > .next-btn");
    let previousButtons = document.querySelectorAll(".control-container > .back-btn");
    let entryButtons = document.querySelectorAll('#first_of_hair input.radio');
    
    for (let button of entryButtons){
      button.addEventListener('click', () => {
        openPopUp(button.dataset.target);
      })
    }   

    for (let nextBtn of nextButtons){
      nextBtn.addEventListener('click', function(){
       
        if(this.getAttribute('data-type') === 'style'){
          nextScreen('style');
          setTimeout(() => {changePosition('first', 'style');}, 1000);
        } else if (this.getAttribute('data-type') === 'type'){
          let answer = "";
          try{
            answer = addStyle(this);
          }
          catch(e) {
            alert("Please select an option!");
            return;
          }
          
          if (answer === "style_6"){
            nextScreen('short_type');
            setTimeout(() => {changePosition('style', 'short_type');}, 1000);
          } else{
            nextScreen('type');
            setTimeout(() => {changePosition('style', 'type');}, 1000);
          }
          
        } else if (this.getAttribute('data-type') === 'final'){
          let answer = "";
          
          try{
            answer = addType(this);
          }
          catch(e) {
            alert("Please select an option!");
            return;
          }

          answerScreen();
          nextScreen('final');
          if (customerAnswers["style"] === "style_6"){
            setTimeout(() => {changePosition('short_type', 'final');}, 1000);
          } else {
            setTimeout(() => {changePosition('type', 'final');}, 1000);
          }
        }
      });
    }
  
  	for (let backBtn of previousButtons){
      backBtn.addEventListener('click', function(){
       
        if(this.getAttribute('data-type') === 'first'){
          	backScreen('style')
            changePosition('style', 'first');       	
        } else if (this.getAttribute('data-type') === 'style'){
            if (customerAnswers["style"] === "style_6"){
              backScreen('short_type')
              changePosition('short_type', 'style');
            } else{
              backScreen('type')
              changePosition('type', 'style');
            }
        } else if (this.getAttribute('data-type') === 'type'){
            if (customerAnswers["style"] === "style_6"){
              backScreen('final')
              changePosition('final', 'short_type');
            } else {
              backScreen('final')
              changePosition('final', 'type');
            }
        }
      });
    }
});


function addStyle(button){
	let container = button.parentElement.parentElement;
    let answer = container.querySelector("input:checked").value;
   	
  	customerAnswers['style'] = (answer);
    return answer;
}

function addType(button){
	let container = button.parentElement.parentElement;
    let answer = container.querySelector("input:checked").value;
   	
  	customerAnswers['type'] = (answer);
    return answer;
}

function nextScreen(nextScreen){
	let nextId = nextScreen+'_of_hair';
    let screen = document.getElementById(nextId);
    screen.style.left = '0px';
  	
  	document.body.scrollTop = 150; // For Safari
    document.documentElement.scrollTop = 150; // For Chrome, Firefox, IE and Opera
}

function backScreen(currentScreen){
	let currentId = currentScreen+'_of_hair';
  	let screen = document.getElementById(currentId);
    screen.style.left = '-9999px';
  	
  	document.body.scrollTop = 150; // For Safari
    document.documentElement.scrollTop = 150; // For Chrome, Firefox, IE and Opera
}

function answerScreen(){
  let answer_style = customerAnswers.style;
  let answer_type = customerAnswers.type;
  let answerContainer = document.getElementById('answer');

  answerContainer.innerHTML = answers[answer_style][answer_type]
}

function changePosition(current, next){
	let currentId = current+'_of_hair';
  	let nextId = next+'_of_hair';
  	
  	let currentScreen = document.getElementById(currentId)
    let nextScreen = document.getElementById(nextId)
    
    currentScreen.style.position = 'absolute'
    nextScreen.style.position = 'relative'
}

function addClass(element, className) {
  element.classList.add(className);
}

function removeClass(element, className) {
  element.classList.remove(className);
}

function openPopUp(target) {
  addClass(document.querySelector('.background'), 'visible');
  addClass(document.querySelector(`#${target}`), 'visible');
}

function closePopUp() {
  removeClass(document.querySelector('.background.visible'), 'visible');
  removeClass(document.querySelector('.pop-up-container.visible'), 'visible');
}
