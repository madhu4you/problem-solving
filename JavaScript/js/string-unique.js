//var str= "f0ac,f1e9,f16e,f122,f106,f107,f105,f104,f231,f107,f0ac,f1e9,f16e,f122,f106,f105,f104,f231,f0ac,f1e9,f16e,f122,f106,f107,f105,f104,f10d";
function stringUnique(str) {
    var unique = str.split(",").filter(function (x, i, a) { 
        return a.indexOf(x) == i; 
    });
    return unique.join(", ");
}