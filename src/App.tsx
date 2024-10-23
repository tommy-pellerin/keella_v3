import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from './components/static/routes';
import Navbar from './components/navbar/navbar';
import Footer from './components/static/footer';
import NavModal from './components/navbar/navModal';


//Atoms
import { useAtom } from "jotai";
import { navModalAtom } from './store/navModalAtom';


function App() {
  const [isNavModalOpenned,] = useAtom(navModalAtom);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <header className='sticky top-0'>
          <Navbar />
          <ToastContainer/>
        </header>
        <main className="flex-grow">
          <div>
            {isNavModalOpenned && (
              <NavModal />
            )}
          </div>
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
