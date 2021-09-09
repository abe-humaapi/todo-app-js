import { Component, createRef } from 'react';
import './partOne.css';
import './TodoApp';



export default class PartOne extends Component {

  constructor(props) {
    super(props);
    this.inputRef = createRef();
    this.state = {
      listItems: [],
    };
    this.addToDo = this.addToDo.bind(this);
  }

  addToDo() {
    const inputValue = this.inputRef.current.value;
    // This is the #1 solution to add item in Array state
    //  const listItemClone = this.state.listItems.slice()
    // listItemClone.push(inputValue)
    // this.setState({listItems:listItemClone});

    //This is the #2 solution (best) to add item in Array state
    this.setState({ listItems: [...this.state.listItems, inputValue] });
    this.inputRef.current.value = "";
  }

  render() {
    const element = this.state.listItems.map((item, index) =>
      <p className="Output" key={index}>{item}</p>)
    const divStyle = {
      backgroundColor: this.props.fill
    }
    return (

      <div className="Container">
        <div style={divStyle} className="FistItem">
          <input className="NewItem" ref={this.inputRef}  ></input>
          <button onClick={this.addToDo} > +</button>

        </div>
        <div className="Undo">
          {element}
        </div>
      </div>
    )
  }

}


