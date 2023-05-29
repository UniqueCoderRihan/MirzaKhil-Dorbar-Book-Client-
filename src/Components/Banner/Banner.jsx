import img1 from '../../assist/iamge3.jpg'
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("${img1}")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md my-auto">
                    <h1 className="mb-5 text-4xl font-bold">মির্জাখীল দরবার শরীফ</h1>
                    <button className="btn btn-primary">আরো</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;