import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const BlogTemplate = ({ data }) => {
    const post = data.markdownRemark
    console.log(post);
    return (
        <Layout>
            {post && 
              <div key={post.frontmatter.title} style={post.frontmatter.lang === 'fa' ? {textAlign: 'right'} :  {textAlign: 'left'}} >
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
            }
        </Layout>
    )
}


export const query = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
      lang
    }
  }
}
`

export default BlogTemplate