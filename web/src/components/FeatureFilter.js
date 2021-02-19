import {graphql, Link, useStaticQuery} from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const FeaturesStyles = styled.div`
  margin-top: 5px;
  padding-top: 5px;
  background-color: lightgrey;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  a {
    display: grid;
    text-decoration: none;
    color: black;
    transform: rotate(-2deg) translateY(-10px);
    padding: 2px;
    grid-template-columns: auto 1fr;
    grid-gap: 1.5rem;
    /* background: orange; */
    align-self: center;
    border-radius: 2px;
    font-size: clamp(1.5rem, 1.4vw, 2.5rem);
    .count {
      background: white;
      padding: 2px 5px;
    }
    &[aria-current='page'] {
      background: yellow;
    }
  }
`

function countParksinFeatures (parks) {
  const counts = parks
    .map((park) => park.features)
    .flat()
    .reduce((acc, feature) => {
      const existingFeature = acc[feature.id]
      if (existingFeature) {
        existingFeature.count += 1
      } else {
        acc[feature.id] = {
          id: feature.id,
          name: feature.name,
          count: 1
        }
      }
      return acc
    }, {})

  const sortedFeatures = Object.values(counts).sort(
    (a, b) => b.count - a.count
  )
  return sortedFeatures
}

export default function FeatureFilter ({activeFeature}) {
  const {features, parks} = useStaticQuery(graphql`
    query {
      features: allSanityFeature {
        nodes {
          id
          name
          accessable
        }
      }
      parks: allSanityPark {
        nodes {
          features {
            name
            id
          }
        }
      }
    }
  `)

  console.log({ features, parks });
  const featuresWithCounts = countParksinFeatures(parks.nodes)

  return (
    <FeaturesStyles>
      <Link to='/park'>
        <span className='name'>All</span>
        <span className='count'>{parks.nodes.length}</span>
      </Link>
      {featuresWithCounts.map((feature) => (
        <Link
          to={`/feature/${feature.name}`}
          key={feature.id}
          className={feature.name === activeFeature ? 'active' : ''}
        >
          <span className='name'>{feature.name}</span>
          <span className='count'>{feature.count}</span>
        </Link>
      ))}
    </FeaturesStyles>
  )
}
