import React, { Component } from 'react';

import Typed from 'react-typed';
class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>About</h1>
          <div className="container">
            {``}
            <div style={{ width: '100%' }}>
              <h2 style={{ width: '100%' }}>
                <Typed strings={[`I'm Cristóbal Contreras`]} typeSpeed={40} />
              </h2>
              <br />

              <h3>
                <Typed
                  strings={[
                    'Web Design',
                    'Web Development',
                    'MERN Stack',
                    'MEAN Stack',
                    'JavaScript',
                    'TypeScript',
                    'PHP',
                    'DevOps',
                    'SQL',
                    'NoSQL'
                  ]}
                  typeSpeed={40}
                  backSpeed={60}
                  loop
                />
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
