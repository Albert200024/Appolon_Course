 // var p1 = {
    //     name: "anun",
    //     surname: "azganun",
    //     age: 20,
    // }
    // var p1 = {
    //     name: "anun",
    //     surname: "azganun",
    //     age: 20,
    //
    //     tpel:function() {
    //         document.write(`<h1>${p1.name}</h1>`)
    //     }
    // }
    // p1.tpel()
    // console.log(p1.name)

    // var p1 = {
    //     name: "anun",
    //     surname: "azganun",
    //     age: 20,
    //
    //     // tpel:function() {
    //     //   document.write(<h1>${p1.name}</h1>)
    //     // }
    //
    //     tpel:function() {
    //         document.write(`<h1>${this.name} ${this.surname}</h1>`);
    //     }
    // }

    // p1.tpel()

    // function Person(a,b){
    //     let temp = {};
    //     temp.name = a;
    //     temp.surname = b;
    //     temp.tpel=function(){
    //         document.write(`<h1>${this.name}</h1>`)
    //     }
    //     return temp;
    // }
    //
    // let user = Person("Karen", "Isakovyan");
    // // console.log(user)
    //  user.tpel()

//  function Person(a,b){
//      this.name = a;
//      this.surname = b;
//      this.tpel=function(){
//          document.write(`<h1>${this.name}</h1>`)
//      }
//  }
//
//  let user = new Person("Vaxinak", "Gyulumyan");
// // console.log(user)
// user.tpel()
//  console.log(user)
//
//  // cuyca talis karucvacqe
//  console.dir(Person)
//  function Person(a,b){
//      this.name = a;
//      this.surname = b;
//  }
//
//  Person.prototype.tpel=function(){
//      document.write(`<h1>${this.surname}</h1>`)
//  }
//
//  let user = new Person("anun","azganun");
 // user.tpel()
 // console.dir(Person)
 // console.log("tpelaa" in user)
 // console.log(user.hasOwnProperty("tpel"))

 // function Product(a, b, c){
 //     this.name = a;
 //     this.price = b;
 //     this.photo = c;
 // }
 //
 // Product.prototype.tpel=function (){
 //     document.write(`<h1>${this.name}</h1>`);
 //     document.write(`<img src="${this.photo}" width="400px" height="300px">`);
 //     document.write(`<h5>${this.price}</h5>`);
 // }
 //
 // let product1 = new Product("Xndzor","500$","apples-on-a-tree-branch.webp")
 //
 // product1.tpel()
 // class Student{
 //     constructor(a,b,c){
 //         this.name=a;
 //         this.surname=b;
 //         this.rate=c;
 //     }
 //     mijin(){
 //         document.write(`<p>${Math.floor(this.rate.reduce((a,b)=>a+b)/this.rate.length)}</p>`)
 //     }
 //     toStirng(){
 //         document.write(`<h1>${this.name} ${this.surname}</h1>`)
 //     }
 // }
 //
 // let user1 = new Student("Django","Xaridoshyan",[5,4,5,3]);
 // user1.toStirng()
 // user1.mijin()

 // class Math2{
 //     static gumarel(a,b){
 //         return a+b;
 //     }
 // }
 //
 // Math2.hanle=function(a,b){
 //     return a-b;
 // }
 //
 // let x = Math2.gumarel(5,4)
 // console.log(x)
 // console.log(Math2.hanle(4, 9))

 // console.anun=function(a){
 //     console.log(a)
 // }
 // console.anun("KArlos")
 // (function(){
 //     console.log("ok")
 // })()

 // class Test{
 //     constructor(){
 //         this.x=4;
 //     }
 //     strat(){
 //        var _this = this
 //         // // console.log(this.x)
 //         // setTimeout(function(){
 //         //     console.log(_this.x)
 //         // },3000)
 //         // setTimeout(()=>{
 //         //     console.log(this.x)
 //         // },3000
 //
 //         setInterval(()=>{
 //             console.log(this.x++)
 //         },3000)
 //     }
 // }
 // var obj= new Test();
 // obj.strat()

 class Emplaey{
     constructor(a,b,c){
         this.name = a;
         this.surname = b;
         this.company = c;
     }
 }
 class Deweloper extends Emplaey{
     constructor(x,y,z){
         super(x,y,z);
     }
     toString(){
         document.write(`<h1>${this.name} ${this.surname} ${this.company}</h1>`)
     }
 }
 var user1 = new Deweloper("anun","azganun","LLC");
 user1.toString()