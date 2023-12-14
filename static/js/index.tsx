import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './style/global/global.css';
import App from './App';
import { DataProvider } from './contexts/data.context';
import ReactGA from "react-ga4";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
ReactGA.initialize('G-DXYS2ZHJKZ');

root.render(
   <>
      <DataProvider>
         <App />
      </DataProvider>
   </>
);
reportWebVitals();
