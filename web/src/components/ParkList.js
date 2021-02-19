import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const ParkGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 500px;
  padding: 10px;
  margin-left: 5px;
  margin-right: 5px;
  text-align: center;
  justify-items: stretch;
  background-color: lightgray;
  h2 {
    transform: rotate()(-2deg) translateY(-10px);
  }
  a {
    text-decoration: none;
  }
`

const ParkStyles = styled.div`
  display: grid;
  @supports not (grid-template-rows: subgrid) {
    --rows: auto auto 1fr;
  }
  grid-template-rows: var(--row, subgrid);
  grid-row: span 3;
  gap: .5rem;
  text-decoration: none;
  /* background-color: lightgrey; */
  /* color: black; */
  h2 {
    margin: 0;
    transform: rotate()(-2deg) translateY(-10px);
  }
  /* transform: rotate(-5deg) translateY(-10px); */

  p {
    margin: 0;
  }
`

function SinglePark ({park}) {
  return (
    <ParkStyles>
      <Link to={`/park/${park.slug.current}`}>
        <h2>
          <span>{park.name}</span>
        </h2>
      </Link>
      <p> {park.features.map((feature) => feature.name).join(', ')}</p>
      <Img fluid={park.image.asset.fluid} alt={park.name} key={park.id} />
    </ParkStyles>
  )
}

export default function ParkList ({parks}) {
  console.log('parks is ', parks)
  return (
    <ParkGridStyles>
      {parks.nodes.map((park) => (
        <SinglePark key={park.id} park={park} />
      ))}
    </ParkGridStyles>
  )
}
