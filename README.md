# girl-email前端项目文档


### 项目简介
> [girl-email]项目前端项目  
> 定时为目标发送邮件

### 项目前端依赖

* 主技术栈：React生态(React18 + React Router)
* 构建工具：[vite](https://vitejs.cn/)
* UI组件库：[antd](https://ant.design/index-cn)
* Ajax：[Axios](http://www.axios-js.com/)

### 启动项目
```shell
pnpm install
pnpm run dev
```

### 项目目录
```shell
.
.
├── README.md
├── dist
│?? ├── assets
│?? ├── favicon.ico
│?? └── index.html
├── index.html
├── package.json
├── public
│?? └── favicon.ico
├── src
│?? ├── App.tsx
│?? ├── assets
│?? ├── components
│?? ├── main.tsx
│?? ├── pages
│?? ├── router
│?? └── utils
│?? └── types
├── commitlint.config.js
├── .stylelintrc.cjs
├── .eslintrc.cjs
├── tsconfig.json
└── vite.config.ts
```
### 打包项目
```shell
pnpm run build
```

### 工作流  

#### git commit  

* `feat`: 添加新功能  
* `fix`: 修复 Bug  
* `chore`: 一些不影响功能的更改  
* `docs`: 专指文档的修改  
* `perf`: 性能方面的优化  
* `refactor`: 代码重构  
* `test`: 添加一些测试代码等等

### 项目业务文档  

一款趣味定时发送邮件项目
