
// 3D Mod Matrix Functions

const Matrix3D = {
  add: (A, B) =>
    A.map((row, i) =>
      row.map((v, j) => v + B[i][j])
    ),

  multiply: (A, B) =>
    A.map(row =>
      B[0].map((_, j) =>
        row.reduce((s, v, k) =>
          s + v * B[k][j], 0
        )
      )
    ),

  transpose: A =>
    A[0].map((_, j) =>
      A.map(row => row[j])
    ),

  identity: n =>
    Array.from({length:n}, (_,i) =>
      Array.from({length:n}, (_,j) =>
        i === j ? 1 : 0
      )
    )
};
