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

// //light

// const light = new THREE.AmbientLight(0xffffff, 1);
// scene.add(light);

// // Directional light for better visibility
// const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
// directionalLight.position.set(1, 1, 1);
// scene.add(directionalLight);


// const point = new THREE.PointLight(0xffffff, 1, 10, 2);
// point.position.set(2, -2, 2);
// scene.add(point);


// const loader = new THREE.TextureLoader();
// const texture = loader.load("./metal/metal_001_basecolor.jpg");
// const normal = loader.load("./metal/metal_001_normal.jpg");
// const height = loader.load("./metal/metal_001_height.png");
// // const roughness = loader.load("./metal/metal_001_roughness.jpg");

// const geometry = new THREE.BoxGeometry(3, 1.8, 2);
// const material = new THREE.MeshStandardMaterial({
//   map: texture,
//   normalMap: normal,
//   displacementMap: height,
//   displacementScale: 0.01,
// });
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// const renderer = new THREE.WebGLRenderer({
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
// controls.dampingFactor = 0.02;
// controls.autoRotate = false;
// controls.autoRotateSpeed = 11;
// controls.enableZoom = true;

// function animate() {
//   window.requestAnimationFrame(animate);
//   renderer.render(scene, camera);
//   controls.update();
// }

// animate();

import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
//scene
const scene = new THREE.Scene();
//camera
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z = 5;
scene.add(camera);
//geometry/mateial
const geometry = new THREE.BoxGeometry(3,3,3);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
//mesh
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
//renderer
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector("#draw")});
renderer.setSize(window.innerWidth,window.innerHeight);

//making the object rotating
const orbit = new OrbitControls(camera, renderer.domElement);
orbit.enableRotate = true;
orbit.dampingFactor = 0.02;
orbit.enableDamping = true;
orbit.autoRotate = true;
orbit.autoRotateSpeed = 11;




//render loop
const animate = () => {
    window.requestAnimationFrame(animate);
    renderer.render(scene,camera);
    orbit.update();
}
animate();
//light



