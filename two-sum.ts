const arri: number [] = [1,2,3,4,5];
const targeti:number = 7;


function twoSum( arr:number [] , target:number ) {
let num:  number []=[]
    for(let i=0; i<=arr.length -1; i++) {
        for(let j=i+1; j<= arr.length -1; j++){
            if( arr[i]+arr[j] === target){
                num.push(i)
                num.push(j)
                return num;
            }
        }
      
    }
}


console.log(twoSum(arri,targeti))