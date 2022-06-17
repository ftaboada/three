import { BoxGeometry, Mesh } from "three";
import { baseMaterial, glowMaterial } from "./materials";

export const initialPosition = -145;
const geometry = new BoxGeometry(8, 0.3, 3);
const calculateZ = (initialPosition, indexPosition, separation) => {
  return initialPosition + (indexPosition * 3 + 50 / 100) * separation;
};

const createCube = (indexPosition, separation, y = 3.5) => {
  const newCube = new Mesh(
    geometry,
    indexPosition % 15 === 0 ? glowMaterial : baseMaterial
  );
  newCube.position.y -= y;
  newCube.position.z = calculateZ(initialPosition, indexPosition, separation);
  newCube.castShadow = true;
  newCube.receiveShadow = true;
  newCube.glowMaterial = indexPosition % 15 === 0;
  return newCube;
};
const createBelowBoxes = (quantity, separation) => {
  const cubes = new Array(quantity).fill("").map((cube, indexPosition) => {
    return createCube(indexPosition, separation);
  });
  return cubes;
};
const createSideBoxes = (quantity, separation, side) => {
  const cubes = new Array(quantity).fill("").map((cube, indexPosition) => {
    const newCube = createCube(indexPosition, separation, 0);
    newCube.position.x -= side ? 2.25 : -2.25;
    newCube.rotation.z = side ? 1 : -1;
    newCube.glowMaterial = indexPosition % 15 === 0;
    return newCube;
  });
  return cubes;
};
const trianglesQuantity = 30;
const triangleSpace = 1.62;
export const cubes = createBelowBoxes(trianglesQuantity, triangleSpace);
export const leftCubes = createSideBoxes(
  trianglesQuantity,
  triangleSpace,
  true
);
export const rightCubes = createSideBoxes(
  trianglesQuantity,
  triangleSpace,
  false
);
