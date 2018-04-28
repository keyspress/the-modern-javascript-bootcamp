const account = {
    name: 'Bobby McGee',
    expenses: [],
    addExpense: function (description, amount) {
        this.expenses.push({ description, amount })
    },
    getAccountSummary: function () {
        let total = 0
        this.expenses.forEach(function(expense) {
            total += expense.amount
        })
        return `${this.name} has $${total} in expenses`
    }
}


account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)

console.log(account.getAccountSummary())