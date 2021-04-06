// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості -назва тегу - опис його дій- масив з атрибутами (2-3 атрибути максимум) Кожен атрибут описати як окремий який буде містити
// -назву атрибуту -опис дії атрибуту інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

// function tag(titleOfTag, action, attrs = [{titleOfAttr:' '}, {actionOfAttr:' '},{titleOfAtt2r:' '}, {actionOfAttr2:' '}]){
// this.titleOfTag = titleOfTag;
// this.action = action;
// this.attrs = attrs;
// }
//
// let a = new tag('Тег <a>', 'тег <a> устанавливает ссылку или якорь',
//     [{titleOfAttr:'access key'}, {actionOfAttr:'----'}]);
// console.log(a);
//
// let div = new tag('Тег <div>', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
//     [{titleOfAttr:'align'}, {actionOfAttr:'Задает выравнивание содержимого тега <div>'}, {titleOfAttr2:'title'}, {actionOfAttr2:'Добавляет всплывающую подсказку к содержимому.' }])
// console.log(div);
//
// let h1 = new tag('TAG <H1>', 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.', [{titleOfAttr:'align'}, {actionOfAttr:'Определяет выравнивание заголовка.'}])
// console.log(h1);
//
// let span = new tag('tag <span>', 'Тег <span> предназначен для определения строчных элементов документа.', [{titleOfAttr:'nope'}, {actionOfAttr: 'Для этого тега доступны универсальные атрибуты и события.'}])
// console.log(span);
//
//
// let input = new tag('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
//     [{titleOfAttr:'accept'}, {actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},{titleOfAttr2: 'accesskey'}, {actionOfAttr2:'Переход к элементу с помощью комбинации клавиш.'}])
// console.log(input);
//
// let form = new tag('form', 'Связывает поле с формой по её идентификатору.', [{titleOfAttr: 'nope'}, {actionOfAttr: 'nope'}])
// console.log(form);
//
// let option = new tag('option', 'Тег <option> определяет отдельные пункты списка,', [{titleOfAttr:'disabled'},{actionOfattr:'Заблокировать для доступа элемент списка.'}] )
// console.log(option);
//
// let select  = new tag('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка',
//     [{titleOfAttr: 'autofocus'}, {actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'}])
// console.log(select);


// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car



// let Car = {
//     model: 'volvo',
//     producer: 'scandinavia',
//     yearOfProd: '2021',
//     maxSpeed: '340 kmph',
//     volume: 5.0,
//     drive: function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину `)
//     },
//     info: function (){
//         console.log(`model:${this.model}, Speed:${this.maxSpeed}, Producer:${this.producer}, Year:${this.yearOfProd}, Volume: ${this.volume}`)
//     },
//     increaseMaxSpeed: function (newspeed){
//          this.maxSpeed = newspeed
//         console.log(this.maxSpeed);
//     },
//     changeYear: function (newYear){
//         this.yearOfProd = newYear
//         console.log(newYear);
//     },
//     addDriver: function (newDriver){
//         let driver = {
//             name: 'Vasya',
//             age: 23,
//             license: true
//         }
//         this.driver = driver;
//         console.log(driver);
//         console.log(Car);
//     }
//
// }
// Car.drive()
// Car.info()
// Car.increaseMaxSpeed(350)
// Car.changeYear(2012)
// Car.addDriver()

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// function Car1(model, producer, yearOfProd, maxSpeed, volume){
//     this.model = model;
//     this.producer = producer;
//     this.yearOfProd = yearOfProd;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
// }
//
// let teslaCar = new Car1('X', 'Tesla', 2020, 330, 0);
//
// teslaCar.drive = function (){
//     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину `)
// }
// teslaCar.info = function (){
//     console.log(`model:${this.model}, Speed:${this.maxSpeed}, Producer:${this.producer}, Year:${this.yearOfProd}, Volume: ${this.volume}`)
// }
// teslaCar.increaseMaxSpeed = function (newSpeed){
//     this.maxSpeed = newSpeed;
//     console.log(newSpeed)
// }
// teslaCar.newYear = function (newYeadOfProd){
//     this.yearOfProd = newYeadOfProd;
//     console.log(newYeadOfProd)
// }
// teslaCar.addDriver = function (add){

//     this.driver = driver;
//     console.log(driver);
//     console.log(teslaCar);
// }
// teslaCar.drive()
// teslaCar.info()
// teslaCar.increaseMaxSpeed(440);
// teslaCar.newYear(2012);
// teslaCar.addDriver({name: 'Vasya', age: 23, license: true'})
//


// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car




// class Car {
//     constructor(model, producer, yearOfProd, maxSpeed, volume) {
//         this.model = model;
//         this.producer = producer;
//         this.yearOfProd = yearOfProd;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//     }
//
// drive(){
//        console.log('Їхали зі швидкістю', ''+ this.maxSpeed, 'на годину');
// }
// info(){
//    console.log(this.model, this.producer, this.yearOfProd, this.maxSpeed, this.volume);
// }
// increaseMaxSpeed (newSpeed){
//        this.maxSpeed += newSpeed;
//    console.log(this.maxSpeed);
// }
//
// changeYear (newValue){
//        this.yearOfProd = newValue;
//    console.log(this.yearOfProd);
// }
// addDriver (driver){
//        this.driver = driver;
//    console.log(this.driver);
// }
//
//
// }
//
// let Car1 = new Car('x', 'tesla', 2020,220, 0);
// console.log(Car1);
//
// Car1.drive();
// Car1.info();
// Car1.increaseMaxSpeed(30);
// Car1.changeYear(2019);
// Car1.addDriver({name: 'Ihor', age: 44});

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Popelushka {
//     constructor(name, age, sizeOfShoe) {
//         this.name = name;
//         this.age = age;
//         this.sizeOfShoe = sizeOfShoe;
//     }
// }
//
// let PopelushkaOne  = new Popelushka('Vika', 23, 36);
// let PopelushkaTwo  = new Popelushka('Karina', 23, 34);
// let PopelushkaThree = new Popelushka('Vasilina', 23, 39);
// let PopelushkaFour  = new Popelushka('Natalya', 23, 40);
// let PopelushkaFive  = new Popelushka('Katya', 23, 37);
// let PopelushkaSix  = new Popelushka('Sabina', 23, 38);
// let PopelushkaSeven  = new Popelushka('Romana', 23, 39);
// let PopelushkaEight  = new Popelushka('Valeriia', 23, 41);
// let PopelushkaNine  = new Popelushka('Laura', 23, 35);
// let PopelushkaTen  = new Popelushka('Tanya', 23, 41);
//
// let PopArr = [];
// PopArr.push(PopelushkaOne, PopelushkaEight, PopelushkaFive, PopelushkaFour, PopelushkaNine, PopelushkaSeven, PopelushkaSix, PopelushkaTen, PopelushkaThree,PopelushkaTwo)
//
//
// class Prince extends Popelushka{
// constructor(name, age, sizeOfShoe, foundShoe) {
//     super();
//     this.name  = name;
//     this.age = age;
//     this.sizeOfShoe = sizeOfShoe;
//     this.foundShoe = foundShoe;
//
// }
// }
// let PrinceOnly = new Prince('Vasya', 22, 38, 38);
// for (let i = 0; i < PopArr.length; i++) {
//     if(PrinceOnly.foundShoe === PopArr[i].sizeOfShoe){
//         console.log([i]);
//     }
//
// }
