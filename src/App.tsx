import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from './components/static/routes';
import Navbar from './components/navbar/navbar';
import Footer from './components/static/footer';

// style
import './App.css'

function App() {
  

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <header>
          <Navbar />
          <ToastContainer/>
        </header>
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <footer className="py-4">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
