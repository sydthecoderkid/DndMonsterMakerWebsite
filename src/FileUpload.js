import React from 'react'
import "./index.css";
import jsPDF from 'jspdf';
import MonsterStats from './MonsterStats'; 
import EnterName from './EnterName';


 function FileUpload(){
    var url = ""; 
    const[file, setFile] = React.useState(""); 

    function handleUpload(e){
        setFile(e.target.files[0]); 
         <div>
        
      </div>

    }

    function generatePDF(e){
        var doc = new jsPDF(); 
        doc.setFontSize(20);
        doc.setFont('Courier New')
        doc.text("Monster Name: " + MonsterStats.name, 35, 25);
        doc.text("HP: " + MonsterStats.HP, 35, 50);
        doc.text("Str: " + MonsterStats.Str, 35, 65);
        doc.text("Dex: " + MonsterStats.Dex, 35, 80);
        doc.text("Int: " + MonsterStats.Int, 35, 95);
        doc.text("Wis: " + MonsterStats.Wis, 35, 110);
        doc.text("Char: " + MonsterStats.Char, 35, 125);
        var img = new Image();
        img.src = URL.createObjectURL(file); 
        doc.addImage(img, 'png', 80, 30, 130, 130)
        doc.save("monster.pdf");
        this.setState({value: e.target.value}); //This sets the state to the value entered
        MonsterStats.name = this.state.value; 
     }

    return(
        <div >
            <button className = 'generatePDF' onClick={generatePDF}>Create PDF</button>

            <input className='uploadBox' type='file' onChange = {handleUpload}></input>
            {file && <ImageThumb image ={file}/>}
        </div>
        
        
    );
}

const ImageThumb = ({ image }) => {
        return <img className='imageStyling' src={URL.createObjectURL(image)} alt={image.name} />;
      };

export default FileUpload; 
