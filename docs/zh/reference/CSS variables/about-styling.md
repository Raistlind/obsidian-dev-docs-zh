
---
Obsidian App使用[级联样式表](https://en.wikipedia.org/wiki/CSS) (CSS) 来控制用户界面的设计。 CSS 与网站和基于 Web 的应用程序使用的标记语言相同，这意味着您可以在线找到许多资源来帮助您学习如何使用和编辑 CSS。

Obsidian 包含数百个 [CSS 变量](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables)，可实现始终美观的用户界面。

## 对于插件

通过为您自己的自定义元素使用内置 CSS 变量，您可以在插件中创建看起来很漂亮且与社区主题兼容的原生用户界面。

**styles.css**：

```css
.todo-list {
  background-color: var(--background-secondary);
}
```

## 对于主题和片段

过覆盖 Obsidian CSS 变量的默认值，您可以创建漂亮的主题，而无需复杂的 CSS 选择器。

**theme.css**：

```css
.theme-dark {
  --background-primary: #18004F;
  --background-secondary: #220070;
}

.theme-light {
  --background-primary: #ECE4FF;
  --background-secondary: #D9C9FF;
}
```

要了解有关如何使用 CSS 变量构建主题的更多信息，请参阅[构建主题](../../themes/app-themes/build-a-theme.md)。