function forLoop(array){
  for(var i = 0; i <25; i++){
    if (i === 1){
      array.push(`I am ${i} strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
  }
}
return array
}

function whileLoop(n) {
  let e = n;

    while (e > 0) {
      console.log(--e)
    }
    return "done";
  }

doWhileLoop(array){
  let p = array
  do{--array
  } while(p.length>0)
}
