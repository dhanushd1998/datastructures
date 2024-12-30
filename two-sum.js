var arri = [1, 2, 3, 4, 5];
var targeti = 7;
function twoSum(arr, target) {
    var num = [];
    for (var i = 0; i <= arr.length - 1; i++) {
        for (var j = i + 1; j <= arr.length - 1; j++) {
            if (arr[i] + arr[j] === target) {
                num.push(i);
                num.push(j);
                return num;
            }
        }
    }
}
console.log(twoSum(arri, targeti));
