import{_ as t,c as e,o as a,a5 as r}from"./chunks/framework.DcfbuPOr.js";const o="/assets/image-47.CzHkljGd.png",d="/assets/image-48.BLQE0xeI.png",l="/assets/image-49.CQknGJbR.png",i="/assets/image-50.D3YuxCa6.png",S=JSON.parse('{"title":"QFrame分割线控件","description":"","frontmatter":{},"headers":[],"relativePath":"python/PyQt6/2101.md","filePath":"python/PyQt6/2101.md"}'),s={name:"python/PyQt6/2101.md"},c=r('<h1 id="qframe分割线控件" tabindex="-1">QFrame分割线控件 <a class="header-anchor" href="#qframe分割线控件" aria-label="Permalink to &quot;QFrame分割线控件&quot;">​</a></h1><p>PyQt6提供了两个分割线控件，分别是水平分割线HorizontalLine和垂直分割线VerticalLine，但这两个分割线控件对应的类都是QFrame类，该类提供了一个setFrameShape()方法，通过设置该方法的参数，可以将分割线显示为水平或者垂直。</p><table tabindex="0"><thead><tr><th><strong>方法</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>setFrameShape()</td><td>设置分割线方向，取值如下。<br>QFrame.Shape.HLine:水平分割线;<br>QFrame.Shape.VLine:垂直分割线</td></tr><tr><td>setFrameShadow()</td><td>设置分割线的显示样式，取值如下。<br>QFrame.Sunken:有边框阴影，并且下沉显示，这是默认设置;<br>QFrame.Plain:无阴影;<br>QFrame.Raised:有边框阴影，并且凸起显示</td></tr><tr><td>setLineWidth()</td><td>设置分割线的宽度</td></tr><tr><td>setMidLineWidth()</td><td>设置分割线的中间线宽度</td></tr></tbody></table><p><img src="'+o+'" alt="alt text" loading="lazy"></p><h1 id="qspaceritem弹簧控件" tabindex="-1">QSpacerItem弹簧控件 <a class="header-anchor" href="#qspaceritem弹簧控件" aria-label="Permalink to &quot;QSpacerItem弹簧控件&quot;">​</a></h1><p>PyQt6提供了两个弹簧控件，分别是HorizontalSpacer和VerticalSpacer，但这两个控件对应的类都是QSpacerItem类，水平和垂直主要通过宽度和高度（水平弹簧的默认宽度和高度分别是40、20，而垂直弹簧的默认宽度和高度分别是20、40）进行区分。</p><p>QSpacerItem弹簧主要用在布局管理器中，用来使布局管理器中的控件布局更加合理。</p><p>我们设计一个窗体，用垂直线性布局管理器，里面放四个按钮，默认是平分均等的位置划分布局。</p><p><img src="'+d+'" alt="alt text" loading="lazy"></p><p>假如我们需要中间空点。加了弹簧后，布局会更加合理。</p><p><img src="'+l+'" alt="alt text" loading="lazy"></p><h1 id="qdial旋钮控件" tabindex="-1">QDial旋钮控件 <a class="header-anchor" href="#qdial旋钮控件" aria-label="Permalink to &quot;QDial旋钮控件&quot;">​</a></h1><p>QDial旋钮控件，它本质上类似于一个滑块控件，只是显示的样式不同。</p><h2 id="qdial控件常用方法" tabindex="-1">QDial控件常用方法 <a class="header-anchor" href="#qdial控件常用方法" aria-label="Permalink to &quot;QDial控件常用方法&quot;">​</a></h2><table tabindex="0"><thead><tr><th><strong>方法</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>setFixedSize()</td><td>设置旋钮的大小</td></tr><tr><td>setRange()</td><td>设置表盘的数值范围</td></tr><tr><td>setMinimum()</td><td>设置最小值</td></tr><tr><td>setMaximum()</td><td>设置最大值</td></tr><tr><td>setNotchesVisible()</td><td>设置是否显示刻度</td></tr></tbody></table><ul><li><code>notchSize : const int</code></li></ul><p>该属性保持当前的缺口大小。</p><p>缺口大小在范围控制单元中，而不是像素，并且如果可能的话，它是<code>singleStep（）</code>的倍数，导致在<code>notchTarget（）</code>附近的屏幕上的切口尺寸。</p><p>默认情况下，此属性的值为1。获取函数；<code>int notchSize() const</code></p><ul><li><code>notchTarget : qreal</code></li></ul><p>该属性拥有陷波之间的目标像素数。陷波目标是QDial尝试在每个陷波之间放置的像素数量。实际尺寸可能与目标尺寸不同。</p><p>默认陷波目标是3.7像素。获取函数；</p><p><code>qreal notchTarget() const</code></p><p><code>void setNotchTarget(double target)</code></p><ul><li><code>notchesVisible : bool</code></li></ul><p>该属性保持是否显示切口。如果属性为true，则在刻度盘周围绘制一系列凹槽以指示可用值的范围; 否则没有显示缺口。</p><p>默认情况下，此属性被禁用。获取函数；</p><p><code>bool notchesVisible() const</code></p><p><code>void setNotchesVisible(bool visible)</code></p><ul><li><code>wrapping : bool</code></li></ul><p>该属性保持是否启用包装。如果为true，则打开包装; 否则在表盘底部插入一些空格以分隔有效值范围的末端。如果启用，箭头的方向可以是任意角度。 如果禁用，箭头将被限制在拨号盘的上半部分; 如果它旋转到</p><p>刻度盘底部的空间中，它将被钳位到有效值范围的最近端。</p><p>默认情况下，该属性为false。获取函数；</p><p><code>bool wrapping() const</code></p><p><code>void setWrapping(bool on)</code></p><h1 id="qscrollbar滚动条控件" tabindex="-1">QScrollBar滚动条控件 <a class="header-anchor" href="#qscrollbar滚动条控件" aria-label="Permalink to &quot;QScrollBar滚动条控件&quot;">​</a></h1><p>PyQt6提供了两个滚动条控件，分别是水平滚动条HorizontalScrollBar和垂直滚动条VerticalScrollBar，但这两个滚动条控件对应的类都是QScrollBar类，这两个控件通过水平的或垂直的滚动条，可以扩大当前窗口的有效装载面积，从而装载更多的控件。</p><h2 id="qscrollbar滚动条类的常用方法" tabindex="-1">QScrollBar滚动条类的常用方法 <a class="header-anchor" href="#qscrollbar滚动条类的常用方法" aria-label="Permalink to &quot;QScrollBar滚动条类的常用方法&quot;">​</a></h2><table tabindex="0"><thead><tr><th><strong>方法</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>setMinimum()</td><td>设置滚动条最小值</td></tr><tr><td>setMaximum()</td><td>设置滚动条最大值</td></tr><tr><td>setOrientation()</td><td>设置滚动条显示方向，取值如下。<br>Qt.Horizontal:水平滚动条;<br>Qt.Vertical:垂直滚动条</td></tr><tr><td>setValue()</td><td>设置滚动条的值</td></tr><tr><td>value()</td><td>获取滚动条的当前值</td></tr></tbody></table><p>滚动条控件通常与其他控件配合使用，如ScrollArea、TableWidget表格等，另外，也可以使用滚动条控件实现与滑块控件同样的功能，实际上，滚动条控件也是一种特殊的滑块控件。</p><p><img src="'+i+'" alt="alt text" loading="lazy"></p>',41),n=[c];function p(h,m,b,g,u,_){return a(),e("div",null,n)}const q=t(s,[["render",p]]);export{S as __pageData,q as default};
