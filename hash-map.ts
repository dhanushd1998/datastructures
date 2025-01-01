let studentMap = new Map();
studentMap.set("Alice", 30)
studentMap.set("John", 35)
studentMap.set("Jack", 34)
studentMap.set("Jill", 33)
studentMap.set("Jao", 32)

console.log(studentMap)



for( const [key,val] of studentMap) {
    console.log(`${key} is ${val}`)
}


studentMap.forEach((key,val)=>{
    console.log(`${key} is ${val}`)
})




studentMap.forEach((key,val)=>{
    if(key==='Alice' || key == 'John'){
        studentMap.delete(key)
    }
})

console.log("deleted",studentMap)



// Using forEach to delete specific keys
studentMap.forEach((val, key) => {
    if (key === "John" || key === "Alice") {
        studentMap.delete(key); // Deletes keys safely
    }
});

console.log("After deletion:", studentMap);
console.log("After deletion:", studentMap);