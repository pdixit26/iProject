import React, { Component } from "react";
 
class About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <p>This project is a simple page application using PERN stack. I have used</p>
        <ol>
          <li>React.js as frontend framework.</li>
          <li>Node-Express for database commnunication.</li>
          <li>REST APIs to connect frontend to the backend.</li>
          <li>PostgreSQL as database for table storage.</li>
        </ol>
        <p>Sourcecode of this project is available here: <a href="https://github.com/pdixit26/iProject">https://github.com/pdixit26/iProject </a></p>
      </div>
    );
  }
}
 
export default About;