import { defineField, defineType } from 'sanity'

export const eventSchema = defineType({
  name:  'event',
  title: 'Event',
  type:  'document',
  icon:  () => '📅',
  fields: [
    defineField({ name:'title',             title:'Event Title',       type:'string',   validation: r => r.required() }),
    defineField({ name:'date',              title:'Date & Time',       type:'datetime', validation: r => r.required() }),
    defineField({ name:'description',       title:'Description',       type:'text', rows: 4 }),
    defineField({ name:'location',          title:'Location',          type:'string',   description:'e.g. Zoom, Jamshedpur, etc.' }),
    defineField({ name:'tag',               title:'Tag / Category',    type:'string',   description:'e.g. Worship Night, Retreat, Bible Study' }),
    defineField({ name:'registrationLink',  title:'Registration Link', type:'url' }),
  ],
  orderings: [
    { title:'Date (Upcoming First)', name:'dateAsc',  by:[{ field:'date', direction:'asc'  }] },
    { title:'Date (Recent First)',   name:'dateDesc', by:[{ field:'date', direction:'desc' }] },
  ],
  preview: {
    select:  { title:'title', date:'date', tag:'tag' },
    prepare: ({ title, date, tag }) => ({
      title,
      subtitle: `${tag ? `[${tag}] ` : ''}${date ? new Date(date).toLocaleDateString('en-IN') : ''}`,
    }),
  },
})
