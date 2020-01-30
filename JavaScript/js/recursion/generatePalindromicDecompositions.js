function generate_palindromic_decompositions(s) {
    let output = [];
    decompose(0, []);
    return output;

    function decompose(index, slate) {
        if (index === s.length) {
            output.push(slate.join("|"));
            return;
        }
        for (let i = index; i < s.length - 1; i++) {
            if (isPalindrom(s, index, i)) {
                slate.push(s.substring(index, i + 1));
                decompose(i + 1, slate);
                slate.pop();
            }
        }
    }

    function isPalindrom(s, start, end) {
        while (start < end) {
            if (s[start++] !== s[end--]) return false;
        }
        return true;
    }
}