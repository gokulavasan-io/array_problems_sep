calculateArea(5);
greetUser("John");
function calculateArea(radius) {
  const PI = 3.14;
  area =Math.floor( Math.PI * radius * radius);
 console.log(area);
}
function greetUser(userName) {
 console.log(userName);
}
//2nd sum
let count = 1;
let num=10;
while (count <= num) {
 console.log("Counting down: " + count);
 count++;
}
//3rd sum
let temperature = 30;
if (temperature === 20) {
  console.log("It's cold outside.");
 } else {
  console.log("It's warm outside.");
 }
 //4th sum
checkNumber(-5);
checkNumber(0);
checkNumber(10, 20);
function checkNumber(num) {
  if (num > 0) {
    console.log("Positive"); // Fix the output for positive numbers
  }
  else if (num < 0) {
    console.log("Negative"); // Fix the output for negative numbers
  }
  else {
    console.log("Zero"); // Keep the output for zero as is
  }
}
//5th sum
function sumNumbers(n){
  let i=1;
  let sum=0;
  while(i<=n){
    sum+=i;
    i++;
  }
  return sum;
}
console.log(sumNumbers(5));

//6th
function factorial(n) {
    let i=n;
    let fact=1;
    while (i>0) {
        fact*=i;
        i--;    
    }
    return fact;
}
console.log(factorial(5));


//7th
function even_num(n) {
    for (let i = 1; i <=n; i++) {
       if (i%2==0) {
        console.log(i);
        }
    }
}
even_num(55);

//8th
function sumNumbers(n) {
    let sum = 0;
    let i = 0;  
    while (i <=n) {
      sum += i;
      i++;
    }
    return sum;
}
console.log(sumNumbers(10));


//9th
function classifyNumber(num) {
    if (num%3==0 && num%5==0) {
        console.log("Divisible by both 3 and 5");
    }
    else if (num%3==0) {
        console.log("Divisible by 5");
    }
    else if (num%5==0) {
        console.log("Divisible by 5");
    }
   else {
        console.log("Not Divisible by both 3 and 5");
    }
}
classifyNumber(15);

// 10th
function getDayName(num) {
    switch (num) {
        case 1:
            return "sunday";
            break;
        case 2:
            return "monday";
            break;
        case 3:
            return "tuesday";
            break;
        case 4:
            return "wednesday";
            break;
        case 5:
            return "thursday";
            break;
        case 6:
            return "friday";
            break;
        case 7:
            return "saturday";
            break;
        default:
            return "Enter a valid number"
            break;
    }
}
console.log(getDayName(5));

//11th
function printMultiplicationTable(n,table) {
    for (let i = n; i >0; i--) {
        console.log(`${i} * ${table} = `+i*table);
    }
}
printMultiplicationTable(6,5);

//12th
function labs(num) {
    let i=num;
    while (i>=0) {
        console.log(`${i} labs completed...`);
        i--;
    }
}
labs(10);


//13th
function robot_battery(battery) {
    while (battery > 20) {
      console.log(`Battery level: ${battery}%`);
      battery -= 5;
    }
    console.log("Battery is low.");
  }
  robot_battery(50);

//14th
let x_position = 0;
let y_position = 0;
function direction_for_robot(direction) {
  switch (direction) {
    case "North":
      y_position += 1;
      break;
    case "South":
      y_position -= 1;
      break;
    case "East":
      x_position += 1;
      break;
    case "West":
      x_position -= 1;
      break;
  }
  console.log(
    `The robot moved "${direction}" and the new position is "(${x_position}, ${y_position})"`
  );
}
direction_for_robot("North");

//15th
function airplane_arrival(altitude, reduce_rate) {
    for (let i = altitude; i >= 0; i -= reduce_rate) {
      if (i == 0) {
        console.log("Flight arrived");
      } else {
        console.log(`Current altitude : ${i}ft`);
      }
    }
  }
  airplane_arrival(1000, 10);

//16th
function flight_runway(destination) {
    switch (destination) {
      case "place1":
        console.log(`Flight to "${destination}" is on the runway 1.`);
        break;
      case "place2":
        console.log(`Flight to "${destination}" is on the runway 2.`);
        break;
      case "place3":
        console.log(`Flight to "${destination}" is on the runway 3.`);
        break;
      case "place4":
        console.log(`Flight to "${destination}" is on the runway 4.`);
        break;
      case "place5":
        console.log(`Flight to "${destination}" is on the runway 5.`);
        break;
    }
  }
  
  flight_runway("place4");

//17th
function airplane_altitude(altitude,interval) {
    for (let i = 0; i <=altitude; i+=interval) {
        console.log(`Now the flight is at ${i}ft`);
    }

}
airplane_altitude(1000,10);

//18th

