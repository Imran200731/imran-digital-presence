import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js";

// ========================================
// 1. CREATE SCENE
// ========================================

const scene = new THREE.Scene();


// ========================================
// 2. CREATE CAMERA
// ========================================

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100
);

camera.position.z = 6;


// ========================================
// 3. CREATE RENDERER
// ========================================

const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});

renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 2)
);

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);


// Put the 3D canvas inside our container
const container = document.getElementById("three-container");

container.appendChild(renderer.domElement);


// ========================================
// 4. CREATE PLANET
// ========================================

const geometry = new THREE.SphereGeometry(
    1.5,
    64,
    64
);

const material = new THREE.MeshStandardMaterial({
    color: 0x247bff,
    roughness: 0.35,
    metalness: 0.4,
    emissive: 0x082040,
    emissiveIntensity: 0.35
});

const planet = new THREE.Mesh(
    geometry,
    material
);
// ========================================
// MOUSE INTERACTION
// ========================================

const mouse = {
    x: 0,
    y: 0
};

window.addEventListener("mousemove", (event) => {

    mouse.x =
        (event.clientX / window.innerWidth) * 2 - 1;

    mouse.y =
        -(event.clientY / window.innerHeight) * 2 + 1;

});

scene.add(planet);
// ========================================
// PLANET ATMOSPHERE
// ========================================

const atmosphereGeometry = new THREE.SphereGeometry(
    1.58,
    64,
    64
);

const atmosphereMaterial = new THREE.MeshBasicMaterial({
    color: 0x4da6ff,
    transparent: true,
    opacity: 0.18,
    side: THREE.BackSide
});

const atmosphere = new THREE.Mesh(
    atmosphereGeometry,
    atmosphereMaterial
);
// ========================================
// DIGITAL PLANET GRID
// ========================================

const gridGeometry = new THREE.SphereGeometry(
    1.515,
    32,
    20
);

const gridMaterial = new THREE.MeshBasicMaterial({
    color: 0x9ed0ff,
    wireframe: true,
    transparent: true,
    opacity: 0.18
});

const planetGrid = new THREE.Mesh(
    gridGeometry,
    gridMaterial
);

scene.add(planetGrid);

scene.add(atmosphere);
// ========================================
// PLANET ORBITAL RING
// ========================================

const ringGeometry = new THREE.RingGeometry(
    1.9,
    1.94,
    128
);

const ringMaterial = new THREE.MeshBasicMaterial({
    color: 0x4da6ff,
    transparent: true,
    opacity: 0.65,
    side: THREE.DoubleSide
});

const ring = new THREE.Mesh(
    ringGeometry,
    ringMaterial
);

// Tilt the ring around the planet
ring.rotation.x = Math.PI / 2.5;
ring.rotation.y = 0.4;

scene.add(ring);
// ========================================
// SECOND ORBITAL RING
// ========================================

const ring2Geometry = new THREE.RingGeometry(
    2.15,
    2.17,
    128
);

const ring2Material = new THREE.MeshBasicMaterial({
    color: 0x4da6ff,
    transparent: true,
    opacity: 0.3,
    side: THREE.DoubleSide
});

const ring2 = new THREE.Mesh(
    ring2Geometry,
    ring2Material
);

ring2.rotation.x = Math.PI / 2.5;
ring2.rotation.y = 0.4;

scene.add(ring2);
// ========================================
// STAR FIELD
// ========================================

const starGeometry = new THREE.BufferGeometry();

const starCount = 1200;

const starPositions = new Float32Array(starCount * 3);

for (let i = 0; i < starCount * 3; i++) {
    starPositions[i] = (Math.random() - 0.5) * 20;
}

starGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(starPositions, 3)
);

const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.025,
    transparent: true,
    opacity: 0.8
});

const stars = new THREE.Points(
    starGeometry,
    starMaterial
);

scene.add(stars);

// ========================================
// 5. LIGHTING
// ========================================

const ambientLight = new THREE.AmbientLight(
    0xffffff,
    1
);

scene.add(ambientLight);


const pointLight = new THREE.PointLight(
    0x4da6ff,
    30,
    10
);

pointLight.position.set(
    2,
    2,
    3
);

scene.add(pointLight);


// ========================================
// 6. ANIMATION
// ========================================

function animate() {

    requestAnimationFrame(animate);

    // Continuous rotation
    planet.rotation.y += 0.006;
    planet.rotation.x += 0.001;
    planetGrid.rotation.y += 0.006;
planetGrid.rotation.x += 0.001;

    atmosphere.rotation.y += 0.004;
    ring.rotation.y+=0.006;

    // Mouse movement
    planet.position.x +=
        (mouse.x * 0.25 - planet.position.x) * 0.02;

    planet.position.y +=
        (mouse.y * 0.25 - planet.position.y) * 0.02;

    atmosphere.position.x = planet.position.x;
    atmosphere.position.y = planet.position.y;
    ring.position.x = planet.position.x;
ring.position.y = planet.position.y;
ring2.position.x = planet.position.x;
ring2.position.y = planet.position.y;
planetGrid.position.x = planet.position.x;
planetGrid.position.y = planet.position.y;
    

    renderer.render(
        scene,
        camera
    );
}

animate();


// ========================================
// 7. RESPONSIVE SCREEN
// ========================================

window.addEventListener(
    "resize",
    () => {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

    }
);
