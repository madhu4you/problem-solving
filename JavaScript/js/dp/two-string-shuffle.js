/**
 * https://www.geeksforgeeks.org/find-if-a-string-is-interleaved-of-two-other-strings-dp-33/
 * Given three strings A, B and C. Write a function that checks whether C is an interleaving of A and B. C is said to be interleaving A and B, if it contains all characters of A and B and order of all characters in individual strings is preserved.
 * EX: 
 * A = bcc;
 * B = bbca;
 * c = bbcbcac;
 * Time Complexity: O(MN)
 * Auxiliary Space: O(MN)
 */

function isInterleaved(A, B, C) 
{ 
    // Find lengths of the two strings 
    let sizeA = A.length;
    let sizeB = B.length; 
  
    // Let us create a 2D table to store solutions of 
    // subproblems.  C[i][j] will be true if C[0..i+j-1] 
    // is an interleaving of A[0..i-1] and B[0..j-1]. 
    let IL = [[]]; 
  
    // C can be an interleaving of A and B only of sum 
    // of lengths of A & B is equal to length of C. 
    if ((sizeA + sizeB) != C.length) 
        return false; 
  
    // Process all characters of A and B 
    for (let i = 0; i <= sizeA; ++i) { 
        for (let j = 0; j <= sizeB; ++j) { 
            // two empty strings have an empty string 
            // as interleaving 
            if (i == 0 && j == 0) 
                IL[i][j] = true; 
  
            // A is empty 
            else if (i == 0) { 
                if (B[j - 1] == C[j - 1]) 
                    IL[i][j] = IL[i][j - 1]; 
            } 
  
            // B is empty 
            else if (j == 0) { 
                if (A[i - 1] == C[i - 1]) 
                    IL[i][j] = IL[i - 1][j]; 
            } 
  
            // Current character of C matches with current character of A, 
            // but doesn't match with current character of B 
            else if (A[i - 1] == C[i + j - 1] && B[j - 1] != C[i + j - 1]) 
                IL[i][j] = IL[i - 1][j]; 
  
            // Current character of C matches with current character of B, 
            // but doesn't match with current character of A 
            else if (A[i - 1] != C[i + j - 1] && B[j - 1] == C[i + j - 1]) 
                IL[i][j] = IL[i][j - 1]; 
  
            // Current character of C matches with that of both A and B 
            else if (A[i - 1] == C[i + j - 1] && B[j - 1] == C[i + j - 1]) 
                IL[i][j] = (IL[i - 1][j] || IL[i][j - 1]); 
        } 
    } 
  
    return IL[sizeA][sizeB]; 
}