import './index.scss';
import image1 from "/src/assets/Group 5.png"

function Footer() {
    return (
        <section id="footer">
            <div className={"image"}>
                <img src={image1} alt={"Image"}/>
            </div>
            <div className={"name"}>
                <div className={"text"}>
                    <div className={"text"} style={{
                        textAlign: "start",
                        color: "white"
                    }}>Phone</div>
                    <div className={"text"} style={{
                        margin: '0',
                        textAlign: "start"
                    }}>+971 54 702 8057</div>
                </div>
                <div style={{
                    width: "220px",
                    textAlign: "center"
                }}>
                    <div style={{
                        width: "240px",
                    }} className={"royal"}>Royal King</div>
                    <div style={{
                        color: "white",
                        fontSize: "20px",
                        marginTop: "20px",
                        width: "240px"
                    }} className={"royal1"}>Created by <span style={{
                        color: "#eddfc4"
                    }}>QavoCodes</span></div>
                </div>
                <div className={"text"}>
                    <div className={"text"} style={{
                        textAlign: "end",
                        color: "white",
                    }}>Location</div>
                    <div className={"text"} style={{
                        margin: '0',
                        textAlign: "end"
                    }}>Al Burteen Building Near Bin Shabib Masjid</div>
                    <div className={"text"} style={{
                        margin: '0',
                        textAlign: "end"
                    }}>Murshid Bazar, Dubai</div>
                </div>
            </div>
            <div style={{
                fontSize: "12px",
                position: "absolute",
                bottom: "0",
                color: '#E9E6DB',
                textAlign: "center",
                margin: "0 auto",
                transform: "translateX(-50%, -50%)",
                left: "5px",
                marginBottom: '5px',
                width: "100%",
            }}>© 2025 Royal King – Crafted with heritage. All rights reserved.</div>
        </section>
    );
}

export default Footer;