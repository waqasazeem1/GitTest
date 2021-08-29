// console.log("Heloo...");

// 1. Write a js program to find length of a string.

// let arr = [2, 4, 7, 3, 8, 9];
// console.log(`Array length => ${arr.length}`);

// .............................................

//2: Write a js program to copy one string to another string.

// let name = "Waqas Azeem";
// let newNAme = name.replace("Azeem", "Ali");
// console.log(newNAme);

// or

// let text = "I love Pakistan!";
// let textRegex = "We";
// text.replace("I", textRegex);
// console.log(text.replace("I", textRegex));

// ..................................................

// 3: Write a js program to concatenate two strings.

// let str1 = "Pakistan";
// let str2 = "Zindabad";
// console.log(str1 + " " + str2);

// or

// console.log(str1.concat(" " + str2));

// ................................................

// 4: Write a js program to compare two strings.

// let s1 = "java";
// let s2 = "java";
// console.log(s1 === "java");
// console.log(s1 === s2);

// // or
// console.log(s1.localeCompare(s2)); // if false it return -1, if true it return 0

// .............................................

// 5: Write a js program to convert lowercase string to uppercase.

// let str = "waqas azeem";
// console.log(str.toUpperCase());

//  or

// console.log(str.charAt(0).toUpperCase() + str.slice(1));

// ......................................................

// 6: Write a js program to convert uppercase string to lowercase.

// let strr = "PAKISTAN ZINDABAD";
// console.log(strr.toLowerCase());

// .............................................

// 7: Write a js program to toggle case of each character of a string.

// let str = "JHot Mat BOOL!";

// // let newStr = [...str];   //or

// let newStr = str.split("");
// console.log(newStr);

// for (let i = 0; i < newStr.length; i++) {
//   newStr[i] =
//     newStr[i] === newStr[i].toUpperCase()
//       ? newStr[i].toLowerCase()
//       : newStr[i].toUpperCase();
// }
// console.log(newStr.join(""));

// ...............................................

// 8: Write a js program to find total number of alphabets, digits or special character in a string.

// var str = "mvknk4n5knnm$!#";
// str = str.split("");
// console.log(str);
// let alphabets = [];
// let digits = [];
// let special_character = [];

// for (let i = 0; i < str.length; i++) {
//   if ((str[i] >= "A" && str[i] <= "Z") || (str[i] >= "a" && str[i] <= "z")) {
//     alphabets++;
//   } else if (str[i] >= "0" && str[i] <= "9") {
//     digits++;
//   } else {
//     special_character++;
//   }
// }

// console.log(`total number of alphabets => ${alphabets}`);
// console.log(`digits => ${digits}`);
// console.log(`special_character => ${special_character}`);

// .......................................................
//9:  Write a js program to count total number of vowels and consonants in a string.

// let string = "ncjwdbcsdjiiEIAI";
// let vowels = /[aeiou]/gi;
// // console.log(string.match(vowels));
// let countVowels = string.match(vowels).length;
// console.log(countVowels);
// let consonant = string.length - countVowels;
// console.log(consonant);

// .....................................................

// 10. Write a js program to count total number of words in a string.

// let str = "I love a pakistan          Pakiatan zindabad ";
// let words = str.match(/(\w+)/g).length;
// console.log(words);

// ......................................................

// 11: Write a js program to find reverse of a string.
