import React from 'react';
import ReactDOM from 'react-dom';
import Forma from './components/Forma.js' 
import Card from './components/Card.js'

const App = () =>{
  const str="Klikni ovde";  
  const emoji = [
    {
      description: "happy",
      url : "https://images-na.ssl-images-amazon.com/images/I/71ZtQnzOU4L._SY355_.jpg"
    },
    {
      description: "thinking",
      url : "https://banner2.cleanpng.com/20180606/joe/kisspng-the-emoji-movie-discord-sticker-emoticon-emoji-question-5b17be91b438f1.7283439615282827697382.jpg"
    },
    {
      description: "sleeping",
      url: "https://observer.com/wp-content/uploads/sites/2/2014/11/sleep.png"
    }
  ]

  return ( 
    <>
    <Forma str={str}/>
    <Card url={emoji[0].url} description={emoji[0].description}/>
    <Card url={emoji[1].url} description={emoji[1].description}/>
    <Card url={emoji[2].url} description={emoji[2].description}/>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
