const myObj={
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift for apple"
}
for (const key in myObj) {
    // console.log(`${key} is shortcut for ${myObj[key]}`);      // key => key, value => objectName[key]
}

const arr=["js","cpp","rb","java"]
for (const key in arr) {
    // console.log(key);      // prints keys/indices of array
    // console.log(arr[key]);    // prints value
}

const map=new Map()
map.set('IN','India')
map.set('USA','Unites states of america')
map.set('FR','France')
for (const key in map) {     // Maps are not iterable through for-in loop
    console.log(key);
    
}