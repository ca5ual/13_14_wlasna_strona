import React, {Component} from "react";
import './Blog.css'
import jsonData from '../res/text.json'



export default class Blog extends Component {
    constructor() {
        super()
        this.state = {msg: ''}
        this.txtData = () => JSON.parse(JSON.stringify(jsonData));
    }
    changeMsg () {
        this.setState({msg: 'Dziś czeka Cię niezapomniana podróż balonem'});
    }
    render() {
        
        const items = [];
        for (let i = 0; i<this.txtData().count; i++) {
            let value = this.txtData().text[i];
            items.push (
                <div id={`"div${i+1}"`} className="contentsFlex">
                    <img className="contentsFlexImg" src={'/img/img'+(i+1)+'.jpg'} alt =""></img>
                    
                    <p className="contentsFlexTxt">{value}</p>
                </div>
            );
        }
        
    return (
      <div className="contentDivClass">
        <p className="headerText">
        <h1>Nasz własny blog</h1>
        <h5>Zostawaj z nami na żywo</h5>
        </p>
        {items}
       
                <h1>{this.state.msg}</h1>
                <p className="buttonFooter">
                <button onClick = {()=>this.changeMsg()}>
                  Kliknij, aby poznac tajemnicę
                </button></p>
      </div>
    )
  }
}

