import React, {Component} from 'react';
import alQuran from '../services/alQuranService';
import Ayah from "./ayah";

class Surah extends Component {
    state = {
        surah: {ayahs:[], edition:{} },
        translation: {ayahs:[], edition:{} }
    };


    async componentDidMount() {
        let {surah} = this.props;
        if(!surah){
            const surahResponse = await alQuran.getSurah(1);
            surah = surahResponse.data.data;
        }
        console.log(surah);
        this.setState({surah});
    }


    render() {
        const {ayahs: arabicAyahs, name: arabicName, englishName, number} = this.state.surah;
        return (<div className="container">
            <h2>{arabicName}</h2>
            <h2>{englishName}</h2>
            {arabicAyahs.map(ayah =>
                <Ayah surahNo={number} ayah={ayah}/>
            )}
        </div>);
    }
}

export default Surah;