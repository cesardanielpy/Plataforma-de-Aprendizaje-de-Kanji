import React, { useEffect, useState } from 'react'
import axios from 'axios'
import KanjiCard from '../../components/KanjiCard'



const ListKanji = () => {

  const [kanjis, setKanjis] = useState([]);
  useEffect(() => {

    const getkanjis = async () => {
      await axios.get(`http://localhost:8000/api/kanjiN5`)
        .then((response) => {
          setKanjis(response.data);
        }).catch((e) => console.log(e));
    }

    getkanjis();
    
  }, [])

  return (
    <>
    
      <div className='container mt-3'>
        <h2 className='text-center'>Kanjis Basicos Nivel 1</h2>
        <div className='row'>
          {kanjis.map((kanji, index) => <KanjiCard key={kanji._id}
            kanji={kanji} />)}
        </div>
      </div>

    </>
  )
}

export default ListKanji