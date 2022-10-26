
import './App.css';
import Reviews from './components/Reviews'
import AvgRating from './components/AvgRating'
import SentAnal from './components/SentAnal'
import Sidebar from './components/Sidebar'
import Visitors from './components/Visitors'
import Data from './Data'

function App() {

  return (
    <div className="App">
      <Reviews num={'1,281'} />
      <AvgRating num={'4.6'} />
      {Data.map((number) => (
        <SentAnal number={number} />))}
        
      <Sidebar />
      <Visitors />
    </div>

      );
}

export default App;
