import { defineField, defineType } from 'sanity'

export const broadcastVideoSchema = defineType({
  name:  'broadcastVideo',
  title: 'Broadcast Video',
  type:  'document',
  icon:  () => '📺',
  fields: [
    defineField({ name:'title', title:'Video Title', type:'string', validation: r => r.required() }),
    defineField({ name:'description', title:'Description', type:'text', rows: 3 }),
    defineField({
      name:'youtubeUrl', title:'YouTube URL', type:'url',
      description:'Paste the full YouTube URL, e.g. https://www.youtube.com/watch?v=abc123',
      validation: r => r.required().uri({ scheme:['https','http'] }),
    }),
    defineField({ name:'featured', title:'Featured Video?', type:'boolean', initialValue: false }),
    defineField({ name:'publishDate', title:'Publish Date', type:'date' }),
  ],
  preview: {
    select:  { title:'title', subtitle:'youtubeUrl', featured:'featured' },
    prepare: ({ title, subtitle, featured }) => ({
      title:    `${featured ? '⭐ ' : ''}${title}`,
      subtitle: subtitle,
    }),
  },
})
