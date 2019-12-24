import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const Avatar = () => {
  const { AvatarImage } = useStaticQuery(
    graphql`
    query {
      AvatarImage: file(relativePath: {eq: "profile-blog-dayvit.jpg"}) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }`
  )

  return <S.AvatarWrapper fixed={AvatarImage.childImageSharp.fixed} />
}

export default Avatar