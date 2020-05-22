import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import '../../styles/sidebar.css';
import profile from '../../images/home-farmer.jpg';

const Sidebar = () => (
  <div className="sidebar-container">
    <div>
      <img alt="sidebar-profile" src={profile} className="sidebar-profile" />
      <p className="text-center sidebar-name">Jane Doe</p>
    </div>
    <ListGroup>
      <ListGroup.Item active>Update Profile</ListGroup.Item>
      <ListGroup.Item >Manage Resources</ListGroup.Item>
      <ListGroup.Item>Manage Lists</ListGroup.Item>
    </ListGroup>
  </div>
);

export default Sidebar;