//1st
let train_departures = [10, 15, 7, 20, 5];
let earliest_train = Math.min(...train_departures);
console.log("Earliest train departs at:", earliest_train);

//2nd
let seats = [1, 0, 1, 1, 0, 0, 1, 0];
let available_seats = seats.filter(seat => seat === 0).length;
console.log("Total available seats:", available_seats);

//3rd
let soldiers = [120, 300, 250, 180, 150];
let max_soldiers = Math.max(...soldiers);
console.log("Region with the highest number of soldiers:", max_soldiers);

//4th
let populations = [50, 60, 70, 80, 90];
let average_population = populations.reduce((a, b) => a + b, 0) / populations.length;
console.log("Average population:", average_population);


//5th
let water_levels = [30, 50, 20, 40, 60];
let lowest_water_level = Math.min(...water_levels);
console.log("Tank with the lowest water level:", lowest_water_level);

//6th
let days_until_festival = [30, 15, 45, 10, 25];
let closest_festival = Math.min(...days_until_festival);
console.log("Closest upcoming festival in:", closest_festival, "days");

//7th
let days_until_festival1 = [30, 15, 45, 10, 25];
let closest_festival1 = Math.min(...days_until_festival);
console.log("Closest upcoming festival in:", closest_festival, "days");

//8th
let temperatures = [75, 80, 72, 85, 90];
let high_temperature_regions = temperatures.filter(temp => temp > 80);
console.log("Regions with temperatures above 80 degrees:", high_temperature_regions);

//9th
let students_per_route = [45, 55, 30, 60, 40];
let total_buses = students_per_route.reduce((total, students) => total + Math.ceil(students / 50), 0);
console.log("Total buses required:", total_buses);

//10th
function calculateTotalExpenses(daily_expenses) {
    return daily_expenses.reduce((total, expense) => total + expense, 0);
}

let weekly_expenses = [100, 150, 200, 175, 125, 190, 210];
console.log("Total weekly expenses:", calculateTotalExpenses(weekly_expenses));

//11th
function calculateAverageGrade(grades) {
    return grades.reduce((total, grade) => total + grade, 0) / grades.length;
}

let student_grades = [85, 90, 78, 92, 88];
console.log("Average grade:", calculateAverageGrade(student_grades));

//12th
function filterAdults(ages) {
    return ages.filter(age => age >= 18);
}

let people_ages = [12, 18, 25, 17, 30, 16];
console.log("People 18 or older:", filterAdults(people_ages));

//13th
function countEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0).length;
}

let integers = [5, 12, 8, 7, 10, 14, 3];
console.log("Count of even numbers:", countEvenNumbers(integers));

