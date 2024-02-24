var customerAnswers = {};
var answers = {
  "cinderella":`

    <div class='answer__text-container'>
      <h3 style='text-align:center'><em>Cinderella</em></h3>
      <img src='https://cdn.shopify.com/s/files/1/0069/6470/7389/files/cinderella_1.webp?v=1696611948' loading='lazy' height='400' width='400' alt=''>
      <p>Note: This quiz provides general suggestions based on the provided content and may not be accurate for every individual.</p>
    </div>`,
   "chreyl":`
    <div class='answer__text-container'>
      <h3 style='text-align:center'><em>Chreyl Blossom</em></h3>
      <img src='https://cdn.shopify.com/s/files/1/0069/6470/7389/files/cheryl.webp' loading='lazy' height='400' width='400' alt=''>
      <p>Note: This quiz provides general suggestions based on the provided content and may not be accurate for every individual.</p>
    </div>`,
   "honey":`
    <div class='answer__text-container'>
      <h3><em>Honey Lemon</em></h3>
      <img src='https://cdn.shopify.com/s/files/1/0069/6470/7389/files/honey_1.webp?v=1696611948' loading='lazy' height='400' width='400' alt=''>
      <p>Note: This quiz provides general suggestions based on the provided content and may not be accurate for every individual.</p>
    </div>`,
   "kim":`
    <div class='answer__text-container'>
      <h3 style='text-align:center'><em>Kim Possible</em></h3>
      <img src='https://cdn.shopify.com/s/files/1/0069/6470/7389/files/kim_1.webp?v=1696611948' loading='lazy' height='400' width='400' alt=''>
      <p>Note: This quiz provides general suggestions based on the provided content and may not be accurate for every individual.</p>
    </div>`,
   "black":`
    <div class='answer__text-container'>
      <h3 style='text-align:center'><em>Black Widow</em></h3>
      <img src='https://cdn.shopify.com/s/files/1/0069/6470/7389/files/widow_1.webp?v=1696611948' loading='lazy' height='400' width='400' alt=''>
      <p>Note: This quiz provides general suggestions based on the provided content and may not be accurate for every individual.</p>
    </div>`,
   "daphne":`
    <div class='answer__text-container'>
      <h3 style='text-align:center'><em>Daphne Blake</em></h3>
      <img src='https://cdn.shopify.com/s/files/1/0069/6470/7389/files/daphne.webp?v=1696611948' loading='lazy' height='400' width='400' alt=''>
      <p>Note: This quiz provides general suggestions based on the provided content and may not be accurate for every individual.</p>
    </div>`,
   "sally":`
    <div class='answer__text-container'>
      <h3 style='text-align:center'><em>Sally Skellington</em></h3>
      <img src='https://cdn.shopify.com/s/files/1/0069/6470/7389/files/sally_1.webp?v=1696611949' loading='lazy' height='400' width='400' alt=''>
      <p>Note: This quiz provides general suggestions based on the provided content and may not be accurate for every individual.</p>
    </div>`,
   "poison":`
    <div class='answer__text-container'>
      <h3 style='text-align:center'><em>Poison Ivy</em></h3>
      <img src='https://cdn.shopify.com/s/files/1/0069/6470/7389/files/poision_1.webp?v=1696611948' loading='lazy' height='400' width='400' alt=''>
      <p>Note: This quiz provides general suggestions based on the provided content and may not be accurate for every individual.</p>
    </div>`,
   "melisandre":`

    <div class='answer__text-container'>
      <h3 style='text-align:center'><em>Melisandre</em></h3>
      <img src='https://cdn.shopify.com/s/files/1/0069/6470/7389/files/melisandre.webp?v=1696611948' loading='lazy' height='400' width='400' alt=''>
      <p>Note: This quiz provides general suggestions based on the provided content and may not be accurate for every individual.</p>
    </div>`,
   "megara":`
    <div class='answer__text-container'>
      <h3 style='text-align:center'><em>Megara</em></h3>
      <img src='https://cdn.shopify.com/s/files/1/0069/6470/7389/files/megara.webp?v=1696611948' loading='lazy' height='400' width='400' alt=''>
      <p>Note: This quiz provides general suggestions based on the provided content and may not be accurate for every individual.</p>
    </div>`
}

document.addEventListener("DOMContentLoaded", () => {
    let buttons = document.getElementsByClassName('quiz__option');
  	let backButtons = document.getElementsByClassName('back-btn');
  
    for (let button of buttons){
      button.addEventListener('click', function(){
        
        if(this.getAttribute('data-type') === 'answer'){		
          	addAnswer(button);
          	nextScreen(button);
        }
      });
    }
  
  	for (let backBtn of backButtons){
      backBtn.addEventListener('click', function(){
       
        if(this.getAttribute('data-type') === 'back'){
          	backScreen(backBtn)
        }
      });
    }
});

function addAnswer(button){
  let question = button.dataset.current;
  let answer = button.dataset.answer;
  customerAnswers[question] = (answer);
}

function nextScreen(button){
	let currentId = button.dataset.current;
  	let nextId = button.dataset.next;
  	let screen = document.getElementById(nextId);
  
  	if (nextId == 'last'){
  		answerScreen()
  	}	
  	
  	screen.style.left = '0px';
  	document.body.scrollTop = 50; // For Safari
    document.documentElement.scrollTop = 50; // For Chrome, Firefox, IE and Opera
  	setTimeout(() => {changePosition(currentId, nextId);}, 500)
    setTimeout(function(){
      document.getElementById(currentId).style.display = 'none';
    }, 1000)
    
}

function backScreen(button){
	let currentId = button.dataset.current;
  	let nextId = button.dataset.next;
  	let screen = document.getElementById(currentId);

    document.getElementById(nextId).style.display = 'block';
  	screen.style.left = '-9999px';
  	document.body.scrollTop = 50; // For Safari
    document.documentElement.scrollTop = 50; // For Chrome, Firefox, IE and Opera
  	changePosition(currentId, nextId);
}

function answerScreen(){
  let names = {"cinderella":0,"chreyl":0,"honey":0,"kim":0,"black":0,"daphne":0,"sally":0,"poison":0,"melisandre":0,"megara":0}

  for (const [key, value] of Object.entries(customerAnswers)) {
    if (key == "q4"){
      if(value == "a"){
        names['cinderella'] += 1;
        names['chreyl'] += 1;
        names['kim'] += 1;
      } else if (value == 'b'){
        names['daphne'] += 1;
        names['sally'] += 1;
        names['megara'] += 1;
        names['melisandre'] += 1;
        names['poison'] += 1;
        names['black'] += 1;
      } else {
        names['honey'] += 1;
      }
    } else if (key == "q5") {
      if(value == 'a'){
        names['cinderella'] += 1;
      } else if(value == 'b'){
        names['honey'] += 1;
      } else if(value == 'c'){
        names['chreyl'] += 1;
      } else if(value == 'd'){
        names['kim'] += 1;
      } else if(value == 'e'){
        names['black'] += 1;
      } else if(value == 'f'){
        names['daphne'] += 1;
      } else if(value == 'g'){
        names['megara'] += 1;
      } else if(value == 'h'){
        names['sally'] += 1;
      } else if(value == 'i'){
        names['melisandre'] += 1;
      } else if(value == 'j'){
        names['poison'] += 1;
      }
    } else{
      if(value == 'a'){
        names['cinderella'] += 1;
      } else if(value == 'b'){
        names['chreyl'] += 1;
        names['honey'] += 1;
      }else if(value == 'c'){
        names['kim'] += 1;
        names['black'] += 1;
      }else if(value == 'd'){
        names['daphne'] += 1;
      }else if(value == 'e'){
        names['poison'] += 1;
        names['melisandre'] += 1;
        names['sally'] += 1;
        names['megara'] += 1;
      }
    }
  }
  let result = Object.keys(names).reduce(function(a, b){ return names[a] > names[b] ? a : b });

  let answerContainer = document.getElementById('answer');
  answerContainer.innerHTML = answers[result];
  addDropdownFunction();
}

function changePosition(current, next){
	let currentId = current;
  	let nextId = next;
  	
  	let currentScreen = document.getElementById(currentId);
    let nextScreen = document.getElementById(nextId);
    
    nextScreen.style.position = 'relative';
    nextScreen.style.opacity = 1 ;
    currentScreen.style.position = 'absolute';
    currentScreen.style.opacity = 0;
}

// dropdown functions
function addDropdownFunction(){
  let dropdown = document.querySelector('#dropdown-btn');
  if(dropdown){
    dropdown.addEventListener('click', openAndClose)
  }
}

function openAndClose(){
  let currentStatus = document.querySelector('.sign').innetText();

  document.querySelector('#dropdown-hidden').classList.toggle('hidden');

  if(currentStatus === '+ '){
    document.querySelector('.sign').innetText('- ')
    document.querySelector('.sub-text').innetText('(click to close)')
  } else{
    document.querySelector('.sign').innetText('+ ')
    document.querySelector('.sub-text').innetText('(click to open)')
  }
}
