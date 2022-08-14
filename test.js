//print an alert massage

//alert("mahmoud");

//print somthing to the consosle screen
console.log("mmm");

//var is for declaring variables
var name = "Mahmoud";

//concatenation
var age = "thirty" + "four";
var myAge = "hello I am " + age + " years old!";
console.log(age);

//indexing
console.log(name[4]);
console.log(name.charAt(4));

//escaping by using ( \ ) the backslash
console.log("my name is \"Mahmoud\"");

//for ASCII code of a character
console.log(name.charCodeAt(2));

//for ASCII code of some or all character in a string

//boolean
/*for (var i = 0; i < name.length; i++) {
  console.log(name.charCodeAt(i));
}*/

//undefined ana null
var kk;
console.log(kk);
var b = null;
console.log(b);

//the if..else statment
var price = 15;
var money = 25;
if (money >= price) {
  console.log("buy the hammer");
} else {
  console.log("don't but the hammer");
}

//the else..if statment
//sample 1
if (money > price) {
  console.log("you are rich!!");
} else if (money === price) {
  console.log("try to get more for yourself");
}else {
  console.log("go work and earn some money");
}

//sample 2
var musicians = 1;
if(musicians<1){
    console.log("not a group");
}else if(musicians===1){
    console.log("solo");
}else if(musicians===2){
    console.log("duet");
}else if(musicians===3){
    console.log("trio");
}else if(musicians===4){
    console.log("quartet");
}else {
    console.log("this is a large group");
}

//trenary operator
var eatsPlants = false;
var eatsAnimals = true;
var category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : "undefined");
console.log(category);

//switch statment
var option = 2;
switch (option) {
  case 1:
    console.log("1");
    break;
  case 2:
    console.log("2");
    break;
  default:
    console.log("nothing!");
}

//the while loop
var start = 2;
while (start <= 10) {
  if (start % 2 ===0) {
    console.log(start);
  }
  start++;
}

//the for loop
var solution = 1;
for (var x = 1; x<=12; x++){

    solution *= x;
}

console.log(solution);

//functions
var sound = "";
function laugh(num) {
    for (var i = 1; i <= num; i++){
        sound = sound + "ha";
    }
    sound = sound + "!"
    return sound;
}
console.log(laugh(3));

//arrays
var arrayName = [1, 2, "Mahmoud", true];
console.log(arrayName);

//array.map
var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
var totals = bills.map(function(num){
    num *= 1.15;
    num = num.toFixed(2);
    return (Number(num));
});
console.log(totals);

//array.forEach
var numbers = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139];
numbers.forEach(function(num, index, all){
    if(num % 3 === 0) {
        numbers[index] += 100;
    }
});
console.log(numbers);

//nested arrays

var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for(var r = 0; r < numbers.length; r++){
    for(var c = 0; c <numbers[r].length; c++){
      //(numbers[r][c] % 2 === 0) ? numbers[r][c] = "even" : numbers[r][c] = "odd";
        if(numbers[r][c] % 2 === 0){
            numbers[r][c] = "even";
        }  else {
            numbers[r][c] = "odd";
        }
    }
}
console.log(numbers);

// objects
var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function() {
        return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%.";
    }
};
console.log(savingsAccount.printAccountSummary());

//objects
var facebookProfile = {
    name: "Mahmoud",
    friends: 200,
    messages: ["hi", "hey"],
    postMessage: function(){
        facebookProfile.messages.push("hello");
    },
    deleteMessage: function(index){
        facebookProfile.messages.splice(index, 1);
    },
    addFriend: function(){
        facebookProfile.friends += 1;
    },
    removeFriend: function(){
      if (facebookProfile.friends > 0) {
        facebookProfile.friends -= 1;
      };
    }
};

//objects
var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(num, index, all){
   console.log(num.type + " donuts cost $" + num.cost + " each");
});
