import React from "react";
import { useContext, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const getData = async () => {
    const url =
      "https://api.themoviedb.org/3/discover/tv?api_key=292b9360de2fad72bc11fb6a4f8362f4&with_genres=16&page=3";
    const response = await axios.get(url);
    const data = await response.data;
    return data; //this contains all animation including other languages
  };

  return (
    <AppContext.Provider
      value={{
        getData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
