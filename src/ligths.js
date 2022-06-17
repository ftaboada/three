import { PointLightHelper } from "../_snowpack/pkg/three.js";
import { PointLight, SpotLight, SpotLightHelper } from "../_snowpack/pkg/three.js";

export const keyLight = new SpotLight(0xffffff, 1);
keyLight.position.set(0, -20, -30);
keyLight.castShadow = true;
keyLight.shadow.bias = -0.0001;
keyLight.shadow.mapSize.width = 400 * 4;
keyLight.shadow.mapSize.height = 400 * 4;
export const keyLightHelper = new PointLightHelper(keyLight);
export const fillLight = new SpotLight(0xffffdd, 1);
fillLight.position.set(0, 20, -5);
export const fillLigthHelper = new SpotLightHelper(fillLight);
fillLight.castShadow = true;
fillLight.shadow.bias = -0.0001;
fillLight.shadow.mapSize.width = 400 * 4;
fillLight.shadow.mapSize.height = 400 * 4;
