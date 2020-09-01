import "./styles.css";

const container = document.querySelector(".container");

function getDocumentHeight() {
  const body = document.body
  console.log(body.scrollHeight, body.clientHeight, body.offsetHeight)
  return Math.max(body.scrollHeight, body.clientHeight, body.offsetHeight)
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

function loadNextBatch(size = 10) {
  for (let i = 0; i < size; i++) {
    let element = getElement();
    container.appendChild(element);
  }
}


// laod the first batch
loadNextBatch(20);

getDocumentHeight()