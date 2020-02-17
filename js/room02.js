'use strict';
​
document.addEventListener('DOMContentLoaded', function() {
​
  var exit = "false";
​
  // 鍵を見つける処理
  var key = document.querySelector('#key_box');
  key.addEventListener('click', function() {
      var key_get = document.querySelector('#key_get');
      key_get.setAttribute('visible','true');
​
      exit = "true";

      setTimeout(
        function () {
          key_get.setAttribute('visible','false');
        },
        "3000"
      );
  }, false);
​
  // 出口を見たときの処理
  var exit = document.querySelector('#exit');
  exit.addEventListener('click', function() {
​
      if (exit === "true") {
        location.href = "https://webvr-maze.herokuapp.com/end.html";
      } else {
        var exit_error = document.querySelector('#exit_error');
        exit_error.setAttribute('visible','true');

        setTimeout(
          function () {
            exit_error.setAttribute('visible','false');
          },
          "3000"
        );
      }
  }, false);
});
