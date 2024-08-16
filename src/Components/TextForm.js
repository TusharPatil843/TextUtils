// Components/TextForm.js
import React , { useState }from 'react';


export default function TextForm(Props) {
    
    const [Text , setText] = useState('');

    const handleUpClick =  ()=> {
        // console.log('Upclicked' + Text); 
        let newText = Text.toUpperCase(); 
        setText(newText); 
        Props.showAlert('Converted to UPPERCASE.' ,'success'); 
    }
    const handlelowClick =  ()=> {
        // console.log('Upclicked' + Text); 
        let newText = Text.toLowerCase();
        setText(newText);  
        Props.showAlert('Converted to lowercase.' , 'success'); 
    }
    const handlecapClick =  ()=> {
        // console.log('Upclicked' + Text); 
        
        const words = Text.split(" ");
        
        for (let i = 0; i < words.length; i++) {
            if(words[i])
                words[i] = words[i][0].toUpperCase() + words[i].substring(1);
        }
        
        let newText = words.join(" ");
        setText(newText);  
        Props.showAlert('Capitalized the text.' , 'success'); 
    }

    const handleonChange = (event)=> {
        console.log('OnChange clicked');
        setText(event.target.value);
        
    }

    return (
        <div className='container'>
        <div className="form-group my-3 mb-3 " style={{color : Props.mode==='dark'?'white':'black'}}>
            <label htmlFor="myBox" ><h3>Enter the text</h3></label>
            <textarea className="form-control" id="myBox" rows="6" value={Text} onChange={handleonChange} placeholder='Enter text here' style={{backgroundColor : Props.mode==='dark'?'grey':'white' ,color: Props.mode === 'dark' ? 'white' : 'black',
            caretColor: Props.mode === 'dark' ? 'white' : 'black' 
            }}></textarea>
        </div>
            <button onClick={handleUpClick} className='btn btn-primary btn-success mx-3'>Convert to UPPERCASE</button>
            <button onClick={handlelowClick} className='btn btn-primary btn-success mx-3'>Convert to lowercase</button>
            <button onClick={handlecapClick} className='btn btn-primary btn-success mx-3'>Capitalize</button>
        </div>
    );
}
