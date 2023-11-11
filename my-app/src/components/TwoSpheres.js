// import React, { useEffect } from 'react';
// import * as THREE from 'three';

// const TwoSpheres = () => {
//   useEffect(() => {
//     // Inicjalizacja sceny
//     const scene = new THREE.Scene();

//     // Inicjalizacja kamery
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 5;

//     // Inicjalizacja renderera
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.getElementById('three-container').appendChild(renderer.domElement);

//     // Dodaj światło punktowe
//     const light = new THREE.PointLight(0xFFFFFF);
//     light.position.set(5, 5, 5);
//     scene.add(light);

//     // Ustaw kolor tła sceny
//     scene.background = new THREE.Color('#e0e0e0');

//     // Utwórz pierwszą kulę 3D (ruchomą)
//     const geometry1 = new THREE.SphereGeometry(1, 32, 32);
//     const material1 = new THREE.MeshBasicMaterial({ color: '#ff0000' });
//     const sphere1 = new THREE.Mesh(geometry1, material1);

//     // Utwórz drugą kulę 3D (statyczną)
//     const geometry2 = new THREE.SphereGeometry(2, 32, 32);
//     const material2 = new THREE.MeshBasicMaterial({ color: '#00ff00' });
//     const sphere2 = new THREE.Mesh(geometry2, material2);

//     // Dodaj obie kule do sceny
//     scene.add(sphere1);
//     scene.add(sphere2);

//     // Rozpocznij renderowanie
//     const animate = () => {
//       requestAnimationFrame(animate);

//       // Aktualizuj pozycję ruchomej kuli wokół statycznej kuli
//       const radius = 2; // promień orbity
//       const speed = 0.01; // prędkość obrotu
//       t += speed; // Zwiększ wartość parametru t

//       // Oblicz nową pozycję ruchomej kuli wokół statycznej kuli
//       const x = sphere2.position.x + radius * Math.cos(t);
//       const y = sphere2.position.y + radius * Math.sin(t);

//       sphere1.position.x = x;
//       sphere1.position.y = y;

//       // Obracaj obie kule
//       sphere1.rotation.x += 0.01;
//       sphere1.rotation.y += 0.01;
//       sphere2.rotation.x += 0.01;
//       sphere2.rotation.y += 0.01;

//       // Renderuj scenę
//       renderer.render(scene, camera);
//     };

//     // Rozpocznij animację
//     animate();

//     // Obsługa zmiany rozmiaru okna
//     const handleResize = () => {
//       const newWidth = window.innerWidth;
//       const newHeight = window.innerHeight;

//       camera.aspect = newWidth / newHeight;
//       camera.updateProjectionMatrix();

//       renderer.setSize(newWidth, newHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     // Czyszczenie po komponencie
//     return () => {
//       const container = document.getElementById('three-container');
//       const rendererElement = renderer.domElement;
    
//       if (container && rendererElement && container.contains(rendererElement)) {
//         container.removeChild(rendererElement);
//       }
    
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []); // Pusta tablica oznacza, że useEffect zostanie wywołany tylko raz po zamontowaniu komponentu

//   let t = 0; // parametr t dla ruchu pierwszej kuli wokół drugiej

//   return <div id="three-container" />;
// };

// export default TwoSpheres;
