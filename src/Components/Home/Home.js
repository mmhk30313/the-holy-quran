import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Surah from '../Surah/Surah';
import SurahDetails from '../SurahDetails/SurahDetails';
import './Home.css';
const Home = () => {
    const [surahNames, setSurahNames] = useState([]);
    useEffect(() => {
        const url = `https://api.alquran.cloud/v1/surah`;
        fetch(url)
        .then(res => res.json())
        .then(surah => {
            // console.log(surah);
            setSurahNames(surah.data);
        })
    }, [])
    const indexStyle = {
        marginTop: '-10px',
        height: '676px',
        overflowY: 'scroll',
        width: '50%',
        padding: '0 auto'
    }
    // console.log(surahNames);
    const [flag,setFlag] =useState(false) ;
    const [surahDetails, setSurahDetails] = useState([]);
    const [surahMeaning, setSurahMeaning] = useState([]);
    const handleSurahClick = (number) => {
        // console.log(number);
        let url = `https://api.alquran.cloud/v1/surah/${number}`;
        fetch(url)
        .then(res => res.json())
        .then(surah => setSurahDetails(surah.data));
        setFlag(true);

        url = `https://api.alquran.cloud/v1/surah/${number}/en.asad`;
        fetch(url)
        .then(res => res.json())
        .then(meanings => {
            // console.log(meanings.data.ayahs);
            setSurahMeaning(meanings.data.ayahs)
        })
    }
    // console.log(surahNumber);
    return (
        <div style={{display: 'flex',height: 'fit-content',margin: '0'}}>

            <div className="index-surah text-center" style={indexStyle}>
                {
                    surahNames.map((surahName, idx) =>
                        // console.log(surahName)
                        <Surah handleSurahClick={handleSurahClick} key={idx} number={idx} surah={surahName}></Surah>
                    )
                }
            </div>
            
            {
                !flag && 
                <div className="quran-img text-center" style={indexStyle}>
                    <h3 className="text-info" style={{position: 'relative',top: '60%'}}>Get Your Surah By Clicking Surah Name</h3>
                </div>
            }
            
            {
                flag && <div className="details text-center" style={indexStyle}>
                    <SurahDetails surahMeaning ={surahMeaning} surahDetails={surahDetails}></SurahDetails>
                </div>
            }
        </div>
    );
};

export default Home;