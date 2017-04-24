function showDiv(id) {
  document.getElementById(id).style.display = "block";
}

//Change visibility containers
function changeContainer(elementBlock,elementNone) {
  setTimeout(function () {
    document.getElementById(elementBlock).style.display = "block"
    document.getElementById(elementNone).style.display = "none"
  }, 300)
}

