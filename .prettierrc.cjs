module.exports = {
  tabWidth: 2, // 一个 tab 代表几个空格数，默认为 2 个
  printWidth: 80, // 一行的字符数，如果超过会进行换行，默认为80
  useTabs: false, // 是否使用 tab 进行缩进，默认为false，表示用空格进行缩减
  semi: false, // 行尾是否使用分号，默认为true
  singleQuote: true, // 字符串是否使用单引号，默认为 false，使用双引号
  trailingComma: 'none', // 是否使用尾逗号
  bracketSpacing: true, // 对象大括号直接是否有空格，默认为 true，效果：{ a: 1 }
  jsxBracketSameLine: false, // 在jsx中把'>' 是否单独放一行
  singleAttributePerLine: false, // 每行强制换行，只能使用单个属性
  endOfLine: 'auto',
  arrowParens: 'avoid',
  quoteProps: 'consistent',
  useEditorConfig: true,
  vueIndentScriptAndStyle: true,
  htmlWhitespaceSensitivity: 'strict'
}
