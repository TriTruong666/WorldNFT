import React from 'react'
import '../../styles/MainSection.css';
import '../../styles/card.css';
import sources from '../../store/image.js';
import Card from './Card/ProductCard.jsx';
class ThirdSection extends React.Component {
    render() {
        return (
            <section className='fourth'>
                <div className="collection-header">
                    <strong>Collection</strong>
                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
                </div>
                <div className="collection-list">
                    <input type="button" value="Art" />
                    <input type="button" value="Sport" />
                    <input type="button" value="Photography" />
                    <input type="button" value="Pattern" />
                </div>
                <div className="collection-container">
                    <Card src={sources.collection_img.collect_img1} />
                    <Card src={sources.collection_img.collect_img2} />
                    <Card src={sources.collection_img.collect_img3} />
                    <Card src={sources.collection_img.collect_img4} />
                    <Card src={sources.collection_img.collect_img5} />
                    <Card src={sources.collection_img.collect_img6} />
                    <Card src={sources.collection_img.collect_img7} />
                    <Card src={sources.collection_img.collect_img8} />
                    <Card src={sources.collection_img.collect_img9} />
                    <Card src={sources.collection_img.collect_img9} />
                    <Card src={sources.collection_img.collect_img9} />
                    <Card src={sources.collection_img.collect_img9} />
                </div>
            </section>
        )
    }
}

export default ThirdSection;