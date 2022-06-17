import { width } from "./main.js";
import { cubes, initialPosition, leftCubes } from "./mesh.js";

const outOfTheScreen = 1;
const cubeMoves = (cube, rate) => {
  if (!cube) return;
  if (cube.position.z > outOfTheScreen) {
    cube.position.z = initialPosition;
  }
  cube.position.z += 0.18 * rate;
};
let factor = 1;
export const animate = (
  cubes,
  leftCubes,
  rightCubes,
  renderer,
  scene,
  camera
) => {
  if (!cubes || !leftCubes || !rightCubes || !renderer) return;
  let speed = 3.5;
  cubes.forEach((cube) => {
    cubeMoves(cube, speed);
  });
  leftCubes.forEach((cube) => {
    cubeMoves(cube, speed);
  });
  rightCubes.forEach((cube) => {
    cubeMoves(cube, speed);
  });
  camera.rotation.z += 0.008 * factor;
  speed += 0.0001;
  requestAnimationFrame(() =>
    animate(cubes, leftCubes, rightCubes, renderer, scene, camera)
  );
  renderer.render(scene, camera);
};
document.onclick = (e) => {
  factor = factor * -1;
};
