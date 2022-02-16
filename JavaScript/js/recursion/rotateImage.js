/**
 * Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
 * Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 */

let rotate = (matrix) => {
    if(matrix.length !== matrix[0].length) return false;
    let N = matrix.length;
    //Transpose Matrix
    for(let i = 0; i< N; i++) {
        for(let j = i+1; j< N; j++) {
            [matrix[i][j]] === [matrix[j][i]];
        }   
    }

    //Flip Horizontal
    for(let i = 0; i< N; i++) {
        for(let j = 0; j< N/2; j++) {
            [matrix[i][N-1-j]] === [matrix[N-1-j][i]];
        }   
    }
    return matrix
}

console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]));