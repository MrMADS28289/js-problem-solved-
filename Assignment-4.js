// 1st Problem: Ana to vori

function anaToVori(ana) {
    if (typeof ana != "number") {
        return "please inter a valid number!!!";
    }
    if (ana < 0) {
        return 'please inter a valid number!!!';
    }
    let vori = ana / 16;
    return vori;
}

let totalVori = anaToVori(16);
console.log(totalVori);

// 2nd Problem: Panda cost

function pandaCost(num1, num2, num3) {
    if (num1 > 200) {
        return 'Sorry! We have only 200pc..';
    }
    let singara = 7 * num1;
    let samusa = 10 * num2;
    let jilapi = 15 * num3;
    let totalBill = singara + samusa + jilapi;
    return totalBill;
}

let totalBill = pandaCost(2, 2, 2);
console.log(totalBill);

// 3rd Problem: Picnic Budget

function picnicBudget(cost) {
    if (cost > 350) {
        return 'Sorry! We have no space in bus..';
    }
    if (cost <= 100) {
        let first100People = 5000 * cost;
        return first100People;
    }
    if (cost <= 200) {
        let first100People = 5000 * 100;
        let second100People = (cost - 100) * 4000;
        let totalMoney = first100People + second100People;
        return totalMoney;
    }
    if (cost > 200) {
        first100People = 5000 * 100;
        second100People = 4000 * 100;
        let onotherPeople = (cost - 200) * 3000;
        totalMoney = first100People + second100People + onotherPeople;
        return totalMoney;
    }

}

console.log(picnicBudget(405))

// 4th Problem: Odd friend



let friends = ['Md Sagor', 'MC Masum', 'Alamin Mondol', 'Salman Muktadir'];

function oddFriend(friends) {
    let firstOddFriend = [];
    for (const friend of friends) {
        if (friend.length % 2 != 0) {
            let findOddFriend = friend;
            firstOddFriend.push(findOddFriend);
            break;
        }
    }
    return firstOddFriend;
}
console.log(oddFriend(friends));




