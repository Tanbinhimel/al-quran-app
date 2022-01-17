import React, {Component} from 'react';
import Surah from "./surah";
import Select from "./common/select";

class Surahs extends Component {
    state = {};

    render() {
        return (<div className='container'>
            <h1>Surahs</h1>
            <Select name="englishName" options={this.props.surahs}/>
            <Surah/>
        </div>);
    }
}

export default Surahs;