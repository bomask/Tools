const CompressionPlugin = require("compression-webpack-plugin");



const cdn = {
	css: ["//unpkg.com/element-ui@2.13.1/lib/theme-chalk/index.css"],
	  js: [
		     "//cdn.bootcdn.net/ajax/libs/vue/2.6.11/vue.min.js",
		      "//unpkg.com/vue-router@2.8.1/dist/vue-router.min.js",
		      "//unpkg.com/element-ui@2.13.1/lib/index.js"
		    ]
}


module.exports = {
	productionSourceMap: false,
	devServer: {
		host: '0.0.0.0',
		port: 9527,
		// 端口
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		hotOnly: false,
		disableHostCheck: false
	},
	lintOnSave: false,
	// 取消 eslint 验证
	configureWebpack: {

		plugins: [new CompressionPlugin({
			filename: '[path].gz[query]',
			algorithm: "gzip",    //brotliCompress
			test: /(\.js(\?.*)?)|(\.html(\?.*)?)|(\.css(\?.*)?)$/i,
//			compressionOptions: {
//				level: 5
//			},
			threshold: 10240,
			minRatio: 0.8,
//			deleteOriginalAssets: true,
			cache:true
		})],

		externals: {
			vue: "Vue",
			"element-ui": "ELEMENT",
			"vue-router": "VueRouter"
		},

	},
	pages: {
		index: {
			entry: 'src/main.js',
			template: 'public/index.html',
			filename: 'index.html',
			chunks: ['chunk-vendors', 'chunk-common', 'index'],
			cdn: cdn
		}
	},

};
