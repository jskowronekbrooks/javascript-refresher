function getHeadsOrTails() {
    let i = Math.floor(Math.random() * 2);
    return output = (i <= 0) ? "Heads" : "Tails";
}

function flipNumberTimes(i = 100) {
    let numHeads = 0;
    let numTails = 0;
    for (let j = 0; j < i; j++) {
        getHeadsOrTails() == "Heads" ? numHeads++ : numTails++; 
    }
    
    //console.log(`Out of ${i} flips, you got ${numHeads} heads.`)
    return numHeads;
}

function collectData(i = 100) {
    let maxHeads = 0;
    let minHeads = 0;
    let sumHeads = 0;
    let count = 0;
    
    for (let k = 0; k < i; k++) {
        let heads = flipNumberTimes();
        if (k == 0) {
            maxHeads = heads;
            minHeads = heads;
        }

        if (heads > maxHeads) {
            maxHeads = heads;
        }
        else if (heads < minHeads) {
            minHeads = heads;
        }
        sumHeads += heads;
        count++;
    }

    console.log(`The most heads you got was ${maxHeads}\nThe least number of heads you got was ${minHeads}\nThe average number of heads you got was ${sumHeads/count}`)
}

collectData()