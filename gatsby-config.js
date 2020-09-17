
module.exports = {
  
  siteMetadata: {
    title: `Mahdi | Front-end Developer`,
    description: `I’m Mahdi, a 26 years old self-taught Front-end developer`,
    author: `Mahdi`,
    siteUrl: 'https://Mahdi.dev',
    social: {
      twitter: '@Thg_code',
      instagram: 'code_thg',
      linkedin: 'mahdi-tahavorgar',
      facebook: 'Mahdi.Thgr',
      github: 'MahdiiiThg',
      email: 'mahditahavorgar@gmail.com'
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
          plugins: [
              {
                  resolve: `gatsby-remark-images`,
                  options: {
                      maxWidth: 590,
                      linkImagesToOriginal: false,
                  },
              },
          ],
      },
  },
    
  ],
}
