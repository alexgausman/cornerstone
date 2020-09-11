import React, { Component } from 'react';
import styled from 'styled-components';

import NavWrapper from '../nav/NavWrapper';
import Landing from './sections/landing/Landing';
import Programs from './sections/programs/Programs';
import Quote from './sections/quote/Quote';
import Features from './sections/features/Features';
import UpcomingEvents from './sections/upcoming-events/UpcomingEvents';
import Testimonials from './sections/testimonials/Testimonials';
import Newsletter from './sections/newsletter/Newsletter';
import Links from './sections/links/Links';
import LearnMore from './sections/learn-more/LearnMore';
import Footer from './sections/footer/Footer';

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
`;

class HomePage extends Component {

  render() {
    return (
      <Wrapper>
        <NavWrapper match={this.props.match} />
        <Landing />
        <Programs />
        <Quote />
        <Features />
        <UpcomingEvents />
        <Testimonials />
        <Newsletter />
        <Links />
        <LearnMore />
        <Footer />
      </Wrapper>

    );
  }
}

export default HomePage;
