import React from 'react'
import AuthorCard from './Card/AuthorCard.jsx';
import '../../styles/MainSection.css';
import '../../styles/card.css';
import sources from '../../store/image.js';

class FifthSection extends React.Component {
    render() {
        return (
            <div className="six">
                <div className="creator-header">
                    <strong>Top Creator</strong>
                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
                </div>
                <div className="creator-container">
                    <AuthorCard author={sources.author.author1} backgr={sources.backgr.backgr1} />
                    <AuthorCard author={sources.author.author2} backgr={sources.backgr.backgr2} />
                    <AuthorCard author={sources.author.author3} backgr={sources.backgr.backgr3} />
                </div>
            </div>
        )
    }
}

export default FifthSection;