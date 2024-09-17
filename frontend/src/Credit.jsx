import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import coin from './assets/coin3D.gif';
import c1 from './assets/credit1.png';
import c2 from './assets/forest3D.png';
import c3 from './assets/credit3.png';
import g1 from './assets/graph.png';
import './credit.css';

const Credit = () => {
  const [balance, setBalance] = useState(500);
  const [amount, setAmount] = useState(0);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [transactions, setTransactions] = useState([]);

  const marketRate = 14.58;

  const handleBuyCredits = () => {
    const newBalance = balance + parseInt(amount, 10);
    setBalance(newBalance);
    setTransactions([
      ...transactions,
      {
        date: new Date().toLocaleDateString(),
        type: 'Purchase',
        amount: `+${amount}`,
      },
    ]);
    setDialogMessage(
      `You bought ${amount} credits. New balance: ${newBalance} credits.`
    );
    setDialogVisible(true);
    setAmount(0);
  };

  const handleSellCredits = () => {
    if (amount <= balance) {
      const newBalance = balance - parseInt(amount, 10);
      setBalance(newBalance);
      setTransactions([
        ...transactions,
        {
          date: new Date().toLocaleDateString(),
          type: 'Sale',
          amount: `-${amount}`,
        },
      ]);
      setDialogMessage(
        `You sold ${amount} credits. New balance: ${newBalance} credits.`
      );
    } else {
      setDialogMessage('You do not have enough credits to sell!');
    }
    setDialogVisible(true);
    setAmount(0);
  };

  const closeDialog = () => {
    setDialogVisible(false);
  };

  // Function to generate PDF
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.text('Carbon Credit Statement', 20, 10);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 20);
    doc.text(`Total Balance: ${balance} credits`, 20, 30);

    // Transactions Table
    doc.autoTable({
      startY: 40,
      head: [['Date', 'Transaction Type', 'Amount']],
      body: transactions.map((transaction) => [
        transaction.date,
        transaction.type,
        transaction.amount,
      ]),
    });

    doc.save('carbon-credit-statement.pdf');
  };

  return (
    <div className="credit-container">
      <div className="head">
        <h1 style={{ textAlign: 'center' }}>
          <img src={coin} alt="coin" style={{ height: '8vh' }} />
          Carbon Credits <img src={coin} alt="coin" style={{ height: '8vh' }} />
        </h1>
        <p style={{ textAlign: 'center' }}>
          Explore different ways to offset your carbon emissions.
        </p>
      </div>

      {/* Card Section */}
      <div className="card-grid">
        <div className="credit-card">
          <h2>Credit Type 1</h2>
          <img src={c1} alt="Credit Type 1" className="credit-image" />
          <p>Offset your carbon emissions through renewable energy projects.</p>
        </div>
        <div className="credit-card">
          <h2>Credit Type 2</h2>
          <img src={c2} alt="Credit Type 2" className="credit-image" />
          <p>Invest in forest restoration and conservation projects.</p>
        </div>
        <div className="credit-card">
          <h2>Credit Type 3</h2>
          <img src={c3} alt="Credit Type 3" className="credit-image" />
          <p>
            Support sustainable agriculture and reduce emissions from farming.
          </p>
        </div>
      </div>

      {/* Market Rate and Balance Section */}
      <div className="market-balance-card">
        <h2>Carbon Credit Market</h2>
        <p>
          Current Market Rate: <strong>₹{marketRate}</strong> per carbon credit
        </p>
        <a href="https://www.coingecko.com/en/coins/carbon-credit/inr">
          <img
            src={g1}
            alt="graph"
            className="graph-image"
            style={{ height: '70vh', width: '90%' }}
          />
        </a>
        <p style={{ fontSize: '12px' }}>
          Click on the graph to analyze market rates in detail
        </p>
      </div>

      {/* Buy/Sell Carbon Credits Section */}
      <div className="buy-sell-card">
        <h2>Manage Your Carbon Credits</h2>
        <p>How many carbon credits would you like to buy or sell?</p>
        <p>
          Your Current Balance: <strong>{balance}</strong> carbon credits
        </p>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="credit-input"
        />

        <div className="buy-sell-buttons">
          <button onClick={handleBuyCredits} className="buy-button">
            Buy Credits
          </button>
          <button onClick={handleSellCredits} className="sell-button">
            Sell Credits
          </button>
        </div>

        {/* Generate PDF Button */}
        <button onClick={generatePDF} className="pdf-button">
          Download Statement PDF
        </button>
      </div>

      {/* Transaction History Section */}
      <div className="transaction-history-card">
        <h2>Transaction History</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Transaction Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length > 0 ? (
              transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.date}</td>
                  <td>{transaction.type}</td>
                  <td>{transaction.amount}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No transactions yet</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {dialogVisible && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <p>{dialogMessage}</p>
            <button onClick={closeDialog} className="close-dialog-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Credit;
