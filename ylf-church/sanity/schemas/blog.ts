import { defineField, defineType } from 'sanity'

export const blogSchema = defineType({
  name:  'blog',
  title: 'Blog Post',
  type:  'document',
  icon:  () => '📝',
  fields: [
    defineField({ name:'title',       title:'Title',        type:'string', validation: r => r.required() }),
    defineField({ name:'slug',        title:'Slug',         type:'slug', options:{ source:'title', maxLength:96 }, validation: r => r.required() }),
    defineField({ name:'excerpt',     title:'Excerpt',      type:'text', rows:3, description:'Short summary shown on the blog listing page.' }),
    defineField({
      name:'body', title:'Body', type:'array',
      of: [
        { type:'block',
          styles:[
            { title:'Normal',     value:'normal'     },
            { title:'Heading 2',  value:'h2'         },
            { title:'Heading 3',  value:'h3'         },
            { title:'Quote',      value:'blockquote' },
          ],
          marks:{ decorators:[{ title:'Strong', value:'strong' },{ title:'Italic', value:'em' }] }
        },
        { type:'image', options:{ hotspot: true } },
      ],
    }),
    defineField({ name:'author',      title:'Author Name',  type:'string' }),
    defineField({ name:'publishedAt', title:'Published At', type:'datetime', initialValue: () => new Date().toISOString() }),
    defineField({ name:'category',    title:'Category',     type:'string', options:{ list:[ 'Devotional','Ministry','Teaching','Community','Testimony','Prophecy' ] } }),
    defineField({ name:'mainImage',   title:'Main Image',   type:'image', options:{ hotspot: true }, fields:[
      defineField({ name:'alt', title:'Alt Text', type:'string' }),
    ]}),
  ],
  preview: {
    select:  { title:'title', author:'author', media:'mainImage' },
    prepare: ({ title, author, media }) => ({ title, subtitle: author, media }),
  },
})
