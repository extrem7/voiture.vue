module.exports = {
  '*.js': ['eslint --max-warnings=0 --no-ignore'],
  '*.{vue,ts,tsx}': [
    'eslint --max-warnings=0 --no-ignore',
    () => 'vue-tsc --noEmit --skipLibCheck',
  ],
}
