module.exports = (api) => {
  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      '@babel/plugin-proposal-class-properties',
      [
        'transform-assets',
        {
          extensions: [
            'css',
            'svg'
          ],
          name: 'static/media/[name].[hash:8].[ext]'
        }
      ],
      [
        'import',
        {
          libraryName: 'material-ui',
          libraryDirectory: api.env('browser') ? 'es' : 'lib',
          style: 'css',
        },
        'material-ui'
      ],
      [
        'import',
        {
          libraryName: '@material-ui/icons',
          libraryDirectory: 'lib',
          camel2DashComponentName: false
        }, 'material-ui-icons'
      ],
      ['import', {
        libraryName: '@ant-design/icons',
        libraryDirectory: 'lib',
        camel2DashComponentName: false
      }, 'ant-design-icons'],
    ],
  };
};
