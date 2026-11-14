
const specialFanSymbols = {
  operators: [
    ["⊛", "Star Operator", "Custom binary operation"],
    ["⊚", "Circle Operator", "Custom value combination"],
    ["⧆", "Square Operator", "Custom square operation"],
    ["⨳", "Cross Product Variant", "Custom cross-like operation"],
    ["⩕", "Double Intersection", "Intersection-like operation"],
    ["⫰", "Triple Union", "Custom union operation"],
    ["⧟", "Diamond Operator", "Custom binary operation"],
    ["⩖", "Logic Join", "Combines logical values"]
  ],
  infinity: [
    ["⧝", "Triple Infinity", "Three infinity directions"],
    ["∞⃡", "Bidirectional Infinity", "Two infinity directions"],
    ["⧚", "Infinity Merge", "Combines infinite sequences"]
  ],
  geometry: [
    ["⧋", "Spatial Rotation", "Represents 3D rotation"],
    ["⧊", "Spatial Projection", "Projects between spaces"]
  ]
};

function getSpecialFanSymbols() {
  return Object.values(specialFanSymbols).flat();
}
