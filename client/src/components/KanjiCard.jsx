import React from 'react'
import { useNavigate } from 'react-router-dom';

const KanjiCard = ({ kanji }) => {
    const navigate = useNavigate();
    return (
        <div className='col-lg-4 kanji-card'>
            <div className="card text-center mt-3 card-hovered" onClick={() => navigate(`/kanji/${kanji._id}`)}>
                <div className="card-body">
                    <h5 className="card-title">{kanji.trazo}</h5>
                    <p className="card-text">{kanji.significado}</p>
                </div>
            </div>
        </div>
        
    )
}

export default KanjiCard;
