var plugins = [{
      plugin: require('/Users/spacedandy/code/boogie-next/node_modules/gatsby-plugin-loadable-components-ssr/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/spacedandy/code/boogie-next/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/spacedandy/code/boogie-next/node_modules/gatsby-plugin-instagram-embed/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/spacedandy/code/boogie-next/node_modules/gatsby-plugin-layout/gatsby-ssr'),
      options: {"plugins":[],"component":"/Users/spacedandy/code/boogie-next/src/templates/docs.js"},
    },{
      plugin: require('/Users/spacedandy/code/boogie-next/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/spacedandy/code/boogie-next/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"remarkPlugins":[null,null],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-mermaid","options":{"language":"mermaid","theme":"dark","viewport":{"width":400,"height":300},"mermaidOptions":{}}},"gatsby-remark-graphviz",{"resolve":"/Users/spacedandy/code/boogie-next/plugins/gatsby-remark-sectionize-toc/index.js","options":{"maxDepth":4}},{"resolve":"gatsby-remark-images","options":{"maxWidth":1050,"quality":75,"showCaptions":true,"disableBgImageOnAlpha":true,"withWebp":true}},"gatsby-remark-copy-linked-files",{"resolve":"gatsby-remark-jargon","options":{"jargon":{"markdown":"<span><b>Markdown</b></span> Very simple and lightweight markup language with plain-text-formatting syntax.","seo":"<span><b>SEO</b> - Search Engine Optimization</span> The process of growing the quality and quantity of website traffic by increasing the visibility of a website or a web page to users of a web search engine","git":"<span><b>Git</b></span> Distributed version-control system for tracking changes in source code.It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity and support for distributed, non-linear workflows","api":"<span><b>API</b> - Application Programming Interface</span> Computing interface which defines interactions between multiple software intermediaries","saas":"<span><b>SaaS</b> - Software as a Service</span> Software licensing and delivery model in which software is licensed on a subscription basis and is centrally hosted and managed","pwa":"<span><b>PWA</b> - Progressive Web App</span> Web app that uses modern web capabilities to deliver an app-like experience to users","boogi":"<span><b>BooGi</b></span> T lulzhe best documentation tool in the space! Check it <a href=\"https://boogi.netlify.app\">here</a>."}}},{"resolve":"gatsby-remark-embed-snippet","options":{"directory":"/Users/spacedandy/code/boogie-next/snippets/"}},{"resolve":"gatsby-remark-embedder","options":{"customTransformers":[],"services":{}}}],"extensions":[".mdx",".md"]},
    },{
      plugin: require('/Users/spacedandy/code/boogie-next/node_modules/gatsby-plugin-gtag/gatsby-ssr'),
      options: {"plugins":[],"trackingId":null,"head":true,"anonymize":false},
    },{
      plugin: require('/Users/spacedandy/code/boogie-next/node_modules/gatsby-plugin-canonical-urls/gatsby-ssr'),
      options: {"plugins":[],"siteUrl":"http://localhost","stripQueryString":true},
    },{
      plugin: require('/Users/spacedandy/code/boogie-next/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[],"enabled":true,"showIcon":false,"title":"BooGi Docs","copyright":"2020, Mateusz Filipowicz","webMaster":"Mateusz Filipowicz","managingEditor":"Mateusz Filipowicz","categories":["Docs as Code","GatsbyJS"],"ttl":60,"matchRegex":"^/","outputPath":"/rss.xml","generator":"boogi","language":"en","query":"\n        {\n          site {\n            siteMetadata {\n              title\n              description\n              siteUrl\n              site_url: siteUrl\n            }\n          }\n        }\n      ","feeds":[{"query":"\n          {\n            allMdx(filter: {fields: {draft: {ne: true}}}) {\n              edges {\n                node {\n                  excerpt\n                  fields {\n                    slug\n                  }\n                  parent {\n                    ... on File {\n                      fields {\n                        gitLogLatestDate\n                        gitLogLatestAuthorName\n                      }\n                    }\n                  }\n                  frontmatter {\n                    title\n                    metaTitle\n                    description\n                  }\n                }\n              }\n            }\n          }\n          ","output":"/rss.xml","match":"^/","title":"BooGi Docs"}]},
    },{
      plugin: require('/Users/spacedandy/code/boogie-next/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"BooGi","short_name":"BooGi","start_url":"/","background_color":"#6b37bf","theme_color":"#6b37bf","display":"standalone","crossOrigin":"anonymous","icon":"static/assets/favicon.png","description":"BooGi - awesome GitBook-like documentation generator using Gatsby","cache_busting_mode":"none","include_favicon":false,"lang":"en","legacy":true,"theme_color_in_head":true,"cacheDigest":null},
    },{
      plugin: require('/Users/spacedandy/code/boogie-next/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[],"appendScript":"/Users/spacedandy/code/boogie-next/src/custom-sw-code.js"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
