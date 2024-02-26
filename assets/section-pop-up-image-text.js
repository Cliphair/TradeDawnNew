function exploreMoreLess(button){
    if (button.dataset.next == 'show') {
      showAll();
      changeText(button, "explore less winners");
      button.dataset.next = 'hide';
    } else {
      showLess();
      changeText(button, "explore more winners");
      button.dataset.next = 'show';
    }
}
                        
function addClass(element, className) {
  element.classList.add(className);
}

function removeClass(element, className) {
  element.classList.remove(className);
}

function showAll(){
  let entries = document.querySelectorAll(".entry");
  for (let entry of entries) {
    addClass(entry, 'visible');
  }
}

function showLess() {
  let entries = document.querySelectorAll(".entry.visible");
  for (let entry of entries) {
    removeClass(entry, 'visible');
  }
}

function changeText(element, newText) {
  element.innerText = newText;
}

function openPopUp(target) {
  addClass(document.querySelector('.background'), 'visible');
  addClass(document.querySelector(`#${target}`), 'visible');
}

function closePopUp() {
  removeClass(document.querySelector('.background.visible'), 'visible');
  removeClass(document.querySelector('.pop-up-container.visible'), 'visible');
}