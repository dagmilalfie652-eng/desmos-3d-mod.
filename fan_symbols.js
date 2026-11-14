
// fan_symbols.js
// Fan-Made Mathematical Symbol Dictionary
// Desmos 3D Mod

const fanSymbols = {
  infinity: [
    {
      symbol: "⧜",
      name: "Double Infinity",
      meaning: "Represents two infinity directions.",
      example: "a ⧜ b"
    },
    {
      symbol: "∞̅",
      name: "Complex Infinity",
      meaning: "Represents an infinite value in a complex context.",
      example: "z → ∞̅"
    },
    {
      symbol: "⧞",
      name: "Infinity Loop",
      meaning: "Represents an infinitely repeating cycle.",
      example: "f(x) = ⧞"
    },
    {
      symbol: "∞⃗",
      name: "Vector Infinity",
      meaning: "Represents an infinite direction vector.",
      example: "v = ∞⃗"
    }
  ],

  derivatives: [
    {
      symbol: "∂⃝",
      name: "Circle Derivative",
      meaning: "Measures change around a closed curve.",
      example: "∂⃝ f"
    },
    {
      symbol: "ⅆ⃗",
      name: "Vector Derivative",
      meaning: "Measures how a vector changes.",
      example: "d(v)/dt"
    },
    {
      symbol: "∇²",
      name: "Nabla Squared",
      meaning: "Calculates the Laplacian.",
      example: "∇²f"
    },
    {
      symbol: "∂³",
      name: "Triple Partial",
      meaning: "Represents a third-order partial derivative.",
      example: "∂³f/∂x³"
    },
    {
      symbol: "ⅆ∞",
      name: "Infinite Derivative",
      meaning: "Proposed infinite-order derivative notation.",
      example: "ⅆ∞f"
    }
  ],

  matrices: [
    {
      symbol: "⊞",
      name: "Matrix Addition",
      meaning: "Adds corresponding matrix entries.",
      example: "A ⊞ B",
      operation: (A, B) =>
        A.map((r, i) => r.map((v, j) => v + B[i][j]))
    },
    {
      symbol: "⊠",
      name: "Matrix Product",
      meaning: "Multiplies two compatible matrices.",
      example: "A ⊠ B"
    },
    {
      symbol: "⧉",
      name: "Matrix Join",
      meaning: "Joins matrices horizontally.",
      example: "A ⧉ B",
      operation: (A, B) =>
        A.map((row, i) => [...row, ...B[i]])
    },
    {
      symbol: "⫷",
      name: "Matrix Transform",
      meaning: "Applies a transformation matrix.",
      example: "A ⫷ T"
    },
    {
      symbol: "⧈",
      name: "Matrix Determinant",
      meaning: "Represents the determinant operation.",
      example: "⧈(A)"
    }
  ],

  geometry: [
    {
      symbol: "⟁",
      name: "3D Triangle",
      meaning: "Represents a triangle in 3D space.",
      example: "⟁ABC"
    },
    {
      symbol: "⟠",
      name: "Spatial Angle",
      meaning: "Represents a 3D angle.",
      example: "∠ABC = ⟠"
    },
    {
      symbol: "⫯",
      name: "3D Parallel",
      meaning: "Represents parallel spatial lines.",
      example: "L ⫯ M"
    },
    {
      symbol: "⊥⃗",
      name: "Vector Perpendicular",
      meaning: "Represents perpendicular vectors.",
      example: "a ⊥⃗ b"
    },
    {
      symbol: "⧍",
      name: "Spatial Distance",
      meaning: "Represents distance in 3D space.",
      example: "d = ⧍(A,B)"
    }
  ],

  other: [
    {
      symbol: "∔",
      name: "Plus Sign Variant",
      meaning: "Addition-like operation.",
      example: "a ∔ b"
    },
    {
      symbol: "℧",
      name: "Mho",
      meaning: "Reciprocal of the ohm.",
      example: "1 Ω = 1 ℧⁻¹"
    },
    {
      symbol: "∿",
      name: "Sine Wave",
      meaning: "Represents a wave-like relation.",
      example: "y ∿ sin(x)"
    },
    {
      symbol: "≐",
      name: "Approaches Equality",
      meaning: "Represents approximate equality.",
      example: "a ≐ b"
    },
    {
      symbol: "≂",
      name: "Similarity",
      meaning: "Represents approximate similarity.",
      example: "a ≂ b"
    },
    {
      symbol: "≏",
      name: "Geometric Similarity",
      meaning: "Represents a geometric approximation.",
      example: "A ≏ B"
    }
  ]
};

// Find a symbol by its glyph
function findFanSymbol(glyph) {
  for (const category of Object.values(fanSymbols)) {
    const result = category.find(item =>
      item.symbol === glyph
    );
    if (result) return result;
  }
  return null;
}

// List every fan-made symbol
function getAllFanSymbols() {
  return Object.values(fanSymbols).flat();
}
