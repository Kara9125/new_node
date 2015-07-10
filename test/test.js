var request = require('request'), 
expect = require('chai').expect

// DESCRIBE WHAT WE ARE TESTING
  // SAY WHAT BEHAVIOR 'IT' AUGHT TO HAVE
    // SEND THE REQUEST
      // USE CHAI-EXPECT TO EXPECT THE STATUS RESULT
      // CHECK FALSE VALUE TO SEE IF WE CAN MAKE TEST FAIL
      // CALL DONE();

// describe('Google.com', function() {
//   it('should have a HTTP of 200 - success', function(done) {
//     request('https://google.com/', function(err, res, body) {
//       expect(res.statusCode).to.equal(200)
//       // expect(res.statusCode).to.equal(300)
//       console.log("err" + err + "res" + res + "body" + body);
//       done();
//     })
//   })
// });

// describe('Amazon.com', function() {
//   it('should have a HTTP of 200 - success', function(done) {
//     request('https://amazon.com/', function(err, res, body) {
//       expect(res.statusCode).to.equal(200)
//       // expect(res.statusCode).to.equal(300)
//       console.log("err" + err + "res" + res + "body" + body);
//       done();
//     })
//   })
// });



describe('/users', function() {
  it('should have a HTTP of 200 - success', function(done) {
    request('http://localhost:3000/users', function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      // expect(res.statusCode).to.equal(300)
      console.log("err" + err + "res" + res + "body" + body);
      done();
    })
  })
});

describe('localhost API TESTING', function() {
 it('should have a HTTP of 200 - success', function(done) {
   var user = {id: 7,
 username: "hi",
 firstname: "klay",
 lastname: "thompson",
 age: 20
 };
   request.post('http://localhost:3000/users', {form: user}, function(err, res, body) {
     expect(res.statusCode).to.equal(200);
     // expect(res.statusCode).to.equal(300)
     console.log("NEW USER" + user);

     done();
   });
 });
});

// describe('localhost API TESTING', function() {
//  it('should edit an exist item in the array', function(done) {
//   var user = {id: 7,
//  username: "bye",
//  firstname: "draymond",
//  lastname: "green",
//  age: 20
//  };
//    request.put('http://localhost:3000/users/3', {form: user}, function(err, res, body) {
//      expect(res.statusCode).to.equal(200);
     
//      // console.log();

//      done();
//    });
//  });
// });