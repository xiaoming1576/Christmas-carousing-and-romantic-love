//调用飘落函数 实现飘落效果
$(document).snowfall({
	flakeCount: 50  //爱心的个数
});

var onOff=true;
 //点击实现音乐播放功能
$('.btn').click(function(){
	//get(0) 转换为dom节点
	if(onOff){
		$('#music').get(0).play();//播放音乐  play()原生dom提供的api接口

	}else{
		$('#music').get(0).pause();
	}
	onOff = !onOff;	
});	

	








