import { MeshPhongMaterial } from "../_snowpack/pkg/three.js";
import { MeshStandardMaterial, TextureLoader, Color } from "../_snowpack/pkg/three.js";

const textureLoader = new TextureLoader();
const normalTexture = textureLoader.load("normal.jpg");
export const baseMaterial = new MeshStandardMaterial();
baseMaterial.metalness = 0;
baseMaterial.roughness = 0.8;
//baseMaterial.normalMap = normalTexture;
baseMaterial.color = new Color(0x666666);
export const glowMaterial = new MeshPhongMaterial();
glowMaterial.emissive = new Color(0xfffff);
glowMaterial.shininess = 2;