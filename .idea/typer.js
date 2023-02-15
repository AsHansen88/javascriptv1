// Der er 7 primitive typer i jacascript
// Number String Boolean
// undefined Null
// Symbol og BigInt .. dem bruger vi ikke
//Der er yderligere to typer
//object function

function showtypes(lst){
  console.log('Starter udskrivning')
  for(const obj of lst){
    console.log(obj + ' er af typen =' + typeof obj)

  }

}

const a = 5.5
const arr = []
arr.push(a)
arr.push(0/0)
showtypes(arr)
console.log(arr[0])
console.log(arr[1])
const arr2 = [1.3]
arr.push(arr2)
showtypes(arr)

let f
arr.push(f)
let g = null
arr.push(g)
showtypes(arr)
