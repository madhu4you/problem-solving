function dutch_flag_sort(balls) {
    let i = 0;
    let j = balls.length - 1;
    let pivot = 0;
    while (pivot <= j) {
        if (balls[pivot] === "R") {
            [balls[i], balls[pivot]] = [balls[pivot], balls[i]];
            i++;
            pivot++
        } else if (balls[pivot] === "G") {
            pivot++;
        } else {
            [balls[j], balls[pivot]] = [balls[pivot], balls[j]];
            j--;
        }
    }
    return balls;
}

console.log(dutch_flag_sort(["R", "B", "G"]));