import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const Avatar = () => {
  const { AvatarImage } = useStaticQuery(
    graphql`
    query {
      AvatarImage: file(relativePath: {eq: "profile-blog-dayvit.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 60) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }`
  )

  return <S.AvatarWrapper fluid={AvatarImage.childImageSharp.fluid} />
}

export default Avatar