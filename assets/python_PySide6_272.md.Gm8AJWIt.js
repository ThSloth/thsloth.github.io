import{_ as t,c as a,o,a5 as r}from"./chunks/framework.DcfbuPOr.js";const e="/assets/image-39.DoMLBoS1.png",d="/assets/image-40.fk7_gg-E.png",s="/assets/image-41.CaeCgfSR.png",n="/assets/image-42.CAyyRmnJ.png",i="/assets/image-43.BwCULqCX.png",y=JSON.parse('{"title":"QMainWindow主窗体","description":"","frontmatter":{},"headers":[],"relativePath":"python/PySide6/272.md","filePath":"python/PySide6/272.md"}'),l={name:"python/PySide6/272.md"},c=r('<h1 id="qmainwindow主窗体" tabindex="-1">QMainWindow主窗体 <a class="header-anchor" href="#qmainwindow主窗体" aria-label="Permalink to &quot;QMainWindow主窗体&quot;">​</a></h1><p>主窗体类是通用的主窗体，包含菜单栏（QMenuBar），工具栏（QToolBar），悬停部件（QDockWidget）、中央部件（Central Widget）、状态栏（QStatusBar）等基本类型</p><p><img src="'+e+'" alt="alt text" loading="lazy"></p><p><img src="'+d+'" alt="alt text" loading="lazy"></p><h1 id="qtoolbar工具栏控件" tabindex="-1">QToolBar工具栏控件 <a class="header-anchor" href="#qtoolbar工具栏控件" aria-label="Permalink to &quot;QToolBar工具栏控件&quot;">​</a></h1><p>QToolBar类表示工具栏，它是一个由文本按钮、图标或者其他小控件组成的可移动面板，通常位于菜单栏下方。</p><h2 id="qtoolbar类的常用方法" tabindex="-1">QToolBar类的常用方法 <a class="header-anchor" href="#qtoolbar类的常用方法" aria-label="Permalink to &quot;QToolBar类的常用方法&quot;">​</a></h2><table tabindex="0"><thead><tr><th><strong>方法</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>addAction()</td><td>添加具有文本或图标的工具按钮</td></tr><tr><td>addActions()</td><td>一次添加多个工具按钮</td></tr><tr><td>addWidget()</td><td>添加工具栏中按钮以外的控件</td></tr><tr><td>addSeparator()</td><td>添加分割线</td></tr><tr><td>setIconSize()</td><td>设置工具栏中图标的大小</td></tr><tr><td>setMovable()</td><td>设置工具栏是否可以移动</td></tr><tr><td>setOrientation()</td><td>设置工具栏的方向，取值如下。<br>Qt.Horizontal:水平工具栏;<br>Qt.Vertical:垂直工具栏</td></tr><tr><td>setToolButtonStyle())</td><td>设置工具栏按钮的显示样式，主要支持以下5种样式。<br>Qt.ToolButtonIconOnly:只显示图标;<br>Qt.ToolButtonTextOnly:只显示文本;<br>Qt.ToolButtonTextBesidelcon:文本显示在图标的旁边;<br>Qt.ToolButtonTextUnderIcon:文本显示在图标的下面;<br>Qt.ToolButtonFollowStyle:跟随系统样式</td></tr></tbody></table><p><img src="'+s+'" alt="alt text" loading="lazy"></p><h1 id="qstatusbar状态栏" tabindex="-1">QStatusBar状态栏 <a class="header-anchor" href="#qstatusbar状态栏" aria-label="Permalink to &quot;QStatusBar状态栏&quot;">​</a></h1><p>状态栏通常放在窗口的最底部，用于显示窗口上的一些对象的相关信息或者程序信息，例如，显示当前登录用户、实时显示登录时间、显示任务执行进度等，在PyQt6中用QStatusBar类表示状态栏。</p><h2 id="qstatusbar类的常用方法" tabindex="-1">QStatusBar类的常用方法 <a class="header-anchor" href="#qstatusbar类的常用方法" aria-label="Permalink to &quot;QStatusBar类的常用方法&quot;">​</a></h2><table tabindex="0"><thead><tr><th><strong>方法</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>addWidget()</td><td>向状态栏中添加控件</td></tr><tr><td>addPermanentWidget()</td><td>添加永久性控件,不会被临时消息掩盖，位于状态栏最右端</td></tr><tr><td>removeWidget()</td><td>移除状态栏中的控件</td></tr><tr><td>showMessage()</td><td>在状态栏中显示一条临时信息</td></tr><tr><td>clearMessage()</td><td>删除正在显示的临时信息</td></tr></tbody></table><p>PyQt6支持向状态栏中添加标准控件，如常用的Label、ComboBox、CheckBox、ProgressBar等，这需要用到QStatusBar对象的addWidget()方法。</p><p><img src="'+n+'" alt="alt text" loading="lazy"></p><p>在状态栏中显示临时信息，需要使用QStatusBar对象的showMessage()方法，该方法中有两个参数，第一个参数为要显示的临时信息内容，第二个参数为要显示的时间，以毫秒为单位，但如果设置该参数为0，则表示一直显示。删除临时信息使用QStatusBar对象的clearMessage()方法。</p><p>注意点：状态栏默认不能同时显示临时信息和PyQ6标准控件，所以只能用一种。</p><p><img src="'+i+'" alt="alt text" loading="lazy"></p>',18),h=[c];function p(g,_,b,m,u,B){return o(),a("div",null,h)}const S=t(l,[["render",p]]);export{y as __pageData,S as default};
