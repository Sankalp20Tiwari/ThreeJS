// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// // Create a scene
// const scene = new THREE.Scene();

// // Create a camera
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 5;

// // Create a renderer
// const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('canvas') });
// renderer.setSize(window.innerWidth, window.innerHeight);

// // Create a sphere geometry
// // const geometry = new THREE.BoxGeometry(1, 1, 1);

// // // Create a material
// // const material = new THREE.MeshStandardMaterial({ color: "red" , roughness:0.0003 , metalness:0.5 ,  });

// // // Add OrbitControls

// // const controls = new OrbitControls(camera, renderer.domElement);
// // controls.enableDamping = true;
// // controls.dampingFactor = 0.25;
// // controls.enableZoom = true;

// // // Create a mesh with the geometry and material
// // const sphere = new THREE.Mesh(geometry, material);
// // scene.add(sphere);

// // let loader = new THREE.TextureLoader();
// // let color = loader.load('https://devday.s3.ap-south-1.amazonaws.com/floor.png');


// // const geometry = new THREE.BoxGeometry(1, 1, 1);

// // // Create a material
// // const material = new THREE.MeshStandardMaterial({ map:color  });

// // Add OrbitControls

// // const controls = new OrbitControls(camera, renderer.domElement);
// // controls.enableDamping = true;
// // controls.dampingFactor = 0.25;
// // controls.enableZoom = true;

// // // Create a mesh with the geometry and material
// // const sphere = new THREE.Mesh(geometry, material);
// // scene.add(sphere);


// const loader = new GLTFLoader();

// loader.load( './chevrolet_camero_car.glb', function ( gltf ) {

// 	scene.add( gltf.scene );

// }, undefined, function ( error ) {

// 	console.error( error );

// } );


// // Add studio lighting
// // Create a high-intensity directional light
// const highIntensityLight = new THREE.DirectionalLight(0xffffff, 1.5);
// highIntensityLight.position.set(10, 10, 10);
// scene.add(highIntensityLight);

// // Create a helper to visualize the light direction
// // const lightHelper = new THREE.DirectionalLightHelper(highIntensityLight, 1);
// // scene.add(lightHelper);

// // Create an ambient light
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
// scene.add(ambientLight);

// // Create a directional light (key light)
// const keyLight = new THREE.DirectionalLight(0xffffff, 0.7);
// keyLight.position.set(5, 5, 5);
// scene.add(keyLight);

// // Create a point light (fill light)
// const fillLight = new THREE.PointLight(0xffffff, 0.5);
// fillLight.position.set(-5, 0, 5);
// scene.add(fillLight);

// // Create a spot light (rim light)
// const rimLight = new THREE.SpotLight(0xffffff, 0.5);
// rimLight.position.set(0, 5, -5);
// rimLight.angle = Math.PI / 4;
// rimLight.penumbra = 0.5;
// scene.add(rimLight);


// // Animation loop
// function animate() {
//     requestAnimationFrame(animate);
    
//     // Rotate the sphere
//     sphere.rotation.x += 0.01;
//     sphere.rotation.y += 0.01;
    
//     renderer.render(scene, camera);
//     controls.update();
// }

// animate();

// // Import GUI from lil-gui
// import GUI from 'https://cdn.jsdelivr.net/npm/lil-gui@0.17/+esm';

// // Create GUI
// const gui = new GUI();

// // Material settings
// const materialFolder = gui.addFolder('Material');
// materialFolder.addColor(material, 'color').name('Color');
// materialFolder.add(material, 'wireframe').name('Wireframe');
// materialFolder.add(material, 'transparent').name('Transparent');
// materialFolder.add(material, 'opacity', 0, 1).name('Opacity');
// materialFolder.add(material, 'metalness', 0, 1).name('Metalness');
// materialFolder.add(material, 'roughness', 0, 1).name('Roughness');

// // Mesh settings
// const meshFolder = gui.addFolder('Mesh');
// meshFolder.add(sphere.scale, 'x', 0.1, 2).name('Scale X');
// meshFolder.add(sphere.scale, 'y', 0.1, 2).name('Scale Y');
// meshFolder.add(sphere.scale, 'z', 0.1, 2).name('Scale Z');
// meshFolder.add(sphere.rotation, 'x', 0, Math.PI * 2).name('Rotation X');
// meshFolder.add(sphere.rotation, 'y', 0, Math.PI * 2).name('Rotation Y');
// meshFolder.add(sphere.rotation, 'z', 0, Math.PI * 2).name('Rotation Z');
// meshFolder.add(sphere.position, 'x', -5, 5).name('Position X');
// meshFolder.add(sphere.position, 'y', -5, 5).name('Position Y');
// meshFolder.add(sphere.position, 'z', -5, 5).name('Position Z');

// // Update function
// function updateMaterial() {
//     material.needsUpdate = true;
// }

// // Add onChange event to material properties
// materialFolder.onChange(updateMaterial);



// // Handle window resizing
// function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// }

// window.addEventListener('resize', onWindowResize);