import {useState} from 'react';

export default function Like(){
    const [likecount, setLikecount] = useState(0);
    function clicked(){
        console.log("clicked", Date.now())
        return setLikecount(likecount+1);
    }
    return <button onClick={clicked}>LIKE | {likecount}</button>;
}