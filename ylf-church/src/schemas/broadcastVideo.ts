import { defineField, defineType } from 'sanity'

export const broadcastVideoSchema = defineType({
  name:  'broadcastVideo',
  title: 'Broadcasting Video',
  type:  'document',
  icon:  () => '📺',

  fields: [
    defineField({
      name:        'title',
      title:       'Video Title',
      type:        'string',
      description: 'e.g. "YLF Sunday Worship – May 2025"',
      validation:  r => r.required(),
    }),

    defineField({
      name:        'youtubeUrl',
      title:       '🔗 YouTube Video Link',
      type:        'url',
      description: 'Paste the full YouTube URL — e.g. https://www.youtube.com/watch?v=abc123  OR  https://youtu.be/abc123',
      validation:  r => r.required().uri({ scheme: ['https', 'http'] }),
    }),

    defineField({
      name:         'featured',
      title:        '⭐ Feature this video?',
      type:         'boolean',
      description:  'Featured video appears large at the top of the Broadcasting page. Only one video should be featured at a time.',
      initialValue: false,
    }),

    defineField({
      name:        'description',
      title:       'Short Description',
      type:        'text',
      rows:        2,
      description: 'Brief summary shown below the video (optional)',
    }),

    defineField({
      name:        'publishDate',
      title:       'Publish Date',
      type:        'date',
      description: 'Used to sort videos — most recent shown first',
    }),
  ],

  orderings: [
    {
      title: 'Newest First',
      name:  'publishDateDesc',
      by:    [{ field: 'publishDate', direction: 'desc' }],
    },
  ],

  preview: {
    select:  { title: 'title', url: 'youtubeUrl', featured: 'featured', date: 'publishDate' },
    prepare: ({ title, url, featured, date }) => ({
      title:    `${featured ? '⭐ ' : ''}${title}`,
      subtitle: `${date ?? 'No date'} · ${url ?? 'No URL yet'}`,
    }),
  },
})
