import React from 'react';
import '../../styles/MainSection.css';
class EndSection extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="question">
                    <div className="question-header">
                        <strong>Freaquently Asked Questions</strong>
                        <small>Wanna Ask Somethings?</small>
                    </div>
                    <div className="question-container">
                        <Question />
                        <Question />
                        <Question />
                        <Question />
                        <Question />
                        <Question />
                    </div>
                </div>
                <div className="getstart">
                    <h2>Get Ready To Collect Our NFT</h2>
                    <input type="button" value='Get Started'/>
                </div>
            </React.Fragment>
        )
    }
}
const Question = () => {
    return (
        <div className="question-box">
            <input type="text" placeholder='Give Me Some Questions ?' />
            <span className="material-symbols-outlined">add</span>
        </div>
    )
}
export default EndSection;