import React from 'react';

import '../styles/About.css';

const About = () => {
  return (
    <div className='about-container'>
      <h3>The React contact app</h3>
      <p >created by Ogechi Ikwunagu</p>
      <p>
        A CRUD application with searching. sorting, filterning & pagination
        functionality. Data is handled with the help of JSON Server. The
        application uses react hooks like useState, useEffect, useContext to
        manage the state, fetch data (with axios) and use values across the
        component
      </p>
      <a href='https://github.com/ogechinagu/contact-crud-app'>GitHub Repo</a>
    </div>
  );
};

export default About;
