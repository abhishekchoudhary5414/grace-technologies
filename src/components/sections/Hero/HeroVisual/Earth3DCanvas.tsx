'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './Earth3DCanvas.module.css';

// Key global locations for 3D marker pins
const COUNTRY_MARKERS = [
  { name: 'India', lat: 20.5937, lon: 78.9629 },
  { name: 'United Kingdom', lat: 55.3781, lon: -3.436 },
  { name: 'United States', lat: 37.0902, lon: -95.7129 },
  { name: 'UAE (Dubai)', lat: 25.2048, lon: 55.2708 },
  { name: 'Singapore', lat: 1.3521, lon: 103.8198 },
  { name: 'Germany', lat: 51.1657, lon: 10.4515 },
  { name: 'Australia', lat: -25.2744, lon: 133.7751 },
  { name: 'Japan', lat: 36.2048, lon: 138.2529 },
];

function latLonToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

export default function Earth3DCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Read theme colors dynamically from globals.css computed styles
    const stylesComputed = getComputedStyle(document.documentElement);
    const parseCssColor = (varName: string, fallback: string): THREE.Color => {
      const val = stylesComputed.getPropertyValue(varName).trim();
      if (!val) return new THREE.Color(fallback);
      return new THREE.Color(val);
    };

    const globeCoreColor = parseCssColor('--color-globe-core', '#DCE7FF');
    const globeSecondaryColor = parseCssColor('--color-globe-secondary', '#315ECA');
    const globeAccentColor = parseCssColor('--color-globe-accent', '#F4F7FF');
    const blueColor = parseCssColor('--color-blue', '#315ECA');
    const blueLightColor = parseCssColor('--color-blue-light', '#7196E8');

    // 2. Set up Three.js Scene, Camera, Renderer
    const width = container.clientWidth || 340;
    const height = container.clientHeight || 340;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 2.65;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 3. Central Earth Group (tilted on Earth's axial tilt: 23.5 degrees)
    const earthGroup = new THREE.Group();
    earthGroup.rotation.z = (23.5 * Math.PI) / 180;
    // Initial orientation showing Asia, Europe, Africa, India prominent
    earthGroup.rotation.y = 1.8;
    scene.add(earthGroup);

    // 4. Base Earth Ocean Sphere (using website theme tokens)
    const sphereGeo = new THREE.SphereGeometry(1, 64, 64);
    const sphereMat = new THREE.MeshPhongMaterial({
      color: globeCoreColor,
      emissive: globeSecondaryColor,
      emissiveIntensity: 0.38,
      specular: blueLightColor,
      shininess: 48,
      transparent: true,
      opacity: 0.98,
    });
    const earthCoreMesh = new THREE.Mesh(sphereGeo, sphereMat);
    earthGroup.add(earthCoreMesh);

    // 5. Authentic World Countries Map Layer (India, UK, USA, Europe, etc.)
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      '/images/earth-countries-texture.png',
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        const countriesMat = new THREE.MeshStandardMaterial({
          map: texture,
          transparent: true,
          opacity: 0.96,
          roughness: 0.35,
          metalness: 0.15,
          emissive: globeAccentColor,
          emissiveIntensity: 0.55,
          emissiveMap: texture,
        });
        const countriesMesh = new THREE.Mesh(new THREE.SphereGeometry(1.004, 64, 64), countriesMat);
        earthGroup.add(countriesMesh);
      },
      undefined,
      (err) => {
        console.warn('Country texture load warning:', err);
      }
    );

    // 6. Interactive Glowing Country Hub Beacons (India, UK, USA, etc.)
    const markerGroup = new THREE.Group();
    earthGroup.add(markerGroup);

    const pinGeo = new THREE.SphereGeometry(0.018, 16, 16);
    const pinMat = new THREE.MeshBasicMaterial({
      color: globeAccentColor,
    });

    const haloGeo = new THREE.RingGeometry(0.025, 0.038, 24);
    const haloMat = new THREE.MeshBasicMaterial({
      color: blueLightColor,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
    });

    COUNTRY_MARKERS.forEach((item) => {
      const pos = latLonToVector3(item.lat, item.lon, 1.015);
      const pin = new THREE.Mesh(pinGeo, pinMat);
      pin.position.copy(pos);

      const halo = new THREE.Mesh(haloGeo, haloMat);
      halo.position.copy(pos);
      halo.lookAt(0, 0, 0);

      markerGroup.add(pin);
      markerGroup.add(halo);
    });

    // 7. Holographic Cyber Wireframe Shell
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: blueLightColor,
      wireframe: true,
      transparent: true,
      opacity: 0.07,
    });
    const wireframeMesh = new THREE.Mesh(new THREE.SphereGeometry(1.018, 36, 36), wireframeMat);
    earthGroup.add(wireframeMesh);

    // 8. Atmospheric Glow Shell (Fresnel outer halo in website blue)
    const atmosphereGeo = new THREE.SphereGeometry(1.12, 48, 48);
    const atmosphereMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        uniform vec3 uColor;
        void main() {
          float intensity = pow(0.68 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.2);
          gl_FragColor = vec4(uColor, 1.0) * intensity;
        }
      `,
      uniforms: {
        uColor: { value: blueColor },
      },
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeo, atmosphereMat);
    scene.add(atmosphereMesh);

    // 9. Dynamic Three-Point Lighting
    const ambientLight = new THREE.AmbientLight(globeAccentColor, 1.1);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(globeAccentColor, 2.4);
    sunLight.position.set(5, 3, 5);
    scene.add(sunLight);

    const fillLight = new THREE.DirectionalLight(blueLightColor, 1.6);
    fillLight.position.set(-5, -2, -3);
    scene.add(fillLight);

    // 10. Interactive Mouse / Touch Drag with Smooth Inertia
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };
    let dragVelocity = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMousePos.x;
      const deltaY = e.clientY - prevMousePos.y;
      prevMousePos = { x: e.clientX, y: e.clientY };

      earthGroup.rotation.y += deltaX * 0.005;
      earthGroup.rotation.x += deltaY * 0.005;

      dragVelocity = { x: deltaX * 0.003, y: deltaY * 0.003 };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // 11. Animation Loop with subtle beacon pulses
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Pulse the country marker rings
      const pulseScale = 1 + 0.25 * Math.sin(elapsed * 3);
      haloMat.opacity = 0.5 + 0.35 * Math.sin(elapsed * 3);

      markerGroup.children.forEach((child) => {
        if (child instanceof THREE.Mesh && child.geometry instanceof THREE.RingGeometry) {
          child.scale.set(pulseScale, pulseScale, pulseScale);
        }
      });

      // Continuous axial rotation when not being dragged
      if (!isDragging) {
        earthGroup.rotation.y += 0.0028 + dragVelocity.x;
        earthGroup.rotation.x += dragVelocity.y;
        dragVelocity.x *= 0.95;
        dragVelocity.y *= 0.95;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 12. Handle container resizing
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 340;
      const h = container.clientHeight || 340;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // 13. Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      domEl.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animationFrameId);

      renderer.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      pinGeo.dispose();
      pinMat.dispose();
      haloGeo.dispose();
      haloMat.dispose();
      wireframeMat.dispose();
      atmosphereGeo.dispose();
      atmosphereMat.dispose();

      if (container.contains(domEl)) {
        container.removeChild(domEl);
      }
    };
  }, []);

  return <div ref={mountRef} className={styles.canvasContainer} />;
}
