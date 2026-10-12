import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { ContextProvider } from './Context/MyContext'
import { Toaster } from 'react-hot-toast'
createRoot(document.getElementById('root')).render(
<ContextProvider>
        <App />
<Toaster
  position="top-right"
  containerStyle={{
    right: "50px",
  }}
/>
</ContextProvider>
)
