import type { HeadConfig } from '@vuepress/core'

export const head: HeadConfig[] = [
  ['link', {
    rel: 'dns-prefetch',
    href: `//cdn.bootcss.com`
  }],
  ['link', {
    rel: 'dns-prefetch',
    href: `//cdn.mathjax.org`
  }],
  // 使主题能够支持数学公式
  ['script', {
    type: 'text/x-mathjax-config'
  }, `
  MathJax.Hub.Config({
    showProcessingMessages: false, //关闭js加载过程信息
    messageStyle: "none", //不显示信息
    tex2jax: {
      "inlineMath": [["$", "$"], ["\\\\(", "\\\\)"]],
      "processEscapes": true,
      "ignoreClass": "document",
      skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'a', 'td'],
      "processClass": "math|output_area"
    },
    "HTML-CSS": {
      showMathMenu: false
    }
  })
  `],
  ['script', {
    src: '//cdn.bootcss.com/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML'
  }],
  // 监听路由重新渲染数学公式
  ['script', {}, `
    (function() {
      var url1 = window.location.href;
      var url2 = window.location.href;
      setInterval(function() {
        if (url1 === url2) {
          url2 = window.location.href;
        } else {
          url1 = url2;
          if (window.MathJax) window.MathJax.Hub.Typeset();
        }
      }, 200);
    })();
  `],
  ['link', {
    rel: 'icon',
    href: `/logo.png`
  }],
  ['link', {
    rel: 'manifest',
    href: '/manifest.json'
  }],
  ['meta', {
    name: 'theme-color',
    content: '#ff7272'
  }],
  ['meta', {
    name: 'apple-mobile-web-app-capable',
    content: 'yes'
  }],
  ['meta', {
    name: 'apple-mobile-web-app-status-bar-style',
    content: 'black'
  }],
  ['link', {
    rel: 'apple-touch-icon',
    href: `/icons/apple-touch-icon-152x152.png`
  }],
  ['link', {
    rel: 'mask-icon',
    href: '/icons/safari-pinned-tab.svg',
    color: '#3eaf7c'
  }],
  ['meta', {
    name: 'msapplication-TileImage',
    content: '/icons/msapplication-icon-144x144.png'
  }],
  ['meta', {
    name: 'msapplication-TileColor',
    content: '#000000'
  }],
  // 百度统计
  ['script', {
    src: 'https://hm.baidu.com/hm.js?ffb401b873c9c6f5368dcd814cd15ba7',
    defer: 'defer',
    async: 'true'
  }],
  // 谷歌统计
  ['script', {
    src: 'https://www.googletagmanager.com/gtag/js?id=UA-163860037-3',
    defer: 'defer',
    async: 'true'
  }],
  // 谷歌统计第二段代码
  ['script', {}, `
  (function() {
    document.addEventListener('readystatechange', function (e) {
      if (document.readyState == 'complete') {
        console.log('google init.');
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-163860037-3');
      }
    });
  })();
`],
  // 广告系统
  ['script', {
    src: `https://analytics.numpy.org.cn/public/ad.js?${Math.random()}`,
    defer: 'defer',
    async: 'true'
  }],
]
