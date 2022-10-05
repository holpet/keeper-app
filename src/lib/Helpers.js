function genID() {
  return Math.floor(Math.random() * 1000000);
}

function adjustElementHeight(elem) {
  elem.style.height = "auto";
  elem.style.height = elem.scrollHeight + "px";
}

function getDate() {
  return new Date().toLocaleDateString();
}

export { genID, getDate, adjustElementHeight };
