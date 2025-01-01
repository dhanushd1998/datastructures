const num = [1,2,1];

function distinct( nums: number[] ): string {
  for(let i=0; i<= nums.length; i++){
    for(let j=i+1; j<= nums.length; j++){
        if(nums[i] === nums[j]){
            return ('Not unique');
        } 
    }
  }
return (' all unique');;

}

console.log( distinct(num), uniq(num))


function uniq(nums:number[]): string {
    const hass = new Set()
    for (const num of nums) {
        if(hass.has(num)) {
            return ("Not uniquw")
        } hass.add(num)
    } return ("All uniqu")
}