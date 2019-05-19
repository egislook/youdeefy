import path from 'path'
import { GET } from 'fetchier'

export default {
  getSiteData: async ({ dev }) => ({
    icon: '/icons/512.png',
    name: 'YouDeesfy',
    title: ['What are',  'you looking for?'],
    description: 'Find your favourite artists, songs, channels or inspiring playlists. Just start typing!',
    suggestions: 'Just click on one of the suggested playlists and Enjoy the Music!',
    
    placeholder: 'Enter Youtube Playlist ID...',
    example: 'PLI33t8jpgAnc4p3ROWdz4hD_PERAQ4w0F',
  }),
  getRoutes: async () => {
    // const posts = await GET({ url: 'https://jsonplaceholder.typicode.com/posts' });

    return [
      {
        path: '/',
        template: 'src/pages/home'
      },
      {
        path: '/playlist/:playlistId',
        template: 'src/pages/playlist'
      },
      // {
      //   path: '/blog',
      //   getData: () => ({
      //     posts,
      //   }),
      //   children: posts.map(post => ({
      //     path: `/post/${post.id}`,
      //     template: 'src/containers/Post',
      //     getData: () => ({
      //       post,
      //     }),
      //   })),
      // },
    ]
  },
  plugins: [
    [ require.resolve('react-static-plugin-source-filesystem'), { location: path.resolve('./src/pages') } ],
    require.resolve('react-static-plugin-reach-router'),
    [ require.resolve('next-fucss'), { styleFile: '/src/style.css' } ],
    require.resolve('react-static-plugin-styled-components'),
  ],
  devServer: {
    port: '8080',
    host: '0.0.0.0',
    disableHostCheck: true,
    hot: false
  }
}
