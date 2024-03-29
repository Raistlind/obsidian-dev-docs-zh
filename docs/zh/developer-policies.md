<!--
 * @Author: Raistlind johnd0712@gmail.com
 * @Date: 2024-01-18 10:18:00
 * @LastEditors: Raistlind
 * @LastEditTime: 2024-01-18 10:18:00
 * @Description: 
-->

# 开发者政策
---
我们在社区插件和主题上的目标是让用户能够轻松安全地修改和扩展 Obsidian 的功能，同时优先考虑应用程序的数据自主和离线使用。

添加到 Obsidian 目录的所有社区插件和主题都必须遵守以下政策。每个插件和主题纳入目录之前都会经过单独审查。未遵循政策的插件和主题将从目录中移除。

# 政策

## 禁止项

插件和主题不得：
- 对代码进行混淆处理以隐藏其用途。
- 插入通过互联网加载的动态广告。
- 在插件自己的界面之外插入静态广告。
- 包含客户端遥测数据。
- 主题有可能无法从网络加载资源。如需包含资产，请参阅[此指南](https://docs.obsidian.md/Themes/App+themes/Embed+fonts+and+images+in+your+theme)。

## 强制声明

只有在自述文件中明确指出时，才允许以下内容：
- 完整功能需要付费。
- 需要帐户才能获得完整功能。
- 使用网络信息，须明确说明使用了哪些远程服务以及为什么需要这些服务。
- 访问 Obsidian Vault 之外的文件，须清晰地解释为什么需要这样做。
- 静态广告，例如：插件自身界面中的横幅和弹出消息。
- 服务器端遥测，须包含解释如何处理数据的隐私政策链接。
- 关闭源代码。这将根据具体情况进行处理。

## 版权和许可

所有社区插件和主题必须遵循以下要求：
- 包括一个 [LICENSE](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository) 文件，并清楚地指出您的插件或主题的许可证。
- 遵守使用的插件或主题代码的原始许可证，包括相应自述文件内容（如果需要）。
- 尊重Obsidian的商标政策。请勿以可能使用户误认为您的插件或主题是第一方创作的方式使用“Obsidian”商标。

# 举报违规行为

如果您遇到违反上述政策的插件或主题，请在其GitHub库中检查现有问题，看是否已报告。如果没有，则请创建问题单，告知开发人员。
如果开发者在 7 天后仍未回复，请联系[Obsidian团队](https://help.obsidian.md/Help+and+support#Report+a+security+issue)。对于严重的违规行为，您可以立即联系我们的团队。

# 删除插件和主题

如果出现违反政策的情况，我们可能会尝试联系开发者，并为他们提供解决问题的合理时间范围。
如果届时问题仍未解决，我们将从目录中删除插件或主题。
如果出现以下情况，我们可能会立即删除插件或主题：
- 恶意的插件或主题。
- 开发商拒绝合作。
- 反复违规的行为。
此外，我们还可能删除已失去维护或严重损坏的插件或主题。
