// Learn more https://docs.expo.dev/guides/monorepos
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

module.exports = (async () => {
  const projectRoot = process.cwd();
// This can be replaced with `find-yarn-workspace-root`
  const workspaceRoot = path.resolve(projectRoot, '../..');

  return {
    resolver: {
      disableHierarchicalLookup: true,
      nodeModulesPaths: [
        path.resolve(projectRoot, 'node_modules'),
        path.resolve(workspaceRoot, 'node_modules'),
      ]
    },
    watchFolders: [workspaceRoot],
  };
})();
