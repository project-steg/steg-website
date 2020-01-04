
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Steg | 学生ITエンジニア団体',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '学生ITエンジニア団体「Steg」公式ホームページ。Web制作案件の受託や、iOSアプリ開発の受託などを行なっています。学生がエンジニアリングを通して、社会に様々な挑戦をしていきます。' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Steg | 学生ITエンジニア団体' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://team-steg.com' },
      { hid: 'og:title', property: 'og:title', content: 'Steg | 学生ITエンジニア団体' },
      { hid: 'og:description', property: 'og:description', content: '学生ITエンジニア団体「Steg」公式ホームページ。Web制作案件の受託や、iOSアプリ開発の受託などを行なっています。学生がエンジニアリングを通して、社会に様々な挑戦をしていきます。' },
      { hid: 'og:image', property: 'og:image', content: 'https://team-steg.com/ogp.jpg' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', property: 'twitter:site', content: '@Steg_official' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/static/css/reset.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
