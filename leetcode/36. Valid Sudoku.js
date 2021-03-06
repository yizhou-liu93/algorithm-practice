/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let rows={}, cols={}, boxes={};
  for (let i = 0; i< 9 ; i++){
    for (let j = 0; j<9; j++){
      let num = board[i][j];
      if(num!=='.'){
        let boxIndex = parseInt((i / 3)) * 3 + parseInt(j / 3);
         if(rows[i+''+num]===true||cols[j+''+num]===true||boxes[boxIndex+''+num]===true){
           return false;
         }else{
           rows[i + '' + num] = true;
           cols[j + '' + num] = true;
           boxes[boxIndex + '' + num] = true;
         }
      }
    }
  }
  return true;
};
/*
Time: O(n)
Space: O(n)
*/
// @lc code=end
