import React, { Component } from 'react'
import './ButtonToggle.css';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Input } from 'reactstrap';

export class ButtonToggle extends Component {
    constructor(props) {
        super(props);
    
        // this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false,
          msg: props.message,
          numItems : 4,
          currentClick: 0,
          on: false,
          on2: false,
          on3: false,
          on4: false,
        };
      }
    
    toggle = () =>  {
        
      this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

    toggleButton1 = () => {
        this.setState({
            on: !this.state.on,
            on2: false,
            on3: false,
            on4: false,
            currentClick: 1,
        });
    }

    toggleButton2 = () => {
        this.setState({
            on: false,
            on2:!this.state.on2,
            on3: false,
            on4: false,
            currentClick: 2,
        });
    }

    toggleButton3 = () => {
        this.setState({
            on: false,
            on2:false,
            on3:!this.state.on3,
            on4:false,
            currentClick: 3,
        });
    }

    toggleButton4 = () => {
        this.setState({
            on: false,
            on2:false,
            on3:false,
            on4:!this.state.on4,
            currentClick: 4,
        });
    }

  render() {
      const {message} = this.props
      console.log(this.props)
    return (
      <div>
        <p>Please enter a starting address</p>
        <Input className= "inputStart" placeholder="Starting Address"></Input>
        <p>Please choose the amount of address:</p>
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          {message}
        </DropdownToggle>
        <DropdownMenu>
            {/* {
                Array(this.state.numItems).fill(0).map( (_, i) => <DropdownItem key={i} onClick={this.toggleButton} >{i + 1 }</DropdownItem>)
            } */}
          <DropdownItem onClick ={this.toggleButton1}>1</DropdownItem>
          <DropdownItem onClick ={this.toggleButton2}>2</DropdownItem>
          <DropdownItem onClick ={this.toggleButton3}>3</DropdownItem>
          <DropdownItem onClick ={this.toggleButton4}>4</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
         <div className ="inputG">
             {this.state.on && Array(this.state.currentClick).fill(0).map((_,x) => <Input onChange="" className= "input1" key = {x} placeholder="Address"></Input>)}
             {this.state.on2 && Array(this.state.currentClick).fill(0).map((_,x) => <Input className= "input2" key = {x} placeholder="Address"></Input>)}
             {this.state.on3 && Array(this.state.currentClick).fill(0).map((_,x) => <Input className= "input3" key = {x} placeholder="Address"></Input>)}
             {this.state.on4 && Array(this.state.currentClick).fill(0).map((_,x) => <Input className= "input4" key = {x} placeholder="Address"></Input>)}
               {/* {
                   Array(this.state.curre).fill(0).map( (_,x) => <Input key={x} placeholder="Address"></Input>)
               }  */}
        </div>
      </div>
    )
  }
}
