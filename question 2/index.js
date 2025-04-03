// console.log("hiii")

let findingindexes = [];
let j = 0;

function removeIndexes(str1,str2){
    if (str1.length !== str2.length + 1) return [-1];
   for(let i =0;i<=str1.length-1;i++){

    if(j<str2.length && str1[i] === str2[j]){
            j++;
        }
        else{
            findingindexes.push(i);
        }
    }
    return findingindexes.length ? findingindexes : [-1];

   }



console.log(removeIndexes("abcdbba","abcdbba") )