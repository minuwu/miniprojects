function ticketGeneration (length){
    let arr = [];
    for(let i=0; i<length; i++)
        arr.push(Math.floor(Math.random()*10));
    return arr;
}
function sumIsFifteen (array){
    return array.reduce((value,sum)=>value+sum, 0) === 15;
}
function allMatching (array){
    return array.every((value)=>value==array[0]);
}

export {ticketGeneration, sumIsFifteen, allMatching}