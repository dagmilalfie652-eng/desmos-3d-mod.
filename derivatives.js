
// Desmos 3D derivative functions

const derivatives3D = {
  dx: (f, x, y, z, h = 0.0001) =>
    (f(x+h,y,z)-f(x-h,y,z))/(2*h),

  dy: (f, x, y, z, h = 0.0001) =>
    (f(x,y+h,z)-f(x,y-h,z))/(2*h),

  dz: (f, x, y, z, h = 0.0001) =>
    (f(x,y,z+h)-f(x,y,z-h))/(2*h),

  gradient: (f, x, y, z) => [
    derivatives3D.dx(f,x,y,z),
    derivatives3D.dy(f,x,y,z),
    derivatives3D.dz(f,x,y,z)
  ]
};
