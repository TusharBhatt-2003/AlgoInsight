// src/App.jsx
import AppRouter from './router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/prism.js';
import 'prismjs/components/prism-javascript.min.js';

function App() {
  return (
    <div>
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
