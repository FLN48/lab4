var scene = new THREE.Scene();
var spotLight = new THREE.SpotLight(0xeeeece);
var spotLight2 = new THREE.SpotLight(0xffffff);
spotLight.position.set(1000, 1000, 1000);
spotLight2.position.set( -200, -200, -200);
scene.add(spotLight2);
scene.add(spotLight);

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry1 = new THREE.BoxGeometry( 10, 10, 10);
var material1 = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );

var geometry2 = new THREE.SphereGeometry(10, 32, 32);
var material2 = new THREE.MeshPhongMaterial({ color: 0x000bc0 });

var geometry3 = new THREE.TorusGeometry( 10, 3, 16, 100 );
var material3 = new THREE.MeshPhongMaterial( {
color: 0xdaa520,
specular: 0xbcbcbc,
 } );

var sphere = new THREE.Mesh( geometry2, material2 );
var cube = new THREE.Mesh( geometry1, material1 );
var myFigure = new THREE.Mesh( geometry3, material3 );


scene.add( sphere );
scene.add( cube );
scene.add( myFigure );

cube.position.x=-4;
cube.position.y=-4;
sphere.position.x=4;
sphere.position.y=4;

camera.position.z = 150;
var R = 0.7;
var angle = 0;
function render() {
   requestAnimationFrame( render );
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;   
  
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;  
  
  myFigure.rotation.x += 0.01;
  myFigure.rotation.y += 0.01;
  
  cube.position.x += R*Math.cos(angle);
  cube.position.y += R*Math.sin(angle);
  sphere.position.x += R*Math.cos((-1)*angle);
  sphere.position.y += R*Math.sin((-1)*angle);
  angle += Math.PI/180

  renderer.render( scene, camera );
}
render();