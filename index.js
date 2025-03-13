

/*arr.forEach(function (element, idx) {
    console.log(`The index ${idx} has a value of ${element}`)
})
for(let i = arr.length-1; i > 0; i--){
    console.log(arr[i])
}*/

/*arr.forEach((ele, idx) => {
    console.log(`The index ${idx} has a value of ${ele}`)
})*/

/*const found = arr.find(function(ele){
    return ele >= 3
})

const strArr = ["test", "apple", "bad apple", "nothing"]

const x = strArr.find(function(word){
    return word.length > 9000
})


const y = strArr.filter((word) => { 
    return word.includes("apple")
})
console.log(y)*/

/*const newArr = [23,456,234,67]

const x = newArr.map(function(ele){
    if(ele %2 !== 0){
        return ele
    }
})

const data = ["pikachu", "squirtle", "charmander", "bulbasaur"]
const html = data.map((poke) => {
    return `<li>${poke} </li>`
})
console.log(html)*/

const arr = [1,2,3,4,5]

const sum = arr.reduce((accumulator, current) => {
    //console.log("This is acc --> ", accumulator)
    //console.log("This is cur --> ", current)
    accumulator = accumulator + current
    return accumulator
}, 0)

const prod = arr.reduce((accumulator, current) => {
    //console.log("This is acc --> ", accumulator)
    //console.log("This is cur --> ", current)
    accumulator = accumulator * current
    return accumulator
}, 1)
//console.log(prod)


const newArr = [23,456,234,67,123,9,18]

const evenOdds = newArr.reduce((accumulator, current) => {
    if(current%2 === 0){
        accumulator.even.push(current)
    }else{
        accumulator.odd.push(current)
    }
    return accumulator
}, {even:[], odd:[]})

//console.log(evenOdds)

const str = "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
const strArr = str.split(",")
console.log(strArr)
const stats = strArr.reduce((acc, cur) => {
    if(acc[cur] === undefined){
        acc[cur] = 0
    }
    acc[cur]++
    return acc
}, {} )
console.log(stats)

const unsortedArr = [23, 4, 67,13, 456, 10, 1000, 1,100000]
console.log(unsortedArr)
unsortedArr.sort((a,b) => {
    return a-b
})
console.log(unsortedArr)

