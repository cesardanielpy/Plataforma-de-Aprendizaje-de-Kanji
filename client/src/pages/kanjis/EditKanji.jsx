import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import FormKanji from './FormKanji';

const EditKanji = () => {
  const { id } = useParams();
  const [kanji, setKanji] = useState({});
  const [image, setImage] = useState();

  useEffect(() => {
    const getkanji = async () => {
      try {
        const response = await axios.put(`http://localhost:8000/api/kanjiN5/${id}`);
        setKanji(response.data);
        console.log("Datos del kanji: ", response.data)
      } catch (error) {
        console.log(error);
      }
    }


    getkanji();
  }, [id]);

  const actualizarKanji = async (updatedValues) => {
    try {
      const data = {data: updatedValues, file: image }
      await axios.put(`http://localhost:8000/api/kanjiN5/${id}`, data);
      console.log("Kanji successfully updated!");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h2 className='text-center mt-2'>Actualizar Kanji</h2>
      <hr />
      <div className='row d-flex justify-content-center'>
        <div className='col-lg-12 col-sm-12 col-md-6'>
          <FormKanji
            initialValues={kanji}
            botonTexto="Actualizar"
            funcAction={actualizarKanji}
            setImage={setImage}
          />
        </div>
      </div>
    </>
  )
}

export default EditKanji