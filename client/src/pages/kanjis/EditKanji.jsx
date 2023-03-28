import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import FormKanji from './FormKanji';

const EditKanji = () => {
  const { id } = useParams();
  const [kanji, setKanji] = useState({});

  useEffect(() => {
    const getkanji = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/kanjiN5/${id}`);
        setKanji(response.data);
        console.log("Datos del kanji: ", response.data)
      } catch (error) {
        console.log(error);
      }
    }

    getkanji();
  }, [id]);
    return (
        <>
        <h2 className='text-center mt-2'>Actualizar Kanji</h2>
        <hr/>
            <div className='row d-flex justify-content-center'>
                <div className='col-lg-12 col-sm-12 col-md-6'>
                    <FormKanji 
                    initialValues={kanji}
                    botonTexto="Actualizar Kanji"
                    />
                </div>
            </div>
        </>
    )
}

export default EditKanji