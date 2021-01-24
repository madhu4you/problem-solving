/** 
 * Place the "n" queens in chess board
 * Chess board size is n x n
 */
function nQueeens(n) {
    let result = [];
    nQueeensHelper([], 0);
    return result;

    function nQueeensHelper(positions, row) {
        if (row === n) {
            printChessBoard(positions);
            return true;
        }
        let isValid = false;
        for (let col = 0; col < n; ++col) {
            if (!isQPositionValid(positions, row, col)) {
                positions.push({
                    row: row,
                    col: col
                });
                isValid = nQueeensHelper(positions, row + 1);
                positions.pop();
            }
        }
        return isValid ? true : false;
    }

    function printChessBoard(positions) {
        let board = new Array(n);
        for (let i = 0; i < positions.length; ++i) {
            let str = new Array(n).fill("-");
            let currQ = positions[i];
            str[currQ.col] = "q";
            str = str.join("");
            board[currQ.row] = str;
        }
        result.push(board);
    }

    function isQPositionValid(positions, row, col) {
        for (let i = 0; i < positions.length; ++i) {
            let currQ = positions[i];
            if(currQ.row === row || currQ.col === col) return false;
            if(currQ.row + currQ.col === row + col) return false;
            if(currQ.row - currQ.col === row - col) return false;
        }
        return true;
    }
}