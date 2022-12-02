import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

import data from './data'


function App() {

  const cards = data.map(card => {
    return (
      <Card
        key={card.id}
        card={card}
        //{...card}   with spread it compiles all the key and values, so I would need to remove the .item from the card component
      />
    )
  })
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <section className='cards-list'>
        {cards}
      </section>
      
    </div>
  );
}

export default App;
