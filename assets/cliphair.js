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

function btsVideoTag(videoUrl){
  let video=``;
    if (videoUrl.includes("youtube")){
      let videoId = videoUrl.includes("shorts") ? videoUrl.split("/shorts/")[1] : videoUrl.split("/watch?v=")[1];
      video = `
    		<div id='bts__video-container' class='video__bg' onclick='btsCloseBtn()'>
    			<div class='video__container'>
    			  <div class='close__video'><i onclick='btsCloseBtn()' class="fa-solid fa-xmark close__btn"></i></div>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}?si=uhRBra05BAOkACcF&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    			</div>
    		</div>
    	`;
    } else{
      	video = `
    		<div id='bts__video-container' class='video__bg' onclick='btsCloseBtn()'>
    			<div class='video__container'>
    			  <div class='close__video'><i onclick='btsCloseBtn()' class="fa-solid fa-xmark close__btn"></i></div>
                  <video class='bts__video' autoplay muted controls>
                      <source src="${videoUrl}" type="video/mp4">
                      Your browser does not support the video tag.
                  </video>
    			</div>
    		</div>
    	`;
    }
    document.querySelector('body').appendChild(video)
}
  
function btsCloseBtn(){
  	document.querySelector("#bts__video-container").remove();
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