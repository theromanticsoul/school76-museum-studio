import {defineField, defineType} from 'sanity'

export const schoolInfo = defineType({
  name: 'schoolInfo',
  title: 'О школе',
  type: 'document',
  fields: [
    defineField({
      name: 'content',
      title: 'Содержание',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
  preview: {
    prepare: () => ({title: 'О школе'}),
  },
})
