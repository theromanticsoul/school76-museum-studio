import {defineField, defineType} from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Герой',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Имя',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Фото',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'shortDescription',
      title: 'Краткое описание',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'description',
      title: 'Полное описание',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'birthYear',
      title: 'Год рождения',
      type: 'number',
    }),
    defineField({
      name: 'deathYear',
      title: 'Год смерти',
      type: 'number',
    }),
    defineField({
      name: 'rank',
      title: 'Звание/должность',
      type: 'string',
    }),
  ],
  preview: {
    select: {media: 'photo', title: 'name'},
  },
  orderings: [
    {by: [{direction: 'asc', field: 'birthYear'}], name: 'birthYearAsc', title: 'Год рождения'},
  ],
})