import { swatch, fileIcon, ai, logoShirt, stylishShirt, boots, poloTshirt } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "aipicker",
    icon: ai,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
export const ModelTabs = [
  {
    name: "Shirt",
    icon: logoShirt,
  },
  {
    name: "PoloShirt",
    icon: poloTshirt,
  },
  {
    name: "Hoodie",
    icon: boots
  }
];