module.exports = {
  runtimeCompiler: true,
  devServer: {
    proxy: {
      'v2': {
        target: 'https://m.wowdsgn.com',
        // ws: true,
        changeOrigin: true
      },
      'itemdetail': {
        target: 'https://m.wowdsgn.com',
        // ws: true,
        changeOrigin: true
      },
      'pages': {
        target: 'https://m.wowdsgn.com',
        // ws: true,
        changeOrigin: true
      }
    }

  }
}
