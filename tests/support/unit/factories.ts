/**
 * Factories are convenience functions for creating instances of normal classes (not mocks).
 */
import Test from 'src/lib/Test';
import Suite from 'src/lib/Suite';
import { mockExecutor } from './mocks';

import { mixin } from '@dojo/core/lang';

/**
 * Create a new Suite with default required values and any given properties replaced
 */
export function createSuite(properties?: { [P in keyof Suite]?: Suite[P] }) {
	let suite = new Suite({
		name: 'suite',
		executor: mockExecutor()
	});
	if (properties) {
		suite = Object.create(suite);
		mixin(suite, properties || {});
	}
	return suite;
}

/**
 * Create a new Test with default required values and any given properties replaced
 */
export function createTest(properties?: { [P in keyof Test]?: Test[P] }) {
	let test = new Test({
		name: 'test',
		test() {}
	});
	if (properties) {
		test = Object.create(test);
		mixin(test, properties || {});
	}
	return test;
}
