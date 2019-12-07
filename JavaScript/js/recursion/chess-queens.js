/** 
 * Place the "n" queens in chess board
 * Chess board size is n x n
*/
function nQueeens(N) {
    let board = new Array(N);
    return nQueeensHelper(N, board, 0);
}
function nQueeensHelper(N, board, i) {
    if(i === N) return printChessBoard(N, board);
    for (j =0; j < N; ++j) {
        if(!hasConflict(board, i, j)) {
            board[i] = j;
            nQueeensHelper(N, board, i+1);
        }
    }
}

function printChessBoard(N, board) {

}

function hasConflict(board, i, j) {
    
}