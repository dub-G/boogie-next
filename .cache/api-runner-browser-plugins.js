module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-loadable-components-ssr/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-instagram-embed/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-pinterest/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-twitter/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-layout/gatsby-browser.js'),
      options: {"plugins":[],"component":"/Users/spacedandy/code/boogie-next/src/templates/docs.js"},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"remarkPlugins":[null,null],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-mermaid","options":{"language":"mermaid","theme":"dark","viewport":{"width":400,"height":300},"mermaidOptions":{}}},"gatsby-remark-graphviz",{"resolve":"/Users/spacedandy/code/boogie-next/plugins/gatsby-remark-sectionize-toc/index.js","options":{"maxDepth":4}},{"resolve":"gatsby-remark-images","options":{"maxWidth":1050,"quality":75,"showCaptions":true,"disableBgImageOnAlpha":true,"withWebp":true}},"gatsby-remark-copy-linked-files",{"resolve":"gatsby-remark-jargon","options":{"jargon":{"markdown":"<span><b>Markdown</b></span> Very simple and lightweight markup language with plain-text-formatting syntax.","seo":"<span><b>SEO</b> - Search Engine Optimization</span> The process of growing the quality and quantity of website traffic by increasing the visibility of a website or a web page to users of a web search engine","git":"<span><b>Git</b></span> Distributed version-control system for tracking changes in source code.It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity and support for distributed, non-linear workflows","api":"<span><b>API</b> - Application Programming Interface</span> Computing interface which defines interactions between multiple software intermediaries","saas":"<span><b>SaaS</b> - Software as a Service</span> Software licensing and delivery model in which software is licensed on a subscription basis and is centrally hosted and managed","pwa":"<span><b>PWA</b> - Progressive Web App</span> Web app that uses modern web capabilities to deliver an app-like experience to users","boogi":"<span><b>BooGi</b></span> T lulzhe best documentation tool in the space! Check it <a href=\"https://boogi.netlify.app\">here</a>."}}},{"resolve":"gatsby-remark-embed-snippet","options":{"directory":"/Users/spacedandy/code/boogie-next/snippets/"}},{"resolve":"gatsby-remark-embedder","options":{"customTransformers":[],"services":{}}}],"extensions":[".mdx",".md"]},
    },{
      plugin: require('../node_modules/gatsby-plugin-gtag/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":null,"head":true,"anonymize":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-canonical-urls/gatsby-browser.js'),
      options: {"plugins":[],"siteUrl":"http://localhost","stripQueryString":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-page-progress/gatsby-browser.js'),
      options: {"plugins":[],"includePaths":["/configuration/settingup/features"],"excludePaths":["/"],"height":3,"prependToBody":false,"color":"#A05EB5"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"BooGi","short_name":"BooGi","start_url":"/","background_color":"#6b37bf","theme_color":"#6b37bf","display":"standalone","crossOrigin":"anonymous","icon":"static/assets/favicon.png","description":"BooGi - awesome GitBook-like documentation generator using Gatsby","cache_busting_mode":"none","include_favicon":false,"lang":"en","legacy":true,"theme_color_in_head":true,"cacheDigest":null},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[],"appendScript":"/Users/spacedandy/code/boogie-next/src/custom-sw-code.js"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
