/**
 https: //www.geeksforgeeks.org/maximum-product-cutting-dp-36/
 * Given a rope with length n, find the maximum value maxProduct, that can be achieved
 * for product len[0] * len[1] * ... * len[m - 1], where len[] is the array of lengths obtained by cutting the given rope into m parts.
 * Note that: there should be atleast one cut, i.e.m >= 2.
 * All m parts obtained after cut should have non - zero integer valued lengths.
 * If n = 5, then input should be:
 * Output Format:
 * For input n = 5, output will be: 6
 * Constraints: 2 <= n <= 111
 * We have to cut at least once.(2 <= m).
 * Length of the rope, as well as the length of each part are in positive integer value.(i.e.can 't do partial cuts.)
 * JavaScript solutions will give“ Wrong Answer” for the test cases from 023 to 029 because the answers exceed Number.MAX_SAFE_INTEGER. So, if your JavaScript solution passes all the previous test cases and for the test cases from 023 to 029 the answers are only slightly different(like 450283905890997300 vs 450283905890997363), then consider your solution as a correct solution.
 */
//DP
function max_product_from_cut_pieces(n) {
    /*
     * Write your code here.
     */
    let output = [];
    output[0] = output[1] = 0;

    // Build the table val[] in bottom up manner and return 
    // the last entry from the table 
    for (let i = 1; i <= n; i++) {
        let max_val = 0;
        for (let j = 1; j <= i / 2; j++)
            max_val = Math.max(max_val, (i - j) * j, j * output[i - j]);
        output[i] = max_val;
    }
    return output[n];
}

//Recrussion
function max_product_from_cut_row(n) {
    /*
     * Write your code here.
     */
    if (n <= 1) return 0;
    // the last entry from the table 
    let max_val = 0;
    for (let i = 1; i <= n; i++) {
        max_val = Math.max(max_val, i * (n - i), max_product_from_cut_row(n - i) * i);
        /**
         * For Ex: n = 5
         * Math.max(max_val, 4, max_product_from_cut_row(4) * 1);
         * Math.max(max_val, 6, max_product_from_cut_row(3) * 2);
         */
    }
    return max_val;
}