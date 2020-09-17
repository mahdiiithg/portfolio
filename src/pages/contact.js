import React from 'react';
import styled from 'styled-components';
import {  graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout'


import Social from '../components/UI/social';

const LogoImage = styled(Img)`
  width: 15%;
  margin-bottom: 1.5rem;

  @media ${props => props.theme.mediaQueries.medium} {
    width: 25%;
  }
`;

const CopyRight = styled.p`
  font-weight: 700;
  margin: 0;
  font-size: 1rem;
  color: var(--text-highlight);
  text-transform: uppercase;
`;

const Contact = ({data}) => {
  return (
    <Layout id="contact">
            <h4 className="pb-3">You can contact me by:</h4>
          <Social data={data} />        
    </Layout>
  );
};


export const query = graphql`
query {
    site {
      siteMetadata {
        social {
          twitter
          instagram
          linkedin
          facebook
          github
          email
        }
      }
    }
  }`


export default Contact;
