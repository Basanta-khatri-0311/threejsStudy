// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 5;

// scene.add(camera);

// let box = new THREE.BoxGeometry(2, 2, 2);
// let material = new THREE.MeshBasicMaterial({
//   color: 0x00ff00,
//   wireframe: true,
// });
// let mesh = new THREE.Mesh(box, material);

// scene.add(mesh);

// let renderer = new THREE.WebGLRenderer({
//   canvas: document.querySelector("#draw"),
// });

// renderer.setSize(window.innerWidth, window.innerHeight);

// window.addEventListener("resize", () => {
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
// });

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.autoRotate  = true;
// controls.autoRotateSpeed = 11;
// controls.enableZoom = true;

// function animate() {
//   window.requestAnimationFrame(animate);
//   renderer.render(scene, camera);

//   controls.update();
// }

// animate();


import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
scene.add(camera);

const geometry = new THREE.BoxGeometry(2, 2, 3);
const material = new THREE.MeshStandardMaterial({color: 0x00ff00, wireframe: true});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#draw')});
renderer.setSize(window.innerWidth, window.innerHeight);

window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.02;
controls.autoRotate = false;
controls.autoRotateSpeed = 11;
controls.enableZoom = true;


function animate(){
    window.requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update();
}

animate();
