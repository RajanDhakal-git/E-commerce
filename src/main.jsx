
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyContextAPI from './store/MyContextAPI.jsx'


createRoot(document.getElementById('root')).render(
 <MyContextAPI>
<App />
 </MyContextAPI>
    

)
