import React from "react";
import '../../styles/MainSection.css';
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";
import EndSection from "./EndSection";
class MainSection extends React.Component{
    render(){
        return(
            <div className="index">
                <FirstSection />
                <SecondSection />
                <ThirdSection />
                <FourthSection />
                <FifthSection />
                <EndSection />
            </div>
        )
    }
}
export default MainSection;