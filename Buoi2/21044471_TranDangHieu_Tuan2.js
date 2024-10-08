/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 
*/

const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
};

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins");
    }
};

// Test data 1
let dolphinsScore1 = 44;
let dolphinsScore2 = 23;
let dolphinsScore3 = 71;
let koalasScore1 = 65;
let koalasScore2 = 54;
let koalasScore3 = 49;

console.log("Coding Challenge #1:");
let avgDolphins1 = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
let avgKoalas1 = calcAverage(koalasScore1, koalasScore2, koalasScore3);

console.log("Test data 1:");
checkWinner(avgDolphins1, avgKoalas1);

// Test data 2
let dolphinsScore4 = 85;
let dolphinsScore5 = 54;
let dolphinsScore6 = 41;
let koalasScore4 = 23;
let koalasScore5 = 34;
let koalasScore6 = 27;

let avgDolphins2 = calcAverage(dolphinsScore4, dolphinsScore5, dolphinsScore6);
let avgKoalas2 = calcAverage(koalasScore4, koalasScore5, koalasScore6);

console.log("Test data 2:");
checkWinner(avgDolphins2, avgKoalas2);


/*
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) 
*/ 

const calcTip = (bill) => {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
};

const bills = [125, 555, 44];
const tips = bills.map((bill) => calcTip(bill));
const total = bills.map((bill, index) => bill + tips[index]);

console.log("Coding Challenge #2:");
console.log("Tips:", tips);
console.log("Total:", total);

/**
 * Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
 */

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

const higherBMI = (mark, john) => {
    if (mark.bmi > john.bmi) {
        console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
    } else if (john.bmi > mark.bmi) {
        console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
    } else {
        console.log("Both have the same BMI!");
    }
};

console.log("Coding Challenge #3:");
higherBMI(mark, john);


/*
Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
*/

const bills4 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips4 = [];
const totals = [];

for (let i = 0; i < bills4.length; i++) {
    const tip = calcTip(bills4[i]);
    tips4.push(tip);
    totals.push(bills4[i] + tip);
}

const calcAverage4 = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};

console.log("Coding Challenge #4:");
console.log("Tips:", tips4);
console.log("Totals:", totals);
console.log("Average:", calcAverage4(totals));


console.log("\n\n----- Array Methods-----");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Array: ",numbers);

console.log("Coding Array #1: Filter(lọc số chẵn trong mảng)"); 
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// Hàm myFilter tự định nghĩa
function myFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}
console.log("Coding Array #1: Filter(lọc số chẵn trong mảng)");
evenNumberss = myFilter(numbers, num => num % 2 === 0);
console.log(evenNumberss); // Output: [2, 4, 6, 8, 10]



console.log("Coding Array #2: Find(số chẵn đầu tiên trong mảng)");
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven);

console.log("Coding Array #3: Some(kiểm tra trong mảng có phần tử thỏa mản điều kiện số chẵn không)");
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // Output: true

// mảng số lẻ
// let oddNumbers = [1, 3, 5, 7, 9];
// console.log("mảng số lẻ ", oddNumbers);
// let checkOdd = oddNumbers.some(num => num % 2 === 0);
// console.log(checkOdd);

console.log("Coding Array #4: Every(kiểm tra tất cả phần tử trong mảng có thỏa mãn đk số chẵn không)");
let allEven = numbers.every(num => num % 2 === 0);
console.log(allEven);

console.log("Coding Array #5: map(tạo mảng mới từ mảng cũ*2)");
const doubled = numbers.map(num => num * 2);
console.log(doubled);

console.log("Coding Array #6: forEach(duyệt qua từng phần tử trong mảng*3)");
numbers.forEach(num => console.log(num * 3)); 
