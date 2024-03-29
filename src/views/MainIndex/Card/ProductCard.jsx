import PropTypes from 'prop-types';
const Card = ({ src }) => {
    return (
        <div className="cards">
            <div className='collection-img-container'>
                <img className='collection-img' src={src} alt="" />
            </div>
            <div className="author-info">
                <span>@HoangTri</span>
                <span>Current Bid</span>
            </div>
            <div className="product-info">
                <strong>Yellow Painting</strong>
                <strong>0.005 ETH</strong>
            </div>
            <input className='bidBtn' type="button" value="Place a bid" />
        </div>
    )
}
Card.propTypes = {
    src: PropTypes.string.isRequired, // Validate src prop as a required string
};
export default Card;