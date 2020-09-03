import React from 'react';
import './Surah.css';
const Surah = (props) => {
    // console.log(props);
    const surah = props.surah;
    const meaning = surah.englishNameTranslation;
    const name = surah.name;
    const number = props.number;
    const surahStyle = {
        margin: '10px',
        borderRadius: '5px',
        padding: '5px',
        paddingTop: '15px',
        cursor: 'pointer',
        transition: 'all 0.5s',
        width: '40%',
        margin: '5px auto',
        marginTop: '20px'
    }
    const handleSurahDetails = props.handleSurahClick;
    return (
        <div onClick={() => handleSurahDetails(surah.number)} style={surahStyle}  className="text-warning surah">
            <h4>{Number(number+1).toLocaleString('ar-SA')}. {name}</h4>
            <p className="text-primary">{meaning}</p>
        </div>
    );
};

export default Surah;