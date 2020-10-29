import React from 'react'
import Layout from '../components/layout'
import  { Link,  graphql } from 'gatsby'
import PortfolioItem from '../templates/portfolioItem';

const blog = ({data}) => {
    return (
        <Layout>
            <h1>Blog is here</h1>
            <ol>
            {data.allMarkdownRemark && 
              data.allMarkdownRemark.edges.map( item => {
                return (
                  <Link key={item.node.frontmatter.title} to={`${item.node.fields.slug}`}>
                    <li>
                      <h3>{item.node.frontmatter.title}</h3>
                      <p>{item.node.frontmatter.date}</p>
                    </li>
                  </Link>
                  
                )
              })
            }
            </ol>
        </Layout>
    )
}

export const query = graphql`
  query {
    allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(blog)/"  }}
      ) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields  {
            slug
          }
        }
      }
    }
  }
`





export default blog
