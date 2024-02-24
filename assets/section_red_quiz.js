var customerAnswers = {};
var answers = {
  "a": `

    <div class='answer__text-container'>
      <h3>Strawberry Blonde or Copper Hair</h3>
      <p>You might enjoy the subtlety of Strawberry Blonde or Copper hair. These shades are gentle, offering a beautiful yet natural look, perfect for cooler and paler skin tones. Remember to maintain the health of your hair with regular treatments and using colour-protecting products.</p>
      <div class='img_container'>
        <a href='/collections/strawberry-ginger-blonde-hair-extensions-27'>
          <img src='https://cdn.shopify.com/s/files/1/0069/6470/7389/files/red1.jpg?v=1664530220' loading='lazy' height='400' width='400' alt=''>
          <p>Strawberry Blonde</p>
        </a>

        <a href='/collections/dark-auburn-copper-red-hair-extensions-33'>
          <img src='https://cdn.shopify.com/s/files/1/0069/6470/7389/files/red4.jpg?v=1664530220' loading='lazy' height='400' width='400' alt=''>
          <p>Copper Hair</p>
        </a>

        <a href='/collections/cinnamon-blonde-27-30-hair-extensions'>
          <img src='https://cdn.shopify.com/s/files/1/0069/6470/7389/files/red2.jpg?v=1664530220' loading='lazy' height='400' width='400' alt=''>
          <p>Cinnamon Swirl</p>
        </a>
      </div>
      <p>Note: This quiz provides general suggestions based on the provided content and may not be accurate for every individual. Always consult with a professional stylist for the best results. If you need help choosing the correct shade, let us help you with our <a href='https://www.cliphair.co.uk/pages/colour-matching-service' title='colour match'>free colour match</a> service.</p>
    </div>`,
  "b":`

    <div class='answer__text-container'>
      <h3>Flaming Ginger, Fire Engine Red, or Coral Red</h3>
      <p>Bold colors like Flaming Ginger, Fire Engine Red, or Coral Red might be your perfect match! These vibrant and lively shades suit your adventurous spirit and will surely make a statement wherever you go. Ensure to follow proper after-care and use heat protection to preserve the color.</p>
      <div class='img_container'>
        <a href='/collections/ginger-natural-red-hair-extensions-350'>
          <img src='https://cdn.shopify.com/s/files/1/0069/6470/7389/files/red5.jpg?v=1664530220' loading='lazy' height='400' width='400' alt=''>
          <p>Flaming Ginger</p>
        </a>
        <a href='/collections/bright-red-hair-extensions'>
          <img src='https://cdn.shopify.com/s/files/1/0069/6470/7389/files/red9.jpg?v=1664530220' loading='lazy' height='400' width='400' alt=''>
          <p>Bright Red</p>
        </a>
        <a href='/collections/deep-red-hair-extensions'>
          <img src='https://cdn.shopify.com/s/files/1/0069/6470/7389/files/red7.jpg?v=1664530220' loading='lazy' height='400' width='400' alt=''>
          <p>Deep Red</p>
        </a>
      </div>
      <p>Note: This quiz provides general suggestions based on the provided content and may not be accurate for every individual. Always consult with a professional stylist for the best results. If you need help choosing the correct shade, let us help you with our <a href='https://www.cliphair.co.uk/pages/colour-matching-service' title='colour match'>free colour match</a> service.</p>
    </div>`,
  "c":`

    <div class='answer__text-container'>
      <h3>Bright Auburn or Cherry Red</h3>
      <p>You might love Bright Auburn or Cherry Red hair, offering a balanced but still noticeably beautiful shade. Auburn, especially, is versatile and can beautifully complement various skin tones, ensuring you a stunning look with a glow.</p>
      <div class='img_container'>
        <a href='/collections/autumn-spice-hair-extensions-30b'>
          <img src='https://cdn.shopify.com/s/files/1/0069/6470/7389/files/30b_small_swatch.jpg?v=1667815373' loading='lazy' height='400' width='400' alt=''>
          <p>Autumn Spice</p>
        </a>

        <a href='/collections/plum-cherry-red-hair-extensions-530'>
          <img src='https://cdn.shopify.com/s/files/1/0069/6470/7389/files/red6.jpg?v=1664530220' loading='lazy' height='400' width='400' alt=''>
          <p>Cherry Red</p>
        </a>

      </div>
      <p>Note: This quiz provides general suggestions based on the provided content and may not be accurate for every individual. Always consult with a professional stylist for the best results. If you need help choosing the correct shade, let us help you with our <a href='https://www.cliphair.co.uk/pages/colour-matching-service' title='colour match'>free colour match</a> service.</p>
    </div>`,
  "d":`

    <div class='answer__text-container'>
      <h3>Dark Burgundy or Dark Auburn</h3>
      <p>Rich and elegant colors like Dark Burgundy or Dark Auburn might just be your best pick. These luxurious shades provide a depth of color, enhancing your features, and offering a sophisticated look that pairs well with dark skin tones. Ensure to keep the colour vibrant with dedicated hair care products.</p>
      <div class='img_container'>
        <a href='/collections/mahogany-red-hair-extensions-99j'>
          <img src='https://cdn.shopify.com/s/files/1/0069/6470/7389/files/red8.jpg?v=1664530220' loading='lazy' height='400' width='400' alt=''>
          <p>Mahogany Red</p>
        </a>

        <a href='/collections/dark-auburn-copper-red-hair-extensions-33'>
          <img src='https://cdn.shopify.com/s/files/1/0069/6470/7389/files/red4.jpg?v=1664530220' loading='lazy' height='400' width='400' alt=''>
          <p>Dark Auburn</p>
        </a>

      </div>
      <p>Note: This quiz provides general suggestions based on the provided content and may not be accurate for every individual. Always consult with a professional stylist for the best results. If you need help choosing the correct shade, let us help you with our <a href='https://www.cliphair.co.uk/pages/colour-matching-service' title='colour match'>free colour match</a> service.</p>
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
    hideInspiration();
}

function answerScreen(){

  let answerA = 0;
  let answerB = 0;
  let answerC = 0;
  let answerD = 0;
  let answerText = "";

  for(let i = 1; i <= Object.keys(customerAnswers).length; i++){
    let answer = customerAnswers["q" + i];
    switch(answer){
      case "a":
        answerA += 1;
        break;
      case "b":
        answerB += 1;
        break;
      case "c":
        answerC += 1;
        break;
      case "d":
        answerD += 1;
        break;
    }
  }

  if(answerA >= answerB && answerA >= answerC && answerA >= answerD){
    answerText = answers["a"]
  }else if(answerB >= answerA && answerB >= answerC && answerB >= answerD){
    answerText = answers["b"]
  }else if(answerC >= answerA && answerC >= answerB && answerC >= answerD){
    answerText = answers["c"]
  }else if(answerD >= answerA && answerD >= answerC && answerD >= answerB){
    answerText = answers["d"]
  }

  let answerContainer = document.getElementById('answer');
  answerContainer.innerHTML = answerText;
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
