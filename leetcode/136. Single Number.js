var singleNumber = function (nums) {
  let map = {};

  for (let num of nums) {
    if (map[num]) delete map[num];
    else map[num] = 1;
  }
  return Object.keys(map)[0];

};

let arr = [1,1,2,2,3,4,3]
console.log(singleNumber(arr))
/*
hashtable
Time: O(n)
Space: O(n)
 */

// var singleNumber = function (nums) {
//   let single = 0;
//   for (let num of nums) {
//     single ^= num;
//   }
//   return single;
// };

/*
XOR
Time: O(n)
Space: 1
 */
