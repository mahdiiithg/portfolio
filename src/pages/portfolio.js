import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PortfolioItem from '../templates/portfolioItem'

const portfolio = ({data}) => {
    return (
        <Layout>
            <h1>Portfolio is here</h1>
            {data.allFile && data.allFile.edges.map(item => (
                <PortfolioItem
                  key={item.node.id}
                  portfolio={item.node.childMarkdownRemark}
                />
              ))}
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