/*
 * Created by Kevo on 5/19/2016.
 */

var chai = require("chai"); // require chai assertion library
var chaiAsPromised = require("chai-as-promised"); // adds fluent language support for asserting facts about promises

chai.use(chaiAsPromised);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// SYNCHRONOUS TEST CODE

// describe('Array', function() {
// 	describe('#indexOf()', function() {
// 		it('should return -1 when the value is not present', function() {
// 			[1,2,3].indexOf(5).should.equal(-1);
// 			[1,2,3].indexOf(0).should.equal(-1);
// 		});
// 	});
// });

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// USING CHAI ASSERTION LIBRARY

var assert = require('chai').assert;
describe('Array', function() {
	describe('#indexOf()', function () {
		it('should return -1 when the value is not present', function () {
			assert.equal(-1, [1,2,3].indexOf(5));
			assert.equal(-1, [1,2,3].indexOf(0));
		});
	});
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ASYNCHRONOUS TEST CODE

// describe('User', function() {
// 	describe('#save()', function() {
// 		it('should save without error', function(done) {
// 			var user = new User('Luna');
// 			user.save(function(err) {
// 				if (err) throw err;
// 				done();
// 			});
// 		});
// 	});
// });

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// PROMISE EXAMPLE 1

// beforeEach(function() {
// 	return db.clear()
// 		.then(function() {
// 			return db.save([tobi, loki, jane]);
// 		});
// });

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// PROMISE EXAMPLE 2 USING "CHAI AS PROMISED" ~ https://www.npmjs.com/package/chai-as-promised

// describe('#find()', function() {
// 	it('respond with matching records', function() {
// 		return db.find({ type: 'User' }).should.eventually.have.length(3);
// 	});
// });

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


