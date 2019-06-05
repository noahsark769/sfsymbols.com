import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Image = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}

    render={(data) => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) {
        return null;
      }

      const imageSizes = image.node.childImageSharp.sizes;
      return (
        <img
          alt={props.alt}
          src={imageSizes.src}
          style={{width: "100%", height: "100%", "objectFit": "contain"}}
        />
      );
    }}
  />
)
export default Image;
