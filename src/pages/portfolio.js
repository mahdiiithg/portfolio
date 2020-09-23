import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components';
import Layout from '../components/layout'
import PortfolioItem from '../templates/portfolioItem'


const PortfolioWrapper = styled.div`
  width: 100%;

  & > div:nth-child(odd) > div {
    flex-direction: row-reverse;
  }
`;

const portfolio = ({data}) => {
    return (
        <Layout>
            <h1>Portfolio is here</h1>
            <PortfolioWrapper>
              {data.allFile && data.allFile.edges.map(item => (
                  <PortfolioItem
                    key={item.node.id}
                    portfolio={item.node.childMarkdownRemark}
                  />
                ))}
            </PortfolioWrapper>
        </Layout>
    )
}


export const query = graphql`
query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "posts" }
        extension: { eq: "md" }
        relativeDirectory: { regex: "/portfolio/" }
      }
      sort: { fields: [dir], order: DESC }
    ) {
      edges {
        node {
          id
          childMarkdownRemark {
            frontmatter {
              title
              live
              source
              stack
              image {
                childImageSharp {
                  fluid(maxWidth: 800, quality: 80) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
            html
          }
        }
      }
    }
  }
  `;

export default portfolio