import {defineField, defineType} from 'sanity'

export const announcement = defineType({
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'content',
      rows: 5,
      title: 'Содержание',
      type: 'text',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'date',
      options: {dateFormat: 'DD.MM.YYYY'},
      title: 'Дата',
      type: 'date',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'category',
      options: {
        list: [
          {title: 'Мероприятия', value: 'events'},
          {title: 'Конкурсы', value: 'contests'},
          {title: 'Технические', value: 'technical'},
          {title: 'Расписание', value: 'schedule'},
          {title: 'Обновления', value: 'updates'},
        ],
      },
      title: 'Категория',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      initialValue: 'normal',
      name: 'priority',
      options: {
        list: [
          {title: 'Важно', value: 'important'},
          {title: 'Средний', value: 'medium'},
          {title: 'Обычный', value: 'normal'},
        ],
      },
      title: 'Приоритет',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      initialValue: false,
      name: 'isPinned',
      title: 'Закреплено',
      type: 'boolean',
    }),
  ],
  name: 'announcement',
  orderings: [
    {
      by: [{direction: 'desc', field: 'date'}],
      name: 'dateDesc',
      title: 'Дата (новые сначала)',
    },
    {
      by: [
        {direction: 'desc', field: 'isPinned'},
        {direction: 'desc', field: 'date'},
      ],
      name: 'pinnedFirst',
      title: 'Закреплённые сначала',
    },
  ],
  preview: {
    select: {
      subtitle: 'date',
      title: 'title',
    },
  },
  title: 'Объявление',
  type: 'document',
})
