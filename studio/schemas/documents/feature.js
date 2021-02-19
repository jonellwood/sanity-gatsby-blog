import {GiElfEar as icon} from 'react-icons/gi'

export default {
  name: 'feature',
  title: 'Features',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Feature Name',
      type: 'string',
      description: 'Name of the name of the feature?'
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
      name: 'accessable',
      title: 'Accessable',
      type: 'boolean',
      description: 'Is the area wheelchair accessable?',
      options: {
        layout: 'checkbox'
      }
    }
  ],
  preview: {
    select: {
      name: 'name',
      accessable: 'accessable'
    },
    prepare: (fields) => ({
      title: `${fields.name} ${fields.accessable ? '🦽' : ''}`
    })
  }
}
