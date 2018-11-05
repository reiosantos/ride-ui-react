
export const validateDate = (date) => {
	const dateReg = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
	let error = '';

	const regs = date.match(dateReg);
	const today = new Date();

	if (regs) {
		regs[1] = parseInt(regs[1], 10);
		regs[2] = parseInt(regs[2], 10);
		regs[3] = parseInt(regs[3], 10);

		if (regs[1] < today.getFullYear()) {
			error = `Invalid value for year: (${regs[1]}) - must not be less than (${today.getFullYear()})`;

		} else if (regs[2] < 1 || regs[2] > 12) {
			error = `Invalid value for month: (${regs[2]}) - must be from 1 to 12 `;

		} else if (regs[1] === today.getFullYear() && regs[2] < (today.getMonth() + 1)) {
			error = `Provide a month not less than this month: you provided - (${regs[2]})`;

		} else if (regs[3] < 1 || regs[3] > 31) {
			error = `Invalid value for day: (${regs[3]}) - must be from 1 to 31`;

		} else if ((regs[1] === today.getFullYear() &&
			regs[2] === (today.getMonth() + 1) &&
			regs[3] < today.getDate())) {
			error = `Provide a date not less than toady: you provided - (${regs[3]})`;

		}

	} else { error = `Invalid date format: ${date}`; }
	return error;
};

export const validateTime = (time) => {

	const timeReg = /^(\d{1,2}):(\d{2})(:\d{2})?$/;
	let error = '';

	const regs = time.match(timeReg);

	if (regs) {
		regs[1] = parseInt(regs[1], 10);
		regs[2] = parseInt(regs[2], 10);

		if (regs[1] > 23) {
			error = `Invalid value for hours: ${regs[1]}`;

		} else if (regs[2] > 59) {
			error = `Invalid value for minutes: ${regs[2]}`;

		}
	} else { error = `Invalid time format: ${time}`; }
	return error;
};
