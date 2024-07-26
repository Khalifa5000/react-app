import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <Link to="/" >
      <button style={{margin: "50px"}}>Go to Home page</button>
      </Link>
      <h1>Welcome to About page</h1>
    </div>
  );
}

export default About;
