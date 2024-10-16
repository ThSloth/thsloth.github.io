import{_ as s,c as i,o as a,a5 as e}from"./chunks/framework.DcfbuPOr.js";const p="/assets/image-59.DEpn_A3E.png",g=JSON.parse('{"title":"Pyinstaller打包","description":"","frontmatter":{},"headers":[],"relativePath":"python/PySide6/2122.md","filePath":"python/PySide6/2122.md"}'),t={name:"python/PySide6/2122.md"},l=e('<h1 id="pyinstaller打包" tabindex="-1">Pyinstaller打包 <a class="header-anchor" href="#pyinstaller打包" aria-label="Permalink to &quot;Pyinstaller打包&quot;">​</a></h1><p>PyQt6程序的打包发布，即将.py代码文件打包成可以直接双击执行的.exe文件，在Python中并没有内置可以直接打包程序的模块，而是需要借助第三方模块实现。打包Python程序的第三方模块有很多，其中最常用的就是Pyinstaller。</p><p>安装Pyinstaller</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Pyinstaller</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://pypi.tuna.tsinghua.edu.cn/simple</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="打包普通python程序" tabindex="-1">打包普通Python程序 <a class="header-anchor" href="#打包普通python程序" aria-label="Permalink to &quot;打包普通Python程序&quot;">​</a></h2><p>普通Python程序指的是完全使用Python内置模块或者对象实现的程序，程序中不包括任何第三方模块。</p><p>使用Pyinstaller打包普通Python程序的步骤如下。</p><ol><li><p>打开系统的CMD命令窗口，使用cd命令切换到.py文件所在路径（如果.py文件不在系统盘C盘，需要先</p></li><li><p>使用“盘符:”命令来切换盘符），然后输入“pyinstaller -F 文件名.py”命令进行打包</p></li></ol><p>下面是一些常用的命令行选项：</p><p><code>-F：将所有文件打包为一个单独的可执行文件。</code></p><p><code>-D：将所有文件打包为一个目录，包含可执行文件和所有依赖的文件。</code></p><p><code>-c：将程序与命令提示符结合在一起，以便在命令提示符下运行。</code></p><p><code>-d：将调试信息打包进可执行文件中。</code></p><p><code>–onefile：将所有文件打包为一个单独的可执行文件。</code></p><p><code>-o：指定输出文件的位置。</code></p><p><code>-w：打包为窗口文件。</code></p><p><code>-p DIR, –path=DIR：设置导入路径，从而导入需要的模块</code></p><ol start="3"><li>打包命令：</li></ol><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pyinstaller</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -F</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> helloworld.py</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4"><li>dist目录，可以找到打包生成的 helloworld.exe 可执行文件。</li></ol><h2 id="打包pyqt6程序" tabindex="-1">打包PyQt6程序 <a class="header-anchor" href="#打包pyqt6程序" aria-label="Permalink to &quot;打包PyQt6程序&quot;">​</a></h2><p>前面使用“pyinstaller -F”命令可以打包没有第三方模块的普通Python程序，但如果程序中用到了第三方模块，在运行打包后的.exe文件时就会出现找不到相应模块的提示。</p><p>我们就以打包PyQt6程序为例进行详细讲解。</p><p>PyQt6是一个第三方的模块，可以设计窗口程序，因此在使用pyinstaller命令打包其开发的程序时，需要使用--paths指定PyQt6模块所在的路径；另外，由于是窗口程序，所以在打包时需要使用-w指定打包的是窗口程序，还可以使用--icon指定窗口的图标。</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pyinstaller</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --paths</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PyQt6模块路径</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -F</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -w</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --icon=窗口图标文件</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 文件名.py</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>参数说明：</p><ul><li><p><code>--paths：指定第三方模块的安装路径。</code></p></li><li><p><code>-w：表示窗口程序。</code></p></li><li><p><code>--icon：可选项，如果设置了窗口图标，则指定相应文件路径；如果没有，则省略。</code></p></li><li><p>文件名.py：窗口程序的入口文件。</p></li></ul><p>我们打包以前学习的加法程序。</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pyinstaller</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --paths</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> D:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ython</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ython3</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ib</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ite-packages</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\P</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">yQt6</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\Q</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">t6</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -F</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -w</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --icon=favicon32.ico</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 信号与槽Main.py</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+p+'" alt="alt text" loading="lazy"></p><p>执行报错，找不到ui文件。这里注意，所有的项目资源文件，包括Ui，图片等资源文件，都要放到dist目录下。</p><p>当使用 PyInstaller 打包 PySide6 应用程序时，可能会遇到双击执行时出现额外的命令行窗口的问题。这个额外的命令行窗口通常出现在 Windows 上，是因为默认情况下，PyInstaller 会将应用程序打包成包含控制台的程序。</p><p>如果你想隐藏这个额外的命令行窗口，可以通过以下方法来实现：</p><p>使用 PyInstaller 隐藏控制台窗口 修改 PyInstaller 命令</p><p>在使用 pyinstaller 打包时，可以添加 --noconsole 参数来隐藏控制台窗口。这个参数会将应用程序打包为一个没有控制台的窗口应用程序：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> pyinstaller</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --onefile</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --noconsole</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  tool.py</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',36),n=[l];function h(d,r,o,k,c,y){return a(),i("div",null,n)}const C=s(t,[["render",h]]);export{g as __pageData,C as default};
