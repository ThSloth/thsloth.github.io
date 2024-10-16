import{_ as t,c as e,o as d,a5 as a}from"./chunks/framework.DcfbuPOr.js";const i="/assets/image-33.DrMppvhs.png",r="/assets/image-34.B72Piv3k.png",m="/assets/image-35.BcH1VZZz.png",g=JSON.parse('{"title":"QDateTimeEdit日期时间","description":"","frontmatter":{},"headers":[],"relativePath":"python/PySide6/251.md","filePath":"python/PySide6/251.md"}'),s={name:"python/PySide6/251.md"},o=a('<h1 id="qdatetimeedit日期时间" tabindex="-1">QDateTimeEdit日期时间 <a class="header-anchor" href="#qdatetimeedit日期时间" aria-label="Permalink to &quot;QDateTimeEdit日期时间&quot;">​</a></h1><p>QDateTimeEdit日期时间控件同时显示日期和时间，可以对日期时间进行编辑，选择以及显示。</p><p>Input Widgets —&gt; Date/Time Edit</p><h2 id="qdatetimeedit类的常用方法" tabindex="-1">QDateTimeEdit类的常用方法 <a class="header-anchor" href="#qdatetimeedit类的常用方法" aria-label="Permalink to &quot;QDateTimeEdit类的常用方法&quot;">​</a></h2><table tabindex="0"><thead><tr><th><strong>方法</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>setTime()</td><td>设置时间，默认为0:00:00</td></tr><tr><td>setCalendarPopup()</td><td>弹出日历设置，默认False</td></tr><tr><td>setMaximumTime()</td><td>设置最大时间，默认为23:59:59</td></tr><tr><td>setMinimumTime()</td><td>设置最小时间，默认为0:00:00</td></tr><tr><td>setTimeSpec()</td><td>获取显示的时间标准，支持以下4种值。<br>LocalTime:本地时间;<br>UTC:世界标准时间;<br>OffsetFromUTC:与UTC等效的时间;<br>TimeZone:时区</td></tr><tr><td>setDateTime()</td><td>设置日期时间，默认为2000/1/1 0:00:00</td></tr><tr><td>setDate()</td><td>设置日期，默认为2000/1/1</td></tr><tr><td>setMaximumDate()</td><td>设置最大日期，默认为9999/12/31</td></tr><tr><td>setMinimumDate()</td><td>设置最小日期，默认为1752/9/14</td></tr><tr><td>setDisplayFormat(）</td><td>设置日期、时间的显示样式。<br>日期样式(yyyy表示4位数年份，MM表示2位数月份，dd表示2位数日）:<br>yyyy/MM/dd、yyyy/M/d、yy/MM/dd、yy/M/d、yy/MM 和 Mm/dd<br>时间样式(HH表示2位数小时，mm表示2位数分钟，ss表示2位数秒钟）:<br>HH:mm:ss、HH:mm、mm:ss、H:m和 m:s</td></tr><tr><td>date()</td><td>获取显示的日期，返回值为QDate类型，如 QDate(2000,1,1)</td></tr><tr><td>time()</td><td>获取显示的时间，返回值为QTime类型，如QTime(0,0)</td></tr><tr><td>dateTime()</td><td>获取显示的日期时间，返回值为QDateTime类型，如：QDateTime(2000,1,1,0,0)</td></tr></tbody></table><p><img src="'+i+'" alt="alt text" loading="lazy"></p><h1 id="qdateedit日期" tabindex="-1">QDateEdit日期 <a class="header-anchor" href="#qdateedit日期" aria-label="Permalink to &quot;QDateEdit日期&quot;">​</a></h1><p>QDateEdit是单纯的日期控件，继承QDateTimeEdit，拥有QDateTimeEdit的所有属性和方法。</p><p>Input Widgets —&gt; Date Edit</p><p><img src="'+r+'" alt="alt text" loading="lazy"></p><h1 id="qtimeedit时间" tabindex="-1">QTimeEdit时间 <a class="header-anchor" href="#qtimeedit时间" aria-label="Permalink to &quot;QTimeEdit时间&quot;">​</a></h1><p>QTimeEdit是单纯的时间控件，继承QDateTimeEdit，拥有QDateTimeEdit的所有属性和方法。</p><p>Input Widgets —&gt; Time Edit</p><p><img src="'+m+'" alt="alt text" loading="lazy"></p>',14),n=[o];function p(l,c,h,T,_,y){return d(),e("div",null,n)}const Q=t(s,[["render",p]]);export{g as __pageData,Q as default};
