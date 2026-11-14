
function sphere(x, y, z, r) {
  return {
    type: "sphere",
    center: [x, y, z],
    radius: r
  };
}

function distance3D(a, b) {
  return Math.hypot(
    a[0]-b[0],
    a[1]-b[1],
    a[2]-b[2]
  );
}

function dot3D(a, b) {
  return a.reduce((s, v, i) => s + v*b[i], 0);
}
