//判断登陆
function login(url,endFun){
	var _endFun = endFun||function(){};
	var ua = clientChecks();
	if(ua=='weixin'){
		if(window.location.search.indexOf('code') == -1){
			isWei = true;
			setTimeout(function(){
	      			window.location.href = url;
	       	}, 300)
		}
		if(window.location.search.indexOf('code') > -1){
			isWei = true;
			code = getQuery('code');
			weixinLogin(code);
		}
	}
	//客户端判断
	function clientChecks(){
	    var ua=navigator.userAgent;
	    if(/micromessenger/i.test(ua)){
	        return 'weixin';
	    }else if(/newsapp/i.test(ua)){
	        return 'neteasenewsapp';
	    }else if(/\_\_weibo\_\_/i.test(ua)){
	        return 'weiboapp';
	    }else if(/yixin/i.test(ua)){
	        return 'yixin';
	    }
	}
	
}

//网易新闻客户端登录
function __newsapp_login_done(info){ 
	// alert(info.name)
    if(info && info.name){//登陆成功回调
    	if(info.head==undefined){
    		info.head='http://go.163.com/2017/1019/migu/images/tou.png'
    	}
    	isNet = true;
    	// _useData.nickname = info.nickname;
    	// _useData.head_portrait = info.head;
    	$.ajax({	
			// url:'http://test.go.163.com/api/go/2018/0115/HongKong/common.php?act=login',
			url:'http://go.163.com/api/2018/0115/HongKong/common.php?act=login',
			type:'POST',
			dataType:'json',
			success:function(data){
				// alert(data)
				// alert('data.retCode:'+data.retCode+" openid:"+data.retData.openid)
				if(data.retCode==1){
					// loading();
				}
		 	},
		 	error:function(){
		 		alert('error');
		 	}

		 });
    	//init();
    }else{
    	window.location.href="login://";
    }
}