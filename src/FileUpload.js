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
        url = e.target.files[0].name;
        console.log(url) ;
         <div>
        
      </div>

    }

    function generatePDF(e){
        var doc = new jsPDF(); 
        doc.setFontSize(40);
        doc.text("" + MonsterStats.name, 25, 25);
        var img = new Image();
        img.src = URL.createObjectURL(file); 
        doc.addImage(img, 'png', 10, 78, 12, 15)
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
