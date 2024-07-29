const fs = require('fs')
const csv = require('@fast-csv/parse')

const {pushTransactionToDB, getDBConnection} = require('./db.js')

const parseRecords = (records) => {
    let transactions = []
    for(let i = 1; i < records.length; i++) {
        transactions.push(transaction(records[i]))
    }
    pushTransactionToDB(transactions)
}

function transaction(row) {
    let detail = row[0]
    let date = row[1]
    let desc = row[2]
    let amount = row[3]
    let type = row[4]
    let balance = row[5]
    let transaction = {
        detail: detail,
        date: date,
        desc: desc,
        amount: amount,
        type: type,
        balance: balance
    }
    return transaction
}
function readSavingAcctStatement() {
    getDBConnection()
  const fileLoc = 'C:/Users/as46930/Downloads/Chase3972_Activity_20240729.CSV'

    let noOfRecords = 0;
    let records = [];
    csv.parseFile(fileLoc)
      .on('data', (row) => {
         // console.log(row)
          records.push(row)
      })
      .on('end', () => {
          console.log('CSV file successfully processed')
          console.log(records.length)
          parseRecords(records)
      })
      .on('error', (err) => {
        console.error(err)
      });
}

readSavingAcctStatement();
