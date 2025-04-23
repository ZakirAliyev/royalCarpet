import './index.scss';
import image1 from "/src/assets/carpetsss 1.png"
import image2 from "/src/assets/Frame 18.png"
import image3 from "/src/assets/Mask group 1.png"
import {IoLogoWhatsapp} from "react-icons/io";
import {FaLocationDot} from "react-icons/fa6";

function ContactUs() {
    return (
        <section id="contactUs">
            <div className={"row"}>
                <div className={"box col-6"}></div>
                <div className={"box1 col-6"}></div>
            </div>
            <div className={"aboutUs"}>
                <div className={"container"}>
                    <div className={"mg100 row"}>
                        <div className={"p16 col-6 col-md-6 col-sm-12 col-xs-12"}>
                            <img className={"carpet"} src={image1} alt={"Image"} style={{
                                position: "relative",
                                zIndex: 2,
                            }}/>
                        </div>
                        <div className={"yazi p16 col-6 col-md-6 col-sm-12 col-xs-12"} style={{
                            position: "relative",
                            zIndex: 2,
                        }}>
                            <img className={"carpet1"} src={image2} alt={"Image"}/>
                            <div className={"title"}>Contact us</div>
                            <div className={"title1"}>
                                <IoLogoWhatsapp className={"icon"}/>
                                <div style={{
                                    display:'flex',
                                    flexDirection: 'column',
                                }}>
                                    <div>Alı</div>
                                    <div style={{
                                        color:'#191919',
                                        marginLeft:'-35px',
                                    }}>+971 54 702 8057</div>
                                </div>
                            </div>
                            <div className={"title2"}>
                                <IoLogoWhatsapp className={"icon"}/>
                                <div style={{
                                    display:'flex',
                                    flexDirection: 'column',
                                }}>
                                    <div>Najibullah</div>
                                    <div style={{
                                        color:'#191919',
                                        marginLeft:'-35px',
                                    }}>+971 54 702 8058</div>
                                </div>
                            </div>
                            <div className={"title3"}>
                                <FaLocationDot className={"icon"}/>
                                <div style={{
                                    display:'flex',
                                    flexDirection: 'column',
                                }}>
                                    <div style={{
                                        fontSize: '24px'
                                    }} className={"naji"}>Location</div>
                                    <div style={{
                                        color:'#191919',
                                        marginLeft:'-30px',
                                        marginTop:'10px',
                                        fontSize: '20px',
                                    }} className={"naji ii"}>Al Burteen Building Near Bin Shabib Masjid Murshid Bazar, Dubai</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img style={{
                    maxWidth: '500px',
                    width: '100%',
                    position: 'absolute',
                    left: 0,
                    marginLeft: '-100px',
                    bottom: '-150px',
                }} src={image3} alt={"Image"}/>
            </div>
            <div className={"row"}>
                <div className={"box2 col-6"}></div>
                <div className={"box3 col-6"}></div>
            </div>
        </section>
    );
}

export default ContactUs;