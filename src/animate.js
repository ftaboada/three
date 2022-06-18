import { width } from "./main";
import { cubes, initialPosition, leftCubes } from "./mesh";

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
  camera,
  glassFigure
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
  if (glassFigure.position.z < -100) {
    glassFigure.position.z = 1;
  }
  camera.rotation.z += 0.02 * factor;
  speed += 0.0001;
  glassFigure.rotation.z += -0.005;
  glassFigure.rotation.y += -0.05;
  glassFigure.rotation.x += 0.001;
  glassFigure.position.z += -0.042;
  requestAnimationFrame(() =>
    animate(cubes, leftCubes, rightCubes, renderer, scene, camera, glassFigure)
  );
  renderer.render(scene, camera);
};
document.onclick = (e) => {
  factor = factor * -1;
};
