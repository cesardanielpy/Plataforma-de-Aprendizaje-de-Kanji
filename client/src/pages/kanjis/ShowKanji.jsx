import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ShowKanji = () => {

  const { id } = useParams();
  const [kanji, setKanji] = useState({});
  const [kanjiImage, setKanjiImage] = useState();

  const getkanji = async () => {
    await axios.get(`http://localhost:8000/api/kanjiN5/${id}`)
      .then((response) => {
        setKanji(response.data);
        getImage(response.data.url);
        console.log("Datos del kanji: ",kanji)
      })
      .catch((e) => console.log(e));
  }

  const getImage = async (imageUrl) => {
    await axios.get(`http://localhost:8000/api/kanjiN5/files/${imageUrl}`, {responseType: 'blob'})
      .then((response) => {  
        const imageUrl = URL.createObjectURL(response.data);
        setKanjiImage(imageUrl);
      })
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    getkanji();
  }, []);

  return (
    <>
      <div className=' d-flex justify-content-center text-center'>
        <img src={kanjiImage} alt='image' />
      </div>

      <div className='row d-flex justify-content-center text-center'>
        <div className='col-lg-4 col-sm-12 col-md-6'>
          <div className="card text-white bg-success mb-3" style={{ maxwidth: '18rem' }}>
            <div className="card-title"><h1>{kanji.trazo}</h1></div>
            <div className="card-title"><h2>{kanji.significado}</h2></div>
            <div className="card-body">
              <h3>Lectura Kunyomi.</h3>
              <h3 className="card-title">{kanji.lecturaKun}</h3>
              <h3>Lectura Onyomi.</h3>
              <h3 className="card-title">{kanji.lecturaOn}</h3>
              <h3>Ejemplo de Vocabulario 1.</h3>
              <h3 className="card-title">{kanji.palabra1}</h3>
              <h3>Hiragana.</h3>
              <h3 className="card-title">{kanji.hiragana1}</h3>
              <h3>Significado.</h3>
              <h3 className="card-title">{kanji.significado1}</h3>
              <h3>Ejemplo de Vocabulario 2.</h3>
              <h3 className="card-title">{kanji.palabra2}</h3>
              <h3>Hiragana.</h3>
              <h3 className="card-title">{kanji.hiragana2}</h3>
              <h3>Significado.</h3>
              <h3 className="card-title">{kanji.significado2}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShowKanji