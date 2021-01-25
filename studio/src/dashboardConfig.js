export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '600f18cda63a210c427fc3a1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-qgygd922',
                  apiId: '4534221b-9b8a-4440-9085-851d9ceb2b1a'
                },
                {
                  buildHookId: '600f18cd8abb7a0cff1b5281',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-v4n9feyv',
                  apiId: '6739010b-d2bb-45bd-97f3-3018575027f6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jonellwood/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-v4n9feyv.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
