
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  
  siteMetadata: {
      title: `Mahdi | Front-end Developer`,
      description: `I’m Mahdi, a 26 years old self-taught Front-end developer`,
      author: `Mahdi Tahavorgar`,
      siteUrl: 'https://codethg.netlify.app',
      social: {
        twitter: '@Thg_code',
        instagram: 'code_thg',
        linkedin: 'mahdi-tahavorgar',
        facebook: 'Mahdi.Thgr',
        github: 'MahdiiiThg',
        email: 'mahditahavorgar@gmail.com'
      },
      imageShare: `darkLogo.png`
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
      {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mahdi | Front-end Developer`,
        short_name: `Mahdi Tahavorgar`,
        icon: `src/assets/images/lightLogo.png`,
        start_url: `/`,
        background_color: `#212121`,
        theme_color: `#127EB1`,
        display: `minimal-ui`
      }
    },
    `gatsby-plugin-offline`
  ],
}
