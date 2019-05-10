export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5cd557047775a03ced55b01d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog12234-studio',
                  apiId: '3516ba33-de3c-4493-bdaf-a13c654bc5ce'
                },
                {
                  buildHookId: '5cd556c6e770acd5a100ab4a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog12234',
                  apiId: 'cd52a5ff-000b-4e9c-8e5f-71561213305c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simen/sanity-gatsby-blog12234',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog12234.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
