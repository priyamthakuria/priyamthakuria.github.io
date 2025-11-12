import './About.css';

function About() {
  return (
    <div className="page">
      <h1 className="page-title">About 👋 🤷‍♂️</h1>
      
      <div className="content">
        <p>
          Hi 👋, I'm Priyam Thakuria, a Software Engineer. I love developing software 
          and like to explore Networks, Databases, Web Security. I strongly believe that 
          technology can make lives easier and thus keep exploring and learning. 
          I graduated in Computer Science & Engineering from <a href="#" className="link">NITK, Surathkal, India</a>.
        </p>
        
        <p>
          I'm currently working as a Web Solutions Engineer at Google. Before joining Google, 
          I worked for a little over a year at Cisco as a Software Engineer. I love to explore 
          how the internet and the web works, and you'd mostly find me reading various engineering 
          blogs. I also plan to read some books on <a href="#" className="link">my reading list</a>.
        </p>
        
        <p>
          Participating in hackathons pump me up and every hackathon had something special to learn. 
          The best ones were: <a href="#" className="link">Smart India Hackathon 2018</a>, 
          <a href="#" className="link"> code.fun.do</a>, <a href="#" className="link">InOut 6.0</a> 
          and the one that I lead organized: <a href="#" className="link">National Level Hackathon - HackVerse</a>.
        </p>
        
        <p>
          During my time at university, I've contributed to open source by being a 
          <a href="#" className="link"> Google Summer of Code Student in 2019</a>, serving as a 
          mentor in <a href="#" className="link">Google Code-in '19</a> and mentoring a project 
          as a part of...
        </p>
      </div>
    </div>
  );
}

export default About;