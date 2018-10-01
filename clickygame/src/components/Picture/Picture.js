import React, { Component } from 'react';
import "./Picture.css";
import Navbar from "../Navbar";
import Poster from "../Poster";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class Picture extends Component {
 // customizing components using states(can change)
    state = {
        shuffledArray: this.props.shuffled,
        points: 0,
        topScore: 0
    }
   
// create shuffle function to make pictures shuffle
    shuffle = (array) => {
        let i = array.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
        
    }

    clickImg = (number) => {
        if (this.state.shuffledArray[number].beenClicked == false){
         this.state.shuffledArray[number].beenClicked = true;
         this.setState({points: (this.state.points + 1)});
         this.setState({shuffledArray: this.shuffle(this.state.shuffledArray)});
        if (this.state.topScore < this.state.points){
          this.setState({topScore: this.state.points});
        }
        }
        else{
            this.setState({points: 0});
            for (var i = 0; i < 12; i++){
                this.state.shuffledArray[number].beenClicked = false;
            }
        }
        return console.log(" puntos: "+this.state.points+" topScore:"+this.state.topScore); 
    };

    // calling Navbar and Poster to App.js
    render() { return(
        <div>
     <Navbar score={{points: this.state.points, topScore: this.state.topScore}}/>
      <Poster />
 <div className="container" style={{padding: 60}}>
 <div className="row">
     <div className="col-sm" >
     <div style={{height: 150, width: 150, backgroundColor: 'red'}}>
     <img src={ require(`../../Images/${this.state.shuffledArray[0].image}`) } height="150" width="150" onClick={() => {this.clickImg(0)}}></img>
    
     </div>
     </div> 
     <div className="col-sm" >
     <div style={{height: 150, width: 150, backgroundColor: 'red'}}>
     <img src={ require(`../../Images/${this.state.shuffledArray[1].image}`) } height="150" width="150" onClick={() => {this.clickImg(1)}}></img>
     </div>
     </div>
      <div className="col-sm" >
     <div style={{height: 150, width: 150, backgroundColor: 'red'}}>
     <img src={ require(`../../Images/${this.state.shuffledArray[2].image}`) } height="150" width="150" onClick={() => {this.clickImg(2)}}></img>
    
     </div>
     </div> 
     <div className="col-sm" >
     <div style={{height: 150, width: 150, backgroundColor: 'red'}}>
     <img src={ require(`../../Images/${this.state.shuffledArray[3].image}`) } height="150" width="150" onClick={() => {this.clickImg(3)}}></img>
     </div>
     </div> 

     </div>
     <div className="row" style={{marginTop: 20}}>
     <div className="col-sm" >
     <div style={{height: 150, width: 150, backgroundColor: 'red'}}>
     <img src={ require(`../../Images/${this.state.shuffledArray[4].image}`) } height="150" width="150" onClick={() => {this.clickImg(4)}}></img>
     </div>
     </div> 
     <div className="col-sm" >
     <div style={{height: 150, width: 150, backgroundColor: 'red'}}>
     <img src={ require(`../../Images/${this.state.shuffledArray[5].image}`) } height="150" width="150" onClick={() => {this.clickImg(5)}}></img>
     </div>
     </div>
      <div className="col-sm" >
     <div style={{height: 150, width: 150, backgroundColor: 'red'}}>
     <img src={ require(`../../Images/${this.state.shuffledArray[6].image}`) } height="150" width="150" onClick={() => {this.clickImg(6)}}></img>
     </div>
     </div> 
     <div className="col-sm" >
     <div style={{height: 150, width: 150, backgroundColor: 'red'}}>
     <img src={ require(`../../Images/${this.state.shuffledArray[7].image}`) } height="150" width="150" onClick={() => {this.clickImg(7)}}></img>
     </div>
     </div> 

       </div>
     <div className="row" style={{marginTop: 20}}>
     <div className="col-sm" >
     <div style={{height: 150, width: 150, backgroundColor: 'red'}}>
     <img src={ require(`../../Images/${this.state.shuffledArray[8].image}`) } height="150" width="150" onClick={() => {this.clickImg(8)}}></img>
     </div>
     </div> 
     <div className="col-sm" >
     <div style={{height: 150, width: 150, backgroundColor: 'red'}}>
     <img src={ require(`../../Images/${this.state.shuffledArray[9].image}`) } height="150" width="150" onClick={() => {this.clickImg(9)}}></img>
     </div>
     </div>
      <div className="col-sm" >
     <div style={{height: 150, width: 150, backgroundColor: 'red'}}>
     <img src={ require(`../../Images/${this.state.shuffledArray[10].image}`) } height="150" width="150" onClick={() => {this.clickImg(10)}}></img>
     </div>
     </div> 
     <div className="col-sm" >
     <div style={{height: 150, width: 150, backgroundColor: 'red'}}>
     <img src={ require(`../../Images/${this.state.shuffledArray[11].image}`) } height="150" width="150" onClick={() => {this.clickImg(11)}}></img>
     </div>
     </div> 

    </div>
 </div>
 </div>
);
}


}
export default Picture;