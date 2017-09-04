function createVideoControls() {
    var vids = document.getElementsByTagName('video');
    for (var i = 0; i < vids.length; i++) {
        addControls(vids[i]);
    };
};

function addControls(vid) {
    vid.removeAttribute('controls');  // 移除原来的control属性

    vid.height = vid.videoHeight;
    vid.width = vid.videoWidth;
    vid.parentNode.style.height = vid.videoHeight + 'px';
    vid.parentNode.style.width = vid.videoWidth + 'px';

    var controls = document.createElement('div');   // 新建controls框
    controls.setAttribute('class', 'controls');     // 将框的类名设置为controls
    var play = document.createElement('button');    //新建播放按钮
    play.setAttribute('title', 'Play');     //将按钮的title属性设置为play
    play.innerHTML = '&#x25BA;';    //框内的文本实体

    controls.appendChild(play);     //将按钮添加到控制框后面
    vid.parentNode.insertBefore(controls, vid);     //将controls框插入到video标签前面
    vid.parentNode.addEventListener('click',  function(e) {
    	console.log(e.target.getAttribute('title'))
    	if (e.target.getAttribute('title') === 'Play') {
        	if (vid.ended) {
            	vid.currentTime = 0;
        	}
        	if (vid.paused) {
            	vid.play();
        	} else {
           	    vid.pause();
        	}
    	}
    }, false)

    vid.addEventListener('play', function(){
        play.innerHTML = '&#x2590;&#x2590;';
        play.setAttribute('paused', true);
    }, false);

    vid.addEventListener('pause', function(){
        play.removeAttribute('paused');
        play.innerHTML = '&#x25BA;';
    }, false);

};

window.onload = function() {
    createVideoControls();
}
