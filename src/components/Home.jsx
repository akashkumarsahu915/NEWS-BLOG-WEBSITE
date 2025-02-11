import  { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fb1db45e41534a1497ef6b571da11477");
        setNews(response.data.articles)
      } catch (error) {
        console.error("Error fetching news:", error);
      } 
    };
    fetchData();
  }, []);  

  return (
    <div>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4'>
        {
          news.map((n) => (
            <Card
              title={n.title}
              description={n.description}
              urlToImage={n.urlToImage}
              more={n.url}
              author={n.author}
              at={n.publishedAt}
              source={n.source.name}
            />
          ))
        }
      </div>
    </div>
  );
}