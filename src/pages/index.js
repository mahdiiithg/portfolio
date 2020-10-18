import * as React from 'react'
import { graphql } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import IMG from '../assets/images/IMG.jpg';
import ImageStyle from '../styles/imageProfile.module.scss'
import rehypeReact from 'rehype-react';
import styled from 'styled-components';

import ScrollLink from '../components/utils/scrollLink'


const CustomSpan = styled.span`
  position: relative;
  font-style: italic;
  color: #fff;
  font-weight: 600;
  display: inline-block;
  word-break: break-word;
  white-space: normal;
  padding: 2px;
  &:after {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: rotate(-2deg);
    background: #456775;
  }
`;

const StackTitle = styled.h3`
  font-weight: 600;
  color: var(--text-highlight);
  margin-top: 5rem;
  font-size: 1.7rem;
  transition: color 0.2s ease-out;

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 1.3rem;
    margin-top: 3rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    font-size: 1.2rem;
    margin-top: 2rem;
  }
`;

const Stack = styled.p`
  color: var(--primary);
  width: 75%;
  margin: 0 auto;
  text-transform: uppercase;
  margin-bottom: 5rem;
  font-size: 1.4rem;
  line-height: 1.8;
  font-weight: 700;

  @media ${props => props.theme.mediaQueries.small} {
    width: 90%;
    font-size: 1.1rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    font-size: 1rem;
  }
`;


// Takes custom components from markdown, and maps to my custom components
const renderCustom = new rehypeReact({
  createElement: React.createElement,
  components: { 'scroll-link': ScrollLink, span: CustomSpan },
}).Compiler;


const Home = ({data}) => {
  return (
    <Layout>
      <h2 className='pb-2'>{data.site && data.site.siteMetadata.title }</h2>
      <div className="d-lg-flex d-md-block justify-content-between">
        <div className={ImageStyle.info}>
        {data.aboutMe && renderCustom(data.aboutMe.childMarkdownRemark.htmlAst)}
       
        </div>
        <div className={ImageStyle.img3d_container}>
          <div className={ImageStyle.img3d_containerimage}>
            <img className={ImageStyle.imgcontent} src={IMG} alt=""/>
          </div>
          <h6 className="text-center">To see me hover o click on my picture</h6>
        </div>
      </div>
      <StackTitle>
      My current <span>stack</span> of{' '}
      <span>languages/technologies</span> is:
    </StackTitle>
    <Stack>{data.aboutMe.childMarkdownRemark.frontmatter.stack}</Stack>
    </Layout>
  )
}

export const query = graphql`
query {
  aboutMe: file(relativePath: { eq: "aboutMe.md" }) {
    childMarkdownRemark {
      frontmatter {
        title
        stack
      }
      htmlAst
    }
  }
  site {
    siteMetadata {
      title
    }
  }
}`;

export default Home
