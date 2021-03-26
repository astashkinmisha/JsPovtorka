// --створити масив та вивести його в консоль:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу

// let arr1 = [3, 4, 6, 7, 9];
// console.log(arr1);
//
// let arr2 = ['a', 'b', 'c', 'd', 'e' ];
// console.log(arr2);
//
// let arr3 = ['a', 2, true, 'same', 0];
// console.log(arr3);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr = [];
// arr.push(1, 'string', 'boolean', 24, true)
//
// console.log(arr[2]);

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write('<div>12345</div>');
//
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write('<div>', 'itaration', +i ,'</div>')
//
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
//
// while (i < 20, i++) {
//     document.write('<h1>', 'iteration','</h1>>')
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = [1,2,3,4,5,6,7,8,9,0];
//
// for(i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 't', 'r', 'e'];
//
// for (let  strings of arr) {
//     console.log(strings);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arr = [true, 'abcd', 10, 'hey', false, null, 'boolean', true];
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

//let arr = [true, 'abcd', 10, 'hey', false, null, 'boolean', true, 24, '25', false];
//
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'boolean'){
//         console.log(arr[i]);
//     }
//
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arr = [true, 'abcd', 10, 'hey', false, null, 'boolean', true, 24, '25', false];
//
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'number'){
//         console.log(arr[i]);
//     }
//
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arr = [true, 'abcd', 10, 'hey', false, null, 'boolean', true, 24, '25', false];
//
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string'){
//         console.log(arr[i]);
//     }
//
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arr = [];
//
// arr.push(10, '24', true, 'boolean', 'heyehye', 45, null, false, 'integer', 24);
//
// console.log(arr);

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(i);
//
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(i);
//
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i=i+2) {
//     console.log(i);
//     document.write(i);
//
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     console.log(i++);
//     document.write(i++);
//
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 1; i < 100; i=i+2) {
//     console.log(i);
//     document.write(i);
// }



// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// for (let i = 0; i < 59; i++){
//     console.log(i);
// for(let i = 0; i < 59; i++){
//     console.log(i);
// }
// }
// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
//

// тут шота пашло не так

// for (i = 0; i < 2; i++){
//     console.log(i);
// for(i2 = 0; i2 < 59; i++){
//     console.log(i2);
//     for(i3 = 0; i3 < 59; i++){
//         console.log(i3);
//     }
// }
//}

