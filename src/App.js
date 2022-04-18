import Banner from './Banner';
import Navbar from './Navbar';
import requests from './requests';
import Row from './Row';

import './App.css';

function App() {
  return (
    <div className='app'>
      <Banner />
      <Navbar />
      {/* Navbar */}
      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentories' fetchUrl={requests.fetchDocumentories} />
    </div>
  );
}

export default App;
