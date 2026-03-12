import {defineField, defineType} from 'sanity'

export const exhibition = defineType({
  fields: [
    defineField({
      name: 'title',
      title: 'Название',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      options: {source: 'title'},
      title: 'Slug',
      type: 'slug',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Краткое описание (для карточки)',
      type: 'text',
      rows: 2,
      validation: (r) => r.max(150),
    }),
    defineField({
      name: 'description',
      title: 'Описание (для страницы выставки)',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'coverImage',
      options: {hotspot: true},
      title: 'Обложка',
      type: 'image',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'date',
      options: {dateFormat: 'DD.MM.YYYY'},
      title: 'Дата открытия',
      type: 'date',
    }),
    defineField({
      name: 'curator',
      title: 'Куратор',
      type: 'string',
    }),
    defineField({
      initialValue: true,
      name: 'hasAR',
      title: 'Есть AR-режим',
      type: 'boolean',
    }),
    defineField({
      name: 'exhibits',
      of: [{to: [{type: 'exhibit'}], type: 'reference'}],
      title: 'Экспонаты',
      type: 'array',
    }),
  ],
  name: 'exhibition',
  preview: {
    select: {
      media: 'coverImage',
      subtitle: 'curator',
      title: 'title',
    },
  },
  title: 'Выставка',
  type: 'document',
})
