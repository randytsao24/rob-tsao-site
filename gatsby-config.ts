import type { GatsbyConfig } from "gatsby";
import path from "path";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Rob Tsao's Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, {
    resolve: 'gatsby-plugin-root-import',
    options: {
      '@components': path.join(__dirname, 'src/components'),
      '@pages': path.join(__dirname, 'src/pages'),
      '@images': path.join(__dirname, 'src/images'),
      '@styles': path.join(__dirname, 'src/styles'),
      '@utils': path.join(__dirname, 'src/utils')
    }
  }, {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Roboto\:300,400,700`,
        `Montserrat\:400,700`,
        `Open Sans\:400,600`,
        // Add your new fonts here, for example:
        `Lato\:300,400,700`,
        `Merriweather\:400,700`
      ],
      display: 'swap'
    }
  }]
};

export default config;
