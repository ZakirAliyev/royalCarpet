import './index.scss';
import image1 from "/src/assets/Rectangle 4.png"
import image2 from "/src/assets/carpet vector 1.png"

function Hero() {
    return (
        <section id="hero">
            <img className={"img"} src={image1} alt={"Image"}/>
            <img className={"img1"} src={image2} alt={"Image"}/>
            <img className={"img2"} src={image2} alt={"Image"}/>
            <div className={"text"}>
                <div className={"text2"}>Discover The Most Complete Rug <span style={{
                    fontFamily: 'Poppins',
                    fontSize: '25px',
                }}>&</span> Carpet Store</div>
                <div className={"text1"}>Patterns from centuries past, woven by masterful hands. Each thread tells a story,
                    connecting you to the elegance of tradition
                </div>
            </div>
        </section>
    );
}

export default Hero;