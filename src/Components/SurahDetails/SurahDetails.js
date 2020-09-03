import React from 'react';

const SurahDetails = (props) => {
    const surahDetails = props.surahDetails
    const meanings = props.surahMeaning;
    // console.log(surahDetails);
    const {name, englishName, ayahs, englishNameTranslation, revelationType } = surahDetails;
    // console.log(typeof ayahs, ayahs);
    if(ayahs === undefined){
        return "";
    }
    // console.log(meanings);
    let means = [];
    for (let i = 0; i < meanings.length; i++) {
        const e = meanings[i].text;
        // console.log(e);
        means.push(e);
    }
    return (
        <div>
            <h1 className="text-warning">{name}</h1>
            <h5>{englishName} - {englishNameTranslation}</h5>
            <p>Revealed in {revelationType}</p>
            <hr/>
            {
                ayahs.map((ayah,idx) => <div key={ayah.number}>
                        
                        <div style={{display: 'inline-flex',justifyContent: 'space-evenly'}}>
                            <h4>{ayah.text}</h4>
                            <p className="text-success" style={{border: '2px solid orange',width: '30px',padding: '0 5px',margin: '8px',height:'35px',borderRadius: '50px'}}><small>{Number(idx+1).toLocaleString('ar-SA')}</small></p>
                        </div>
                        <p className="text-info">{means[idx]}</p>
                    </div>
                )
            }
        </div>
    );
};

export default SurahDetails;