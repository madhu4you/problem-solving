/**
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [1,2,3,6,9,8,7,4,5]
 *
 * Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 */
var spiralOrder = function (matrix) {
  if (matrix.length < 0) return false;
  let result = [];
  let i = 0, j = 0, row = matrix.length, col = matrix[0].length;
  let outputLength = row * col;
  while(result.length < outputLength) {
    //Travel to right  
    while(j < col && matrix[i][j] != 'v') {
          result.push(matrix[i][j]);
          if(result.length === outputLength) return result;
          matrix[i][j] = 'v'
          j++;
      }
      j--;
      i++;
    //Travel to down
    while(i < row && matrix[i][j] != 'v') {
        result.push(matrix[i][j]);
        if(result.length === outputLength) return result;
        matrix[i][j] = 'v';
        i++;
    }
    i--;
    j--;
    //Travel left
    while(j >=0 && matrix[i][j] != 'v') {
        result.push(matrix[i][j]);
        if(result.length === outputLength) return result;
        matrix[i][j] = 'v'
        j--;
    }
    j++;
    i--;
    //Travel Up
    while(i >=0 && matrix[i][j] != 'v') {
        result.push(matrix[i][j]);
        if(result.length === outputLength) return result;
        matrix[i][j] = 'v';
        i--;
    }
    i++;
    j++;
  }
  return result;
}

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));
