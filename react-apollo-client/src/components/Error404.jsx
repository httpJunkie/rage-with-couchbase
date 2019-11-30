import React from "react";
import { Link } from "react-router-dom";
import http404 from './404.png';

function NoMatch ({ location }) {
  return (
    <div style={{padding: '1em', textAlign: 'center'}}>
      path: <code>{location.pathname}</code> not found, <Link className='menu' to={`/`}> wanna get away?</Link><br />
      <img width="300px" src={http404} alt="" />
    </div>
  )
};

export default NoMatch;
