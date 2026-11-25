var arraySign = function (a) {
	if (a.includes(0)) return 0;

	let negativeEleCount = 0;

	for (let e of a) {
		if (e < 0) negativeEleCount++;
	}

	let isProdPositive = negativeEleCount % 2 === 0;
	return isProdPositive === true ? 1 : -1;
};

var arraySign3333333 = function (a) {
	let negativeEleCount = 0;

	for (let e of a) {
		if (e === 0) return 0;
		if (e < 0) negativeEleCount++;
	}

	let isProdPositive = negativeEleCount % 2 === 0;
	return isProdPositive === true ? 1 : -1;
};

var arraySign222 = function (a) {
	function signFunc(x) {
		if (x > 0) return 1;
		if (x < 0) return -1;
		return 0;
	}

	let prod = a.reduce((product, e) => product * e, 1);
	return signFunc(prod);
};
