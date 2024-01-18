import{_ as s,c as a,o as i,V as n}from"./chunks/framework.qP9-rlTe.js";const u=JSON.parse('{"title":"视图插件","description":"","frontmatter":{},"headers":[],"relativePath":"zh/plugins/editor/view-plugins.md","filePath":"zh/plugins/editor/view-plugins.md","lastUpdated":1705557346000}'),e={name:"zh/plugins/editor/view-plugins.md"},l=n(`<h1 id="视图插件" tabindex="-1">视图插件 <a class="header-anchor" href="#视图插件" aria-label="Permalink to &quot;视图插件&quot;">​</a></h1><hr><p>视图插件是一个<a href="./editor-extensions.html">编辑器扩展</a>，可让您访问编辑器视窗。</p><blockquote><p>[!NOTE]</p><p>本节旨在为Obsidian插件开发人员提炼 CodeMirror 6 的官方文档。有关状态管理的更多信息，请参阅<a href="https://codemirror.net/docs/guide/#affecting-the-view" target="_blank" rel="noreferrer">Affecting the View</a>。</p></blockquote><h2 id="先决条件" tabindex="-1">先决条件 <a class="header-anchor" href="#先决条件" aria-label="Permalink to &quot;先决条件&quot;">​</a></h2><ul><li>基本了解<a href="./viewport.html">视窗</a>。</li></ul><h2 id="创建视图插件" tabindex="-1">创建视图插件 <a class="header-anchor" href="#创建视图插件" aria-label="Permalink to &quot;创建视图插件&quot;">​</a></h2><p>View plugins are editor extensions that run <em>after</em> the viewport has been recomputed. While this means that they can access the viewport, it also means that a view plugin can&#39;t make any changes that would impact the viewport. For example, by inserting blocks or line breaks into the document.<br> 视图插件是在重新计算视窗后执行的编辑器扩展。视图插件可以访问视窗，但不能对视窗执行产生影响的更改。例如，通过在文档中插入块或换行符。</p><blockquote><p>[!NOTE]</p><p>如果要进行影响编辑器垂直布局的更改（例如插入块和换行符），则需要使用<a href="./state-fields.html">状态字段</a>。</p></blockquote><p>要创建视图插件，请创建一个实现 PluginValue 的类，并将其传递给 <a href="https://codemirror.net/docs/ref/#view.ViewPlugin%5EfromClass" target="_blank" rel="noreferrer">ViewPlugin.fromClass()</a>  函数。</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ViewUpdate,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  PluginValue,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  EditorView,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ViewPlugin,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@codemirror/view&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ExamplePlugin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PluginValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">view</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EditorView</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">update</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ViewUpdate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  destroy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> examplePlugin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ViewPlugin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fromClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ExamplePlugin);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>视图插件有三种方法控制其生命周期：</p><ul><li><code>constructor()</code> 初始化插件。</li><li><code>update()</code> 当某些内容发生变化时，例如当用户输入或选择某些文本时，会更新您的插件。</li><li><code>destroy()</code> 插件卸载时的清理。</li></ul><p>虽然示例中的视图插件有效，但它并没有做太多事情。如果您想更好地了解导致插件更新的原因，可以在方法中 <code>update()</code> 添加 <code>console.log(update);</code> 以将所有更新打印到控制台。</p><h2 id="下一步" tabindex="-1">下一步 <a class="header-anchor" href="#下一步" aria-label="Permalink to &quot;下一步&quot;">​</a></h2><p>从您的视图插件提供<a href="./decorations.html">装饰</a>以更改文档的显示方式。</p>`,16),p=[l];function t(r,h,k,d,c,o){return i(),a("div",null,p)}const g=s(e,[["render",t]]);export{u as __pageData,g as default};