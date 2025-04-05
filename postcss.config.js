module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-custom-media-generator': {
      '--small': '(min-width: 576px)',
      '--medium': '(min-width: 768px)',
      '--large': '(min-width: 992px)',
      '--extraLarge': '(min-width: 1200px)',
      '--extraExtraLarge': '(min-width: 1400px)',
      '--ultraLarge': '(min-width: 1680px)',
      '--retina': '(min-width: 2240px)',
      '--iMac': '(min-width: 1441px)',
    },
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3,
      features: {
        'custom-properties': false
      }
    },
    'postcss-flexbugs-fixes': {},
    'postcss-pxtorem': {
      propList: ['*']
    },
    'postcss-custom-media': {}
  }
};
