var num = [1, 2, 1];
function distinct(nums) {
    for (var i = 0; i <= nums.length; i++) {
        for (var j = i + 1; j <= nums.length; j++) {
            if (nums[i] === nums[j]) {
                return ('Not unique');
            }
        }
    }
    return (' all unique');
    ;
}
console.log(distinct(num), uniq(num));
function uniq(nums) {
    var hass = new Set();
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num_1 = nums_1[_i];
        if (hass.has(num_1)) {
            return ("Not uniquw");
        }
        hass.add(num_1);
    }
    return ("All uniqu");
}
