// import logo from './logo.svg';
// import { Link } from 'react-router-dom';
import './App.css';
import MainBody from './component/Main/MainBody';
import Footer from './component/footer/Footer';
import Navbar from './component/nav/Navbar';
// import Footer from './components/footer/Footer';
// import MobileToggle from './components/footer/MobileToggle';
// import Main from './components/main/main';
// import HeaderOne from './components/navigation/HeaderOne';
// import HeaderTwo from './components/navigation/HeaderTwo';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainBody/>
      <Footer />
    </div>
  );
}

export default App;
