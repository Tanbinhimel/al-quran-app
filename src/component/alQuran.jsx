import React, {Component} from 'react';
import alQuran from '../services/alQuranService';
import Surah from "./surah";

class AlQuran extends Component {
    state = {
        surahs: []
    };


    async componentDidMount() {
        const response = await alQuran.getAlQuran();
        const surahs = response.data.data.surahs;
        this.setState({surahs});

    }


    render() {
        const {surahs}= this.state;
        const surah = surahs.at(0);
        console.log(surah);
        return (<div>AL QURAN
            <Surah surah={surah}/>
            {/*{surahs.map(surah =>*/}
            {/*    <Surah surah={surah} />*/}
            {/*)}*/}
        </div>);
    }
}

export default AlQuran;