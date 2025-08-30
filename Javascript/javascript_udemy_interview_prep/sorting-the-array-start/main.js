// Sort the array of numbers
// Sort array of objects by author's lastname

/*
The sort() method, when called without any arguments, sorts the array elements as strings in ascending lexicographical (dictionary) order.
so,onlystrings array sorting works fine with .sort() alone
 This means that numbers will be converted to strings and then compared, which can lead to unexpected results for numerical arrays
  (e.g., [1, 10, 2] would sort as [1, 10, 2] because '10' comes before '2' alphabetically).
  so use compare function in sort for numericasl/custom sorting
*/


//sort numbers
const nums=[5,9,10,2,8,40];
nums.sort((a,b)=> a-b) //for a-b<0=> a comes before b //ascending order ; sort mutates original array
console.log(nums); //[ 2, 5, 8, 9, 10, 40 ] 


//sort objects based on author last name
const books = [
  { name: "Harry Potter", author: "Joanne Rowling" },
  { name: "Warcross", author: "Marie Lu" },
  { name: "The Hunger Games", author: "Suzanne Collins" },
];

//You can’t use [-1] in JS arrays. If you want the last item after split, use either
//arr[arr.length - 1] or arr.at(-1).
books.sort((book1,book2)=> {
    const name1=book1.author.split(" ")[1];
    const name2=book2.author.split(" ")[1];
    return name1<name2 ? -1 : 1 //ascending must use -1,1 as we dealing with strings not numbers here
});
console.log(books);
/*
o/p:
[
  { name: 'The Hunger Games', author: 'Suzanne Collins' },
  { name: 'Warcross', author: 'Marie Lu' },
  { name: 'Harry Potter', author: 'Joanne Rowling' }
]
  */

