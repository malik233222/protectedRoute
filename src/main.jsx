import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GeneralContextProvider from './context/generalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <GeneralContextProvider>
    <App />
  </GeneralContextProvider>

)
