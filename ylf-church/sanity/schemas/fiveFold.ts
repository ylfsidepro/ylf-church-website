import { defineField, defineType } from 'sanity'

export const fiveFoldSchema = defineType({
  name:  'fiveFoldMinistry',
  title: 'Five Fold Ministry',
  type:  'document',
  icon:  () => '✦',
  fields: [
    defineField({ name:'title',       title:'Ministry Title',  type:'string', validation: r => r.required() }),
    defineField({
      name:'role', title:'Ministry Role', type:'string',
      options:{ list:[ 'apostle','prophet','evangelist','pastor','teacher' ] },
      validation: r => r.required(),
    }),
    defineField({ name:'description', title:'Description',     type:'text', rows: 4 }),
    defineField({ name:'scripture',   title:'Scripture Reference', type:'string', description:'e.g. Ephesians 4:11' }),
    defineField({
      name:'icon', title:'Icon Key', type:'string',
      description: 'One of: star, flame, globe, heart, book',
      options:{ list:['star','flame','globe','heart','book'] },
    }),
    defineField({ name:'orderRank',   title:'Order', type:'number', description:'Lower = first' }),
  ],
  preview: {
    select:  { title:'title', role:'role' },
    prepare: ({ title, role }) => ({ title, subtitle: role }),
  },
})
