const gcd = (x, y) => y ? gcd(y, x % y) : x;
var gcd1 = function(x,y){
    return y? gcd(y, x%y):x
}
var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n;
    let count = gcd(k, n);
    for (let start = 0; start < count; ++start) {
        let current = start;
        let prev = nums[start];
        do {
            const next = (current + k) % n;
            const temp = nums[next];
            nums[next] = prev;
            prev = temp;
            current = next;
        } while (start !== current);
    }
    return nums
};
console.log(rotate([1,2,3,4,5,6,7],3))
console.log(gcd(7,3))
console.log(gcd(3,7))
console.log(gcd1(7,3))
console.log(gcd1(3,7))