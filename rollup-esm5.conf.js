export default {
  input: './build/esm5/ng-file-helpers.js',
  output: {
    file: './dist/esm5/ng-file-helpers.js',
    format: 'es',
    globals: {
      '@angular/core': 'ng.core',
      '@angular/common': 'ng.common',
    }
  }
};
