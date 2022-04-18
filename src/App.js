import './App.css';
import Banner from './Banner';
import requests from './requests';
import Row from './Row';

function App() {
  return (
    <div className='App'>
      <Banner />
      {/* Navbar */}
      {/* Banner */}
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
