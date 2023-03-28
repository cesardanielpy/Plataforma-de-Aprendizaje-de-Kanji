import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FormKanji from './FormKanji';

const EditKanji = () => {
  const { id } = useParams();
  const [kanji, setKanji] = useState({});

  useEffect(() => {
    const getKanji = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/kanjiN5/${id}`);
        setKanji(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getKanji();
  }, [id]);

  const handleUpdate = async (values) => {
    try {
      await axios.put(`http://localhost:8000/api/kanjiN5/${id}`, values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className="text-center mt-2">Editar Kanji</h2>
      <div className="row d-flex justify-content-center">
        <div className="col-lg-12 col-sm-12 col-md-6">
          <FormKanji initialValues={kanji} onSubmit={handleUpdate}>
            <button type="submit" className="btn btn-primary">
              Actualizar Kanji
            </button>
          </FormKanji>
        </div>
      </div>
    </>
  );
};

export default EditKanji;