import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import TopNav from './TopNav';
import Sidebar from './Sidebar';

const Container = styled.div`
  position: relative;
  z-index: 100;
`;

class NavWrapper extends Component {
  constructor() {
    super();
    this.state = {
      sidebarVisible: false,
    };
    this.hideSidebar = this.hideSidebar.bind(this);
    this.showSidebar = this.showSidebar.bind(this);
  }
  hideSidebar(e) {
    this.setState({ sidebarVisible: false });
  }
  showSidebar(e) {
    this.setState({ sidebarVisible: true });
  }
  render() {
    return (
      <Container>
        <Sidebar
          visible={this.state.sidebarVisible}
          hideSidebar={this.hideSidebar}
          match={this.props.match}
        />
        <TopNav
          showSidebar={this.showSidebar}
        />
      </Container>
    );
  }
}

NavWrapper.propTypes = {
  match: PropTypes.object.isRequired,
};

export default NavWrapper;
