// // let  year  =  1990;
// // console.log(typeof  year);  //  ->  number
// // console.log(typeof  1991);  //  ->  number
   
// // let  name  =  "Alice";
// // console.log(typeof  name);  //  ->  string
// // console.log(typeof  "Bob");  //  ->  string
   
// // let  typeOfYear  =  typeof  year;
// // console.log(typeOfYear);  //  ->  number
// // console.log(typeof  typeOfYear);  //  ->  string
// // let a = 1 / 0;
// // let b = -Infinity;
   



// // console.time();
// // console.log("test  console");  //  ->  test  console
// // console.timeEnd();  //  ->  default:  0.108154296875  ms


// // let  river  =  "Mekong";
// // let  character  =  river.charAt(2);
// // console.log(character);  //  ->  k

 


// let  str  =  "java  script  language";
   
// // console.log(str.length);  //  ->  20
// // console.log('test'.length);  //  ->  4
   
// // console.log(str.charAt(0));  //  ->  'j'
// // console.log('abc'.charAt(1));  //  ->  'b'


// // 0
// console.log(str.slice(0,  4));  //  ->  'java'

   
// // console.log(str.split('  '));  //  ->  ['java',  'script',  'language']
// // console.log('192.168.1.1'.split('.'));    //  ->  ['192',  '168',  '1',  '1']


// let  users  =[  
//     {
//             name:  "Calvin",
//             surname:  "Hart",
//             age:  66,
//             email:  "CalvinMHart@teleworm.us"
//     },
//     {
//             name:  "Mateus",
//             surname:  "Pinto",
//             age:  21,
//             email:  "MateusPinto@dayrep.com"
//     }
// ];


// // // 1
// console.log(users[0].surname);  //  ->  Calvin
// console.log(users[1].age);  //  ->  21

// let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// console.log(days.length);
// console.log(users[1].age+days[0]);
// console.log(days.indexOf("Sun"));



// // // 2
// // let height = 180;
// // {
// // let height = 300;
// // height = height + 200;
// // }
// //  console.log(height);


// //  //3
// // let d = 100/0;
// // console.log(d);

// // //4
// // // let y = 20n + 10;
// // // console.log(y);

// // //5
// // let x = "abcdefg".slice(2, 4)
// // console.log(x);



// // // 6
// // let summer = ["June", "July", "August"];
// // summer[1] = 7;
// // console.log(summer);

// // // a summer[0] = 7;

// // // b summer.July = 7;

// // // c We cannot do this (an array can only contain elements of the same type).

// // // d summer[1] = 7;



// // let animals = ["dog", "cat", "hamster"];
// // animals.pop();
// // console.log(animals);

// // let u = 10;
// // u = u+2;
// // console.log(u); // -> 12



// // let n = 2 * 3 ** 3 - 1;
// // console.log(n);

// // let p = 10;
// // let z = ++n;
// // console.log(p);
// // console.log(z);

// // let nr = "1";
// // let i = (nr === 1);
// // let t = (nr == 1);
// // let q = (nr = 1);
// // console.log(i);
// // console.log(t);
// // console.log(q);
// // 3 * 4 > 20-15



// // // let isUserReady = confirm("Are you ready?");
// // // if (isUserReady) {
// // //         console.log("User ready");
// // //     alert("User ready!");
// // // }
// // // else if(isUserReady == false){
// // //         console.log("User not ready");
// // //         alert("User not Ready");
// // // }


// // // 7
// // // let unitPrice = 10;
// // // let pieces = prompt("How many pieces do you order?", 0);
// // // if (pieces > 0) {
// // //     let total = unitPrice * pieces;
// // //     console.log(total);
// // // }
// // // else{
// // //         console.log("Enter value greater than 0");
// // // }
// // // // console.log(total);


// // let userAge = 23;
// // let isFemale = false;
// // let points = 703;
// // let cartValue = 299;
// // let shippingCost = 9.99;
 
// // if (userAge > 21 && (cartValue >= 300 || points >= 500)) {
// //         shippingCost = 100;
// //     }
 
// // console.log(shippingCost);




// // // let number = prompt("Enter a number", 0);
 
// // // if (number < 10) {
// // //     alert("<10");
// // // } else if (number < 30) {
// // //     alert("<30");
// // // } else if (number < 60) {
// // //     alert("<60");
// // // } else if (number < 90) {
// // //     alert("<90");
// // // } else if (number < 100) {
// // //     alert("<100");
// // // } else if (number == 100) {
// // //     alert("100")
// // // } else {
// // //     alert(">100")
// // // }


// // for (let x = 10; x > 1; x -= 2)
// // console.log("hello");

// // for (let a = 4; a < 4; a++) {
// //     console.log("test");
// // }

// // let car = {make: "Citroen", model: "DS"};
// // for (let f in car)
// // console.log(f);

// // let steps = [3, 2, 1];
// // for (let n of steps)
// // console.log(n);


// // // function test(counter) {
// // //     console.log("test");
// // //     if (counter > 0)
// // //      test(--counter);
// // // }
// // // test(3)

// // // let zq = 10;
// // // function test() {
// // //      let zq = 20;
// // //      console.log(zq);
// // // }

// // // let po = 10;
// // // function test(po) {
// // //      console.log(po);
// // // }
// // // test(20);

// // // let xw = 10;
// // // let yw = 20;
// // // function test(yw) {
// // //      console.log(yw);
// // // }
// // // test(xw);

// // // let show = function () {
// // //     console.log("test");
// // // }
// // // setTimeout(show, 2000);

// // // // "let yu = 10";

// // // // console.log(yu);


// // // let jj = 10;

// // // ocnsole.log(jj);


// // // const gh = 10;

// // // onsole.log(gh);

// // // gh += 10;


// // // const df = 10;

// // // df = 20;

// // // try {

// // //     ocnsole.log("start");

// // // } catch (error) {

// // //     console.log("error");

// // // }

// // // console.log("end");


// // // try {

// // //     ocnsole.log("start");

// // // } catch (error) {

// // //     console.log("error");

// // // } finally {

// // //     console.log("end");

// // // }

// // // try {

// // //     console.log("start");

// // // } catch (error) {

// // //     console.log("error");

// // // } finally {

// // //     console.log("end");

// // // }

// // // let id = "100";
// // // {
// // // let id = 200;
// // // id = id + 1;
// // // console.log(id);
// // // }


// // // let winter = ["December", "January", "February"];
// // // let index = winter.indexOf("February");

// // // let msg1 = 'hello';
// // // let msg2 = msg1.slice(-1);
// // // console.log(msg2 ? msg2 : msg2 + msg1);

// // // let test = prompt("Run", "code");


// // // let h = false || true;
// // // let l = "true" && "false";
// // // let m = false && true;
// // // console.log(`${h} ${l} ${m}`);

// // let h = true && 20;
// // let l = 0 || 20
// // let m = 0 && 20;
// // console.log(`${h} ${l} ${m}`);



// // let a = 20 + "10";
// // let b = 20 + +"10";
// // let c = 20 + -"10" + "10";
// // let d = "10" - "10" + "100";
// // let e = "A" - "B" + 0xA;
// // console.log(`${a}, ${b}, ${c}, ${d}, ${e}`);


// // let x = [10, 20, 30, 40];
// // let y = [50, 60];
// // x.reverse().push(y);
// // console.log(x.length);

// // let colors = ['red', 'green', 'blue'];
// // for (let c of colors) console.log(c);


// // let route = {distance: 131, elevation: 1.4};
// // for (let k in route) console.log(k);


// // let a = (n) => {
// //         return n > 2 ? n * a(n - 1) : 2
// //     }
// //     console.log(a(6));
    

// // let counter = 2;
// // let interval = setInterval(() => {
// //     console.log(counter);
// // if (counter-- <= 0) clearInterval(interval);
// // }, 1000);


// // function execute(todo, a, b) {
// //     return todo(a, b);
// //     }
// //     console.log(execute(power, 3, 2));
    








