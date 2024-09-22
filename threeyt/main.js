import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

scene.add(camera);


let box = new THREE.BoxGeometry(2,2,2);
let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
let mesh = new THREE.Mesh(box, material);

scene.add(mesh);

let renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("#draw")});
renderer.setSize(window.innerWidth, window.innerHeight);


window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

function animate(){
    window.requestAnimationFrame(animate);
    renderer.render(scene, camera);
    mesh.rotation.y += 0.01;
    mesh.rotation.z += 0.01;
    mesh.rotation.x += 0.01;
}

animate();

