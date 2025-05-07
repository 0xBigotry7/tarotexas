# 项目协作规则（自动生成）

1. 技术栈统一使用 React Native + TypeScript。
2. 所有代码必须通过 ESLint 和 Prettier 格式化，提交前自动检查。
3. 禁止使用 var 关键字，推荐 const/let。
4. 禁止直接引入第三方 UI 组件库（如 Ant Design、Material UI 等），UI 需自定义实现。
5. 组件、函数、变量命名采用小驼峰（camelCase），文件夹和文件名用小写+中划线（kebab-case）。
6. 重要业务逻辑、复杂函数需有中英文注释。
7. 敏感信息（如 API Key、用户隐私数据）必须使用 .env 文件管理，严禁入库。
8. 每个功能/修复需新建独立分支，合并前需自测并通过代码审查。
9. 所有图片资源统一放在 assets/images/，塔罗牌图片放在 assets/images/tarot/。
10. commit message 采用英文，遵循 Conventional Commits 规范。

---

- 技术栈：React Native + TypeScript
- 编码规范：ESLint + Prettier
- 限制条件：禁用 var、禁止使用第三方 UI 库 