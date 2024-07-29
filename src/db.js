const {Client} = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
});

const getDBConnection = () => {
    client.connect()
    .then(() => {
        console.log('Connected to DB')
    })
    .catch((err) => {
        console.error(err)
    })
}

const pushTransactionToDB = (transactions) => {
    for(let i = 0; i < transactions.length; i++) {
        let transaction = transactions[i]
        let query = `INSERT INTO expense.account_transaction (details, posting_date, description, amount, type, balance) VALUES ('${transaction.detail}', '${transaction.date}', '${transaction.desc}', '${transaction.amount}', '${transaction.type}', '${transaction.balance}')`
        client.query(query)
        .then(() => {
            console.log('Transaction inserted successfully')
        })
        .catch((err) => {
            console.error(err)
        })
    }
}

module.exports = {
    pushTransactionToDB,
    getDBConnection
}
