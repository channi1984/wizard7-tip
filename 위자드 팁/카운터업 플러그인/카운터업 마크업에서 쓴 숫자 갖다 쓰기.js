//카운터 업
const options1 = {
	startVal: 0,
	duration: 4,
	decimalPlaces: 0,
};
const options2 = {
	startVal: 0,
	duration: 4,
	decimalPlaces: 1,
};

const numElements = document.querySelectorAll('.num');
const counters = [];

numElements.forEach((element, index) => {
	const targetValue = parseFloat(element.textContent);
	let options = options1;
	if (index === 3) {
		options = options2;
	}
	counters.push(new countUp.CountUp(element, targetValue, options));
});

var waypoint1 = new Waypoint({
	element: document.querySelector('.wrap-state'),
	handler: function (direction) {
		if (direction == "down") {
			counters.forEach(counter => counter.start());
		}
		if (direction == "up") {
			counters.forEach(counter => counter.reset());
		}
	},
	offset: '50%'
});