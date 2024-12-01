function distanceFromHqInBlocks(blockNumber) {
    const hqBlock = 42;
    return Math.abs (blockNumber -hqBlock);
}
function distanceFromHqInFeet(blockNumber) {
    const blocks = distanceFromHqInBlocks;
    const hqBlock = 42;
    const feetperBlock = 264;
    return  Math.abs (blockNumber - hqBlock) * feetperBlock;
}
function distanceTravelledInFeet(fromBlock,toBlock) {
    const feetperBlock =264;
    return Math.abs(fromBlock - toBlock) * feetperBlock;
}
function calculatesFarePrice(start,destination) {
    const feetperBlock = 264;
const distanceInFeet = Math.abs(destination - start) * feetperBlock;
if (distanceInFeet <= 400) {
    return 0;
}else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return parseFloat(((distanceInFeet - 400) * 0.02).toFixed(2));
}else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
     return 25; 
    } else { 
        return 'cannot travel that far';
     } 
    }
 



