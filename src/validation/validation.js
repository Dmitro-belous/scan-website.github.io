export function validateInn(inn) {
	let result = false;
	if (typeof inn === 'number') {
		inn = inn.toString();
	} else if (typeof inn !== 'string') {
		inn = '';
	}

	if (!inn.length || /[^0-9]/.test(inn) || [10, 12].indexOf(inn.length) === -1) {
        return result;
    }

	const checkDigit = function (inn, coefficients) {
		let n = 0;
		for (let i in coefficients) {
			n += coefficients[i] * inn[i];
		}
		return parseInt(n % 11 % 10);
	};
	switch (inn.length) {
		case 10:
			const n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
			if (n10 === parseInt(inn[9])) {
				result = true;
			}
			break;
		case 12:
			const n11 = checkDigit(inn, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
			const n12 = checkDigit(inn, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
			if ((n11 === parseInt(inn[10])) && (n12 === parseInt(inn[11]))) {
				result = true;
			}
			break;
	}

	return result;
}

export function validateLimit(inn) {
	let result = false;
	if(inn > 0 && inn <= 1000) {
		result = true;
	}

	return result;
}

export function validateDateRange(start, end) {
	let result = false;
	// если заполнена только дата начала или конца, возвращаем true
	if(Boolean(start) + Boolean(end) === 1) {
		result = true;
	}
	// проверка дат (нет будущего времени, дата начала не позже даты конца)
	const startDate = new Date(start);
	const endDate = new Date(end);

	const differenceDate = endDate - startDate

	const currentDate = new Date();

	if (differenceDate >= 0 && endDate <= currentDate) {
		result = true
	}
	
	return result;
}