import React, { useEffect } from "react";

import "../pages/styles/TextShpere.css";

// Importing TagCloud package
import TagCloud from "TagCloud";
import { Link } from "react-router-dom";


const TextShpere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {

      const container = ".tagcloud";
      const texts = [
        "風 Viento",
        "水 Agua",
        "火 Fuego",
        "天 Cielo",
        "木 Arbol",
        "月 Luna",
        "待 Esperar",
        "読 Leer",
        "買 comprar",
        "川 Rio",
        "山 Montaña",
        "日 Dia",
        "田 Campo",
        "日本語"
      ];

      const options = {
        radius: 250,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>

      <div className="text-shpere">
        <span className="tagcloud"></span>
      </div>
      <div className="text-center align-item-center">
          <h1 className="mb- text-lg-center">Kanji Para todos
          <br />
          </h1>
          <h3>¡Ha dado el primer paso para aprender Kanji japonés! ¡Felicidades!</h3>
          <Link className="btn btn-info mt-3" to={'/kanji/list'}>Comenzar</Link>
       
      </div>

    </>
  );
};

export default TextShpere;
