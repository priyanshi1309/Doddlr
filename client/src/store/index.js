import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: 'yellow',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './logo.png',
    fullDecal: './logo.png',
    model: 'Shirt'

});

export default state;