var linkElements = document.getElementsByClassName("obj");
for (var i = 0; i < linkElements.length; i++) {
  linkElements[i].addEventListener('click', function() {
    console.log("watch");
  }, false);
}
