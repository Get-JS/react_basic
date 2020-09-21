const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        chrome: '40',
      },
      // useBuiltIns: 'entry',
      useBuiltIns: 'usage',
    },
  ],
];

module.exports = { presets };
