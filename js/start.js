'use strict';
​
document.addEventListener('DOMContentLoaded', function() {
​​
  // 特定のオブジェクトを見てメッセージを表示させる処理
  var start = document.querySelector('#start');
  start.addEventListener('click', function() {
      location.href = "https://webvr-maze.herokuapp.com/room02.html";
  }, false);
});
