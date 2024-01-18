import{_ as s,c as i,o as a,V as n}from"./chunks/framework.qP9-rlTe.js";const g=JSON.parse('{"title":"图标","description":"","frontmatter":{},"headers":[],"relativePath":"zh/plugins/user-interface/icons.md","filePath":"zh/plugins/user-interface/icons.md","lastUpdated":1705557346000}'),l={name:"zh/plugins/user-interface/icons.md"},e=n(`<h1 id="图标" tabindex="-1">图标 <a class="header-anchor" href="#图标" aria-label="Permalink to &quot;图标&quot;">​</a></h1><hr><p>Obsidian API 中的一些用户界面组件可让您配置一个附带图标。您可以选择内置图标，也可以添加自己的图标。</p><h2 id="b浏览可用图标" tabindex="-1">B浏览可用图标 <a class="header-anchor" href="#b浏览可用图标" aria-label="Permalink to &quot;B浏览可用图标&quot;">​</a></h2><p>浏览 <a href="https://lucide.dev/" target="_blank" rel="noreferrer">lucide.dev</a> 查看所有可用图标及其相应名称。</p><p>请注意：目前仅支持版本 0.171.0 以下的图标。</p><h2 id="使用图标" tabindex="-1">使用图标 <a class="header-anchor" href="#使用图标" aria-label="Permalink to &quot;使用图标&quot;">​</a></h2><p>如果想在自定义界面中使用图标，可使用 <a href="https://docs.obsidian.md/Reference/TypeScript+API/setIcon" target="_blank" rel="noreferrer">setIcon()</a> 实用程序函数为 <a href="https://docs.obsidian.md/Plugins/User+interface/HTML+elements" target="_blank" rel="noreferrer">HTML element</a> 添加图标。下面的示例为状态栏添加了图标：</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Plugin, setIcon } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;obsidian&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ExamplePlugin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  async</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onload</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> item</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addStatusBarItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    setIcon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(item, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;info&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>要改变图标的大小，可在包含图标的元素上使用预设尺寸设置 <code>--icon-size</code> CSS 变量：</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --icon-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">--icon-size-m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="添加自己的图标" tabindex="-1">添加自己的图标 <a class="header-anchor" href="#添加自己的图标" aria-label="Permalink to &quot;添加自己的图标&quot;">​</a></h2><p>要为插件添加自定义图标，请使用 addIcon() ：</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { addIcon, Plugin } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;obsidian&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ExamplePlugin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  async</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onload</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    addIcon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;circle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`&lt;circle cx=&quot;50&quot; cy=&quot;50&quot; r=&quot;50&quot; fill=&quot;currentColor&quot; /&gt;\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addRibbonIcon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;circle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Click me&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello, you!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><code>addIcon</code> 需要两个参数：</p><ol><li>唯一标识图标的名称。</li><li>图标的 SVG 内容，不包括周围的 <code>&lt;svg&gt;</code> 标签。</li></ol><p>请注意，您的图标必须在 <code>0 0 100 100</code> 视图框内才能正确绘制。</p><p>调用 <code>addIcon</code> 后，您可以像使用任何内置图标一样使用该图标。</p><h3 id="图标设计指南" tabindex="-1">图标设计指南 <a class="header-anchor" href="#图标设计指南" aria-label="Permalink to &quot;图标设计指南&quot;">​</a></h3><p>为了与Obsidian界面兼容并保持一致，您的图标应遵循 <a href="https://lucide.dev/guide/design/icon-design-guide" target="_blank" rel="noreferrer">Lucide’s guidelines</a>：</p><ul><li>图标必须在 24 x 24 像素的画布上设计</li><li>图标必须在画布内至少有 1 个像素的填充</li><li>图标的笔画宽度必须为 2 像素</li><li>图标必须使用圆形连接</li><li>图标必须使用圆帽</li><li>图标必须使用居中的笔画</li><li>图标中的形状（如矩形）的边框半径必须为 2 像素</li><li>不同元素之间必须有 2 个像素的间距</li></ul><p>Lucide 还为 Illustrator、Figma 和 Inkscape 等矢量编辑器提供<a href="https://github.com/lucide-icons/lucide/blob/main/CONTRIBUTING.md" target="_blank" rel="noreferrer">templates and guides</a> 。</p>`,22),t=[e];function p(h,r,k,d,c,o){return a(),i("div",null,t)}const u=s(l,[["render",p]]);export{g as __pageData,u as default};