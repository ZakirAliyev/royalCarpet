import './index.scss';
import image1 from "/src/assets/Group 2.png"
import image2 from "/src/assets/section2-icon 1.png"
import image3 from "/src/assets/Group 3.png"
import image4 from "/src/assets/Group 4.png"
import image5 from "/src/assets/Mask group 2 (1).png"

function WhyChooseUs() {
    return (
        <section id="whyChooseUs">
            <div className={"row"}>
                <div className={"box col-6"}></div>
                <div className={"box1 col-6"}></div>
            </div>
            <div className={"aboutUs"}>
                <div className={"container"}>
                    <div style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}><img src={image2} alt={"Image"} className={"star"}/></div>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        width: "100%",
                    }}>
                        <div style={{width: '200px', display: 'flex', alignItems: 'center'}}>
                            <div className={"dot"}></div>
                            <div className={"line"}></div>
                        </div>
                        <div className={"text"} style={{
                            textAlign: "start",
                        }}>Why choose us?</div>
                    </div>
                    <div className={"mg100 row"}>
                        <div className={"yazi p16 col-6 col-md-6 col-sm-12 col-xs-12"}>
                            <div className={"subTitle"}>
                                <img src={image2} alt={"Image"}/>
                                Timeless Craftsmanship</div>
                            <div className={"subTitle"}>
                                <img src={image2} alt={"Image"}/>
                                Authenticity and Quality</div>
                            <div className={"subTitle"}>
                                <img src={image2} alt={"Image"}/>
                                Affordable Luxury</div>
                            <div className={"subTitle"}>
                                <img src={image2} alt={"Image"}/>
                                Trusted by Many</div>
                            <div className={"subTitle"}>
                                <img src={image2} alt={"Image"}/>
                                Cultural Heritage</div>
                        </div>
                        <div className={"zirt p16 col-6 col-md-6 col-sm-12 col-xs-12"}>
                            <img style={{
                            position: "relative",
                            zIndex: 2,
                        }} className={"carpet"} src={image3} alt={"Image"}/>
                            <img style={{
                            position: "relative",
                            zIndex: 2,
                        }} className={"carpet carr"} src={image1} alt={"Image"}/>
                            <img style={{
                            position: "relative",
                            zIndex: 2,
                        }} className={"carpet cart"} src={image4} alt={"Image"}/>
                        </div>
                    </div>
                </div>
                <img style={{
                    maxWidth: '700px',
                    width: '100%',
                    position: 'absolute',
                    right: 0,
                    bottom: '0',
                }} src={image5} alt={"Image"}/>
            </div>
            <div className={"row"}>
                <div className={"box2 col-6"}></div>
                <div className={"box3 col-6"}></div>
            </div>
        </section>
    );
}

export default WhyChooseUs;