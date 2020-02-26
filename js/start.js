'use strict';

// 各要素にイベント付与
document.addEventListener('DOMContentLoaded', function() {

  var cursor = document.querySelector('#cursor');

  var start = document.querySelector('#start');
  start.addEventListener('mouseenter', function() {
    // カーソルオーバー時のアニメーション起動
    cursor.emit('cursor_over')
  }, false);
  start.addEventListener('mouseleave', function() {
    // カーソルアウト時のアニメーション起動
    cursor.emit('cursor_leave')
  }, false);
  start.addEventListener('click', function() {
    location.href = "https://webvr-maze.herokuapp.com/room01.html";
  }, false);
});
