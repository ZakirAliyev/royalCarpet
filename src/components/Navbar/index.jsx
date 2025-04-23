import './index.scss';
import image1 from '/src/assets/Group 1 1.png';

function Navbar() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="navbar">
            <div className="image">
                <img src={image1} alt="Image" />
            </div>
            <div className="name">
                <div
                    className="text"
                    onClick={() => scrollToSection('hero')}
                    style={{ cursor: 'pointer' }}
                >
                    <div>Home</div>
                </div>
                <div
                    className="text"
                    onClick={() => scrollToSection('aboutUs')}
                    style={{ cursor: 'pointer' }}
                >
                    <div>About us</div>
                </div>
                <div
                    style={{
                        width: '220px',
                        textAlign: 'center',
                        cursor: 'pointer',
                    }}
                    onClick={() => scrollToSection('hero')}
                >
                    Royal King
                </div>
                <div
                    className="text"
                    onClick={() => scrollToSection('contactUs')}
                    style={{ cursor: 'pointer' }}
                >
                    <div>Contact us</div>
                </div>
                <div
                    className="text"
                    onClick={() => scrollToSection('whyChooseUs')}
                    style={{ cursor: 'pointer' }}
                >
                    <div>Why choose us?</div>
                </div>
            </div>
        </section>
    );
}

export default Navbar;