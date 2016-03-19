SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  transpiler: "plugin-babel",

  map: {
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.8"
  },

  packages: {
    "app": {}
  }
});
