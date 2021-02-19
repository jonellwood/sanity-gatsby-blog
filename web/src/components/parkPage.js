import React from 'react'
import Container from './container'
import styles from './author-list'
import Img from 'gatsby-image'
import {imageUrlFor} from '../lib/image-url'
import {buildImageObj} from '../lib/helpers'

function ParkPage (props) {
  const {name, id, features, image} = props
  return (
    <>
    <article className={styles.root}>
      {image && image.asset && (
        <div className={styles.mainImage}>
          <Img fluid={image.asset.fluid}/>
        </div>
      )}
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{name}</h1>
            <aside className={styles.metaContent}>{features}</aside>
          </div>
        </div>
      </Container>
    </article>
    </>
  )
}

export default ParkPage
