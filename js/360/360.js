import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.123/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.123/examples/jsm/controls/OrbitControls.js';

let camera, scene, renderer;

init();

function init() {
    const container = document.getElementById('imagen3D-container');

    const aspectRatio = 0.4;
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight * aspectRatio, 1, 1100);
    camera.position.z = 0.01;

    scene = new THREE.Scene();

    const texture = new THREE.TextureLoader().load('./img/imagen360.jpg', render);
    texture.mapping = THREE.EquirectangularReflectionMapping;

    scene.background = texture;

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    
    const canvasWidth = window.innerWidth * 0.4;
    const canvasHeight = window.innerHeight * 0.4;
    renderer.setSize(canvasWidth, canvasHeight);

    container.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', render);
}

function onWindowResize() {
    camera.aspect = (window.innerWidth * 0.4) / (window.innerHeight * 0.4);
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth * 0.4, window.innerHeight * 0.4);
}

function render() {
    renderer.render(scene, camera);
}
