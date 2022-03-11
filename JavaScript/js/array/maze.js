/**
 * 2d array of 0,1,6 representing a maze that your character can walk through
 * 0 - represents empty space, the character can walk over empty space
 * 1 - represents a wall, the character cannot walk over a wall
 * 6 - represents a monster, the character can walk over a monster if you choose to but it will lose a life
 * a character that starts at position si, sj and tries to walk to ei, ej
 * the character has N lives so it can walk over N-1 monsters
 * the character is allowed to walk on the 4 neighboring cells (up, down, left, right)
 * return the shortest number of steps, -1 if impossible
 * example grid
 * g = [
 * [0,1,0,0,0],
 * [0,6,0,1,0],
 * [0,0,0,1,0]
 * ]
 * travel from 0,0 to 2,4
 * 1 life : shortest number of steps = 10
 * 2 lives : shortest number of steps = 8
 */

function maze(grid, start, end, lives) {
     
}

let grid = [[0,1,0,0,0], [0,6,0,1,0], [0,0,0,1,0]];
let s = [0, 0];
let e = [2, 4];
let lives = 2;
console.log(maze(grid, s, e, lives));