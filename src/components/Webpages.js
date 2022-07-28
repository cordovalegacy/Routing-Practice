import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

const Home = (props) => {

    return (

        <div id='home-wrapper'>
            <div id='home-row'>
                <Link to={'/4'}>Number Page</Link>
                <Link to={'/hello'}>Hello Page</Link>
                <Link to={'/hello/blue/red'}>Blue/Red Hello Page</Link>
            </div>
            <div id='home-information'>
                <h1>Welcome</h1>
            </div>
        </div>
    )
}

const Num = (props) => {

    const [num, setNum] = useState(4)

    const numHandler = (e) => {
        e.preventDefault();
        setNum(4);
    }

    return (

        <div id='number-wrapper'>
            <div id='number-row'>
                <Link to={'/'}>Home Page</Link>
                <Link to={'/hello'}>Hello Page</Link>
                <Link to={'/hello/blue/red'}>Blue/Red Hello Page</Link>
            </div>
            <div id='number-information'>
                <label>{num}</label>
                <input type='number' value={num} onChange={(e) => {setNum(e.target.value)}}/>
                <button onClick={numHandler}>Add Number</button>
            </div>
        </div>
    )
}

const Hello = (props) => {

    const [word, setWord] = useState("Hello")

    const wordHandler = (e) => {
        e.preventDefault();
        setWord("Hello");
    }

    return (

        <div id='hello-wrapper'>
            <div id='hello-row'>
                <Link to={'/4'}>Number Page</Link>
                <Link to={'/'}>Home Page</Link>
                <Link to={'/hello/blue/red'}>Blue/Red Hello Page</Link>
            </div>
                <div id='hello-information'>
                <h2>The word is: {word}</h2>
                <input type='text' value={word} onChange={(e) => {setWord(e.target.value)}} />
                <button onClick={wordHandler}>Add Word</button>
            </div>
        </div>
    )
}

const BlueRedHello = (props) => {

    const [coloredWord, setColoredWord] = useState("Hello")
    const [storedColoredWord, setStoredColoredWord] = useState([])

    const coloredObj = [
        {
            coloredWord,
            completed: false
        }
    ]

    const coloredWordHandler = (e) => {
        e.preventDefault();
        setStoredColoredWord(...storedColoredWord, coloredObj)
        setColoredWord("Hello");
    }

    return (

        <div id='blue-red-hello-wrapper'>
            <div id='blue-red-hello-row'>
            <Link to={'/'}>Home Page</Link>
            <Link to={'/4'}>Number Page</Link>
            <Link to={'/hello'}>Hello Page</Link>
            </div>
            <div id='blue-red-hello-information'>
            <h3>The word is: {coloredWord}</h3>
            <input type='text' value={coloredWord} onChange={(e) => {setColoredWord(e.target.value)}} />
                <button onClick={coloredWordHandler}>Add Word</button>
            </div>
        </div>
    )
}

const Webpages = (props) => {

    return (

        <BrowserRouter>
        <div id='web-page-consolidation'>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/4' element={<Num />} />
                <Route path='/hello' element={<Hello />} />
                <Route path='/hello/blue/red' element={<BlueRedHello/>} />
            </Routes>
        </div>
        </BrowserRouter>
        )

}


export default Webpages;