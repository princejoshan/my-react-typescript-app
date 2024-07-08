import React, { useState } from 'react';
import '../styles/HomePageHeader.css';
import Button from './Button';

const NavBar= () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log('Search query:', searchQuery);
//     // Handle the search functionality here
//   };

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-brand">
          <a href="#">AXIS MUTUAL FUND</a>
        </div>
        <ul className="navbar-items">
          <li><a href="#Our Schemes">Our Schemes</a></li>
          <li><a href="#Planning & Solution">Planning & Solution</a></li>
          <li><a href="#Service Central">Service Central</a></li>
          <li><a href="/support">Support</a></li>
        </ul>
      </div>
      <div>
      <Button text="Logout" onClick={handleClick} />

      </div>
      {/* <div className="navbar-right">
        <div className="navbar-search">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div> */}
    </nav>
  );
};

export default NavBar;