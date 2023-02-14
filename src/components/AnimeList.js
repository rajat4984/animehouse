import React,{useEffect,useState} from 'react';
import axios from "axios";

function AnimeList() {
    const getData = async()=>{
        const url = "https://api.themoviedb.org/3/discover/tv?api_key=292b9360de2fad72bc11fb6a4f8362f4&with_genres=16&page=2";
        const response = await axios.get(url);
        const data = await response.data;
        return data;
        // console.log(data)
        // console.log(data.results[0].origin_country[0]);
    }
    const getAnimeList = async()=>{
      const webData = await getData();
      const webArray = webData.results;
      
      console.log(webArray);
    }
    useEffect(() => {
        getAnimeList();
    }, [])
    
  return (
    <div>
        <h1 style={{color:"white"}}>Hello world</h1>
    </div>
  )
}

export default AnimeList