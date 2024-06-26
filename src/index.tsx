import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const wallets = [new PhantomWalletAdapter()];



root.render(
  <ConnectionProvider endpoint={'https://api.devnet.solana.com'}>
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <App />
      </WalletModalProvider>
    </WalletProvider>
  </ConnectionProvider>
);
