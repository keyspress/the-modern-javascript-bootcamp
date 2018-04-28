const account = {
    name: 'Bobby McGee',
    expenses: [],
    addExpense: function (description, amount) {
        account.expenses.push({ description, amount })
    },
    getAccountSummary: function () {
        let total = 0
        account.expenses.forEach(function(expense) {
            total += expense.amount
        })
        return total
    }
}


account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)

console.log(account.getAccountSummary())