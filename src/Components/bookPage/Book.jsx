import img1 from '../../assist/iamge2.jpg'
import img2 from '../../assist/iamge1.jpg'
import img3 from '../../assist/iamge3.jpg'

const Book = () => {
    fetch('db.json')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
    return (
        <div>
            <div style={{ backgroundImage: `url("${img1}")` }} className="hero min-h-screen text-white bg-black-100">  
            </div>
            <div>
               <h2 className='text-4xl font-bold text-center my-4'>সু উপদেশ গীত</h2>
               <div>
                
               </div>
            </div>
        </div>
    );
};

export default Book;