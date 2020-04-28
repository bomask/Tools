module.exports = {
	    devServer: {
		    	  host: '0.0.0.0',
		            port: 9527,     // 端口
		 
		    headers:{
		    'Access-Control-Allow-Origin':'*' ,
		    },
		    hotOnly:false,
		    disableHostCheck:false
		        },
	    lintOnSave: false   // 取消 eslint 验证
};
