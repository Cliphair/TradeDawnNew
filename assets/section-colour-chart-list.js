
function returnCheckeds() {
  let checkeds = [];
  let elements = document.querySelectorAll('.category input:checked');

  for (let element of elements) {
    checkeds.push(element.value);
  }
  return checkeds;
}

function hideAll() {
  let collections = document.querySelectorAll('.collection_link');
  for (let collection of collections) {
    collection.classList.add('hidden');
  }
}

function showAll() {
  let collections = document.querySelectorAll('.collection_link');
  for (let collection of collections) {
    collection.classList.remove('hidden');
  }
}

function showCheckeds(value) {
  let collections = document.querySelectorAll(`.collection_link[data-group='${value}']`);
  for (let collection of collections) {
    collection.classList.remove('hidden');
  }
}