module.exports = {
    siteMetadata: {
        title: `Sean's site`,
        description: `Sean's website :).`,
        author: `Seab Hellum`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Sean Hellum`,
                short_name: `Sean`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: `standalone`,
                cache_busting_mode: 'none',
                icon: `src/images/favicon.png`
            },
        },
        {
            resolve: 'gatsby-plugin-offline',
            options: {
                workboxConfig: {
                    globPatterns: ['**/*']
                }
            }
        },
    ],
}
