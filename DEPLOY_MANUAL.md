# 🚀 手动部署到 GitHub Pages 指南

## 📋 部署步骤

### 1. 创建 GitHub 仓库
1. 访问 https://github.com/new
2. 仓库名：`inventory-management-system`
3. 描述：`Modern inventory management system built with Next.js and Supabase`
4. 可见性：**Public** ✅
5. 不要勾选任何初始化选项
6. 点击 "Create repository"

### 2. 上传项目文件
1. 在新建的仓库页面，点击 "uploading an existing file"
2. 将整个 `inventory-counting-system` 文件夹拖拽上传
3. 添加提交信息：`Initial commit: Inventory Management System`
4. 点击 "Commit changes"

### 3. 启用 GitHub Pages
1. 在仓库页面点击 "Settings" 标签
2. 左侧菜单找到 "Pages"
3. Source 选择 "GitHub Actions"
4. 保存设置

### 4. 等待自动部署
- GitHub Actions 会自动运行构建和部署
- 在仓库页面点击 "Actions" 标签查看进度
- 部署完成后会显示网站链接

## 🌐 网站地址

部署完成后，你的网站将在以下地址上线：
`https://cassie01111.github.io/inventory-management-system`

## 📁 项目文件说明

- `src/` - 源代码目录
- `.github/workflows/deploy.yml` - GitHub Actions 部署配置
- `next.config.ts` - Next.js 配置
- `package.json` - 项目依赖配置
- `README.md` - 项目说明文档

## ✅ 部署检查清单

- [ ] 创建 GitHub 仓库
- [ ] 上传项目文件
- [ ] 启用 GitHub Pages
- [ ] 等待自动部署
- [ ] 测试网站功能

## 🆘 如果遇到问题

1. **404 错误**：检查 GitHub Actions 是否成功运行
2. **构建失败**：检查 Actions 日志中的错误信息
3. **页面空白**：等待几分钟让部署完成

## 📞 技术支持

如有问题，请检查：
- GitHub Actions 日志
- 浏览器控制台错误
- 网络连接状态 