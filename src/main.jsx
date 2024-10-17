import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'prismjs/themes/prism-tomorrow.css'; // You can choose another theme
import 'prismjs/prism.js'; // Basic Prism functionality
import 'prismjs/components/prism-javascript.min.js'; // Add support for JavaScript

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
