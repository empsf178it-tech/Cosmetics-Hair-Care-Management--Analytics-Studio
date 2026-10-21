// Realistic 3D Botanical Cosmetic Studio with Real Bottle Texture & Particles

let scene, camera, renderer, bottleGroup, particleSystem;
let isAnimating = true;
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let currentRotationY = 0;
let currentRotationX = 0;
let targetRotationY = 0;
let targetRotationX = 0;
let autoRotateSpeed = 0.008;
let isHovering = false;
let isAutoRotating = true;

function initReal360Viewer() {
  const container = document.getElementById('heroThreeContainer');
  if (!container) return;

  container.innerHTML = ''; // Clear container

  const width = container.clientWidth || 580;
  const height = container.clientHeight || 480;

  // 1. Scene setup
  scene = new THREE.Scene();
  scene.background = null;

  // 2. Camera setup
  camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
  camera.position.set(0, 0, 7.8);

  // 3. Renderer setup
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  container.appendChild(renderer.domElement);

  // 4. Studio Lighting
  const ambientLight = new THREE.AmbientLight(0xfff8ee, 1.3);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xfffaed, 2.2);
  keyLight.position.set(5, 7, 6);
  keyLight.castShadow = true;
  scene.add(keyLight);

  const goldRimLight = new THREE.DirectionalLight(0xC5A66A, 2.6);
  goldRimLight.position.set(-6, -1, -4);
  scene.add(goldRimLight);

  const softFillLight = new THREE.DirectionalLight(0xa9bda7, 1.0);
  softFillLight.position.set(2, -5, 4);
  scene.add(softFillLight);

  // 5. Build 3D Realistic Cosmetic Bottle Group
  bottleGroup = new THREE.Group();

  // Glass Bottle Body (Type: Tinted Amber-Emerald Luxury Glass)
  const bottleGeo = new THREE.CylinderGeometry(1.08, 1.08, 2.8, 64);
  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x244C3A, // Deep Forest Green tinted glass
    roughness: 0.12,
    metalness: 0.1,
    transmission: 0.72,
    ior: 1.52,
    thickness: 1.1,
    reflectivity: 0.85,
    clearcoat: 1.0,
    clearcoatRoughness: 0.08
  });
  const bottleMesh = new THREE.Mesh(bottleGeo, glassMaterial);
  bottleMesh.castShadow = true;
  bottleGroup.add(bottleMesh);

  // Inner Golden Botanical Elixir Liquid
  const liquidGeo = new THREE.CylinderGeometry(0.98, 0.98, 2.45, 48);
  const liquidMat = new THREE.MeshPhysicalMaterial({
    color: 0xC5A66A, // Golden Amber
    emissive: 0x3d2806,
    roughness: 0.2,
    metalness: 0.25,
    transmission: 0.55,
    ior: 1.33
  });
  const liquidMesh = new THREE.Mesh(liquidGeo, liquidMat);
  liquidMesh.position.y = -0.12;
  bottleGroup.add(liquidMesh);

  // Realistic Front Botanical Label (Cylindrical wrap)
  const textureLoader = new THREE.TextureLoader();
  const labelTexture = textureLoader.load('assets/images/1.jpg');
  labelTexture.wrapS = THREE.ClampToEdgeWrapping;
  labelTexture.wrapT = THREE.ClampToEdgeWrapping;

  const labelGeo = new THREE.CylinderGeometry(1.09, 1.09, 1.6, 64, 1, true, -Math.PI / 2.3, Math.PI / 1.15);
  const labelMat = new THREE.MeshStandardMaterial({
    map: labelTexture,
    roughness: 0.45,
    metalness: 0.1,
    side: THREE.DoubleSide
  });
  const labelMesh = new THREE.Mesh(labelGeo, labelMat);
  labelMesh.position.y = -0.1;
  bottleGroup.add(labelMesh);

  // Bottle Shoulder
  const shoulderGeo = new THREE.CylinderGeometry(0.5, 1.08, 0.65, 64);
  const shoulderMesh = new THREE.Mesh(shoulderGeo, glassMaterial);
  shoulderMesh.position.y = 1.72;
  bottleGroup.add(shoulderMesh);

  // Bottle Neck
  const neckGeo = new THREE.CylinderGeometry(0.48, 0.48, 0.4, 48);
  const neckMesh = new THREE.Mesh(neckGeo, glassMaterial);
  neckMesh.position.y = 2.18;
  bottleGroup.add(neckMesh);

  // Metallic Gold Pipette Collar
  const collarGeo = new THREE.CylinderGeometry(0.53, 0.53, 0.6, 48);
  const goldCollarMat = new THREE.MeshStandardMaterial({
    color: 0xD4AF37,
    metalness: 0.92,
    roughness: 0.22
  });
  const collarMesh = new THREE.Mesh(collarGeo, goldCollarMat);
  collarMesh.position.y = 2.48;
  bottleGroup.add(collarMesh);

  // Soft Rubber Pipette Bulb
  const bulbGeo = new THREE.SphereGeometry(0.42, 32, 24);
  bulbGeo.scale(1, 1.35, 1);
  const rubberMat = new THREE.MeshStandardMaterial({
    color: 0x1E2B23,
    roughness: 0.68,
    metalness: 0.08
  });
  const bulbMesh = new THREE.Mesh(bulbGeo, rubberMat);
  bulbMesh.position.y = 3.08;
  bottleGroup.add(bulbMesh);

  // Aesthetic Metallic Botanical Orbit Rings
  const ringGeo = new THREE.TorusGeometry(1.7, 0.018, 16, 100);
  const ringMat = new THREE.MeshStandardMaterial({
    color: 0xC5A66A,
    emissive: 0x5a481d,
    roughness: 0.3,
    metalness: 0.85
  });
  const ring1 = new THREE.Mesh(ringGeo, ringMat);
  ring1.rotation.x = Math.PI / 2.3;
  ring1.rotation.y = 0.2;
  bottleGroup.add(ring1);

  const ring2 = new THREE.Mesh(ringGeo, ringMat);
  ring2.scale.set(1.15, 1.15, 1.15);
  ring2.rotation.x = -Math.PI / 2.8;
  ring2.rotation.z = 0.4;
  bottleGroup.add(ring2);

  bottleGroup.position.y = -0.4;
  scene.add(bottleGroup);

  // 6. Floating Botanical Spores Particle System
  const particleCount = 120;
  const particleGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 8;
    positions[i + 1] = (Math.random() - 0.5) * 7;
    positions[i + 2] = (Math.random() - 0.5) * 6;
  }
  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const particleCanvas = document.createElement('canvas');
  particleCanvas.width = 64;
  particleCanvas.height = 64;
  const pctx = particleCanvas.getContext('2d');
  const gradient = pctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(197, 166, 106, 1)');
  gradient.addColorStop(0.4, 'rgba(169, 189, 167, 0.5)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  pctx.fillStyle = gradient;
  pctx.fillRect(0, 0, 64, 64);

  const particleTexture = new THREE.CanvasTexture(particleCanvas);
  const particleMaterial = new THREE.PointsMaterial({
    size: 0.16,
    map: particleTexture,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  particleSystem = new THREE.Points(particleGeo, particleMaterial);
  scene.add(particleSystem);

  // 7. Interactive Controls & UI Overlay
  const overlayHtml = `
    <!-- Top Degree Angle Indicator -->
    <div style="position:absolute; top:1.25rem; right:1.25rem; z-index:10; background:rgba(255,255,255,0.9); backdrop-filter:blur(8px); padding:0.35rem 0.8rem; border-radius:var(--radius-full); border:1px solid var(--border-light); font-size:0.75rem; font-weight:700; color:var(--forest-green); display:flex; align-items:center; gap:0.35rem;">
      <span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:var(--muted-gold);"></span>
      <span id="angle360Degrees">0°</span> / 360°
    </div>

    <!-- Play/Pause Auto-Spin Button -->
    <button id="toggleAutoSpinBtn" onclick="toggle360AutoSpin(event)" style="position:absolute; top:1.25rem; left:1.25rem; z-index:10; background:rgba(255,255,255,0.9); backdrop-filter:blur(8px); width:36px; height:36px; border-radius:50%; border:1px solid var(--border-light); display:flex; align-items:center; justify-content:center; color:var(--forest-green); font-size:0.85rem; cursor:pointer; box-shadow:var(--shadow-sm); transition:transform 0.2s;" title="Toggle Auto-Spin">
      ⏸
    </button>
  `;
  container.insertAdjacentHTML('beforeend', overlayHtml);

  // Event Listeners: Hover Pause & Manual Drag
  container.addEventListener('mouseenter', () => {
    isHovering = true;
  });

  container.addEventListener('mouseleave', () => {
    isHovering = false;
    isDragging = false;
  });

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    previousMousePosition = { x: e.clientX, y: e.clientY };
    container.style.cursor = 'grabbing';
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    if (container) container.style.cursor = 'grab';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - previousMousePosition.x;
    const deltaY = e.clientY - previousMousePosition.y;

    targetRotationY += deltaX * 0.01;
    targetRotationX += deltaY * 0.005;

    // Limit vertical tilt
    targetRotationX = Math.max(-0.4, Math.min(0.4, targetRotationX));

    previousMousePosition = { x: e.clientX, y: e.clientY };
  });

  // Touch Support for mobile
  container.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
      isDragging = true;
      isHovering = true;
      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
    isHovering = false;
  });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging || e.touches.length === 0) return;
    const deltaX = e.touches[0].clientX - previousMousePosition.x;
    const deltaY = e.touches[0].clientY - previousMousePosition.y;

    targetRotationY += deltaX * 0.01;
    targetRotationX += deltaY * 0.005;
    targetRotationX = Math.max(-0.4, Math.min(0.4, targetRotationX));

    previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, { passive: true });

  window.addEventListener('resize', onThreeResize);

  // 8. Animation Loop
  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    const elapsedTime = clock.getElapsedTime();

    // Auto-spin if not hovering and auto-rotating is enabled
    if (isAutoRotating && !isHovering && !isDragging) {
      targetRotationY += autoRotateSpeed;
    }

    // Smooth lerping to target rotation
    currentRotationY += (targetRotationY - currentRotationY) * 0.1;
    currentRotationX += (targetRotationX - currentRotationX) * 0.1;

    bottleGroup.rotation.y = currentRotationY;
    bottleGroup.rotation.x = currentRotationX;

    // Gentle floating bob
    bottleGroup.position.y = -0.4 + Math.sin(elapsedTime * 1.5) * 0.08;

    // Subtle counter-rotation of golden rings
    ring1.rotation.z = elapsedTime * 0.3;
    ring2.rotation.z = -elapsedTime * 0.25;

    // Spore particle motion
    const pos = particleGeo.attributes.position.array;
    for (let i = 1; i < particleCount * 3; i += 3) {
      pos[i] += 0.003;
      if (pos[i] > 3.5) pos[i] = -3.5;
    }
    particleGeo.attributes.position.needsUpdate = true;
    particleSystem.rotation.y = elapsedTime * 0.03;

    // Update Angle Degree Badge
    const degEl = document.getElementById('angle360Degrees');
    if (degEl) {
      let deg = Math.round(((currentRotationY % (Math.PI * 2)) / (Math.PI * 2)) * 360);
      if (deg < 0) deg += 360;
      degEl.textContent = `${deg}°`;
    }

    renderer.render(scene, camera);
  }

  animate();
}

function onThreeResize() {
  const container = document.getElementById('heroThreeContainer');
  if (!container || !renderer || !camera) return;

  const width = container.clientWidth;
  const height = container.clientHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

function toggle360AutoSpin(e) {
  if (e) e.stopPropagation();
  isAutoRotating = !isAutoRotating;
  const btn = document.getElementById('toggleAutoSpinBtn');
  if (btn) btn.textContent = isAutoRotating ? '⏸' : '▶';
}

function initThreeExperience() {
  initReal360Viewer();
}
