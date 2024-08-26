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