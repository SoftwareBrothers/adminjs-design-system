module.exports = {
  "plugins": [["babel-plugin-styled-components", { "diplayName": true }]],
  "presets": [
    "@babel/preset-react",
    ["@babel/preset-env", {
      "targets": {
        "node": "18"
      },
      "loose": true,
      "modules": false
    }],
    "@babel/preset-typescript"
  ]
}
