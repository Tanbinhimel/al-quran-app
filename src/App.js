import AlQuran from "./component/alQuran";
import NavBar from "./component/navbar";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Surahs from "./component/surahs";
import alQuran from "./services/alQuranService";
import React, {Component} from "react";

class App extends Component{
    state = {surahs: [], translations:[]};

    async componentDidMount() {
        const surahs = await this.fetchSurahs();
        //const translations = await this.fetchTranslations();

        this.setState({surahs});
    }

    async fetchSurahs() {
        const response = await alQuran.getAlQuran();
        return response.data.data.surahs;
    }
    async fetchTranslations() {
        const response = await alQuran.getAlQuranTranslation();
        return response.data.data.surahs;
    }

    render() {
      return (
          <div className="App">
              <NavBar />
              <Surahs surahs={this.state.surahs}/>
          </div>
      );
  }
}

export default App;
