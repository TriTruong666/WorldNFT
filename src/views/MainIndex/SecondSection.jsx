import React from "react";
import '../../styles/MainSection.css';
import sources from '../../store/image.js';
class SecondSection extends React.Component {
    render() {
        return (
            <section className="third">
                <div className="about-header">
                    <strong>About Us</strong>
                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
                </div>
                <div className="about-main">
                    <img src={sources.about} alt="" />
                    <div className="para">
                        <strong>Get Popular NFT</strong>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </span>
                        <input type="button" value="Show more" />
                    </div>
                </div>
            </section>
        )
    }
}
export default SecondSection;