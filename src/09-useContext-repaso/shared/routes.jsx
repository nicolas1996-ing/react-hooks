export const routes = [
  {
    path: "/",
    name: "main",
    validToLink: true,
  },
  {
    path: "/login",
    name: "login",
    validToLink: true,
  },
  {
    path: "/about",
    name: "about",
    validToLink: true,
  },
  //   forma 1. rutas no definidas
  {
    path: "/*",
    validToLink: false,
  },
];
