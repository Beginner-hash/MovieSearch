import { useEffect } from "react";

export const useApiKeyRequired = () => {
  useEffect(() => {
    let localStorageApikey = localStorage.getItem("omdbApiKey");
    while (!localStorageApikey) {
      const apiKey = prompt("Entrez la cle API");
      localStorageApikey = apiKey;
      if (apiKey) {
        localStorage.setItem("omdbApiKey", apiKey);
      }
    }
  }, []);
};
