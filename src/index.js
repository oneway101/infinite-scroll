import "./styles.css";

// webkit (chrome) uses body for tracking scroll position
const body = document.body
// firefox and IE useus html for tracking the scroll position
const html = document.documentElement

const container = document.querySelector(".container");

function getDocumentHeight() {
  const height = Math.max(
    body.scrollHeight,
    body.clientHeight,
    html.scrollHeight,
    html.clientHeight
  )
  return height
}

function getScrollLocation() {
  return body.scrollTop || html.scrollTop
}

function getImageSrcUrl() {
  const randomId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  return "http://api.adorable.io/avatars/" + randomId;
}

function getElement() {
  const element = document.createElement("div");
  element.classList.add("card");
  const image = new Image();
  image.src = getImageSrcUrl();
  element.appendChild(image);
  return element;
}

function loadNextBatch(size = 20) {
  for (let i = 0; i < size; i++) {
    let element = getElement();
    container.appendChild(element);
  }
}

// laod the first batch
loadNextBatch();

// load more batches when user reached more than 90% of the bottom of the page
window.onscroll = function(){
  // 90 percentage trigger location
  const triggerLocation = Math.round((getDocumentHeight() - window.innerHeight) * 0.9)
  if (getScrollLocation() >= triggerLocation ) {
    loadNextBatch()
  }
}