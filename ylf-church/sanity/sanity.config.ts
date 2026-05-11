import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

import { broadcastVideoSchema } from './schemas/broadcastVideo'
import { eventSchema } from './schemas/event'
import { blogSchema } from './schemas/blog'

export default defineConfig({
  name: 'ylf-church',
  title: 'YLF Church CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'ylfproduction',

  basePath: '/studio',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('YLF Content Manager')
          .items([

            S.listItem()
              .title('📝 Blog Posts')
              .schemaType('blog')
              .child(
                S.documentTypeList('blog')
                  .title('All Blog Posts')
              ),

            S.divider(),

            S.listItem()
              .title('📅 Upcoming Events')
              .schemaType('event')
              .child(
                S.documentTypeList('event')
                  .title('All Events')
              ),

            S.divider(),

            S.listItem()
              .title('📺 Broadcasting Videos')
              .schemaType('broadcastVideo')
              .child(
                S.documentTypeList('broadcastVideo')
                  .title('All Videos')
              ),

          ]),
    }),

    ...(process.env.NODE_ENV === 'development'
      ? [visionTool()]
      : []),
  ],

  schema: {
    types: [
      blogSchema,
      eventSchema,
      broadcastVideoSchema,
    ],
  },
})
