import React from 'react'
import Card from './Card/ProductCard.jsx';
import '../../styles/MainSection.css';
import '../../styles/card.css';
import sources from '../../store/image.js';

class FourthSection extends React.Component {
    render() {
        return (
            <section className='fifth'>
                <div className="feature-header">
                    <strong>Featured Artworks</strong>
                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
                </div>
                <div className="featured-container">
                    <Card src={sources.collection_img.collect_img1} />
                    <Card src={sources.collection_img.collect_img2} />
                    <Card src={sources.collection_img.collect_img3} />
                </div>
            </section>
        )
    }
}
export default FourthSection;