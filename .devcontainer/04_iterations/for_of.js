// ============for of loop=============
// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4]

for (const num of arr) {
    console.log(num);
}

const greeting = " GOOD MORNING"
for (const val of greeting) {
    console.log(val);
    
}


//======= Maps===========

const map = new Map()
map.set('IN', "India")
map.set('USA',"United States of America")

//console.log(map);
for (const [key, value] of map) {
    console.log(key ,':', value);
    
}
