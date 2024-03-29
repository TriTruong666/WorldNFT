import React from "react";
import '../../styles/MainSection.css';
import sources from '../../store/image.js';
class FirstSection extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="first">
                    <div className="intro-text">
                        <h2>Create, Sell & Collect Your Own Creative NFT</h2>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.</span>
                        <div className="btn-box">
                            <input type="button" value="Explore Now" />
                            <input type="button" value="Sell NFT" />
                        </div>
                        <div className="summary-box">
                            <div className="summary-items">
                                <strong>37k+</strong>
                                <small>Artworks</small>
                            </div>
                            <div className="summary-items">
                                <strong>20k+</strong>
                                <small>Artists</small>
                            </div>
                            <div className="summary-items">
                                <strong>99k+</strong>
                                <small>Aucations</small>
                            </div>
                        </div>
                    </div>
                    <div className="intro-img">
                        <img src={sources.img.a} alt="" />
                        <img src={sources.img.b} alt="" />
                        <img src={sources.img.c} alt="" />
                        <img src={sources.img.e} alt="" />
                        <img src={sources.img.d} alt="" />
                        <img src={sources.img.f} alt="" />
                        <img src={sources.img.g} alt="" />
                    </div>
                </section>
                <section className="second">
                    <div className="brand-container">
                        <img src={sources.brand.brand1} alt="" />
                        <img src={sources.brand.brand2} alt="" />
                        <img src={sources.brand.brand3} alt="" />
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
export default FirstSection;