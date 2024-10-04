<script>
 
  // 2) Sum of all array value
  var arr = [1, 2, 5];
  var sum = arr.reduce((a, b) => {
    return a + b;
  });
  // console.log("Sum: ", sum);

  // 3) Tell the output
  // const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < 10; i++) {
    // setTimeout(() => console.log(a[i]), 1000); // Print with 1 seconds of delay
  }
  // for (var i = 0; i < 10; i++) {
  //   setTimeout(() => console.log(a[i]), 1000); // Undefined
  // }

  //4) Tell the output
  var l=1; // l = 1
  var m=l++; // m = 1, l = 2
  var n=++l; // n = 3, l = 3
  // var l += i;
  //var m +=i+1;
  var o=l+1; // o = 4
  // console.log(`l: ${l}`); // 3
  // console.log(`m: ${m}`); // 1
  // console.log(`n: ${n}`); // 3
  // console.log(`o: ${o}`); // 4

  //5) Tell the output
  var a=3; // a = 3
  var b=a++; // b = 3, a = 4
  var c=++a; // c= 5, a = 5
  // console.log(`a: ${a}`); // 5
  // console.log(`b: ${b}`); // 3
  // console.log(`c: ${c}`); // 5

  //6) Tell the output
  function func1() {
    return {
      name: "Full Stack Tutorials",
    };
  }
  // console.log(func1()); // Object
  function func2() {
    return;
    {
      name: "Full Stack Tutorials";
    }
  }
  // console.log(func2()); // undefined

  // 7) Tell the output
  // console.log(typeof undefined); // undefined
  // console.log(typeof null); // object 
  // console.log(typeof NULL); // undefined
  // console.log(typeof 1); // number
  // console.log(typeof 'undefined'); // string
  // console.log(typeof typeof 1); // string

  // 8) How to convert an Object {} into an Array [] in JavaScript
  let obj = { id: "1", name: "Test User", age: "25", profession: "Developer" };
  // console.log(Object.keys(obj)); // Keys Array
  // console.log(Object.values(obj)); // Values array
  // console.log(Object.entries(obj)); // Key Values Array (Array inside array)

  // 9) How to convert an Array [] to Object {} in JavaScript?
  let arr9 = ["1", "Test User", "25", "Developer"];
  // let arr1Obj = Object.assign({}, arr9) // Method 1
  // let arr1Obj = {...arr9}; // Using spread operator
  // console.log(arr1Obj);

  // 10) tell the output
  const x = { x: 1, y: 2 }; // x is an object
  const y = x; // Shallow Copy
  const z ={...x}; // Deep Copy
  // y.x = 3; // It will change the value of x object as well
  z.x = 3; // It will only change the value of z object
  // console.log(x);
  // console.log(y);
  // console.log(z);

  // 11) tell the output
  let p = 10;
  // var p = 20; // Identifier 'p' has already been declared 
  // console.log(p);

  // 12: Given a string, reverse each word in the sentence
  var string = "reversed string";
  var reverseEntireSentence = reverseBySeparator(string, "");

  // Output becomes emocleW ot siht tpircsavaJ !ediuG
  var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");
  // console.log(reverseEachWord);

  function reverseBySeparator(string, separator) {
    return string.split(separator).reverse().join(separator);
  }

  // 13)How to check if an object is an array or not? Provide some code.
  var arrayList = [1, 2, 3];
  if(Array.isArray(arrayList)) {
    // console.log("Array")
  }
  if(Object.prototype.toString.call(arrayList) === '[object Array]') {
    // console.log("Array")
  }

  // 14) How would you check if a number is an integer
  function isInt(num) {
    return num % 1 === 0;
  }
  // console.log(isInt(10)) // Custom
  // console.log(isInt(4)); // true
  // console.log(isInt(12.2)); // false
  // console.log(Number.isInteger(10)) // In built

  //15) Q7: Make this work
  const tarr = duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]
  // console.log(tarr);
  function duplicate(arr) {
    // return arr.concat(arr); // Concatination
    return [...arr, ...arr]
  }

  //16) Clouser example
  function adder(a) {
    return function(b) {
      return a + b;
    }
  }

  var addSix = adder(5);
  // console.log(addSix(10));

  //17) Tell the output
  var ya = 1;
  if (function f() {}) {
    ya += typeof f;
  }
  // console.log(ya); // 1undefined

  
  //18) Tell the output
  var obj18 = {
    a: "1",
    b: "2",
    sum: function () {
      return this.a + " " + this.b;
    },
    nestedSum: {
      x: 3,
      y: 4,
      z: function () {
        return this.a + " " + this.b + " " + this.x;
      }
    }
  };

  // console.log(`${obj18.sum()}`);  // 1 2
  // console.log(`${obj18.nestedSum.z()}`); // undefined undefined 3


  //19) What will be the output of the following code?
  var output = (function(x) {
    delete x;
    return x;
  })(0);
  // console.log(output); // It return 0

  //20) What will be the output of the following code?
  var Employee = {
    company: 'xyz'
  }
  var emp1 = Object.create(Employee);
  delete emp1.company // it won't delete
  // console.log(emp1.company);

  //21) What will be the output of the following code?
  var myObject = {
      foo: "bar",
      func: function() {
          var self = this;
          console.log("outer func:  this.foo = " + this.foo); // bar
          console.log("outer func:  self.foo = " + self.foo); // bar
          (function() {
              console.log("inner func:  this.foo = " + this.foo); // undefined
              console.log("inner func:  self.foo = " + self.foo); // bar
          }());
      }
  };
  // myObject.func();

  //22) Intezer to base and base to integer
  var num = 505;
  // console.log(`num ${num.toString(2)}`); // binary value
  // console.log(parseInt("111110100", 2)); // Integer

  //23) tell the output
  // console.log(0.1 + 0.2 == 0.3); // false
  //solution
  let test03 = (0.2 * 10 + 0.1 * 10)/10;
  // console.log(test03==0.3);
  // console.log(test03);

  //24) tell the output
  // console.log(1); // First
  // setTimeout(function(){console.log(2)}, 1000); // Fourth
  // setTimeout(function(){console.log(3)}, 0);  // Third
  // console.log(4); // Second

  //25)  tell the output
  var arr1 = "john".split('');
  var arr2 = arr1.reverse();
  var arr3 = "jones".split('');
  arr2.push(arr3);
  // console.log("array" + arr2);
  // console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
  // console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
  //output
  //"array 1: length=5 last=j,o,n,e,s"
  //"array 2: length=5 last=j,o,n,e,s"

  
  //26)  tell the output
  // console.log(1 +  "2" + "2"); // 122
  // console.log(1 +  +"2" + "2"); // 32
  // console.log(1 +  -"1" + "2"); // 02
  // console.log(+"1" +  "1" + "2"); // 112
  // console.log( "A" - "B" + "2"); // Nan2
  // console.log( "A" - "B" + 2); // Nan
  //explanation: https://www.javascripttutorial.net/javascript-unary-operators/


  //27) tell the output
  var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
  };

  var stoleSecretIdentity = hero.getSecretIdentity;

  // console.log(stoleSecretIdentity());// undefined
  // console.log(hero.getSecretIdentity()); // Jone Doe

  //28)  tell the output
    var length = 20;
    function fn() {
      console.log(this.length); 
    }

    var obj28 = {
      length: 5,
      method: function(fn) {
        fn();
        arguments[0]();
      }
    };
    // obj28.method(fn, 1);

  //29)  tell the output
  var x29 = 21;
  var girl = function () {
    console.log(x29); // undefined
    let x29 = 20;
  };
  girl();

</script>