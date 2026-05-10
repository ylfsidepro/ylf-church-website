import { defineField, defineType } from 'sanity'

export const homeSchema = defineType({
  name:  'home',
  title: 'Home Page',
  type:  'document',
  icon:  () => '🏠',
  fields: [
    defineField({ name: 'tagline',          title: 'Hero Tagline',       type: 'string' }),
    defineField({ name: 'subTagline',       title: 'Hero Sub-Tagline',   type: 'string' }),
    defineField({ name: 'heroImage',        title: 'Hero Image',         type: 'image', options: { hotspot: true } }),
    defineField({ name: 'missionStatement', title: 'Mission Statement',  type: 'text', rows: 3 }),
    defineField({ name: 'visionStatement',  title: 'Vision Statement',   type: 'text', rows: 3 }),
  ],
})
