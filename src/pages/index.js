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
    </Layout>
  )
}

export const query = graphql`
query {
  aboutMe: file(relativePath: { eq: "aboutMe.md" }) {
    childMarkdownRemark {
      frontmatter {
        title
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
