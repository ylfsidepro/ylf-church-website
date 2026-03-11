import { defineField, defineType } from 'sanity'

export const activityGroupSchema = defineType({
  name:  'activityGroup',
  title: 'Activity Group',
  type:  'document',
  icon:  () => '🎯',
  fields: [
    defineField({ name:'name',        title:'Group Name',   type:'string', validation: r => r.required() }),
    defineField({ name:'description', title:'Description',  type:'text', rows: 3 }),
    defineField({ name:'schedule',    title:'Schedule',     type:'string', description:'e.g. Every Thursday 8PM IST on Zoom' }),
    defineField({ name:'zoomLink',    title:'Zoom Link',    type:'url' }),
    defineField({ name:'icon',        title:'Emoji Icon',   type:'string', description:'Emoji for the group card, e.g. 🎵' }),
  ],
  preview: {
    select:  { title:'name', icon:'icon' },
    prepare: ({ title, icon }) => ({ title: `${icon ?? ''} ${title}` }),
  },
})
