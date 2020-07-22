import React, { Component } from 'react';
import './App.css';
import Circle from './components/CircleShape';
import Rectangle from './components/Rectangle';
import Polygon from './components/Polygon';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      value: '',
      cx: 0,
      cy: 0,
      x: 0,
      y: 0,
      figure: '',
      radius: 0,
      width : 0,
      height: 0,
      axis: []
    };

    this.handleChange = this.handleChange.bind(this);
}


  handleChange(event) {
    this.setState({value: event.target.value});
    const data = this.state.value.split("\n");
    let getFigure,fig;
    //For each line in textarea
    for (let i = 0; i < data.length; i++) {
      getFigure = data[i].trim().split(" ");
      fig = getFigure[0].toUpperCase();  //convert lowercase c/r/p to Uppercase
      this.setState({figure: fig});

      //Check if the figure is Circle (C) and total parameters passed in textarea are 4 then it is valid
      //Check if the figure is Rectangle (R) and total parameters passed in textarea are 5 then it is valid
      //Check if the figure is Polygon (P)
      //If none of these, then it is an error case
      if(fig === 'C') {
        if(getFigure.length === 4 ){
          this.setState({cx: getFigure[1], cy: getFigure[2], radius: getFigure[3]});
          }
      } else if(fig === 'R') {  
        if(getFigure.length === 5 ){
          this.setState({ x: getFigure[1], y: getFigure[2], width: getFigure[3], height: getFigure[4]});
        }
      } else if(fig === 'P') {
          let length = getFigure.length;
          let axisArray = getFigure.slice(1,length).join();
          this.setState({ axis: axisArray });  
      } else {
        console.log("Error")
      } 


    }
  }

  // Select Random Color to be filled in SVG
  randomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  render(){
    return (
      <div>
        <label>Enter the coordinates
            <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        {/* Call components based on figure C/ R / P  */}
        <Circle data={this.state} color={this.randomColor()}/> 
        <Rectangle data={this.state} color={this.randomColor()}/> 
        <Polygon data={this.state.axis} color={this.randomColor()}/> 
      </div>
    );
  }
  
}

export default App;
