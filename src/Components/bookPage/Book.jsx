import img1 from '../../assist/iamge2.jpg'
import img2 from '../../assist/iamge1.jpg'
import img3 from '../../assist/iamge3.jpg'
import { useEffect, useState } from 'react';
import BookCard from './BookCard';

const Book = () => {
    const [poems,setPoems] = useState([])
    useEffect(()=>{
        fetch('db.json')
        .then(res=>res.json())
        .then(data=>setPoems(data))
    },[])
    return (
        <div>
            <div style={{ backgroundImage: `url("${img1}")` }} className="hero min-h-screen text-white bg-black-100">  
            </div>
            <div>
               <h2 className='text-4xl font-bold text-center my-4'>সু উপদেশ গীত</h2>
               <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    poems.map(poem=><BookCard poem={poem}></BookCard>)
                }
               </div>
            </div>
        </div>
    );
};

export default Book;