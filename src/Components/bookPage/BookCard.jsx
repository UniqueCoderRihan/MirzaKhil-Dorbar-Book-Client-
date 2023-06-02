
const BookCard = ({poem}) => {
    const {title,main} =poem;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{main}</p>
               
            </div>
        </div>
    );
};

export default BookCard;