


function birthday(s, d, m) {
  //  create empty array that will be reassigned with s.splice() later on
  // create variable set to zero to tally number of matches to conditional
  // (while loop) have variable starting index set to zero
  // create variable for the ending index and set intially to m
  let segment = []
  let numberOfWays = 0;
  let startIndex = 0
  let endIndex = m
  // create variable that is assigned to sum logic for .reduce() method
  const sum = (acc, currVal) => acc + currVal

  // below are two different approaches using while or for loops
  // chose these approaches because found it most efficient way to use
  // the .splice() method which I also found most effiicient way to grab
  // segments of the array and being able to use .reduce() method 
  // to find the sum of each segment in the array

  // if sum of the segment using .reduce() is equal to argument "d"
  // tally one point to the numberOfWays variable
  // increase the endIndex by one (also startIndex in while loop)
  // so the iteration can move to the next segment until reaches last
  // index or end of the array

  // WHILE LOOP WAY
  while(endIndex <= s.length){
    segment = s.slice(startIndex, endIndex)
    if (segment.reduce(sum) === d) {
      numberOfWays++
    }
    startIndex++
    endIndex++
  }


  // FOR LOOP WAY
  // for (let i = 0; endIndex <= s.length; i++) {
  //   segment = s.slice(i, endIndex)
  //   if (segment.reduce(sum) === d) {
  //         numberOfWays++
  //       }
  //       endIndex++
  // }

  return numberOfWays
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2 ))
console.log(birthday([1,1,1,1,1,1], 3, 2 ))
console.log(birthday([4], 4, 1))