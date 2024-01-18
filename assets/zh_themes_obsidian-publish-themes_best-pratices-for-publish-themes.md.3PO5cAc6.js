import{_ as s,c as i,o as a,V as e}from"./chunks/framework.qP9-rlTe.js";const u=JSON.parse('{"title":"Publish主题最佳实践","description":"","frontmatter":{},"headers":[],"relativePath":"zh/themes/obsidian-publish-themes/best-pratices-for-publish-themes.md","filePath":"zh/themes/obsidian-publish-themes/best-pratices-for-publish-themes.md","lastUpdated":1705557346000}'),n={name:"zh/themes/obsidian-publish-themes/best-pratices-for-publish-themes.md"},l=e(`<h1 id="publish主题最佳实践" tabindex="-1">Publish主题最佳实践 <a class="header-anchor" href="#publish主题最佳实践" aria-label="Permalink to &quot;Publish主题最佳实践&quot;">​</a></h1><hr><h3 id="obsidian-app和-obsidian-publish是不同的上下文" tabindex="-1">Obsidian App和 Obsidian Publish是不同的上下文 <a class="header-anchor" href="#obsidian-app和-obsidian-publish是不同的上下文" aria-label="Permalink to &quot;Obsidian App和 Obsidian Publish是不同的上下文&quot;">​</a></h3><p>Obsidian Publish 与 Obsidian App共享共同的代码和 UI 原则，但也有一些在创建主题时应考虑的重要差异。需要记住的一些经验法则：</p><ul><li>避免使用复杂的选择器，而是使用可用的 <a href="https://docs.obsidian.md/Reference/CSS+variables/CSS+variables" target="_blank" rel="noreferrer">CSS variables</a>。</li><li>避免包含特定于 Obsidian 应用程序的 CSS 选择器和规则。</li><li>保持 CSS 文件较小，以便访问者可以快速加载。</li><li>考虑跨浏览器和屏幕尺寸的兼容性。</li></ul><h3 id="app专用和publish专用的-css-规则" tabindex="-1">App专用和Publish专用的 CSS 规则 <a class="header-anchor" href="#app专用和publish专用的-css-规则" aria-label="Permalink to &quot;App专用和Publish专用的 CSS 规则&quot;">​</a></h3><p>虽然 Obsidian App 和 Obsidian Publish 共享一些通用代码，但大多数 App 主题旨在针对 Publish 上下文中不存在的 CSS 类。因此，我们建议从头开始构建 Publish 主题，以最大程度地减少不必要的代码量。</p><h3 id="文件大小" tabindex="-1">文件大小 <a class="header-anchor" href="#文件大小" aria-label="Permalink to &quot;文件大小&quot;">​</a></h3><p>Obsidian App主题存储在用户设备本地，而 Obsidian Publish主题会在用户每次访问网站时加载。因此，Obsidian Publish主题应注意文件大小。</p><p>在App上下文中，可以使用 base64 编码在 CSS 文件中嵌入字体和图像。在Publish上下文中，我们建议您避免使用此方法，尤其是当它导致文件大小较大（数兆字节）时，可能会在访问者访问站点时阻止呈现。</p><h3 id="浏览器兼容性" tabindex="-1">浏览器兼容性 <a class="header-anchor" href="#浏览器兼容性" aria-label="Permalink to &quot;浏览器兼容性&quot;">​</a></h3><p>Publish 网站的访问者可能会使用与新 CSS 功能不兼容的旧版浏览器。因此，我们建议在发布上下文中对高级 CSS 功能保持保守。这与 Obsidian 应用主题形成鲜明对比，后者针对支持较新浏览器功能的渲染引擎（Chromium/Blink 的最新版本）。尝试搜索 <a href="https://caniuse.com/" target="_blank" rel="noreferrer">caniuse.com</a> ，了解哪些 CSS 功能可跨浏览器广泛使用。</p><h3 id="小屏幕和移动设备" tabindex="-1">小屏幕和移动设备 <a class="header-anchor" href="#小屏幕和移动设备" aria-label="Permalink to &quot;小屏幕和移动设备&quot;">​</a></h3><p>Obsidian Publish 默认有两个断点：</p><table><thead><tr><th>断点</th><th>Device 设备</th><th>Effect 影响</th></tr></thead><tbody><tr><td>1000px</td><td>Tablet</td><td>右侧边栏被隐藏</td></tr><tr><td>750px</td><td>Mobile</td><td>左侧和右侧边栏被隐藏。如果启用，可以通过左上角的汉堡菜单访问导航</td></tr></tbody></table><p>您可以使用 CSS 定位这些设备。 <code>@media</code> 查询之外定义的任何规则都将应用于所有设备。</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@media</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> screen</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">min-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* ... rules and variables for screens larger than tablet */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@media</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> screen</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">max-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* ... rules and variables for tablet devices and smaller */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@media</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> screen</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">max-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">750</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* ... rules and variables for mobile devices and smaller */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,17),h=[l];function t(p,r,d,k,b,c){return a(),i("div",null,h)}const m=s(n,[["render",t]]);export{u as __pageData,m as default};