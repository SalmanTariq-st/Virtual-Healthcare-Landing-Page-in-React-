import './App.css';
import DownloadView from './components/DownloadView';
import Footer from './components/Footer';
import MainView from './components/MainView';
import Navbar from './components/Navbar';
import ProvidersView from './components/ProvidersView';
import ServiceView from './components/ServiceView';

function App() {
  return (
    <div >
      <Navbar/>
      <MainView/>
      <ServiceView/>
      <ProvidersView/>
      <DownloadView/>
      <Footer/>
    </div>
  );
}

export default App;
