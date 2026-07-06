/*function vote()
{

    let country = document.getElementById("country").value;
    let age = document.getElementById("age").value;

    if(country =="India" && age >= 18)
    {
        document.getElementById("display").innerHTML = "Eligible to vote";
    }
    else
    {
        document.getElementById("display").innerHTML = "Not Eligible to vote";
    }
}*/

/*const vote = () => 
{
    let country = document.getElementById("country").value;
    let age = document.getElementById("age").value;

    let text = (country =="india" && age >= 18) ? "Eligible to vote" : "Not Eligible to vote";
    document.getElementById("display").innerHTML = text;
    
};

for(let i=0;i<=5;i++)
{
    console.log("Hellow World")
}*/


/*for(let i = 1; i <= 5; i++) {
    let pattern = "";

    for(let j = 1; j <= i; j++) {
        pattern += i + " ";
    }

    console.log(pattern);
}*/

/*for(let i = 1; i <= 5; i++) {
    let pattern = "";

    for(let j = 1; j <= 5; j++) {
        pattern += "* ";
    }

    console.log(pattern);
}*/

/*for(let i = 1; i <= 5; i++) {
    let pattern = "";

    for(let j = 1; j <= 5; j++) {
        pattern += "* ";
    }

    console.log(pattern);
}

for(let i = 5; i >= 1; i--) {
    let pattern = "";

    for(let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern);
}

for(let i=1;i<=5;i++)
{
    let pattern="";
    for(j=1;j<=i;j++)
    {
        pattern+="* "
    }
    console.log(pattern)
}
for(let i=4;i>=1;i--)
{
    let pattern="";

    for(let j=1;j<=i;j++)
    {
        pattern+="* "
    }
    console.log(pattern)
}

let text = "    Amalya Joy   ";
let char=text.charAt(3);
console.log("the third character is " + char);

let charcode=text.charCodeAt(3);
console.log("the third character code is " + charcode);

/*let charcodepoint=text.codePointAt(3);
console.log("the third character code is " + charcodepoint);

let charupper=text.toUpperCase();
console.log("the name in full upper case " + charupper);

let charlower=text.toLocaleLowerCase();
console.log("the name in full lower case " + charlower);

console.log("the text M's index is " + text.indexOf("m"));
console.log("includes method = " + text.includes("Joy"));
console.log("starts with method = " + text.startsWith("Amalya"));
console.log("ends with method = " + text.endsWith("Joy"));
console.log("silce method = " + text.slice(1,3));
console.log("replace method = " + text.replace("Amalya","Abitha"));
console.log("trim method = " + text.trim());*/

/*for(let i=1;i<=5;i++)
{
    let pattern="";

    for(let j=1;j<=5-i;j++)
    {
        pattern+=" "
    }
    for(let k=1;k<=(2*i-1);k++)
    {
    pattern+="*";
    }
console.log(pattern)
}*/

//Object and Array 
/*const student ={
    FirstName:"Amalya",
    LastName:"Joy",
    Age:"27",
    Course:"BCA",
    Address:{
        landmark:"Tabore",
        Pincode:"685605"
    },
    dresscolor:["Blue", "Green", "Yellow", "Red"],
    fulladdress: function()
    {
        return (this.Address.landmark + " " + this.Address.Pincode).toLocaleUpperCase();
    },
    namecolor: function()
    {
        return (this.FirstName + " " + this.LastName + "'s Favourite color is " + this.dresscolor[3]).toUpperCase();
    }
}
console.log(student.fulladdress());
console.log(student.namecolor());


//const numbers=[1,2,3,4,5];
//const oddnumber= numbers.filter(oddnum => oddnum%2!==0)


const names = ["Amalya", "Joy", "Anna", "Christopher"];
const largerName = names.filter(name=> name.length>5);
const upperName=names.map(name=>name.toUpperCase());
const addhello=names.map(name=>"HELLO " + name);
const startname=names.filter(name=>name.startsWith("A"));
console.log(startname);

console.log(largerName);
console.log(upperName);
console.log(addhello);

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 }
];

const productprice = products.filter(price=> price.price>3000);
const productnames=products.map(name=>name.name);
console.log(productnames);
console.log(productprice);


const numbers = [5, 10, 15, 20];
const addnumbers=numbers.map(add=>add+10);
console.log(addnumbers);

const NUMBERS = [20, 60, 45, 80, 30];
const largernumner=NUMBERS.filter(number=>number>50);
console.log(largernumner);


//Get even numbers and multiply them by 10
const num = [1, 2, 3, 4, 5, 6];
const evennum=num.filter(even=>even%2===0)
const evennummul=evennum.map(evennumber=>evennumber*10);
console.log(evennummul);

//Get students with marks above 80 and return only their names
const students = [
  { name: "Amalya", mark: 90 },
  { name: "Anna", mark: 85 },
  { name: "John", mark: 70 }
];

const mark80=students.filter(mark=>mark.mark>80)
const mark80names=mark80.map(name=>name.name);
console.log(mark80names);*/


/*const products = [
    { name: "Laptop", price: 55000 },
    { name: "Mouse", price: 700 },
    { name: "Keyboard", price: 1800 },
    { name: "Monitor", price: 12000 },
    { name: "Pen Drive", price: 600 }
];*/

//Return only the products whose price is greater than ₹5000.
//const price=products.filter(price=>price.price>5000)
//const productName=price.map(name=>name.name)
//console.log(price);
//console.log(productName);

//Create a new array where every product price is increased by 18% GST.
/*const NewProducts=products.map(price=>{
    return{
        name=products.name,
        price=products.price+(products.price*18)/100
    }
    
});
console.log(NewProducts);*/






/*const items = [
    { name: "TV", inStock: true },
    { name: "Phone", inStock: false },
    { name: "Laptop", inStock: true },
    { name: "Tablet", inStock: false }
];
//Return only the products that are in stock.
const stock=items.filter(stockstatus=>stockstatus.inStock==true);
const stockstatus=stock.map(stock=>stock.name);
console.log(stockstatus);*/


//class example
/*class Student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    get(){
        return `Hi my name is ${this.name} and my age is ${this.age}`;
    }    
}
const student1=new Student("Amalya Joy",27);
console.log(student1.get);*/


/*class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    expensive(){
        return this.price>5000;
    }
}

const products = [
    new Product("Laptop", 55000),
    new Product("Mouse", 700),
    new Product("Monitor", 12000)
];

const expensiveProduct = products.filter(product => product.expensive());
console.log(expensiveProduct);*/


/*class Student{
    constructor(name,age,course){
        this.name=name;
        this.age=age;
        this.course=course;
    }
}

const student1=new Student("Amalya",27,"BCA");
const student2=new Student("Sruthy", 22,"Bcom");

console.log(student1);
console.log(student2);*/

class Name{
    constructor(fname,lname){
        this.fname=fname;
        this.lname=lname;
        this.fname=fname;
        this.lname=lname;
    }
    fullname(){
        return this.fname + " " + this.lname;
    }
}
const fullname1=new Name("Amalya", "Joy");
console.log(fullname1.fullname());









