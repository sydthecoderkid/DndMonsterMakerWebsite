import React from 'react'; 
import MonsterStats from './MonsterStats'; 
import "./EnterName.css";
import "./FileUpload"
import jsPDF from 'jspdf';
import FileUpload from './FileUpload';

class EnterName extends React.Component{
  
     
    constructor(props) {
        super(props); //Overloading the parents properties allowing us to set our own
        this.state = {value: ' '}; //Sets the state/text to an empty string
        this.handleChange = this.handleChange.bind(this); //Assign the function handlers for change
        this.handleSubmit = this.handleSubmit.bind(this); //Assign function handlers for submitting info
        
      }

      

      handleChange(e){
        this.setState({value: e.target.value}); //This sets the state to the value entered
        MonsterStats.name = this.state.value;  //Sets the monster name 
        this.updateName(e); 

      }

      updateName(e){
        this.setState((state) => {
          // Important: read `state` instead of `this.state` when updating.
          MonsterStats.name = state.value; 
          this.setState({value: e.target.value});
          return {value: state}
        });
      }

      
      

    handleSubmit(e){
       
         e.preventDefault(); 
        

      }

  

    setNum(e){
         switch(e.target.name){
           default:
             break; 
           case 'HP':
             MonsterStats.HP = e.target.value; 
             break; 
             case 'Char':
             MonsterStats.Char = e.target.value; 
             break; 
             case 'Wis':
             MonsterStats.Wis = e.target.value; 
             break; 
             case 'Int':
             MonsterStats.Int = e.target.value; 
             break; 
             case 'Dex':
             MonsterStats.Dex = e.target.value; 
             break; 
             case 'Str':
             MonsterStats.Str = e.target.value; 
             break; 
             case 'Con':
             MonsterStats.Con = e.target.value; 
             break; 
         }

    }
    

      render() {
        
        return (
          <div className='container'> 
          <form> 
          <div className='boxOne'>
          
             <label>
              Name:
              <input className='box' type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            </div>
            
           
            
            <div className='numberTick'>
              <label> Max Hit Points: </label>
              <input name='HP'  className = 'number' type="number" onChange={this.setNum}></input>
            </div>
            <div className='numberTick'>
              <label>Strength Mod: + </label>
              <input name = 'Str' className = 'number' type="number" onChange={this.setNum} ></input>
            </div>
            <div className='numberTick'>
              <label>Dexterity Mod: + </label>
              <input name = 'Dex' className = 'number' type="number" onChange={this.setNum} ></input>
            </div>
            <div className='numberTick'>
              <label>Int Mod: + </label>
              <input name = 'Int' className = 'number' type="number" onChange={this.setNum} ></input>
            </div>
            <div className='numberTick'>
              <label>Wis Mod: + </label>
              <input name = 'Wis' className = 'number' type="number" onChange={this.setNum} ></input>
            </div>
            <div className='numberTick'>
              <label>Char Mod: + </label>
              <input name = 'Char' className = 'number' type="number" onChange={this.setNum} ></input>
            </div>

             
           
          </form>
          </div>


         
         );
      }
}




export default EnterName; 