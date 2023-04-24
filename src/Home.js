// import logo from './logo.svg';
// import { Link } from 'react-router-dom';
import './App.css';
import MainBody from './component/Main/MainBody';
import Footer from './component/footer/Footer';
import Header from './component/nav/Header';
// import Footer from './components/footer/Footer';
// import MobileToggle from './components/footer/MobileToggle';
// import Main from './components/main/main';
// import HeaderOne from './components/navigation/HeaderOne';
// import HeaderTwo from './components/navigation/HeaderTwo';

function Home() {
  return (
    <div className="Home">
      <Header/>
      <MainBody/>
      <Footer />
    </div>
  );
}

export default Home;
