document.getElementById('button').onmousemove = (e) => {

	const x = e.pageX - e.target.offsetLeft
	const y = e.pageY - e.target.offsetTop
	
	console.log(x + '/' + y);

  e.target.style.setProperty('--x', `${ x }px`)
	e.target.style.setProperty('--y', `${ y }px`)
	
	console.log(e);
}
