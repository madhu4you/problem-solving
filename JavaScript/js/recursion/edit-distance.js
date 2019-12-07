function editDistance(str1, str2) {
    return editHelper(str1, str2, 0, 0);
}

function editHelper(str1, str2, i, j) {
    if(i === str1.length) return str2.length - j;
    if(j === str2.length) return str1.length - i;
    if(str1[i] === str2[j]) return editHelper(str1, str2, i + 1, j + 1);
    else 
    return Math.min(
        editHelper(str1, str2, i+1, j),
        editHelper(str1, str2, i+1, j+1),
        editHelper(str1, str2, i, j+1),
    );
}