import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Host from './Pages/Host';
import Login from './Pages/Login';
import Properties from './Pages/Properties';
import AllProperties from './Pages/Allproperties';
import Navbar from './component/Navbar';
import AllRoutes from './component/AllRoutes';
import Loader from './component/Loader';
import { useEffect } from 'react';
import { useState } from 'react';
import Filter from './component/Filter';
import { ChatBot } from './component/ChatBot';
// Main App component
function App() {
  const [showLoader, setShowLoader] = useState(true);

  // After 3 seconds, hide the loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader ? <Loader /> : (
        <div className="App">
          <Navbar />
          <AllRoutes />
          <ChatBot/>
      
        </div>
      )}
    </>
  );
}
export default App;
