
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import News from './components/News/News';

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=98d9605322264ae6bfd15765bc6e450a')
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, [])
  return (
    <div className='App'>


      {
        news.length === 0 ?
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          :
          <Row xs={1} md={3} lg={4} className="g-5 container mt-5 ms-5">
            {
              news.map(nw => <News news={nw}></News>)
            }

          </Row>
      }
    </div>
  );
}

export default App;
