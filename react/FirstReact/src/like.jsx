import {useState} from 'react';

export default function Like(){
    const [likecount, setLikecount] = useState(0);
    const [hesitationCount, setHesitationCount] = useState(0);

    function clicked(){
        console.log("clicked", Date.now())
        return setLikecount(likecount+1);
    }
    function hesitated(){
        console.log("hesitated", Date.now())
        return setHesitationCount(hesitationCount+1);
    }

    return <button onClick={clicked} onMouseOver={hesitated}>LIKE | {likecount}</button>;
}