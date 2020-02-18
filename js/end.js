var scene,      // レンダリングするオブジェクトを入れる
    objmodel,   // モデルデータを入れる
    obj,        // モデルデータの角度などを変更するために重ねる
    camera,     // カメラのオブジェクト
    light,      // 太陽光のような光源のオブジェクト
    ambient,    // 自然光のような光源のオブジェクト
    axis,       // 補助線のオブジェクト
    renderer;   // 画面表示するためのオブジェクト

var controls;
var effect;
var manager;

init();
animate();

function init (){

    // 表示させるための大元、すべてのデータをこれに入れ込んでいく
    scene = new THREE.Scene();

    // 画面表示
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x00bfff, 1);
    //renderer.shadowMapEnabled = true;
    document.getElementById('container').appendChild(renderer.domElement);

    ambient = new THREE.AmbientLight(0xffffff);
    scene.add(ambient);

    //light
    light = new THREE.DirectionalLight("white", 1);
    light.position.set(30, 200, 250);
    light.castShadow = true;
    scene.add(light);

    // hepler
    //axis = new THREE.AxisHelper(150);  // 補助線を2000px分表示
    //scene.add(axis);

    //camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 450);

    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setTexturePath( './model/' );
    mtlLoader.setPath( './model/' );
    mtlLoader.load( 'low-poly-mill.mtl', function( materials ) {

        materials.preload();

        let objLoader = new THREE.OBJLoader();
        objLoader.setMaterials( materials );
        objLoader.setPath( './model/' );
        objLoader.load( 'low-poly-mill.obj', function ( loadedMesh ) {

            //arrange the location
            loadedMesh.rotation.x = 0;
            loadedMesh.rotation.y = -30;
            loadedMesh.rotation.z = 0;
            loadedMesh.position.x = 0;
            loadedMesh.position.y = -25;
            loadedMesh.position.z = -35;
            //loadedMesh.scale(40);
            scene.add(loadedMesh);
        });
    });

    document.body.appendChild(renderer.domElement);

    controls = new THREE.VRControls(camera);
    controls.standing = true;

    effect = new THREE.VREffect(renderer);
    effect.setSize(window.innerWidth, window.innerHeight);

    manager = new WebVRManager(renderer, effect);
}

// 値を変更させる処理
function animate() {
    requestAnimationFrame(animate);     // フレームと再描画を制御してくれる関数。
                                        // そのブラウザのタブが非表示のとき、描画頻度が自動で低下するので、
                                        // メモリの消費を抑えることができる。
    //cameramove();   // カメラ移動
    render();       // 再描画処理
}

function render() {

    controls.update();
    manager.render(scene, camera);
}

window.addEventListener('resize', onResize, true);
window.addEventListener('vrdisplaypresentchange', onResize, true);

function onResize(e) {
  effect.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}
