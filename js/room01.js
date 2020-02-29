
document.addEventListener('DOMContentLoaded', function() {

  const figure_status = {sphere: 0, cone: 0, torus: 0}

  var skyBG = document.querySelector('#sky');
  const txt = document.getElementById("txt")
  const key = document.getElementById("key")

  var go_next = "false";

  // カウント数更新
  var change_count = function() {
    sphere_str = "sphere : " + figure_status.sphere 
    cone_str = "cone : " + figure_status.cone 
    torus_str = "torus : " + figure_status.torus
    txt.setAttribute("value", sphere_str + ",\n" + cone_str + ",\n" + torus_str);
  };

  // key表示
  var visible_key = function(figure_count) {
    if (figure_count > 4){
      key.setAttribute("visible", "true");
      skyBG.setAttribute('color', "#4CC3D9");
      txt.setAttribute("value", "key get!!");
      go_next = "true";
    }
  }

  // 球体
  const sphere_status = {a : false, b : false, c : false, d : false, e : false}
  var sphere_a = document.querySelector('#sphere_a');
  sphere_a.addEventListener('mouseenter', function() {
    if (sphere_status.a != true) {
      figure_status.sphere += 1
      console.log(figure_status.sphere)
      change_count();
      visible_key(figure_status.sphere);
      sphere_status.a = true;
    }
  }, false);

  var sphere_b = document.querySelector('#sphere_b');
  sphere_b.addEventListener('mouseenter', function() {
    if (sphere_status.b != true) {
      figure_status.sphere += 1
      console.log(figure_status.sphere)
      change_count();
      visible_key(figure_status.sphere);
      sphere_status.b = true;
    }
  }, false);

  var sphere_c = document.querySelector('#sphere_c');
  sphere_c.addEventListener('mouseenter', function() {
    if (sphere_status.c != true) {
      figure_status.sphere += 1
      console.log(figure_status.sphere)
      change_count();
      visible_key(figure_status.sphere);
      sphere_status.c = true;
    }
  }, false);

  var sphere_d = document.querySelector('#sphere_d');
  sphere_d.addEventListener('mouseenter', function() {
    if (sphere_status.d != true) {
      figure_status.sphere += 1
      console.log(figure_status.sphere)
      change_count();
      visible_key(figure_status.sphere);
      sphere_status.d = true;
    }
  }, false);

  var sphere_e = document.querySelector('#sphere_e');
  sphere_e.addEventListener('mouseenter', function() {
    if (sphere_status.e != true) {
      figure_status.sphere += 1
      console.log(figure_status.sphere)
      change_count();
      visible_key(figure_status.sphere);
      sphere_status.e = true;
    }
  }, false);

  // 円錐
  const cone_status = {a : false, b : false, c : false, d : false, e : false}
  var cone_a = document.querySelector('#cone_a');
  cone_a.addEventListener('mouseenter', function() {
    if (cone_status.a != true) {
      figure_status.cone += 1
      console.log(figure_status.cone)
      change_count();
      visible_key(figure_status.cone);
      cone_status.a = true;
    }
  }, false);

  var cone_b = document.querySelector('#cone_b');
  cone_b.addEventListener('mouseenter', function() {
    if (cone_status.b != true) {
      figure_status.cone += 1
      console.log(figure_status.cone)
      change_count();
      visible_key(figure_status.cone);
      cone_status.b = true;
    }
  }, false);

  var cone_c = document.querySelector('#cone_c');
  cone_c.addEventListener('mouseenter', function() {
    if (cone_status.c != true) {
      figure_status.cone += 1
      console.log(figure_status.cone)
      change_count();
      visible_key(figure_status.cone);
      cone_status.c = true;
    }
  }, false);

  var cone_d = document.querySelector('#cone_d');
  cone_d.addEventListener('mouseenter', function() {
    if (cone_status.d != true) {
      figure_status.cone += 1
      console.log(figure_status.cone)
      change_count();
      visible_key(figure_status.cone);
      cone_status.d = true;
    }
  }, false);

  var cone_e = document.querySelector('#cone_e');
  cone_e.addEventListener('mouseenter', function() {
    if (cone_status.e != true) {
      figure_status.cone += 1
      console.log(figure_status.cone)
      change_count();
      visible_key(figure_status.cone);
      cone_status.e = true;
    }
  }, false);
  
    // 円環
    const torus_status = {a : false, b : false, c : false, d : false, e : false}
    var torus_a = document.querySelector('#torus_a');
    torus_a.addEventListener('mouseenter', function() {
      if (torus_status.a != true) {
        figure_status.torus += 1
        console.log(figure_status.torus)
        change_count();
        visible_key(figure_status.torus);
        torus_status.a = true;
      }
    }, false);
  
    var torus_b = document.querySelector('#torus_b');
    torus_b.addEventListener('mouseenter', function() {
      if (torus_status.b != true) {
        figure_status.torus += 1
        console.log(figure_status.torus)
        change_count();
        visible_key(figure_status.torus);
        torus_status.b = true;
      }
    }, false);
  
    var torus_c = document.querySelector('#torus_c');
    torus_c.addEventListener('mouseenter', function() {
      if (torus_status.c != true) {
        figure_status.torus += 1
        console.log(figure_status.torus)
        change_count();
        visible_key(figure_status.torus);
        torus_status.c = true;
      }
    }, false);
  
    var torus_d = document.querySelector('#torus_d');
    torus_d.addEventListener('mouseenter', function() {
      if (torus_status.d != true) {
        figure_status.torus += 1
        console.log(figure_status.torus)
        change_count();
        visible_key(figure_status.torus);
        torus_status.d = true;
      }
    }, false);

  var next_door = document.querySelector('#next_door');
  next_door.addEventListener('mouseenter', function() {
    if (go_next == "true"){
      document.getElementById("door_open").play();
      setTimeout(function() {
        location.replace('https://webvr-maze.herokuapp.com/room02.html');
      }, 3000);
    }
  }, false);
});