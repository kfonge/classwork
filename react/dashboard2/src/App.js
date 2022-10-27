
import './App.css';
import AvgRating from './components/AvgRating'
import Reviews from './components/Reviews'
import SentAnal from './components/SentAnal'
import Sidebar from './components/Sidebar'
import Visitors from './components/Visitors'
import Data from './data'

function App() {

  return (
   <div className="App">
   <div>
      <Reviews number={'1,281'} />
    </div>
    
    <div>
      <AvgRating rating={'4.6'} />
    </div>
      
      
      <div>
      <h3>Sentiment Analysis</h3>
        {Data.map((number) => (
        <SentAnal number={number} />
      ))}
      </div>  
      <div className = "sidebar"> <Sidebar /></div>
      <div><Visitors number={'821'} /></div>
  
    </div>

      );
}

export default App;
