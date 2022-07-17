import { MeshPhysicalMaterial } from "three";
import { MeshPhongMaterial } from "three";
import { MeshStandardMaterial, TextureLoader, Color } from "three";

const textureLoader = new TextureLoader();
export const baseMaterial = new MeshStandardMaterial();
baseMaterial.metalness = 1;
baseMaterial.roughness = 1;
//baseMaterial.normalMap = normalTexture;
baseMaterial.color = new Color(0xfafafa);
export const glowMaterial = new MeshPhongMaterial();
glowMaterial.emissive = new Color(0xffaa66);
glowMaterial.shininess = 2;
export const glassMaterial = new MeshPhysicalMaterial({
  roughness: 0.7,
  transmission: 1,
  thickness: 0,
});
export const glassMaterial2 = new MeshPhysicalMaterial({
  roughness: 0,
  transmission: 1,
  thickness: 0.5,
});
