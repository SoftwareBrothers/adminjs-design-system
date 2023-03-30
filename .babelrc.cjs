module.exports = {
  "plugins": [
    ["babel-plugin-styled-components", { "diplayName": true }],
    '@emotion'
  ],
  "presets": [
    "@babel/preset-react",
    ["@babel/preset-env", {
      "targets": {
        "node": "18"
      },
      "loose": true,
      "modules": false
    }],
    "@babel/preset-typescript",
  ]
}
