// var fs = require('fs'); 
// fs.readFile('test.txt', function onFileData(err, data) { 
//     console.log(''); 
//     console.log(data.toString()); 
// }); 
  
// console.log('reading file.....');

////////////////////////////////////////////////
// call back
// function greet(callback) {
//     console.log('Hello!');
//     callback();
//     callback();
//     callback();
// }

// greet(function() {
//     console.log('The callback is invoked!');
// });

// greet(function() {
//     console.log('A different callback is invoked!');
// });

// callback with feed parameter
// function greet(callback) {
//     console.log('Hello!');
//     var data = {
//         name: "Payson Wu"
//     };
//     callback(data);
// }

// greet(function(asdf) {
//     console.log('The callback is invoked!');
//     console.log(asdf);
// });

// greet(function(data) {
//     console.log('A different callback is invoked!');
//     console.log(data.name);
// });


///////////////////////////
// add two numbers normally

// let resultA, resultB, resultC;

// function add(num1, num2) {
//     return num1 + num2;
// }

// resultA = add(1, 2); // you get resultA = 3 immediately
// resultB = add(resultA, 3); //you get resultB = 6 immediately
// resultC = add(resultB, 4); // you get resultC = 10 immediately

// console.log('total: ' + resultC);
// console.log(resultA, resultB, resultC);


//////////////////////////////////////////////
// let resultA1, resultB1, resultC1;

// function addAsync(num1, num2, someFunction) {
//     // use the famous jQuery getJson callback API
//     return $.getJSON('http://www.example.com', {
//         num1: num1,
//         num2: num2
//     }, someFunction);
// }
// (success) => {}
// function(success) {}

//////////////////////////////////
// addAsync(1, 2, data => {
//     // callback 1
//     resultA1 = data; // you get result = 3 here

//     addAsync(resultA1, 3, success => {
//         // callback 2
//         resultB1 = success; // you get result = 6 here
        
//         addAsync(resultB1, 4, success => {
//             // callback 3
//             resultC1 = success; // you get result = 10 here

//             console.log('total: ' + resultC1);
//             console.log(resultA1, resultB1, resultC1);
//         });
//     });
// });

////// do something async 5 times
// doSomethingAsync1(function() {
//     doSomethingAsync2(function() {
//         doSomethingAsync3(function() {
//             doSomethingAsync4(function() {
//                 doSomethingAsync5(function() {
//                 });
//             });
//         });
//     });
// });

/////////////////// Promise
// var isMomHappy = true;

// //Promise
// var willIGetNewPhone = new Promise(
//     function (resolve, reject) {
//         if (isMomHappy) {
//             var phone = {
//                 brand: 'iPhone',
//                 color: 'red'
//             };
//             resolve(phone); // fulfilled
//         } else {
//             var reason = new Error('mom is not happy');
//             reject(reason); // reject
//         }
//     }
// );
// var askMom = function() {
//     willIGetNewPhone
//         .then(function(phone) {
//             // yay, you got a new phone
//             console.log(phone);
//             // output: {brand: 'iPhone', color: 'red'}
//         }, function(error) {
//             // oops, mom didn't buy it 
//             console.log(error.message);
//             // output: 'mom is not happy'
//         })
// };

// askMom();

/////////////////////// promise for sequence call
// let r1, r2, r3;
// function addAsync(num1, num2) {
//     // use ES6 fetch API, which returns a promise
//     return fetch(`http://www.example.com?num1=${num1}&num2=${num2}`)
//             .then(x => x.json());
// }
// addAsync(1, 2)
//     .then(result => {
//         r1 = result;
//         return r1;
//     })
//     .then(success => addAsync(success, 3))
//     .then(success => {
//         r2 = success;
//         return r2;
//     })
//     .then(success => addAsync(success, 4))
//     .then(success => {
//         r3 = success;
//         return r3;
//     })
//     .then(success => {
//         console.log('total: ' + success);
//         console.log(r1, r2, r3);
//     });

///////////////////// promise sleep
// var sleep = function (ms) {
//     var promise = new Promise(function (resolve, reject) {
//         setTimeout(function() {
//             resolve('haha');
//         }, ms);
//     });
//     return promise;
// };
////////
// sleep(2000)
//     .then(function(result) {
//         console.log(result);
//     });

/// promise demo advance
// Promise.all([sleep(1000), sleep(2000)])
//     .then(function() {
//         console.log('ALL done');
//     });
// Promise.race([sleep(1000), sleep(5000)])
//     .then(function() {
//         console.log('Race is won!');
//     });