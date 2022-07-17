// add the imports to use the helpers
import {
  PointLight,
  SpotLight /*SpotLightHelper, HemisphereLight*/,
} from "three";

export const keyLight = new SpotLight(0xe57ecf, 1);
keyLight.position.set(0, -20, -30);
keyLight.castShadow = true;
keyLight.shadow.bias = -0.0001;
keyLight.shadow.mapSize.width = 512 * 4;
keyLight.shadow.mapSize.height = 512 * 4;

export const fillLight = new SpotLight(0x18c3dd, 1);
fillLight.position.set(0, 20, -5);

fillLight.castShadow = true;
fillLight.shadow.bias = -0.0001;
fillLight.shadow.mapSize.width = 512 * 4;
fillLight.shadow.mapSize.height = 512 * 4;
export const decoLight = new PointLight(0x395fd3, 0.6);
export const decoLight2 = new PointLight(0xddff00, 0.7);
decoLight.position.set(0, 0, -45);
decoLight2.position.set(0, 0, -220);
