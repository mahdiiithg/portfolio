import React from 'react'
import { Link } from 'gatsby';
import Layout from '../components/layout'
function NotFoundPage() {
    return (
        <Layout>
            <h1>ops!</h1>
            <Link to='/'>Back to home</Link>
        </Layout>
    )
}

export default NotFoundPage
