const bankAccount = {
    money: 0,
    deposit(value: number, message?: string): string | void {
        this.money += value;
        if (message) {
            return message;
        }
    },
};

export default bankAccount;
