import { capitalizeWord, formatDate, sleep } from '../../utils';
import {
	validateAmount, validateDateTime,
	validatePassword,
	validatePhoneNumber,
	validateUsername
} from '../../utils/validators';

describe('Util functions', () => {

	it('should validate signup form', () => {
		expect(validateUsername('santo').trim().length).toBe(0);
		expect(validateUsername('sa').trim().length).toBeGreaterThan(1);
		expect(validatePassword('mypassword12').trim().length).toBe(0);
		expect(validatePassword('mypassword').trim().length).toBeGreaterThan(1);
		expect(validatePhoneNumber('1234567890').trim().length).toBe(0);
		expect(validatePhoneNumber('+12345678').trim().length).toBeGreaterThan(1);
		expect(validateAmount('12345678').trim().length).toBe(0);
		expect(validateAmount('+123--45678').trim().length).toBeGreaterThan(1);
	});

	it('should test general util functions', () => {
		expect(formatDate('2018-12-22')).toBeDefined();
		expect(capitalizeWord('santos')).toEqual('Santos');
		expect(sleep(1)).resolves.toHaveReturned().then();
	});

	it('should test date and time validations', () => {
		expect(validateDateTime('')).toBeDefined();
		expect(validateDateTime('2019-12-12T00:24')).toBeDefined();
		expect(validateDateTime('2015-12-11T00:00')).toBeDefined();
		expect(validateDateTime('2018-07-11T00:00')).toBeDefined();
	});
});
