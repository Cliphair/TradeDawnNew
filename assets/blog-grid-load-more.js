document.addEventListener("DOMContentLoaded", () => {
  const loadMoreButton = document.querySelector(".load-more__button");
  const articlesGrid = document.querySelector('.blog-articles');
  const paginationList = document.querySelector('.pagination__list');

  if (!loadMoreButton) return;

  loadMoreButton.addEventListener("click", (event) => {
    event.preventDefault();

    const nextPageUrl = loadMoreButton.dataset.nextUrl.trim();

    loadMoreButton.disabled = true;

    if (!nextPageUrl) return;

    fetch(nextPageUrl)
      .then((response) => response.text())
      .then((responseText) => {

        const html = new DOMParser().parseFromString(responseText, 'text/html');
        const loadedArticles = html.querySelectorAll('.blog-articles > .blog-articles__article');
        const loadedNextPageUrl = html.querySelector(".load-more__button").dataset.nextUrl.trim();

        for (let article of loadedArticles) {
          articlesGrid.appendChild(article);
        }

        if (paginationList) {
          paginationList.innerHTML = html.querySelector('.pagination__list').innerHTML;
        }

        loadMoreButton.dataset.nextUrl = loadedNextPageUrl;

        if (loadedNextPageUrl) {
          loadMoreButton.disabled = false;
        }
      })

  })
})