export type IngredientsNames =
  | "iron"
  | "stick"
  | "feather"
  | "flint"
  | "apple"
  | "egg"
  | "milk"
  | "string"
  | "flour"
  | "choco-chips"
  | "wheat";

export type CraftablesNames =
  | "iron-helmet"
  | "chestplate"
  | "leggings"
  | "boots"
  | "iron-sword"
  | "flint-and-steel"
  | "arrow"
  | "fishing-rod"
  | "cake"
  | "apple-pie"
  | "axe"
  | "cookie"
  | "pickaxe"
  | "bread"
  | "shovel"
  | "hoe"
  | "bow";

export type CraftablesType = {
  nameID: CraftablesNames;
  position: { x: number; y: number };
  materials: IngredientsNames[];
};

export const craftables: CraftablesType[] = [
  {
    nameID: "iron-helmet",
    position: { x: 0, y: 0 },
    materials: ["iron", "iron", "iron", "iron", "iron"],
  },
  {
    nameID: "chestplate",
    position: { x: 0, y: 48 },
    materials: ["iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron"],
  },
  {
    nameID: "leggings",
    position: { x: 0, y: 96 },
    materials: ["iron", "iron", "iron", "iron", "iron", "iron", "iron"],
  },
  {
    nameID: "boots",
    position: { x: 0, y: 144 },
    materials: ["iron", "iron", "iron", "iron"],
  },
  {
    nameID: "iron-sword",
    position: { x: 0, y: 192 },
    materials: ["iron", "iron", "stick"],
  },
  {
    nameID: "flint-and-steel",
    position: { x: 48, y: 0 },
    materials: ["flint", "iron"],
  },
  {
    nameID: "arrow",
    position: { x: 48, y: 96 },
    materials: ["feather", "flint", "stick"],
  },
  {
    nameID: "fishing-rod",
    position: { x: 48, y: 192 },
    materials: ["stick", "stick", "stick", "string", "string"],
  },
  {
    nameID: "cake",
    position: { x: 96, y: 96 },
    materials: ["egg", "flour", "flour", "milk", "milk", "milk", "wheat", "wheat", "wheat"],
  },
  {
    nameID: "apple-pie",
    position: { x: 96, y: 144 },
    materials: ["apple", "egg", "flour"],
  },
  {
    nameID: "axe",
    position: { x: 96, y: 192 },
    materials: ["iron", "iron", "iron", "stick", "stick"],
  },
  {
    nameID: "cookie",
    position: { x: 144, y: 144 },
    materials: ["choco-chips", "wheat", "wheat"],
  },
  {
    nameID: "pickaxe",
    position: { x: 144, y: 192 },
    materials: ["iron", "iron", "iron", "iron", "iron", "stick", "stick"],
  },
  {
    nameID: "bread",
    position: { x: 192, y: 144 },
    materials: ["wheat", "wheat", "wheat"],
  },
  {
    nameID: "shovel",
    position: { x: 192, y: 192 },
    materials: ["iron", "stick", "stick"],
  },
  {
    nameID: "hoe",
    position: { x: 240, y: 144 },
    materials: ["iron", "iron", "stick", "stick"],
  },
  {
    nameID: "bow",
    position: { x: 48, y: 48 },
    materials: ["stick", "stick", "stick", "string", "string", "string"],
  },
];

export type IngredientsType = {
  nameID: IngredientsNames;
  position: { x: number; y: number };
};

export const ingredients: IngredientsType[] = [
  {
    nameID: "iron",
    position: { x: 96, y: 48 },
  },
  {
    nameID: "stick",
    position: { x: 48, y: 144 },
  },
  {
    nameID: "flint",
    position: { x: 96, y: 0 },
  },
  {
    nameID: "apple",
    position: { x: 192, y: 0 },
  },
  {
    nameID: "egg",
    position: { x: 192, y: 48 },
  },
  {
    nameID: "milk",
    position: { x: 192, y: 96 },
  },
  {
    nameID: "string",
    position: { x: 240, y: 0 },
  },
  {
    nameID: "flour",
    position: { x: 240, y: 48 },
  },
  {
    nameID: "choco-chips",
    position: { x: 240, y: 96 },
  },
  {
    nameID: "feather",
    position: { x: 144, y: 0 },
  },
  {
    nameID: "wheat",
    position: { x: 144, y: 96 },
  },
];

export type APosition<T extends IngredientsNames | CraftablesNames> = T extends IngredientsNames
  ? IngredientsType[]
  : CraftablesType[];

export function getPosition<T extends IngredientsNames | CraftablesNames>(name: T, array: APosition<T>) {
  //arrFixed es para arreglar un bug de Typescript https://github.com/microsoft/TypeScript/issues/44373
  const arrFixed: Array<(typeof array)[number]> = array;
  const item = arrFixed.find((item: CraftablesType | IngredientsType) => item.nameID === name);
  if (!item) return { x: 0, y: 0 };
  return item.position;
}
