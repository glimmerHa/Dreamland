var search = function(nums, target) {
    var lookfor = function(start,end, target){
        if(!nums || nums.length ===0) return -1
        let mid = Math.floor((start+end)/2)
        if(target === nums[mid]){
            return mid
        }else if(target > nums[mid]){
            lookfor(mid+1, end, target)
        }else if(target < nums[mid]){
            lookfor(start, mid,target)
        }else{
            return -1
        }
    }
    lookfor(0,nums.length, target)
};
search([-1,0,3,5,9,12],9)