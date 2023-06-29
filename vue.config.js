const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// module.exports = {
//   devServer: {
//       proxy: {
//           "^/api/*": {
//               // target: "http://localhost:5000",
//               target: "http://localhost:5173",
//               // secure: false,
//               ws: true,
//               changeOrigin: true
//           }
//       }
//   }
// };

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api*': {
        target: "http://127.0.0.1/api",
        // secure: false,
        ws: true,
        changeOrigin: true,
        // pathRewrite: {
        //   '^api': '/api'
        // },
      },
      // headers: {
      //   Connection: 'keep-alive'
      // }
    }
  }
})