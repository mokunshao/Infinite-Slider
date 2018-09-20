$('img:nth-child(1)').addClass('current')
$('img:nth-child(2)').addClass('enter')
$('img:nth-child(3)').addClass('enter')

let n = 1

setInterval(function(){
	$(`img:nth-child(${count(n)})`).removeClass('current').addClass('leave').one('transitionend', function(e){
		$(e.currentTarget).removeClass('leave').addClass('enter')
	})
	$(`img:nth-child(${count(n+1)})`).removeClass('enter').addClass('current')
	// 等同于： $(`img:nth-child(`+count(n+1)+`)`).removeClass('enter').addClass('current')
	// 等同于： $('img:nth-child('+count(n+1)+')').removeClass('enter').addClass('current')
	n =n+1
}, 1000)

function count(n){
	n=n%3
	if (n===0) {
		n=3
	}
	return n
}