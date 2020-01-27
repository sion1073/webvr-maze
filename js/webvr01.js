var linkElements = document.getElementsByClassName("cube");
for (var i = 0; i < linkElements.length; i++) {
  linkElements[i].addEventListener('click', function() {
    console.log("watch");
  }, false);
}
