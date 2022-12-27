function hasTargetSum(array, target) {
  // Write your algorithm here
  for(const item1 of array) {
    i = item1
    for(const item2 of array) {
      j = item2
      return i + j === target?true:false
    }
  }
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  iterate through the array
    if any pair of numbers in array equals the target number
      return true
    else
      return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
