# Markdown转Word转换工具

一个基于AI驱动的在线工具，用于将Markdown文档转换为高质量的Word文档。

[English Document](./README.md)

## 功能特点

- 📁 拖拽文件上传（支持多文件）
- ⚡ 实时转换状态和进度指示器
- 🤖 使用OpenAI兼容API的AI驱动增强功能
- 📄 保留格式（标题、列表、表格、代码块、图片等）
- 💾 转换文件批量下载
- 🔐 安全的API密钥处理
- 📱 适用于所有设备的响应式设计

## 技术栈

- **前端**: React, TypeScript, Tailwind CSS
- **后端**: Node.js, Express
- **转换引擎**: 带AI增强功能的自定义转换器
- **构建工具**: Vite
- **部署**: Vercel/GitHub Pages

## 安装

1. 克隆仓库:
```bash
git clone <repository-url>
cd md2word
```

2. 安装依赖:
```bash
npm install
```

3. 在根目录创建 `.env` 文件并添加您的API配置:
```env
OPENAI_API_KEY=your_api_key_here
OPENAI_API_URL=https://api.openai.com/v1/chat/completions
MODEL_NAME=gpt-3.5-turbo
```

## 开发

要在开发模式下运行应用程序：

```bash
npm run dev
```

或者，您可以使用专门的启动脚本：

```bash
node start-dev.js
```

这将同时启动前端和后端服务器。

前端将在以下地址可用：http://localhost:5174 (Vite将自动选择可用端口)
后端API将在以下地址可用：http://localhost:5002

## 快速开始

1. 安装依赖:
```bash
npm install
```

2. 在根目录创建 `.env` 文件并添加您的API配置:
```env
OPENAI_API_KEY=your_api_key_here
OPENAI_API_URL=https://api.openai.com/v1/chat/completions
MODEL_NAME=gpt-3.5-turbo
PORT=5000
```

3. 启动开发服务器:
```bash
npm run dev
```

4. 在浏览器中访问 http://localhost:5174 以访问应用程序。

## 生产构建

要为生产环境构建应用程序：

```bash
npm run build
```

## API端点

- `GET /api/health` - 健康检查
- `POST /api/conversion/convert` - 将Markdown文件转换为Word
- `GET /api/download/:filename` - 下载转换后的文件

## 环境变量

- `PORT` - 后端服务器端口 (默认: 5002)
- `OPENAI_API_KEY` - 您的OpenAI API密钥
- `OPENAI_API_URL` - OpenAI API端点URL
- `MODEL_NAME` - 用于AI增强的模型名称

## 项目结构

```
md2word/
├── public/                 # 静态资源
├── src/                    # 前端源代码
│   ├── components/         # React组件
│   ├── utils/              # 工具函数
│   ├── App.tsx             # 主应用程序组件
│   ├── main.tsx            # 应用程序入口点
│   └── index.css           # 全局样式
├── backend/                # 后端源代码
│   ├── routes/             # API路由
│   ├── utils/              # 后端工具函数
│   ├── server.ts           # 主服务器文件
│   └── tsconfig.json       # TypeScript配置
├── uploads/                # 临时文件存储
├── package.json            # 项目依赖和脚本
├── tsconfig.json           # 根TypeScript配置
└── README.md               # 项目文档
```

## 转换功能

应用程序保留以下Markdown元素：

- 文本格式（粗体、斜体、下划线、删除线）
- 标题（H1-H6）
- 列表（有序、无序、任务列表）
- 表格（带对齐方式）
- 代码块（带语法高亮）
- 图片（本地和远程）
- 引用块和水平分割线
- 脚注和其他特殊元素

## 安全注意事项

- 文件大小限制为20MB
- 仅接受Markdown文件（.md, .markdown）
- API密钥存储在客户端，不会发送到服务器
- 实现了输入验证和清理

## 贡献

1. Fork 仓库
2. 创建功能分支 (`git checkout -b feature/awesome-feature`)
3. 进行修改
4. 提交更改 (`git commit -m 'Add some awesome feature'`)
5. 推送到分支 (`git push origin feature/awesome-feature`)
6. 开启Pull Request

## 许可证

本项目根据MIT许可证授权 - 详见[LICENSE](LICENSE)文件了解详情。

## 支持

如果您遇到任何问题或有疑问，请在仓库中提交issue。