import { useState } from 'react';

const Home = () => {

    const [currentnumber, setNumber] = useState(0);
    const handleClick = () => {
        setNumber(currentnumber + 10);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p> {currentnumber} </p>
            <button onClick = {handleClick}>Click me!</button>
        </div>
    );
}
 
export default Home;

// up to : https://www.youtube.com/watch?v=4pO-HcG2igk #8