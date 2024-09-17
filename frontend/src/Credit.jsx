// src/components/Credit.jsx
import React, { useState } from 'react';
import coin from './assets/coin3D.gif';
import c1 from './assets/credit1.png';
import c2 from './assets/forest3D.png';
import c3 from './assets/credit3.png';
import g1 from './assets/graph.png';

import './credit.css';

const Credit = () => {
  // State for the current balance and amount
  const [balance, setBalance] = useState(500); // Example initial balance
  const [amount, setAmount] = useState(0); // State for input amount
  const [dialogVisible, setDialogVisible] = useState(false); // State for dialog visibility
  const [dialogMessage, setDialogMessage] = useState(''); // State for dialog message
  const [transactions, setTransactions] = useState([]); // State for transaction history

  // Market rate for 1 carbon credit (example rate)
  const marketRate = 14.58; // Example: 1 carbon credit = ₹14.58

  // Handler to buy credits
  const handleBuyCredits = () => {
    setBalance(balance + parseInt(amount, 10));
    setDialogMessage(
      `You bought ${amount} credits. New balance: ${
        balance + parseInt(amount, 10)
      } credits.`
    );
    setDialogVisible(true); // Show dialog
    setAmount( ); // Reset input after buying

    // Add transaction to history with a "+" for purchase
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
    setDialogVisible(true); // Show dialog
    setAmount(0); // Reset input after buying
  };

  // Handler to sell credits
  const handleSellCredits = () => {
    if (amount <= balance) {
      const newBalance = balance - parseInt(amount, 10);
      setBalance(newBalance);

      // Add transaction to history with a "-" for sale
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
    setDialogVisible(true); // Show dialog
    setAmount(0); // Reset input after selling
  };

  // Handler to close the dialog
  const closeDialog = () => {
    setDialogVisible(false);
  };

  return (
    <div className="credit-container">
      {/* Header Section */}
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
        {/* Card 1 */}
        <div className="credit-card">
          <h2>Credit Type 1</h2>
          <img src={c1} alt="Credit Type 1" className="credit-image" />
          <p>Offset your carbon emissions through renewable energy projects.</p>
        </div>

        {/* Card 2 */}
        <div className="credit-card">
          <h2>Credit Type 2</h2>
          <img src={c2} alt="Credit Type 2" className="credit-image" />
          <p>Invest in forest restoration and conservation projects.</p>
        </div>

        {/* Card 3 */}
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
          click on the graph to analyse market rates in detail
        </p>
      </div>

      {/* Buy/Sell Carbon Credits Section */}
      <div className="buy-sell-card">
        <h2>Manage Your Carbon Credits</h2>
        <p>How many carbon credits would you like to buy or sell?</p>
        <p>
          Your Current Balance: <strong>{balance}</strong> carbon credits
        </p>

        {/* Input for buying/selling credits */}
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="credit-input"
        />

        {/* Buttons for buying and selling */}
        <div className="buy-sell-buttons">
          <button onClick={handleBuyCredits} className="buy-button">
            Buy Credits
          </button>
          <button onClick={handleSellCredits} className="sell-button">
            Sell Credits
          </button>
        </div>
      </div>

      {/* Transaction History Section */}
      <div className="transaction-history-card">
        <h2>Transaction History</h2>
        <p>
          Here you can view the history of your carbon credit transactions,
          including purchase dates, credit types, and amounts.
        </p>
        <div>
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
          <br />
          <br />
        </div>
        <h2>Donations</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Credit Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024-01-15</td>
              <td>Renewable Energy</td>
              <td>100 credits</td>
            </tr>
            <tr>
              <td>2024-02-20</td>
              <td>Forest Restoration</td>
              <td>150 credits</td>
            </tr>
            <tr>
              <td>2024-03-10</td>
              <td>Sustainable Agriculture</td>
              <td>200 credits</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Dialog Box for Buy/Sell confirmation */}
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
