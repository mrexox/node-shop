import {expect} from 'chai';
import fetch from 'node-fetch';
import auth from '../src/server/authentication';

describe('Authentication test', () => {
	var res1 = 0, res2 = 0;
	var step = 1;
	beforeEach((done) => {
		if (step == 1) {
		auth.authenticate('admin', 'password', result => {
			res1 = result;
			done();
		});
			step++;
		} else if (step == 2) {
			auth.authenticate('admin', 'passwor0', result => {
				res2 = result;
				done();
			});
			step++;
		}
	});
	
	it('Must authenticate', () => {
		expect(res1).equals(true);
	});

	it('Must not authenticate', () => {
		expect(res2).equals(false);
	});
});

