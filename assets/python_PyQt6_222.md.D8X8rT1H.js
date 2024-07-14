import{_ as o,c as t,o as e,a5 as a}from"./chunks/framework.DcfbuPOr.js";const p="/assets/image-20.BcA-zgiT.png",Q=JSON.parse('{"title":"QToolButton工具按钮","description":"","frontmatter":{},"headers":[],"relativePath":"python/PyQt6/222.md","filePath":"python/PyQt6/222.md"}'),l={name:"python/PyQt6/222.md"},n=a('<h1 id="qtoolbutton工具按钮" tabindex="-1">QToolButton工具按钮 <a class="header-anchor" href="#qtoolbutton工具按钮" aria-label="Permalink to &quot;QToolButton工具按钮&quot;">​</a></h1><p>QToolButton控件是一个工具按钮，它本质上是一个按钮，只是在按钮中提供了默认文本“…”和可选的箭头类型；</p><p>QToolButton控件的使用方法与QPushButton类似，不同的是，QToolButton控件可以设置工具按钮的显示样式和箭头类型，其中，工具按钮的显示样式通过QToolButton类的setToolButtonStyle()方法进行设置；</p><p>工具按钮的箭头类型通过QToolButton类的setArrowType()方法进行设置；</p><p>Buttons -&gt; Tool Button</p><h2 id="工具按钮" tabindex="-1">工具按钮 <a class="header-anchor" href="#工具按钮" aria-label="Permalink to &quot;工具按钮&quot;">​</a></h2><p><code>setText()</code>:设置按钮提示文本</p><p><code>setIcon(QIcon())</code>:设置按钮图标</p><p><code>setIconSize(QSize)</code>:设置图标大小</p><p><code>setToolTip(str)</code>:因为图标和提示文本同时出现时，只显示图标。通过这个可以设置不一样的提示文本</p><h2 id="样式设置" tabindex="-1">样式设置 <a class="header-anchor" href="#样式设置" aria-label="Permalink to &quot;样式设置&quot;">​</a></h2><p><code>setToolButtonStyle(Qt.ToolButtonStyle)</code></p><p>Qt.ToolButtonStyle的风格有以下取值：</p><ul><li><p><code>Qt.ToolButtonIconOnly</code>仅显示图标</p></li><li><p><code>Qt.ToolButtonTextOnly</code>仅显示文字</p></li><li><p><code>Qt.ToolButtonTextBesideIcon</code>文本显示在图标旁边</p></li><li><p><code>Qt.ToolButtonTextUnderIcon</code>文本显示在图标下方</p></li><li><p><code>Qt.ToolButtonFollowStyle</code>遵循风格</p></li></ul><h2 id="箭头样式" tabindex="-1">箭头样式 <a class="header-anchor" href="#箭头样式" aria-label="Permalink to &quot;箭头样式&quot;">​</a></h2><p><code>setArrowType(Qt.ArrowType)</code></p><p>Qt.ArrowType的风格如下：</p><p><code>Qt.NoArrow:</code>无箭头</p><p><code>Qt.UpArrow</code>向上箭头</p><p><code>Qt.DownArrow</code>向下箭头</p><p><code>Qt.LeftArrow</code>向左箭头</p><p><code>Qt.RightArrow</code>向右箭头</p><h2 id="自动提升" tabindex="-1">自动提升 <a class="header-anchor" href="#自动提升" aria-label="Permalink to &quot;自动提升&quot;">​</a></h2><p><code>setAutoRaise(Bool)：True</code>自动提升</p><h2 id="菜单及弹出方式" tabindex="-1">菜单及弹出方式 <a class="header-anchor" href="#菜单及弹出方式" aria-label="Permalink to &quot;菜单及弹出方式&quot;">​</a></h2><p><code>setPopupMode(QToolButton.ToolButtonPopupMode)</code></p><p>QToolButton.ToolButtonPopupMode的风格如下：</p><p><code>QToolButton.DelayedPopup</code>鼠标按住一会才显示菜单</p><p><code>QToolButton.MenuButtonPopup</code>有一个专门提示的提示箭头</p><p><code>QToolButton.InstantPopup</code>点了按钮就显示菜单</p><p><img src="'+p+'" alt="alt text" loading="lazy"></p>',31),c=[n];function d(r,u,i,s,T,h){return e(),t("div",null,c)}const _=o(l,[["render",d]]);export{Q as __pageData,_ as default};
