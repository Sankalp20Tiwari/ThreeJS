import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 10);

// Create a renderer
const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({ canvas  });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Add lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Load the 3D model
const loader = new GLTFLoader();
// loader.load(
//     './chevrolet_camero_car.glb',
//     (gltf) => {
//         scene.add(gltf.scene);
//     },
//     (progress) => {
//         console.log(`Loading model... ${(progress.loaded / progress.total * 100)}% loaded`);
//     },
//     (error) => {
//         console.error('An error occurred while loading the model:', error);
//     }
// );

// Animation loop
// function animate() {
//     requestAnimationFrame(animate);
//     controls.update();
//     renderer.render(scene, camera);
// }

// animate();

// Handle window resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
// Store the loaded model
let carModel;

// Modify the loader.load callback
loader.load(
    './chevrolet_camero_car.glb',
    (gltf) => {
        carModel = gltf.scene;
        scene.add(carModel);
    },
    (progress) => {
        console.log(`Loading model... ${(progress.loaded / progress.total * 100)}% loaded`);
    },
    (error) => {
        console.error('An error occurred while loading the model:', error);
    }
);

// Modify the animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Rotate the car if it's loaded
    if (carModel) {
        carModel.rotation.y += 0.01; // Adjust the rotation speed as needed
    }
    
    controls.update();
    renderer.render(scene, camera);
}
animate();