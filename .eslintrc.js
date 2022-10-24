module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
     ecmaVersion: 2020,
     sourceType: "module", // 使能够用import
  },

  //    react版本自动检测
  settings: {
     react: {
        version: "detect",
     },
  },
  // 使用安装好的依赖包
  extends: [
     "plugin:react/recommended",
     "plugin:react-hooks/recommended",
     "plugin:@typescript-eslint/recommended",
  ],
  rules: {
     "@typescript-eslint/no-inferrable-types": "off",
     "no-unused-vars": "off", //不允许无用的变量
     "@typescript-eslint/no-unused-vars": ["error"],
     "@typescript-eslint/no-var-requires": "off",
     "react/prop-types": "off", //因为使用了ts  所以关闭
     "react/jsx-uses-react": "off", // 如果没有导入react不会报错
     "react/react-in-jsx-scope": "off",
     "@typescript-eslint/explicit-module-boundary-types": "off", // 由于可以用interface，所以关掉因为类别没有被精准指定的错误
  },
}