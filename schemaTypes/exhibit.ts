import {defineField, defineType} from 'sanity'

export const exhibit = defineType({
  name: 'exhibit',
  title: 'Экспонат',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Название',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'model',
      title: '3D-модель (.glb)',
      type: 'file',
      options: {
        accept: '.glb',
      },
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: {title: 'title'},
  },
})
