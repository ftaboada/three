import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  PCFSoftShadowMap,
  ReinhardToneMapping,
} from "three";
import { animate } from "./animate";
import { decoLight, decoLight2, fillLight, keyLight } from "./ligths";
import { cubes, glassFigure, leftCubes, rightCubes } from "./mesh";

const scene = new Scene();
export const width = window.innerWidth;
export const height = window.innerHeight;
const camera = new PerspectiveCamera(35, width / height, 0.1, 1000);

const renderer = new WebGLRenderer({ alpha: true });
renderer.setSize(width, height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = PCFSoftShadowMap;
renderer.toneMapping = ReinhardToneMapping;
renderer.toneMappingExposure = 2.3;
//const composer = new EffectComposer(renderer);
document.body.appendChild(renderer.domElement);
cubes.forEach((cube) => scene.add(cube));
rightCubes.forEach((cube) => scene.add(cube));
leftCubes.forEach((cube) => scene.add(cube));
scene.add(glassFigure);
scene.add(keyLight);
//scene.add(keyLightHelper);
scene.add(fillLight);
scene.add(decoLight);
scene.add(decoLight2);

//scene.add(fillLigthHelper);
//composer.addPass(new RenderPass(scene, camera));
const song = new Audio("song.mp3");
song.play();
song.loop = true;
animate(cubes, leftCubes, rightCubes, renderer, scene, camera, glassFigure);
