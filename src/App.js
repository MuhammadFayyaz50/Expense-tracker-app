import React from 'react';

// Import CSS
import './App.css';

// Import Components
import { Header } from './component/Header';
import { Balance } from './component/Balance';
import { AccountSummary } from './component/AccountSummary';
import { TransactionHistory } from './component/TransactionHistory';
import { AddTransaction } from './component/AddTransaction';

// Import Provider
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <AccountSummary />
          <TransactionHistory />
          <AddTransaction />
        </div>
      </GlobalProvider>
  );
}

export default App;