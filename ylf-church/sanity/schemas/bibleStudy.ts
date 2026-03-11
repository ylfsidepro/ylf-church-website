import { defineField, defineType } from 'sanity'

export const bibleStudySchema = defineType({
  name:  'bibleStudy',
  title: 'Bible Study',
  type:  'document',
  icon:  () => '📖',
  fields: [
    defineField({ name:'title',       title:'Title',         type:'string',  validation: r => r.required() }),
    defineField({ name:'description', title:'Description',   type:'text', rows: 4 }),
    defineField({ name:'zoomLink',    title:'Zoom Link',     type:'url',     description:'The Zoom meeting URL' }),
    defineField({ name:'schedule',    title:'Schedule',      type:'string',  description:'e.g. Every Tuesday at 7:30 PM IST' }),
    defineField({ name:'scripture',   title:'Scripture of the Week', type:'text', rows: 3 }),
  ],
})
