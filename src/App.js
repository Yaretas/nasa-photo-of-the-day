import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";
import NasaCards from "./NasaCards";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(response => {
      console.log(response)
      const nasaPic = response.data.url;
      setImages(nasaPic);
      console.log(images);

    })

    .catch(err => {
      console.log(`Err`);
    })
  }, []);
  
  return (
    <div className="App">
        <p>
          Read through the instructions in the README.md file to build your NASA
          app! Have fun 🚀!
          </p>
      <NasaCards imgUrl={images} />
      </div>

  );
}

export default App;
