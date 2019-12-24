import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar'
import * as S from './styled'

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MyQueryMetadata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `)
  
  return (
    <S.ProfileWrapper>
      <S.ProfileLink>
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>
            {position}
          </S.ProfilePosition>
        </S.ProfileAuthor>
        
        <S.ProfileDescription>
          {description}
        </S.ProfileDescription>
      </S.ProfileLink>
    </S.ProfileWrapper>
  )
}

export default Profile