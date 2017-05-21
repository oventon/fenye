function $(id){
	var a = document.querySelectorAll(id);
	if(a.length > 1){
		return a;
	}else{
		return document.querySelector(id);
	}
}

var ct_ul = $('.content').querySelectorAll('ul');
var pg_list = $('.page').querySelectorAll('li');
var next = $('.next');
var start = $('.start');
var last = $('.last');
var end = $('.end');
var llp = $('.llp');
var index;

function addClick(dom,fn) {
	dom.addEventListener('click',fn);
}
addClick(last,function() {
	for(var i = 0 ; i < llp.length ; i++){
		var tmp = parseInt(llp[i].innerText);
		if(tmp == 1){
			llp[i].innerHTML = 1;
			showPage(llp[i]);
			return;
		}else{
			var a = --tmp;
			llp[i].innerHTML = a;
			showPage(llp[i]);			
		}
	}
});

addClick(next,function() {
	for(var i = 0 ; i < llp.length ; i++){
		var tmp = parseInt(llp[i].innerText);
		if(i == 9){
			next.onclick = function() {
				console.log(123);
			}
			break;
		}else{
			var a = ++tmp;
			llp[i].innerHTML = a;
			showPage(llp[i]);			
		}			
	}
});
addClick(start,function() {
	for(let i = 0 ; i < llp.length ; i++){
		llp[i].innerHTML = i+1;
		llp[i].className = 'llp';
	}
	showPage(llp[0]);
	llp[0].className = 'llp on';
})

addClick(end,function() {
	for(let i = 0 ; i < llp.length ;i++){
		llp[i].innerHTML = 6 + i;
		llp[i].className = 'llp';
	}
	showPage(llp[4]);
	llp[4].className = 'llp on'; 
})

function showPage(dom) {
	index = parseInt(dom.innerHTML);
	for(var i = 0 ; i < ct_ul.length ; i++ ){
		ct_ul[i].className = '';
	}
	ct_ul[index - 1].className = ct_ul[index - 1].className + ' show';
}

for(let i = 0 ; i < llp.length ; i++){
	addClick(llp[i],function() {
		showPage(llp[i]);
		for(var j = 0; j < llp.length ; j++){
			llp[j].className = 'llp';
		}
		llp[i].className = "llp on";
	})
}

