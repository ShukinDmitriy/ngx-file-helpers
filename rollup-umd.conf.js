export default {
  input: './build/esm5/ng-file-helpers.js',
  output: {
    file: './dist/bundles/ng-file-helpers.umd.js',
    name: 'ngxFilesHelpers',
    format: 'umd',
    globals: {
      '@angular/core': 'ng.core',
      '@angular/common': 'ng.common',
    }
  }
};
