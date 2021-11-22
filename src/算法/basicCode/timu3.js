/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let win = []
    let max = 0
    let len = s.length
    for(let i =0; i < len;i++){
        if(win.indexOf(s[i])>-1){
           win.splice(0,win.indexOf(s[i])+1)
        }
        win.push(s[i])
        max = Math.max(win.length, max)
    }
    return max
};