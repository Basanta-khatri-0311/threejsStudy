// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

// const canvas = document.querySelector("#draw");
// const renderer = new THREE.WebGLRenderer({canvas});
// renderer.setSize( window.innerWidth, window.innerHeight );

// function animate() {
//     window.requestAnimationFrame(animate);
// 	renderer.render( scene, camera );
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
// }
// animate();
// renderer.setAnimationLoop( animate );


let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, .1, 100)
camera.position.z = 5;
scene.add(camera)

let box = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({color: "red"});
let mesh = new THREE.Mesh(box, material);
scene.add(mesh);


//mesh.position is used to position the mesh in 3D space in x,y,z axis
// mesh.position.y = 0;
// mesh.position.x = -1;
// mesh.position.z = 3;


//mesh.rotation is used to rotate the mesh in 3D space in x,y,z axis
// mesh.rotation.x = 1;
// mesh.rotation.y = 1;
// mesh.rotation.z = 1;

//using MATH.PI to rotate the mesh in 3D space in x,y,z axis
// mesh.rotation.x = Math.PI / 4;
// mesh.rotation.y = Math.PI / 4;
// mesh.rotation.z = Math.PI / 4;


//mesh.scale is used to scale(increase or decrease size) the mesh in 3D space in x,y,z axis

// mesh.scale.x = 2;
// mesh.scale.y = 2;
// mesh.scale.z = 2;


const canvas = document.querySelector("#draw");
let renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
