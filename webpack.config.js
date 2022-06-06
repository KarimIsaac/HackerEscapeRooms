const path = require("path")

module.exports ={
    entry:['babel-polyfill', './src/javascript/index.js'],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    experiments:{
        asyncWebAssembly: true,
        layers: true,
        outputModule: true,
        syncWebAssembly: true,
        topLevelAwait: true,
    },
    module:{
        rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
          ]
    }
}