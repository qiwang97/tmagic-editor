import{_ as i,r as c,o as l,c as u,a as s,b as a,w as o,d as n,e as p}from"./app.b90d5f6b.js";const r={},d=s("h1",{id:"\u5FEB\u901F\u5F00\u59CB",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5FEB\u901F\u5F00\u59CB","aria-hidden":"true"},"#"),n(" \u5FEB\u901F\u5F00\u59CB")],-1),k=s("p",null,"tmagic-editor\u7684\u7F16\u8F91\u5668\u6211\u4EEC\u5DF2\u7ECF\u5C01\u88C5\u6210\u4E00\u4E2A npm \u5305\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5B89\u88C5\u4F7F\u7528\u3002\u7F16\u8F91\u5668\u662F\u4F7F\u7528 vue3 \u5F00\u53D1\u7684\uFF0C\u4F46\u4F7F\u7528\u7F16\u8F91\u5668\u7684\u4E1A\u52A1\u53EF\u4EE5\u4E0D\u9650\u6846\u67B6\uFF0C\u53EF\u4EE5\u7528 vue2\u3001react \u7B49\u5F00\u53D1\u4E1A\u52A1\u7EC4\u4EF6\u3002",-1),m=s("h2",{id:"\u5B89\u88C5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5B89\u88C5","aria-hidden":"true"},"#"),n(" \u5B89\u88C5")],-1),v=s("p",null,"node.js > 14",-1),h=n("\u53EF\u4EE5\u901A\u8FC7"),_={href:"https://github.com/vitejs/vite",target:"_blank",rel:"noopener noreferrer"},g=n("Vite"),b=n(" \u6216 "),f={href:"https://cli.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},y=n("Vue CLI"),q=n("\u5FEB\u901F\u521B\u5EFA\u9879\u76EE\u3002"),w=n("\u63A8\u8350\u4F7F\u7528 npm \u7684\u65B9\u5F0F\u5B89\u88C5\uFF0C\u5B83\u80FD\u66F4\u597D\u5730\u548C "),x={href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"},C=n("webpack"),E=n(" \u6253\u5305\u5DE5\u5177\u914D\u5408\u4F7F\u7528\u3002"),j=p(`<blockquote><p>\u4F7F\u7528Vue CLI\u751F\u6210\u7684\u9879\u76EE\u9700\u8981\u5728vue.config.js\u4E2D\u52A0\u4E0A\u914D\u7F6E\uFF1AtranspileDependencies: [/@tmagic/]</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6700\u65B0\u7A33\u5B9A\u7248</span>
$ <span class="token function">npm</span> <span class="token function">install</span> @tmagic/editor@latest -S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),L=n("editor \u4E2D\u7EC4\u4EF6\u81EA\u5B9A\u4E49\u5C5E\u6027\u914D\u7F6E\u7531"),V=n("@tmagic/form"),A=n("\u63D0\u4F9B\uFF0C\u9700\u8981\u6DFB\u52A0@tmagic/form \u4F9D\u8D56\uFF1Beditor \u4E0E form \u4E2D\u4F7F\u7528\u5230\u7684 UI \u7EC4\u4EF6\u90FD\u7531 "),B={href:"https://element-plus.org/",target:"_blank",rel:"noopener noreferrer"},G=n("element-plus"),U=n("\u63D0\u4F9B\uFF0C\u9700\u8981\u6DFB\u52A0 element-plus \u4F9D\u8D56\u3002"),I=p(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> @tmagic/form@latest element-plus -S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),P=n("editor \u4E2D\u8FD8\u5305\u542B\u4E86"),z={href:"https://github.com/microsoft/monaco-editor",target:"_blank",rel:"noopener noreferrer"},M=n("monaco-editor"),N=n("\uFF0C\u53EF\u4EE5\u53C2\u8003 monaco-editor \u7684"),S={href:"https://github.com/microsoft/monaco-editor/blob/main/docs/integrate-esm.md",target:"_blank",rel:"noopener noreferrer"},F=n("\u914D\u7F6E\u6307\u5F15"),T=n("\u3002"),D=p(`<h2 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a> \u5FEB\u901F\u4E0A\u624B</h2><h3 id="\u5F15\u5165-tmagic-editor" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5165-tmagic-editor" aria-hidden="true">#</a> \u5F15\u5165 @tmagic/editor</h3><p>\u5728 main.js \u4E2D\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&quot;element-plus&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> zhCn <span class="token keyword">from</span> <span class="token string">&quot;element-plus/es/locale/lang/zh-cn&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> MagicEditor <span class="token keyword">from</span> <span class="token string">&quot;@tmagic/editor&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MagicForm <span class="token keyword">from</span> <span class="token string">&quot;@tmagic/form&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&quot;./App.vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">&quot;element-plus/dist/index.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;@tmagic/editor/dist/style.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;@tmagic/form/dist/style.css&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">locale</span><span class="token operator">:</span> zhCn<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>MagicEditor<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>MagicForm<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u4EE3\u7801\u4FBF\u5B8C\u6210\u4E86 @tmagic/editor \u7684\u5F15\u5165\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6837\u5F0F\u6587\u4EF6\u9700\u8981\u5355\u72EC\u5F15\u5165\u3002</p><h3 id="\u4F7F\u7528-m-editor-\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-m-editor-\u7EC4\u4EF6" aria-hidden="true">#</a> \u4F7F\u7528 m-editor \u7EC4\u4EF6</h3><p>\u5728 App.vue \u4E2D\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-editor</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:menu</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menu<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:runtime-url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>runtimeUrl<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:props-configs</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>propsConfigs<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:props-values</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>propsValues<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:component-group-list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>componentGroupList<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-editor</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;App&quot;</span><span class="token punctuation">,</span>

    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">menu</span><span class="token operator">:</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">// \u9876\u90E8\u5DE6\u4FA7\u83DC\u5355\u6309\u94AE</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">// \u9876\u90E8\u4E2D\u95F4\u83DC\u5355\u6309\u94AE</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">// \u9876\u90E8\u53F3\u4FA7\u83DC\u5355\u6309\u94AE</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token comment">// \u521D\u59CB\u5316\u9875\u9762\u6570\u636E</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

        <span class="token literal-property property">runtimeUrl</span><span class="token operator">:</span> <span class="token string">&quot;/runtime/vue3/playground.html&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">propsConfigs</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// \u7EC4\u4EF6\u5C5E\u6027\u5217\u8868</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">propsValues</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// \u7EC4\u4EF6\u9ED8\u8BA4\u503C</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token literal-property property">componentGroupList</span><span class="token operator">:</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
          <span class="token comment">// \u7EC4\u4EF6\u5217\u8868</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">#app</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.m-editor</span> <span class="token punctuation">{</span>
    <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),J=n("\u5173\u4E8E "),R={href:"https://www.npmjs.com/package/@tmagic/editor",target:"_blank",rel:"noopener noreferrer"},$=n("@tmagic/editor"),H=n(" \u7EC4\u4EF6\uFF0C\u66F4\u591A\u7684\u5C5E\u6027\u914D\u7F6E\u8BE6\u60C5\u8BF7\u53C2\u8003"),K=n("\u7F16\u8F91\u5668 API"),O=n("\u3002"),Q=p('<p>\u5176\u4E2D\uFF0C<strong>\u6709\u56DB\u4E2A\u9700\u8981\u6CE8\u610F\u7684\u5C5E\u6027\u914D\u7F6E\u9879</strong>\uFF1A<code>runtimeUrl</code> <code>values</code> <code>configs</code> <code>componentGroupList</code>\u3002\u8FD9\u662F\u80FD\u8BA9\u6211\u4EEC\u7684\u7F16\u8F91\u5668\u6B63\u5E38\u8FD0\u884C\u7684\u5173\u952E\u3002</p><h3 id="runtimeurl" tabindex="-1"><a class="header-anchor" href="#runtimeurl" aria-hidden="true">#</a> runtimeUrl</h3>',2),W=n("\u8BE5\u914D\u7F6E\u6D89\u53CA\u5230 "),X=n("runtime \u6982\u5FF5"),Y=n("\uFF0Ctmagic-editor\u7F16\u8F91\u5668\u4E2D\u5FC3\u7684\u6A21\u62DF\u5668\u753B\u5E03\uFF0C\u662F\u4E00\u4E2A iframe\uFF08\u8FD9\u91CC\u7684 "),Z=s("code",null,"runtimeUrl",-1),nn=n(" \u914D\u7F6E\u7684\uFF0C\u5C31\u662F\u4F60\u63D0\u4F9B\u7684 iframe \u7684 url\uFF09\uFF0C\u5176\u4E2D\u6E32\u67D3\u4E86\u4E00\u4E2A runtime\uFF0C\u7528\u6765\u54CD\u5E94\u7F16\u8F91\u5668\u4E2D\u7684\u7EC4\u4EF6\u589E\u5220\u6539\u7B49\u64CD\u4F5C\u3002"),sn={class:"custom-container tip"},an=s("p",{class:"custom-container-title"},"\u5982\u4F55\u5FEB\u901F\u5F97\u5230\u4E00\u4E2A runtime",-1),tn=n("\u5982\u679C\u8981\u5FEB\u901F\u542F\u52A8\uFF0C\u53EF\u4EE5\u4F7F\u7528"),en={href:"https://github.com/Tencent/tmagic-editor",target:"_blank",rel:"noopener noreferrer"},on=n("tmagic-editor\u9879\u76EE\u6E90\u7801"),pn=n("\u4E2D\u7684 runtime\uFF0C\u5728\u63D0\u4F9B\u7684\u4E09\u4E2A\u6846\u67B6 vue2/vue3/react runtime \u76EE\u5F55\u4E2D\u9009\u62E9\u4E00\u4E2A\uFF0C\u6267\u884C "),cn=s("code",null,"npm run build",-1),ln=n(" \u5F97\u5230\u4EA7\u7269\uFF0C\u5E76\u5C06\u4EA7\u7269\u653E\u5230\u4F60\u7684\u9879\u76EE\u4E2D\uFF0C\u6B64\u5904\u7684 runtimeUrl \u6307\u5411\u4F60\u653E\u7F6E playground.html \u7684\u8DEF\u5F84\u3002"),un=s("h3",{id:"componentgrouplist",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#componentgrouplist","aria-hidden":"true"},"#"),n(" componentGroupList")],-1),rn=s("code",null,"componentGroupList",-1),dn=n(" \u662F\u6307\u5B9A\u5DE6\u4FA7\u7EC4\u4EF6\u5E93\u5185\u5BB9\u7684\u914D\u7F6E\u3002\u6B64\u5904\u5B9A\u4E49\u4E86\u5728\u7F16\u8F91\u5668\u7EC4\u4EF6\u5E93\u4E2D\u6709\u4EC0\u4E48\u7EC4\u4EF6\u3002\u5728\u6DFB\u52A0\u7684\u65F6\u5019\u901A\u8FC7\u7EC4\u4EF6 "),kn=s("code",null,"type",-1),mn=n(" \u6765\u786E\u5B9A runtime \u4E2D\u8981\u6E32\u67D3\u4EC0\u4E48\u7EC4\u4EF6\u3002\u53EF\u4EE5\u53C2\u8003 "),vn=n("componentGroupList \u914D\u7F6E"),hn=n("\u3002"),_n=s("h3",{id:"propsconfigs-propsvalues",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#propsconfigs-propsvalues","aria-hidden":"true"},"#"),n(" propsConfigs/propsValues")],-1),gn=s("code",null,"propsConfigs",-1),bn=n(),fn=s("code",null,"propsValues",-1),yn=n(" \u548C "),qn=s("code",null,"componentGroupList",-1),wn=n(" \u4E2D\u58F0\u660E\u7684\u7EC4\u4EF6\u662F\u4E00\u4E00\u5BF9\u5E94\u7684\uFF0C\u901A\u8FC7 "),xn=s("code",null,"type",-1),Cn=n(" \u6765\u8BC6\u522B\u5C5E\u4E8E\u54EA\u4E2A\u7EC4\u4EF6\uFF0C\u8BE5\u914D\u7F6E\u6D89\u53CA\u7684\u5185\u5BB9\uFF0C\u5C31\u662F\u7EC4\u4EF6\u7684\u8868\u5355\u914D\u7F6E\u63CF\u8FF0\uFF0C\u5728"),En=n("\u7EC4\u4EF6\u5F00\u53D1\u4E2D"),jn=n("\u4F1A\u901A\u8FC7 formConfig \u914D\u7F6E\u6765\u58F0\u660E\u8FD9\u4EFD\u5185\u5BB9\u3002"),Ln=p(`<p><code>configs</code> \u65E2\u53EF\u4EE5\u901A\u8FC7 hardcode \u65B9\u5F0F\u5199\u4E0A\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u8868\u5355\u914D\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u7EC4\u4EF6\u6253\u5305\u65B9\u5F0F\u5F97\u5230\u5BF9\u5E94\u5185\u5BB9\uFF0C\u7136\u540E\u901A\u8FC7\u5F02\u6B65\u52A0\u8F7D\u6765\u8F7D\u5165\u3002\u6BD4\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">asyncLoadJs</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/runtime/vue3/assets/config.js</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    propsConfigs<span class="token punctuation">.</span>value <span class="token operator">=</span> window<span class="token punctuation">.</span>magicPresetConfigs<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">asyncLoadJs</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/runtime/vue3/assets/value.js</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    propsValues<span class="token punctuation">.</span>value <span class="token operator">=</span> window<span class="token punctuation">.</span>magicPresetValues<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u5982\u4F55\u5FEB\u901F\u5F97\u5230\u4E00\u4E2A configs/values</p><p>\u4E0A\u8FF0\u7684 runtime \u4EA7\u7269\u4E2D\uFF0Cassets \u76EE\u5F55\u4E2D\u5373\u5305\u542B\u4E00\u4E2A configs \u6587\u4EF6\uFF0C\u5728\u4F60\u7684\u9879\u76EE\u7EC4\u4EF6\u521D\u59CB\u5316\u4E4B\u540E\uFF0C\u5F02\u6B65\u52A0\u8F7D\u5B83\u3002\u5E76\u5982\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u8D4B\u503C\u7ED9 configs/values \u5373\u53EF\u3002</p></div><h3 id="\u66F4\u591A" tabindex="-1"><a class="header-anchor" href="#\u66F4\u591A" aria-hidden="true">#</a> \u66F4\u591A</h3><p>\u901A\u8FC7\u4E0A\u8FF0\u6B65\u9AA4\uFF0C\u53EF\u4EE5\u5FEB\u901F\u5F97\u5230\u4E00\u4E2A\u521D\u59CB\u5316\u7684\u7B80\u5355\u7F16\u8F91\u5668\u3002\u5728\u7F16\u8F91\u5668\u4E2D\uFF0C\u5BF9\u4E8E\u4F7F\u7528\u8005\u6765\u8BF4\uFF0C\u9700\u8981\u4E86\u89E3\u7684\u6838\u5FC3\u5185\u5BB9\uFF1A</p>`,5),Vn=s("li",null,[s("a",{href:"conception"},"tmagic-editor\u7F16\u8F91\u5668\u7684\u57FA\u7840\u6982\u5FF5")],-1),An=n("\u7F16\u8F91\u5668\u7684\u4EA7\u7269 DSL"),Bn=n("runtime \u7684\u6982\u5FF5"),Gn=n("\u5982\u4F55\u5B9E\u73B0\u4E00\u4E2A runtime"),Un=n("\u9664\u4E86\u4E0A\u8FF0\u5185\u5BB9\u5916\uFF0C\u6587\u6863\u7684\u5176\u4ED6\u7AE0\u8282\u4E2D\uFF0C\u4E5F\u4F1A\u66F4\u6DF1\u5165\u7684\u63CF\u8FF0\u6574\u4E2Atmagic-editor\u7684\u8BBE\u8BA1\u7406\u5FF5\u548C\u5B9E\u73B0\u7EC6\u8282\u3002\u540C\u65F6\u4F60\u4E5F\u53EF\u4EE5\u67E5\u770B\u6211\u4EEC\u7684"),In={href:"https://github.com/Tencent/tmagic-editor",target:"_blank",rel:"noopener noreferrer"},Pn=n("\u9879\u76EE\u6E90\u7801"),zn=n("\uFF0C\u4ECE\u6E90\u7801\u63D0\u4F9B\u7684 playground \u548C runtime \u793A\u4F8B\u6765\u5F00\u53D1\u548C\u7406\u89E3tmagic-editor\u3002");function Mn(Nn,Sn){const t=c("ExternalLinkIcon"),e=c("RouterLink");return l(),u("div",null,[d,k,m,v,s("p",null,[h,s("a",_,[g,a(t)]),b,s("a",f,[y,a(t)]),q]),s("p",null,[w,s("a",x,[C,a(t)]),E]),j,s("p",null,[L,a(e,{to:"/guide/advanced/magic-form.html"},{default:o(()=>[V]),_:1}),A,s("a",B,[G,a(t)]),U]),I,s("p",null,[P,s("a",z,[M,a(t)]),N,s("a",S,[F,a(t)]),T]),D,s("p",null,[J,s("a",R,[$,a(t)]),H,a(e,{to:"/api/editor/editor.html"},{default:o(()=>[K]),_:1}),O]),Q,s("p",null,[W,a(e,{to:"/guide/conception.html#runtime"},{default:o(()=>[X]),_:1}),Y,Z,nn]),s("div",sn,[an,s("p",null,[tn,s("a",en,[on,a(t)]),pn,cn,ln])]),un,s("p",null,[rn,dn,kn,mn,a(e,{to:"/api/editor/editor.html#componentgrouplist"},{default:o(()=>[vn]),_:1}),hn]),_n,s("p",null,[gn,bn,fn,yn,qn,wn,xn,Cn,a(e,{to:"/component/introduction.html#%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91"},{default:o(()=>[En]),_:1}),jn]),Ln,s("ul",null,[Vn,s("li",null,[a(e,{to:"/page/introduction.html#%E7%BC%96%E8%BE%91%E5%99%A8%E4%BA%A7%E7%89%A9-dsl"},{default:o(()=>[An]),_:1})]),s("li",null,[a(e,{to:"/page/introduction.html"},{default:o(()=>[Bn]),_:1})]),s("li",null,[a(e,{to:"/page/advanced.html"},{default:o(()=>[Gn]),_:1})])]),s("p",null,[Un,s("a",In,[Pn,a(t)]),zn])])}var Tn=i(r,[["render",Mn],["__file","installation.html.vue"]]);export{Tn as default};