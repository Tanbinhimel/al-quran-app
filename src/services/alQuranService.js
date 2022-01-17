import http from "./httpService";
import config from '../config.json';

const {apiUrl} = config;
const ayahUrl = `${apiUrl}/ayah/`;
const surahUrl = `${apiUrl}/surah/`;
const alQuranUrl = `${apiUrl}/quran/quran-uthmani`;

function getAyah(ayahNo){
    return http.get(`${ayahUrl}/${ayahNo}`);
}

function getAyahTranslation(ayahNo, translator='bn.bengali'){
    return http.get(`${ayahUrl}/${ayahNo}/${translator}`);
}

function getSurah(surahNo){
    return http.get(`${surahUrl}/${surahNo}`);
}

function getSurahTranslation(surahNo, translator='bn.bengali'){
    return http.get(`${surahUrl}/${surahNo}/${translator}`);
}

function getAlQuran(){
    return http.get(alQuranUrl);
}

function getAlQuranTranslation(translator='bn.bengali'){
    return http.get("https://api.alquran.cloud/v1/quran/bn.bengali");
}

export default {getAyah, getAyahTranslation, getSurah, getSurahTranslation, getAlQuran, getAlQuranTranslation};