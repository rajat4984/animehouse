import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";

function AnimeList() {
  const { getData } = useGlobalContext();
  const getAnimeList = async () => {
    const webData = await getData();
    const webArray = webData.results;
    const animeArray = webArray.filter((animeItem) => {
      if (animeItem.origin_country[0] === "JP") {
        return animeItem; //returns items whose origin country is japan
      }
    });
    console.log(animeArray);
  };
  useEffect(() => {
    getAnimeList();
  }, []);

  return (
    <div>
      <h1 style={{ color: "white" }}>Hello world</h1>
    </div>
  );
}

export default AnimeList;
