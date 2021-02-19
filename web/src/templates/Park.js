import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import ParkPage from '../components/parkPage'

const ParkGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`

// export default function SingleParkPage ({data: {park}}) {
//   return (
//     <>
//       <div>{park.name}</div>
//       <ParkGrid>
//         <Img fluid={park.image.asset.fluid} />
//         <div>
//           <h2 className='mark'>{park.name}</h2>
//           <ul>
//             {park.features.map((feature) => (
//               <li key={feature.id}>{feature.name}</li>
//             ))}
//           </ul>
//         </div>
//         {}
//       </ParkGrid>
//     </>
//   )
// }

export const query = graphql`
  query ParkTemplateQuery($slug: String) {
    park:sanityPark(slug: { current: {eq: $slug}}) {
      name
      slug {
        current
      }
      id
      image {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      features {
        name
        id
        accessable
      }
    }
  }
`
const ParkPageTemplate = props => {
  const {data} = props
  const park = data && data.park
  return (
    <ParkGrid>
      <ParkPage {...park} />
    </ParkGrid>
  )
}

export default ParkPageTemplate
