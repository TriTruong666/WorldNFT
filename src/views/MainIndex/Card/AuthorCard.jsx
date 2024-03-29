import PropTypes from 'prop-types';
const AuthorCard = ({ author, backgr }) => {
    return (
        <div className='author-card'>
            <img className='author' src={author} alt="" />
            <img className='backgr' src={backgr} alt="" />
            <div className="author-info">
                <strong>Hoang Tri</strong>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                <input type="button" value="+ Follow" />
            </div>
        </div>
    )
}
AuthorCard.propTypes = {
    author: PropTypes.string.isRequired,
    backgr: PropTypes.string.isRequired,
}
export default AuthorCard;