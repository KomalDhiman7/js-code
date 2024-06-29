const coding =["js","cpp","py","swift"]
coding.forEach(function(item) {
    console.log(item);
})

coding.forEach((item)=>{
    console.log(item);
})



//+++++filter+++++++++++

const nums = ["1","2","3","4","5"]
// const newNums = nums.filter((nums)=>nums>2)
// console.log(newNums);


const newNums = nums.filter((nums)=>{
    return nums>2
})
console.log(newNums);