module.exports = {
  "plugins": [
    ["module-resolver", {
      "cwd": "./build/",
      "root": ["./src/"],
      "alias": {
        "@styled-components": "./utils/styled.js"
      }
    }]
  ],
  "presets": [
    "@babel/preset-react",
    ["@babel/preset-env", {
      "targets": {
        "node": "18"
      },
      "loose": true,
      "modules": false,
    }],
    "@babel/preset-typescript"
  ]
}
