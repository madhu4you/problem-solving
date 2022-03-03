/**
 * You are given stock prices and the corresponding day of each stock price.
 * For example: (32, 1), (45, 1), (37,2), (42,3), ..
 * Here, 32 is the price and 1 is the day of the price.
 * Say you are given these prices as an input stream. You should provide a function for
 * the user to input a stock price and day. Your system should be able to tell
 * the maximum stock price in the last 3 days.
 */

function StockPriceWithTime(stock, k) {
    let map = [];
    let len = stock.length;
    for (let i = 0; i < len; i++) {
        if (map.length === k) {
            map.shift();
        }
        let day = stock[i]['day'];
        let price = stock[i]['price'];
        let index = isDayExists(map, day);
        if (index != -1) {
            map[index]['price'] = Math.max(map[index]['price'], price);
        }
        else {
            map.push(stock[i]);
        }
    }

    return getMax(map);


    function isDayExists(map, day) {
        for (i = 0; i < map.length; i++) {
            if (map[i]['day'] === day) {
                return i;
            }
        }
        return -1;
    }

    function getMax(a) {
        return a.reduce((max, ele) => {
            return Math.max(max, ele.price);
        }, Number.MIN_SAFE_INTEGER);
    }
}

let stock = [
    {
        "price": 32,
        "day": 1
    },
    {
        "price": 45,
        "day": 1
    },
    {
        "price": 37,
        "day": 2
    },
    {
        "price": 42,
        "day": 3
    },
    {
        "price": 55,
        "day": 3
    },
    {
        "price": 50,
        "day": 4
    }
]

console.log(StockPriceWithTime(stock, 3)); // 45