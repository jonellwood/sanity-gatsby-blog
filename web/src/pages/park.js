import {graphql} from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import ParkList from '../components/ParkList'
import FeatureFilter from '../components/FeatureFilter'

export default function ParkPage ({data, pageContext}) {
  const parks = data.parks
  return (
    <>
      <FeatureFilter activeFeature={pageContext.feature} />
      <ParkList parks={parks} />
    </>
  )
}

export const query = graphql`
  query ParkQuery($featureRegex: String) {
  parks: allSanityPark(
    filter: { features: { elemMatch: { name: { regex: $featureRegex}}}}) {
    nodes {
      name
      id
      slug {
        current
      }
      features {
        id
        name
      }
      image {
        asset {
          fluid {
            srcSetWebp
          }
        }
      }
    }
  }
}

`
