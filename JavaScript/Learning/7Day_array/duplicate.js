/*
Implement a function “duplicate” to duplicate an array, as shown below:
For input arr=[1,2] duplicate(arr) should return [1,2,1,2]

*/



function duplicate(arr) {
    // Create an empty array to store the duplicated elements
    let duplicatedArray = [];
  

    for (let i = 0; i < arr.length; i++) {
    //   duplicatedArray.push(arr[i]);
      duplicatedArray.push(arr[i]);
    }
  
    return duplicatedArray;
  }
  
  let inputArray = [1, 2];
  let result = duplicate(inputArray);
  console.log(result);
  