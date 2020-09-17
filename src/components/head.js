import * as React from 'react'
import {Helmet} from 'react-helmet'
import { graphql } from 'gatsby'

const Head = () => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{`Mahdi | Front-end Developer`}</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
    )
}

export const query = graphql`
query HomePageQuery {
  site {
    siteMetadata {
        title
        description
    }
  }
}`

export default Head
