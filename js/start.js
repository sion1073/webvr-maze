var linkElements = document.getElementsByClassName("start");
for (var i = 0; i < linkElements.length; i++) {
  linkElements[i].addEventListener('click', function() {
    console.log("watch");
    location.href = "https://webvr-maze.herokuapp.com/end.html";
  }, false);
}
