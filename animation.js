
let angle = 0;

function animate3D(object) {
  angle += 0.01;
  object.rotation.x = angle;
  object.rotation.y = angle;
  requestAnimationFrame(() => animate3D(object));
}
