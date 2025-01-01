var studentMap = new Map();
studentMap.set("Alice", 30);
studentMap.set("John", 35);
studentMap.set("Jack", 34);
studentMap.set("Jill", 33);
studentMap.set("Jao", 32);
console.log(studentMap);
for (var _i = 0, studentMap_1 = studentMap; _i < studentMap_1.length; _i++) {
    var _a = studentMap_1[_i], key = _a[0], val = _a[1];
    console.log("".concat(key, " is ").concat(val));
}
studentMap.forEach(function (key, val) {
    console.log("".concat(key, " is ").concat(val));
});
studentMap.forEach(function (key, val) {
    if (key === 'Alice' || key == 'John') {
        studentMap.delete(key);
    }
});
console.log("deleted", studentMap);
// Using forEach to delete specific keys
studentMap.forEach(function (val, key) {
    if (key === "John" || key === "Alice") {
        studentMap.delete(key); // Deletes keys safely
    }
});
console.log("After deletion:", studentMap);
