import{_ as s,c as a,o as i,a5 as n}from"./chunks/framework.DcfbuPOr.js";const e="/assets/image-12.C2vK9vfD.png",y=JSON.parse('{"title":"QLabel标签控件","description":"","frontmatter":{},"headers":[],"relativePath":"python/PyQt6/211.md","filePath":"python/PyQt6/211.md"}'),l={name:"python/PyQt6/211.md"},p=n('<h1 id="qlabel标签控件" tabindex="-1">QLabel标签控件 <a class="header-anchor" href="#qlabel标签控件" aria-label="Permalink to &quot;QLabel标签控件&quot;">​</a></h1><p>Label控件，又称为标签控件，它主要用于显示用户不能编辑的文本，标识窗体上的对象（例如，给文本</p><p>框、列表框添加描述信息等)，它对应PyQt6中的QLabel类，Label控件本质上是QLabel类的一个对象。</p><h2 id="label属性" tabindex="-1">Label属性 <a class="header-anchor" href="#label属性" aria-label="Permalink to &quot;Label属性&quot;">​</a></h2><p>Label控件，又称为标签控件，它主要用于显示用户不能编辑的文本，标识窗体上的对象（例如，给文本</p><p>框、列表框添加描述信息等)，它对应PyQt6中的QLabel类，Label控件本质上是QLabel类的一个对象。</p><p>Display Widgets —&gt; Label</p><p>在Qt Designer设计器的右边栏目中，可对<code>标签文本 text</code>，<code>标签文本对齐方式 alignment</code>，<code>开启文本换行 wordWrap</code>，<code>开启文本超链接 OpenExternalLinks</code>，<code>设置图片 Pixmap</code>等属性，进行设置。</p><p><img src="'+e+`" alt="alt text" loading="lazy"></p><h2 id="获取label文本" tabindex="-1">获取Label文本 <a class="header-anchor" href="#获取label文本" aria-label="Permalink to &quot;获取Label文本&quot;">​</a></h2><p>使用QLabel类的text()方法，获取Label标签中的文本</p><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sys</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PyQt6.QtWidgets </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> QApplication, QLabel</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PyQt6 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> uic</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __name__</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;__main__&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    app </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> QApplication(sys.argv)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ui </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> uic.loadUi(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./QLabel标签.ui&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    myLabel: QLabel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ui.label </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 获取label对象</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(myLabel.text()) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 打印label文本值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ui.show()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    sys.exit(app.exec())</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,12),t=[p];function h(r,k,d,c,o,E){return i(),a("div",null,t)}const g=s(l,[["render",h]]);export{y as __pageData,g as default};
