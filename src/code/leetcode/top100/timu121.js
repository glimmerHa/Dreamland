/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let length = prices.length
    if(length ===0) return 0
    let minPrice = Number.MAX_VALUE
    let maxProfit = 0
    for(let i =0; i< length; i++){
        if(prices[i] < minPrice){
            minPrice = prices[i]
        }else if(prices[i] - minPrice > maxProfit){
            maxProfit = prices[i]-minPrice
        }
    }
    return maxProfit
};