import React, { useState } from 'react'
import './Allcss.css';
const Analyse = ({ title,mode,alert }) => {
    const [MyData, setMyData] = useState('')
    const handleInput = (event) => {
        setMyData(event.target.value);

    }
    let upercase = () => {
        console.log('upercase', MyData);
        let text = MyData.toUpperCase();
        console.log(text, 'hhhhhhhhhhhhh')
        setMyData(text);
        alert("converted in uppercase","success")
        
    }
    const lowercase = () => {
        let data = MyData.toLowerCase();
        setMyData(data);
        console.log(setMyData(data))
        alert("converted in LowerCase","success")
    }
    const clear = () => {
        setMyData('');
    }
    const copy = () => {
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        alert("Text Copied","success")
    }
    const remove = () => {
        let data = MyData.split(/[ ]+/);
        setMyData(data.join(" "));
        alert("Spaces Removed","success")
    }

    let total = MyData.split(" ").filter((element)=>{return element.length!==0}).length;
    let characters = MyData.length;
    return (
        <>
        <div className={`container`}>
            <div className="container mt-3 ">
                <h2 className="heading">{title}</h2>
                <div className="mb-3">
                    <label className="form-label label1">Example textarea</label>
                    <textarea className="form-control" id="mybox" rows="8"
                        onChange={handleInput} value={MyData}>
                        {MyData}
                    </textarea>
                </div>
                <div className="container btns">
                    <button onClick={upercase}>UpperCase</button>
                    <button onClick={lowercase}>LowerCase</button>
                    <button onClick={clear}>Clear</button>
                    <button onClick={copy}>Copy</button>
                    <button onClick={remove}>Remove Spaces</button>
                </div>
            </div>
            <div className="container mt-4">
                <h2 className="heading2">total words is {total} and total characters is {characters}</h2>
            </div>
            <div className="container">
                <h2 className="heading2">Preview Of TextAnalyser</h2>
                <div className="para">
                    {
                        MyData
                    }
                </div>
            </div>
            </div>
        </>
    )
}

export default Analyse
