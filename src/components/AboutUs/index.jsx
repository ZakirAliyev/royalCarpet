import './index.scss';
import image1 from "/src/assets/Rectangle 6.png"
import image2 from "/src/assets/section2-icon 1.png"
import image3 from "/src/assets/machine-made-carpet 1.png"
import image4 from "/src/assets/hand-made-carpet 1.png"
import image5 from "/src/assets/Rectangle 7.png"
import image6 from "/src/assets/Mask group (2).png"

function AboutUs() {
    return (
        <section id="aboutUs">
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
                        justifyContent: "space-between",
                        width: "100%",
                    }}>
                        <div style={{width: '100%', display: 'flex', alignItems: 'center'}}>
                            <div className={"dot"}></div>
                            <div className={"line"}></div>
                        </div>
                        <div className={"text"}>About us</div>
                        <div style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                           justifyContent: 'end',
                        }}>
                            <div className={"line"}></div>
                            <div className={"dot"}></div>
                        </div>
                    </div>
                    <div className={"mg100 row"}>
                        <div className={"p16 col-6 col-md-6 col-sm-12 col-xs-12"}>
                            <img className={"carpet"} src={image1} alt={"Image"}/>
                        </div>
                        <div className={"yazi p16 col-6 col-md-6 col-sm-12 col-xs-12"}>
                            <div className={"icon"}>
                                <img src={image3} alt={"Image"}/>
                            </div>
                            <div className={"title"}>Machine Made Carpet</div>
                            <div className={"subTitle"}>
                                Machine-made carpets are crafted using advanced weaving technology that allows for
                                precise patterns, fast production, and consistent quality. Unlike handmade rugs, these
                                carpets are produced by automated looms, resulting in more affordable and uniform
                                products.
                            </div>
                        </div>
                    </div>
                    <div className={"mg50 row row1"}>
                        <div className={"yazi p16 col-6 col-md-6 col-sm-12 col-xs-12"}>
                            <div className={"icon"}>
                                <img src={image4} alt={"Image"}/>
                            </div>
                            <div className={"title"}>Our Craftsmanship</div>
                            <div className={"subTitle"}>
                                Each carpet is meticulously crafted by our skilled artisans, whose years of expertise
                                breathe life into every weave. We use only the finest, sustainably sourced materials,
                                blending time-honored traditional techniques with innovative modern methods to ensure
                                unparalleled quality and durability.
                            </div>
                        </div>
                        <div className={"p16 col-6 col-md-6 col-sm-12 col-xs-12"}>
                            <img className={"carpet"} src={image5} alt={"Image"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                background: '#E9E6DB'
            }}><img className={"naxis"} src={image6}/></div>
        </section>
    );
}

export default AboutUs;