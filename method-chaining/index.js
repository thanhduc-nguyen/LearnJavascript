function MoneyDispenser(amount) {
    this.money = amount;
}

MoneyDispenser.prototype = {
    // billDenomination: 100, 50, 20, 10, 5, 1
    compute: function (billDenomination) {
        const numberOfBill = Math.floor(this.money / billDenomination);
        this.money -= numberOfBill * billDenomination;
        console.log(`Dispensing ${numberOfBill} $${billDenomination}  bills. Money left: $${this.money}`);
        return this;
    },
};

const dispenser = new MoneyDispenser(328);
dispenser.compute(100).compute(50).compute(20).compute(10).compute(5).compute(1);
