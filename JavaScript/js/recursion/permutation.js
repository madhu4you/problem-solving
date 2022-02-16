/**
 * Generate a permutaion of the string
 * permuation("abc")
 * Output:
 * abc
 * acb
 * bca
 * bac
 * cab
 * cba
 */

 let permuation = (str) => {
     if(str === "") return false;
     let output = [];
     
     
     let pshelper = (arr, slate) =>{
        if(arr.length === 0) {
            output.push(slate);
            return;
        }
        else {
            for(let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let char = curr.splice(i, 1);
                pshelper(curr.slice(), slate.concat(char));
            }
        }
     }
     const pshelper2 = (s, i, slate) => {
        if(i === s.length) {
            output.push([...slate]);
            return;
        }
        else {
            for(let pick =i; pick < s.length; pick++) {
                [s[pick], s[i]] = [s[i], s[pick]];
                slate.push(s[i]);
                pshelper2(s, i+1, slate);
                slate.pop();
                [s[pick], s[i]] = [s[i], s[pick]];
            }
        }
     }
     //pshelper([...str], []);
     pshelper2([...str], 0, []);
     return output;
 }


 console.log(permuation("abc"));