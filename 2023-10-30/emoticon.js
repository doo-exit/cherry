const discount = [0.9, 0.8, 0.7, 0.6];

function solution(users, emoticons) {
    const discountComb = [];
    let subscriber = 0;
    let amount = 0;

    const calc = () => {
        let newSubscriber = 0;
        let newAmount = 0;
        const newEmoticons = emoticons.map((value, i) => value * discountComb[i]);

        for (let user of users) {
            const userDiscount = user[0];
            const userPrice = user[1];

            let userPriceSum = 0;
            for (const [i, emoticon] of Object.entries(newEmoticons)) {
                if (userDiscount <= 100 - (emoticon / emoticons[i]) * 100) {
                    userPriceSum += emoticon;
                }
            }

            if (userPrice <= userPriceSum) {
                newSubscriber += 1;
            } else {
                newAmount += userPriceSum;
            }
        }

        if (
            subscriber < newSubscriber ||
            (subscriber === newSubscriber && amount < newAmount)
        ) {
            subscriber = newSubscriber;
            amount = newAmount;
        }
    };

    const solve = (n = 0) => {
        if (discountComb.length === emoticons.length) {
            calc();
            return;
        }
        for (let i = n; i < emoticons.length; i += 1) {
            for (let j = 0; j < discount.length; j += 1) {
                discountComb.push(discount[j]);
                solve(i + 1);
                discountComb.pop();
            }
        }
    };

    solve();
    return [subscriber, amount];
}
