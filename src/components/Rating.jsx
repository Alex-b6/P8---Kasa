import PropTypes from "prop-types";

/*const Rating = ({ rating }) => {
    return (
        <div className="rating">
            <i className={`fa-solid fa-star ${rating > 1 ? "active" : ""}`}></i>
            <i className={`fa-solid fa-star ${rating > 2 ? "active" : ""}`}></i>
            <i className={`fa-solid fa-star ${rating > 3 ? "active" : ""}`}></i>
            <i className={`fa-solid fa-star ${rating > 4 ? "active" : ""}`}></i>
            <i className={`fa-solid fa-star ${rating > 5 ? "active" : ""}`}></i>
        </div>
    );
};*/
const Rating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(<i key={i} className={`fa-solid fa-star ${rating >= i ? "active" : ""}`}></i>);
    }
    return <div className="rating">{stars}</div>;
};

Rating.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default Rating;