//Storing values in array
const numberList = [];
i = 0;
while (i < 100) {
  i++;
  numberList.push(i);
}
console.log(numberList);

//Iterating respectively
for (let i = 0; i < numberList.length; i++) {
  const num = numberList[i];
  if (num % 3 == 0 && num % 5 == 0) {
    console.log("FizzBuzz");
  } else if (num % 5 == 0) {
    console.log("Buzz");
  } else if (num % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log(numberList[i]);
  }
}
