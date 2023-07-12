const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // lintOnSave: false,
  //开启代理服务器（方式一）
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // },
  //开启代理服务器（方式二）
	devServer: {
    proxy: {
      '/pro1': {
        target: 'http://localhost:5000',
				pathRewrite:{'^/pro1':''},
        // ws: true, //用于支持websocket
        // changeOrigin: true //用于控制请求头中的host值
      },
      '/pro2': {
        target: 'http://localhost:5001',
				pathRewrite:{'^/pro2':''},
        // ws: true, //用于支持websocket
        // changeOrigin: true //用于控制请求头中的host值
      }
    }
  }
})
