import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool }    from '@sanity/vision'

import { homeSchema }          from './schemas/home'
import { fiveFoldSchema }      from './schemas/fiveFold'
import { bibleStudySchema }    from './schemas/bibleStudy'
import { activityGroupSchema } from './schemas/activityGroup'
import { broadcastVideoSchema } from './schemas/broadcastVideo'
import { eventSchema }         from './schemas/event'
import { blogSchema }          from './schemas/blog'

export default defineConfig({
  name:      'ylf-church',
  title:     "YLF Church CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  basePath:  '/studio',

  plugins: [
    structureTool({
      structure: S =>
        S.list().title("YLF Content Manager").items([
          S.listItem().title('🏠 Home Page').child(
            S.document().schemaType('home').documentId('singletonHome')
          ),
          S.divider(),
          S.documentTypeListItem('fiveFoldMinistry').title('✦ Five Fold Ministry'),
          S.documentTypeListItem('bibleStudy').title('📖 Bible Study'),
          S.documentTypeListItem('activityGroup').title('🎯 Activity Groups'),
          S.documentTypeListItem('broadcastVideo').title('📺 Broadcast Videos'),
          S.documentTypeListItem('event').title('📅 Events'),
          S.documentTypeListItem('blog').title('📝 Blog Posts'),
        ]),
    }),
    visionTool(),
  ],

  schema: {
    types: [
      homeSchema,
      fiveFoldSchema,
      bibleStudySchema,
      activityGroupSchema,
      broadcastVideoSchema,
      eventSchema,
      blogSchema,
    ],
  },
})
