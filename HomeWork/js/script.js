// створити початковий клас Abonent, де зберігатимуться ім*я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести дані
// class Abonent {
//   constructor(name, number) {
//     this.fullName = name;
//     this.phone = number;
//   }

//   set phone(number) {
//     if (!number.startsWith("+380")) {
//       if (number.startsWith("0")) {
//         this.number = "+38" + number;
//       } else {
//         this.number = "+380" + number;
//       }
//     } else {
//       this.number = number;
//     }
//   }
//     set fullName(name) {
//         this.name = name.split(" ")[0];

//   }
//   get getData() {
//     return `Name of the abonent is ${this.name} and the number is ${this.number}`;
//   }
// }
// const yana = new Abonent("Yana", "0976037392");
// console.log(yana.getData);
// const yana = new Abonent("Yana Vikhnich", "+380976037392");
// console.log(yana.getData);
// const yana = new Abonent("Yana Vikhncih", "976037392");
// console.log(yana.getData);