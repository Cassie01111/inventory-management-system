# 库存管理系统 (Inventory Management System)

一个现代化的库存管理系统，使用 Next.js 15 和 Supabase 构建。

## 🚀 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

### 部署到 GitHub Pages

1. **推送代码到 GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/Cassie01111/inventory-management-system.git
   git branch -M main
   git push -u origin main
   ```

2. **启用 GitHub Pages**
   - 在 GitHub 仓库页面点击 "Settings"
   - 左侧菜单找到 "Pages"
   - Source 选择 "GitHub Actions"

3. **等待自动部署**
   - GitHub Actions 会自动构建和部署
   - 部署完成后访问：`https://cassie01111.github.io/inventory-management-system`

## 🛠️ 技术栈

- **前端框架**: Next.js 15
- **样式**: Tailwind CSS
- **数据库**: Supabase
- **认证**: Supabase Auth
- **图标**: Lucide React
- **图表**: Recharts

## 📱 功能特性

- ✅ 用户认证（登录/注册）
- ✅ 库存管理
- ✅ 实时数据统计
- ✅ 低库存预警
- ✅ 报表生成
- ✅ 响应式设计
- ✅ 现代化 UI

## 🔧 环境变量

```env
NEXT_PUBLIC_SUPABASE_URL=https://rxrhxcnhawmwatfvrgov.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4cmh4Y25oYXdtd2F0ZnZyZ292Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI5Mzc2OTUsImV4cCI6MjA2ODUxMzY5NX0.FXpON71CEUuHWpNOsRaZSdyUjV9mJ3O-ZypzrpIBC04
```

## 📁 项目结构

```
src/
├── app/                 # Next.js App Router
│   ├── dashboard/       # 仪表板页面
│   ├── inventory/       # 库存管理页面
│   ├── login/          # 登录页面
│   ├── reports/        # 报表页面
│   └── settings/       # 设置页面
├── components/         # 可复用组件
├── contexts/          # React Context
└── lib/               # 工具库和配置
```

## 🌐 在线演示

- **本地开发**: http://localhost:3001
- **生产环境**: https://cassie01111.github.io/inventory-management-system

## 📝 部署说明

本项目已配置为静态导出，支持部署到：
- GitHub Pages
- Netlify
- Vercel
- 任何静态文件托管服务

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## �� 许可证

MIT License
