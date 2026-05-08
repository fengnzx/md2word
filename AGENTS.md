# AI Agents 概述

本项目使用AI代理技术实现Markdown到Word文档的智能转换功能。以下是项目中涉及的AI代理组件概述。

## 项目简介

Markdown to Word Converter是一个基于AI增强的文档转换工具，通过OpenAI兼容API实现智能文档格式转换。该系统结合了前端用户界面和后端处理服务，提供直观的文件上传、转换和下载体验。

## 核心AI代理功能

### 1. 文档转换代理 (Converter Agent)

**功能**: 将Markdown格式文档智能转换为Word文档
- **位置**: `/backend/utils/converter.ts`
- **技术栈**: 
  - Node.js + Express
  - Mammoth (用于Word处理)
  - Turndown (用于Markdown/HTML转换)
  - Axios (用于API调用)

**处理流程**:
1. 读取上传的Markdown文件内容
2. (可选) 使用AI API增强文档内容格式
3. 将Markdown转换为HTML格式
4. 生成Word文档输出

**AI增强功能**:
- 自动优化标题层级 (H1, H2, H3等)
- 修正格式不一致性
- 改进表格格式
- 确保代码块正确格式化
- 保证列表结构正确

### 2. 文件处理代理 (File Processing Agent)

**功能**: 处理上传的Markdown文件，进行预处理和验证
- **位置**: `/backend/routes/conversion.ts`
- **技术栈**: 
  - Multer (用于文件上传处理)
  - Express中间件

**能力**:
- 文件类型验证 (.md, .markdown)
- 文件大小限制 (20MB)
- 安全性检查 (防止目录遍历攻击)
- 批量文件处理 (最多10个文件)

### 3. API配置代理 (API Configuration Agent)

**功能**: 管理AI API连接和配置
- **位置**: `/src/components/ApiConfigPanel.tsx`
- **技术栈**: 
  - React (前端配置界面)
  - Axios (API通信)

**配置项**:
- API密钥管理
- API端点URL设置
- 模型名称选择 (如 gpt-3.5-turbo)
- 温度参数控制 (默认0.3)

## AI集成实现

### API集成方式

```typescript
// 在 /backend/utils/converter.ts 中的AI增强函数
async function enhanceWithAI(content: string, options: any): Promise<string> {
  const prompt = `
    You are an expert in document formatting. Please improve the following Markdown content for better Word conversion.
    Focus on:
    1. Ensuring proper heading hierarchy (H1, H2, H3, etc.)
    2. Correcting any formatting inconsistencies
    3. Improving table formatting if present
    4. Ensuring code blocks are properly formatted
    5. Making sure lists are correctly structured
    
    Markdown content:
    ${content}
  `;
  
  const response = await axios.post(options.apiUrl, {
    model: options.modelName,
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.3,
    max_tokens: 2000
  }, {
    headers: {
      'Authorization': `Bearer ${options.apiKey}`,
      'Content-Type': 'application/json'
    }
  });
  
  return response.data.choices[0].message.content || content;
}
```

### 安全措施

- **API密钥管理**: 通过环境变量或前端输入管理，不在代码中硬编码
- **文件上传安全**: 
  - 限制文件类型仅接受Markdown文件
  - 设置文件大小上限
  - 防止路径遍历攻击
- **输入验证**: 对所有用户输入进行验证和清理
- **错误处理**: 优雅地处理API调用失败情况

## 系统架构

### 前端AI交互层

- **技术栈**: React + TypeScript + Vite
- **组件**:
  - DragDropArea: 拖放文件上传区域
  - ConversionStatusPanel: 转换状态面板
  - DownloadSection: 下载功能区
  - ApiConfigPanel: API配置面板
- **功能**:
  - 实时状态更新
  - 进度指示器
  - 错误处理机制
  - 用户友好的反馈界面

### 后端AI处理层

- **技术栈**: Node.js + Express + TypeScript
- **模块**:
  - Conversion Router: 文件转换路由处理器
  - Converter Utility: 核心转换逻辑
  - File Upload Handler: 文件上传处理
- **功能**:
  - 异步处理队列
  - 批量转换支持
  - 文件存储管理
  - API响应处理

## 使用场景

本AI代理系统适用于：
- **学术写作**: 论文、研究报告格式转换
- **技术文档**: API文档、开发指南标准化
- **商业报告**: 业务报告、提案文档格式化
- **内容创作**: 博客文章、电子书制作
- **教育材料**: 课程资料、讲义准备

## 性能特点

- **快速转换**: 异步处理机制，支持批量转换
- **高保真格式**: 保持原始Markdown格式和样式
- **智能错误恢复**: 当AI增强失败时回退到基础转换
- **可扩展架构**: 模块化设计，易于功能扩展
- **跨平台兼容**: 基于Web技术，支持多种操作系统

## 部署与运行

- **前端**: 使用Vite构建，支持热重载开发模式
- **后端**: Express服务器，支持并发请求处理
- **环境**: 支持本地开发和云端部署
- **依赖管理**: 使用npm管理所有项目依赖