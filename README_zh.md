# YouGlish 单词探索器 - Chrome 扩展

一个帮助用户使用 YouGlish API 学习英语发音的 Chrome 扩展。通过视频片段观看母语者在上下文中发音。

## 功能

- 搜索任何英语单词或短语
- 观看母语者使用该单词的视频片段
- 在多个示例中导航
- 实时结果计数
- 简洁直观的用户界面

## 安装

### 从源码安装
1. 克隆此仓库：
```bash
git clone https://github.com/curarc/youGlish.git
```

2. 打开 Chrome 并导航到 `chrome://extensions/`

3. 在右上角启用“开发者模式”

4. 点击“加载已解压的扩展程序”并选择扩展目录

### 使用方法

1. 点击 Chrome 工具栏中的 YouGlish 图标
2. 在搜索框中输入单词或短语
3. 点击“搜索”或按回车键
4. 观看视频示例
5. 使用“上一个”和“下一个”按钮在更多示例中导航

## 技术细节

- 使用原生 JavaScript 构建
- 使用 YouGlish JavaScript API
- Chrome 扩展 Manifest V3
- 使用 CSS Flexbox 的响应式设计

## 项目结构

```
youglish-chrome-extension/
├── images/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── manifest.json
├── popup.html
├── popup.js
├── styles.css
└── widget.js
```

## 开发

要修改扩展：
1. 修改源文件
2. 在 `chrome://extensions/` 中重新加载扩展
3. 点击扩展卡上的刷新图标

## 致谢

- 使用 [YouGlish API](https://youglish.com/api/doc/js-api) 提供的视频内容
- 为此项目创建的扩展图标和设计元素

## 许可证

MIT 许可证 - 详情见 LICENSE 文件

---

[English Version](README.md)
