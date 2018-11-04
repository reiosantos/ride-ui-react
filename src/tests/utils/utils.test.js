import { capitalizeWord, formatDate, sleep } from '../../utils';
import {
	validateAmount,
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
});
