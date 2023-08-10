import { ABOUT_IMG } from '../config.js';

const About = () => {
    return ( 
        <div className="about">
        <img src={ABOUT_IMG} alt="about_img" />
        <h2>Welcome to FOODIEBAY!!! 😋</h2>
        <h3>You Surf We Serve!!! </h3>
        </div>
    );
}
export default About;