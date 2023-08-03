module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parser: 'vue-eslint-parser', // 解析 .vue 文件
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    '@typescript-eslint/no-var-requires': 0, // 解决报错：Require statement not part of import statement.
    'vue/multi-word-component-names': 'off', // 关闭组件命名规则娇艳
    '@typescript-eslint/no-explicit-any': 0, // 不允许显式的any类型
    '@typescript-eslint/no-unused-vars': 1 // 禁止未使用过的变量
  }
}
