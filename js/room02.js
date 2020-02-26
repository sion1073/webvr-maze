'use strict';

// 各要素にイベント付与​
document.addEventListener('DOMContentLoaded', function() {

  var exit = "false";

  var cursor = document.querySelector('#cursor');

  var box = document.querySelector('#box');
  box.addEventListener('mouseenter', function() {
    // カーソルオーバー時のアニメーション起動
    cursor.emit('cursor_over')
  }, false);
  box.addEventListener('mouseleave', function() {
    // カーソルアウト時のアニメーション起動
    cursor.emit('cursor_leave')
  }, false);
  box.addEventListener('click', function() {
    // 各選択肢を表示する
    var move_question = document.querySelector('#move_question');
    move_question.setAttribute('visible','true');

    var move_yes = document.querySelector('#move_yes');
    move_yes.setAttribute('visible','true');

    var move_no = document.querySelector('#move_no');
    move_no.setAttribute('visible','true');
  }, false);

  var move_yes = document.querySelector('#move_yes');
  move_yes.addEventListener('mouseenter', function() {
    // カーソルオーバー時のアニメーション起動
    cursor.emit('cursor_over')
  }, false);
  move_yes.addEventListener('mouseleave', function() {
    // カーソルアウト時のアニメーション起動
    cursor.emit('cursor_leave')
  }, false);
  move_yes.addEventListener('click', function() {
    // 各選択肢を非表示に変更
    var move_question = document.querySelector('#move_question');
    move_question.setAttribute('visible','false');

    var move_yes = document.querySelector('#move_yes');
    move_yes.setAttribute('visible','false');

    var move_no = document.querySelector('#move_no');
    move_no.setAttribute('visible','false');

    // 棚に設定したアニメーションを起動
    box.emit('start_box');
  }, false);

  var move_no = document.querySelector('#move_no');
  move_no.addEventListener('mouseenter', function() {
    // カーソルオーバー時のアニメーション起動
    cursor.emit('cursor_over')
  }, false);
  move_no.addEventListener('mouseleave', function() {
    // カーソルアウト時のアニメーション起動
    cursor.emit('cursor_leave')
  }, false);
  move_no.addEventListener('click', function() {
    // 各選択肢を非表示に変更
    var move_question = document.querySelector('#move_question');
    move_question.setAttribute('visible','false');

    var move_yes = document.querySelector('#move_yes');
    move_yes.setAttribute('visible','false');

    var move_no = document.querySelector('#move_no');
    move_no.setAttribute('visible','false');
  }, false);

  // 鍵を見つける処理
  var key = document.querySelector('#key_box');
  key.addEventListener('mouseenter', function() {
    // カーソルオーバー時のアニメーション起動
    cursor.emit('cursor_over')
  }, false);
  key.addEventListener('mouseleave', function() {
    // カーソルアウト時のアニメーション起動
    cursor.emit('cursor_leave')
  }, false);
  key.addEventListener('click', function() {
    // メッセージを表示
    var key_get = document.querySelector('#key_get');
    key_get.setAttribute('visible','true');

    exit = "true";

    // 3秒後にメッセージを非表示に変更
    setTimeout(
      function () {
        key_get.setAttribute('visible','false');
      },
      "3000"
    );
  }, false);

  var button = document.querySelector('#button');
  button.addEventListener('mouseenter', function() {
    // カーソルオーバー時のアニメーション起動
    cursor.emit('cursor_over')
  }, false);
  button.addEventListener('mouseleave', function() {
    // カーソルアウト時のアニメーション起動
    cursor.emit('cursor_leave')
  }, false);
  button.addEventListener('click', function() {

    // 鍵箱に設定したアニメーションを起動
    key.emit('start_key_box')

  }, false);

  var exit = document.querySelector('#exit');
  exit.addEventListener('mouseenter', function() {
    // カーソルオーバー時のアニメーション起動
    cursor.emit('cursor_over')
  }, false);
  exit.addEventListener('mouseleave', function() {
    // カーソルアウト時のアニメーション起動
    cursor.emit('cursor_leave')
  }, false);
  exit.addEventListener('click', function() {
    // 鍵を持っている場合
    if (exit === "true") {
      location.href = "https://webvr-maze.herokuapp.com/end.html";
    } else {
      // メッセージを表示
      var exit_error = document.querySelector('#exit_error');
      exit_error.setAttribute('visible','true');

      // 3秒後にメッセージを非表示に変更
      setTimeout(
        function () {
          exit_error.setAttribute('visible','false');
        },
        "3000"
      );
    }
  }, false);
});
