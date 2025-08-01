import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import MainContent from './components/MainContent.jsx';
import UserProfile from './components/UserProfile.jsx';


function App() {
  return (
    <>
      <Header />
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Footer />
    </>
  );
}

export default App;
