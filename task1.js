let num1, num2, num3, num4;
let num = 1234;
num1 = num / 10;
num2 = num1 / 10;
num3 = num2 / 10;
num4 = (num % 10) * 1000 + (num1 % 10) * 100 + (num2 % 10) * 10 + num3;

if (num == num4) {
    console.log("Palindromdur");
}
else{
    console.log("Palindrom deyil");
}

