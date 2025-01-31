import { StrictMode } from 'react'
import { createContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const koukicodeInfo = {
  name: "koukicode",
  age: 21,
};

const KoukicodeContext = createContext(koukicodeInfo);

createRoot(document.getElementById('root')).render(
  <KoukicodeContext.Provider value={koukicodeInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </KoukicodeContext.Provider>
)

export default KoukicodeContext;