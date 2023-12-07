// Read More Functions
document.addEventListener("DOMContentLoaded", () => {
    let readMoreBtns = document.getElementsByClassName('read-more__btn');
    let readLessBtns = document.getElementsByClassName('read-less__btn');

    for (let btn of readMoreBtns) {
        btn.addEventListener('click', () => {
            openReadMore(btn);
        })
    }

    for (let btn of readLessBtns) {
        btn.addEventListener('click', () => {
            closeReadLess(btn);
        })
    }
})

function openReadMore(btn) {
    btn.classList.add('hidden');
    btn.parentElement.nextElementSibling.classList.remove('hidden')
}

function closeReadLess(btn) {
    btn.parentElement.previousElementSibling.querySelector('span.hidden').classList.remove('hidden');
    btn.parentElement.classList.add('hidden');
}

// OLD FUNCTIONS THAT WILL BE REMOVED WHEN COLLECTIONS UPDATED
// Custom read more and less functions
function readMore(clicked_id) {
    let clickedButtonNumber = clicked_id.split('read-button-open');
    let openButton = document.getElementById(clicked_id);

    let textContainerId = 'read-more' + clickedButtonNumber[1];
    let textContainer = document.getElementById(textContainerId);

    openButton.classList.toggle('closed');
    textContainer.classList.toggle('closed');
}

function readLess(clicked_id) {
    let clickedButtonNumber = clicked_id.split('read-button-close');

    let openButtonId = 'read-button-open' + clickedButtonNumber[1];
    let openButton = document.getElementById(openButtonId);

    let textContainerId = 'read-more' + clickedButtonNumber[1];
    let textContainer = document.getElementById(textContainerId);

    openButton.classList.toggle('closed');
    textContainer.classList.toggle('closed');
}