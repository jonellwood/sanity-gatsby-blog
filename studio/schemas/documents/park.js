import {MdLocalParking as icon} from 'react-icons/md'

export default {
  name: 'park',
  title: 'Parks',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Park Name',
      type: 'string',
      description: 'Name of the Park'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      description: 'Location of the Park'
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'feature'}]}]
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      feature0: 'features.0.name',
      feature1: 'features.1.name',
      feature2: 'features.2.name',
      feature3: 'features.3.name'
    },
    prepare: ({title, media, ...features}) => {
      const feats = Object.values(features).filter(Boolean)
      return {
        title,
        media,
        subtitle: feats.join(', ')
      }
    }
  }
}
