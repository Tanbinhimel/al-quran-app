import React, {Component} from "react";
import alQuran from "../services/alQuranService";

class Ayah extends Component{
    state = {
        ayah: {
            text: "",
            surah: []
        },
        translation :{
            text: "",
            surah: []
        }
    }

    async componentDidMount() {
        const {ayah, surahNo} = this.props;
        const ayahNo = ayah.numberInSurah;
        const response = await alQuran.getAyahTranslation(`${surahNo}:${ayahNo}`);
        // console.log(surahNo, ayahNo);
        // console.log(translation);
        const translation = response.data.data;
        this.setState({ayah, translation});
        // const ayahNo ="262";
        // const {data: ayahInArabic} = await alQuran.getAyah(ayahNo);
        // const ayah = ayahInArabic.data;
        //
        // const {data: ayahInEnglish} = await alQuran.getAyahTranslation(ayahNo);
        // const translation = ayahInEnglish.data;
        // this.setState({ayah, translation});
    }

    render() {
        // console.log(this.state.translation);
        const {text: arabicText} = this.state.ayah;
        // const {name: arabicName, englishName} = this.state.ayah.surah;
        const {text: translatedText} = this.state.translation;
        console.log(this.state.translation);
        return(
            <div className="container">
                <h2 className="border border-danger rounded-1">{arabicText}</h2>
                <h2 className="border border-danger rounded-1">{translatedText}</h2>
            </div>
        )
    }

}


export default Ayah;