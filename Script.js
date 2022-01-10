// Math.random()
//0-1
//
// console.log(Math.floor(Math.random()*10)+1)
// let arr = ["Shirin","Akylai","Dastan"]
// const index = Math.floor(Math.random()* arr.length)
// console.log(arr[index])
//
//
// let str = "variable"
// let str2 = " is not variable "
// let str3 = "       Shirin"
//
// console.log(str.startsWith("variable"))
// console.log(str.endsWith("variable"))
// console.log(str.includes("a"))
// console.log(str.indexOf("f"))
// console.log(str.lastIndexOf("a"))
// console.log(str.concat(str2))
// console.log(str + str2)
// console.log(str3.length)
// console.log(str3.trim().length)
//
// let name = "Shirin"
// let message = `hello  ${name} your age is ${10*5}`
// console.log(message)
// console.log("5" + 12)
// console.log("5" - 12)
// console.log("5" * 12)
// console.log("5" % 12)
//
// console.log("fjedfjed" * 35)
// console.log(true + 5)
// console.log(false + 5)
// ДОМАШНЯЯ РАБОТА
// №1

// let str = "Привет , Мир!"
// console.log(str)
// // №2
// let str1 = "Привет,"
// let str2 = " Мир!"
// console.log(str1.concat(str2))
// // №3
// let name = "Shirin!"
// let a =`Привет,${name}`
// console.log(a)
// // №4
// let age = "19"
// let b =`Мне ${age} лет!`
// console.log(b)
// // №5
// let x = "365"
// let y = "Земля"
// let u = "Солнце."
// let o = "7 млрд."
// let s = `В нашем году ${x} дней.Днем у нас светит ${u} Население планеты${y} составляет примерно ${o} человек.`
// console.log(s)
// // typeof №1
// let f = 50
// console.log(typeof f)
// // №2
// let  q = 10
// let w = 35
// let r = String(q+w)
// console.log(r)
//
// // №3
// let d = String(10)
// console.log(d)
//
// let t = 18
// if (t => 18){
//     console.log("уруксат")
// }
// else if (t => 50){
//     console.log(`болбойт!`)
// }
// else{
//     console.log("уруксат эмес")}

//
// let class1 =2000
// if (class1 <=4){
//     console.log(`младший`)
// }
// else if (class1 <=9 && class1 >=5){
//     console.log(`средний`)
// }
//  else if (class1 <= 11 && class1 >=9){
//     console.log(`старший`)
// }
//  else if (class1 > 11 && class1 <= 30){
//     console.log(`студент`)
// }
//  else {
//     console.log(`бар укта`)
// }




//ДОМАШНЯЯ РАБОТА

// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
let  h = 10
if ( h === 10){
    console.log(`Верно`)
}
else {
    console.log(`Неверно`)
}

// 2. Вам даны две переменные a=50, b=100. Составьте условие, по которому в консоль будет выводиться 'a больше b', 'a меньше b'.
let g = 500
let m = 100

if (g>m){
    console.log(`g больше m`)
}
else if (g<m){
    console.log(`g меньше m`)
}
else{
    console.log(`они равны`)
}

// 3. Вам дана переменная a=-2. Составьте условие, по которому в консоль будет выводиться 'positive' - если число больше 0, 'равно' если число равно 0, "negative" если число меньше 0.
let l = 2
if (l >0){
    console.log(`positive`)
}
else if (l === 0){
    console.log(`равно`)
}
else if (l <0 ){
    console.log(`negative`)
}
// 4. Вам дана переменная number=45. Составьте условие, по которому будет выводиться в консоль "Четное число", "Нечетное число".
let number = 9
if (number %2 === 0){
    console.log(`Нечетное число`)
}
else {
    console.log(`четное число`)
}
// 5. Вам даны две переменные a=10, b=2. Составьте условие, по которому, остаток деления a на b, будет выводиться консоль "Четное число", "Нечетное число".
let v = 10
let p = 2

if ((v%p) % 2 ===0){
    console.log(`Нечетное число`)
}
else {
    console.log(`Четное число`)
}
console.log(1/0)

// 6. Вам дана переменная s. Составьте условие, по которому в консоль будет выводится тип этой переменной - "boolean", "number", "string".
// let z ="boolean"
// if (typeof z==="boolean"){
//     console.log(typeof z)
// }
// else if (typeof z==="number"){
//     console.log(typeof z)
// }
// else {
//     console.log(typeof z)
// }




// 7. Вам дана переменная а. Если переменная a больше одного и меньше 9-ти, то выведите 'Верно', иначе выведите 'Неверно'.
let c = 0
if (c > 1 && c <9){
    console.log(`Верно`)
}
else{
    console.log(`Неверно`)
}
// 8. Вам дана переменная а. Если переменная a равна трем или равна семи, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной в консоль.
let a = 6
if (a === 3 || a ===7){
    console.log(a + 7)
}
else{
    console.log(a / 10)
}

// 9. Вам даны переменные а , b. Если переменная a равна или меньше 0, а переменная b больше или равна 5, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания).
let q = 0
let o = 5
if (q <= 0 && o >= 5){
    console.log(q+o)
}
else {
    console.log(q-o)
}
// 10. Вам даны переменные a , b. Если переменная a больше 4-х и меньше 10-ти, или переменная b больше или равна 7-ми и меньше 17-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
let r = 5
let i = 10
if (r > 4 && r < 10 || i>=7 && i<17){
    console.log(`Верно`)
}
else {
    console.log(`Неверно`)}
// 11. Вам дана переменная month. В ней лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
 let month = 0
if(month> 0){

    if ( month >= 3 && month <=5){
        console.log(`жаз`)
    }
    else if (month >=6 && month <=8){
        console.log(`жай`)
    }
    else if (month >=9 && month <=11){
        console.log(`kuz`)
    }

    }
    else if (month === 12 || (month >= 1 && month < 3)){
        console.log(`кыш`)
    }

 else {
    console.log(`нет такого сезона`)
}
// 12. Вам дана переменная day. В ней лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
let day =280
if (day >=1 && day<11){
    console.log(`Первая декада`)
}
    else if (day >=11 && day < 21){
    console.log(`Вторая декада`)
}
    else if (day >=21 && day <=31){
    console.log(`Третья декада`)
}
    else {
    console.log(`Нет такого дня`)
}
// 13. Вам дана переменная a='12345'. Проверьте, что первым символом этой переменной является цифра 1, 2 или 3. Если это так – выведите ‘да’, в противном случае выведите ‘нет’.
let t = `12345`
if (t.startsWith(`123`)){
    console.log(`да`)
}
else {
    console.log(`нет`)
}
// number()
// +
// parseInt()

// string
//""
//toString()
// String

let x = 10
console.log(x +"")
console.log(x.toString())
console.log(String(x))

//1 string
//2 number
//3 boolean
//4 symbol
//5 null
//6 undefined
//7 bigInt


//complex, referral type, ссылочный тип
//ДОМАШНЯЯ РАБОТА
// №1
let str = "Nevis ITDB TECH"
console.log(str.substring)
 // №2
 // №3
 // №4
 // №5
 // №6
 // №7
 // №8
 // №9
 // №10
 // №11
 // №13
 // №14
 // №15
let e ="17-02-2021"
e = "31-12-2025"
 //replace()
console.log(e.replace("-","/"))
console.log(e.replace(/-/g,"/"))
 // №16



 // №18
let result = "максимально "
if (result.indexOf("л") > result / 2){
    console.log(2)
}
else {
    console.log((1))
}

 // №18

// 1. Вам дана переменная str = 'Nevis ITDB TECH'. Выведите в консоль длину первого слова.

// 2. Вам дана переменная str = 'Макс имально УЖАСНО'. Выведите в консоль слово УЖАСНО, только нижним регистром.

// 3. Вам дана переменная str = 'максимально УЖАСНО'. Выведите в консоль слово максимально, только верхним регистром.
let string = `Максимально ужасно`
console.log(string.substr(0, 11) .toUpperCase())
console.log(string.substring(0, 11) .toUpperCase())
console.log(string.slice(0, 11) .toUpperCase())
// 4. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль каждый символ этой строки, используя метод split. Пример : [ 'C','o','d','i','n','g',' ','i','s',' ','t','h','e',' ', 'L','O','V','E',' ','o','f',' ','m','y',' ','L','I','F','E','!' ]
let str4 = 'Максимально Ужасно'
let arr = str4.split(" ")
console.log(arr)
// 5. Вам дана переменная str = 'Максимально Ужасно, переделывай'. Выведите в консоль все слова этой строки, используя метод split. Пример: [ 'Максимально' 'ужасно', 'переделывай'. ]
// 6. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль 'мально Ужасно', используя метод slice.
// 7. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль букву У, использую метод charAt.
// 8. Вам даны переменные str = 'Максимально', str2 = 'Ужасно'. Выведите в консоль соединенные строки, используя метод concat.

// 9. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс слова 'Ужасно'.
// 10. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль "встречается более 1 раза", если букв 'a' встречается более 1 раза, иначе "встречается менее одного раза"
// 11. Вам дана переменная str = 'макСИМАЛЬНО ужаСНО'. Выведите в консоль первую букву каждого слова строки в верхний регистр.
// let str1 = 'макСИМАЛЬНО ужаСНО'
// // console.log(str1[0].toUpperCase() + str1.substr(1,8).toLowerCase() + "" + .str1[12].toUpperCase() + str1.slice(13,17).toLowerCase()
//
//
//
// // 12. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого вхождения буквы а.
//
// // 13. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого последнего буквы о.
//
// // 14. Вам дана переменная str = 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice) и выведите в консоль.
// let str3 = "aaa bbb ccc"
// console.log(str3.substr(4,3))
// console.log(str3.slice(4,7))
// console.log(str3.substring(4,7))
//
// // 15. Вам дана переменная str = '17-02-2021'. Преобразуйте эту дату в формат '31/12/2025' и выведите в консоль.
// // 16. Вам дана переменная str = 'Максимально Ужасно'. Проверьте, есть ли буква "в" в данной строке, если да, то выведите "Да", иначе - "нет".
// // 17. Вам дана переменная str = 'АаааааА'. Проверьте, если первая буква в строке совпадает с последней, если да, то выведите в консоль "Совпадает", иначе - "Не совпадает".
// // 18. Вам дана переменная str = 'Максимально'. Проверьте, если буква л, встречается в первой половине строки, или последней. Если в первой, то выведите в консоль - "В первой половине", иначе - "Во второй половине".
//
//
// //FUNCTIONS
// function sum(a,b){
//     return a + b
// }
//
// console.log(sum(10,30))
//
// //1
// function sum1(a,b){
//     return a-b
// }
//
// console.log(sum1(12, 6))
//
// function sum2(a,b){
//     return a/b
// }
//
// console.log(sum2(12, 6))
//
// function sum3(a,b){
//     return a*b
// }
//
// console.log(sum3(12, 6))
//
// function sum4(a,b){
//
//     return a**b
// }
//
// console.log(sum4(12, 6))
//
// function sum5(a,b){
//     return a%b
// }
//
// console.log(sum5(12, 5))
//
// function even_or_odd(number) {
// if (number % 2 === 0){
//     return "Even"
// }else{
//     return "Odd"
// }
// }
//
// console.log(even_or_odd(9))