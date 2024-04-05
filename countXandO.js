
// Split given  x's and o's string in two sunstring from position 0th,1st and so on till the length of string and count no.of x's in left side subtring and o's in right side substring and sum up them.
// find max number amongest sum up numbers. 

// for e.g,
// lets consider s='oxooxooo'

// o xooxooo = 0+5=5
// ox ooxooo = 1+5=6
// oxo oxooo = 1+4=5
// oxoo xooo = 1+3=4
// oxoox ooo = 2+3=5
// oxooxo oo = 2+2=4
// oxooxoo o = 2+1=3

// So answer is 6

function calMax(s) {
    let maxCount = 0;
    let xCount = 0;
    let oCount = 0;
    for (let i = 1; i < s.length; i++) {
        xCount = 0;
        oCount = 0;
        let str1 = s.slice(0, i);
        let str2 = s.slice(i, s.length)
        for (let x = 0; x < str1.length; x++) {
            if (str1[x] == 'x')
                xCount++
        }
        for (let y = 0; y < str2.length; y++) {
            if (str2[y] == 'o')
                oCount++
        }
        if (maxCount < (xCount + oCount))
            maxCount = (xCount + oCount);
    }
    return maxCount;
}

let dt = 'oxooxooo';
console.log("Result is " + calMax(dt));
