/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
*/

// 1. Store Mark's and John's mass and height in variables
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

function calculateBMI(mass, height) {
    return mass / height ** 2;
}

// 2. Calculate both their BMIs using the formula (you can even implement both versions)
let markBMI = calculateBMI(markMass, markHeight);
let johnBMI = calculateBMI(johnMass, johnHeight);

// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
let markHigherBMI = markBMI > johnBMI;
if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
}

// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

markBMI = calculateBMI(markMass, markHeight)
johnBMI = calculateBMI(johnMass, johnHeight)

markHigherBMI = markBMI > johnBMI;
if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
}

/*
Use the BMI example from Challenge #1, and the code you already wrote, andimprove it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 
*/

if (markHigherBMI) {
    console.log(`Mark's BMI is higher than John's BMI `);
} else {
    console.log(`John's BMI is higher than Mark's BMI `);
}

if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI.toFixed(2)}) is higher than John's (${johnBMI.toFixed(2)})`);
} else {
    console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Mark's (${markBMI.toFixed(2)})`);
}

// funtion to calculate BMI and print the result.
function compareBMI(markBMI, johnBMI) {

    let markHigherBMI = markBMI > johnBMI;
    if (markHigherBMI) {
        console.log(`Mark's BMI (${markBMI.toFixed(2)}) is higher than John's (${johnBMI.toFixed(2)})`);
    } else {
        console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Mark's (${markBMI.toFixed(2)})`);
    }
}

compareBMI(markBMI, johnBMI);

/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

//data 1
let dolphinsScore = [96, 108, 89];
let koalasScore = [88, 91, 110];

function calculateAverageScore(scores) {
    return scores.reduce((a, b) => a + b, 0) / scores.length;
}

function MatchResult(dolphinsScore, koalasScore) {
    let dolphinsAverageScore = calculateAverageScore(dolphinsScore);
    let koalasAverageScore = calculateAverageScore(koalasScore);

    if (dolphinsAverageScore > koalasAverageScore) {
        console.log(`Dolphins win with an average score of ${dolphinsAverageScore.toFixed(2)}`);
    } else if (dolphinsAverageScore < koalasAverageScore) {
        console.log(`Koalas win with an average score of ${koalasAverageScore.toFixed(2)}`);
    } else {
        console.log(`It's a draw with an average score of ${dolphinsAverageScore.toFixed(2)}`);
    }
}

MatchResult(dolphinsScore, koalasScore);

//data Bonus 1
dolphinsScore = [97, 112, 101];
koalasScore = [109, 95, 123];

MatchResult(dolphinsScore, koalasScore);

//data Bonus 2
dolphinsScore = [97, 112, 101];
koalasScore = [109, 95, 106];

MatchResult(dolphinsScore, koalasScore);