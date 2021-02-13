module.exports = async (env, argv) => {
  const config = await import('./webpack.config.server.js');
  return config.default(env, argv);
};
