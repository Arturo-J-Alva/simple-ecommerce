module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/presentacion',
          permanent: true,
        },
      ]
    },
  }