// Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1. Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.


function getResult (num) {
  if (num > 1000) {
    console.log ("Данные неверны, нужно число до 1000");
  } else if (num === 0) {
    console.log ("Число не простое"); 
  } else if (num === 1) {
    console.log ("Число не простое");   
  } else if (num === 2) {
    console.log ("Число простое"); 
    
  } else if (num > 2) {
    for (let i=2; i < num; i++){
      if (num % i == 0){
        console.log ("Число не простое")
        break;
      } else {
        console.log ("Число простое")
        break;
      }
    }
  }
};

  getResult (3);


