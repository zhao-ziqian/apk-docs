import type { DefaultTheme } from 'doc-theme-323'
import { defineConfigWithTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = [
  {
    text: 'Index',
    items: [{ text: '介绍', link: '/index.md' }]
  }
]

export default defineConfigWithTheme<DefaultTheme.Config>({
  ignoreDeadLinks: true,
  title: '文档',
  appearance: false,
  description: '开发者平台文档',
  outDir: '../dist',
  head: [
    [
      'meta',
      {
        name: 'docsearch:tags',
        content: 'product-docs'
      }
    ],
    [
      'script',
      {},
      `
    window.PandoraConfig = {
      base: {
        index_type: 'cDEwMTE2/wl',
        selfpackagename: 'com.metaverse.creator.api',
      },
      other: {
        appkey: 'cDEwMTE2',
        zone: 'zh',
        baseUrl: 'https://push.233leyuan.com'
      }
    }
    `
    ],
    [
      'script',
      {
        src: 'https://wstatic-01-ali.233leyuan.com/common/pandora/5.2.4/pandora_sdk.min.js'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        href: 'https://cdn.233xyx.com/online/CKuKtOyybKPQ1716443452384.png'
      }
    ]
  ],
  themeConfig: {
    logo: 'https://cdn.233xyx.com/online/dqHT5TsyRrWv1716446116296.png',
    sidebar: [
      { text: '平台指引',  link: '平台指引.md'  },
      {
        text: '账号注册',
        collapsible: true,
        collapsed: false,
        items: [
          { text: '企业认证', link: '/操作指引/企业认证.md' },
          { text: '认证材料', link: '/操作指引/准备材料.md' }
         ]
      },
      {
        text: '操作指引',
        collapsible: true,
        collapsed: false,
        items: [
          { text: '游戏测评', link: '/操作指引/游戏测评.md' },
          { text: '上架说明', link: '/操作指引/上架说明.md' },
          {
            text: '游戏创建',
            items: [
              { text: '联运游戏创建', link: '/操作指引/联运游戏创建.md' },
              { text: '官包测试创建', link: '/操作指引/官包测试创建.md' }
            ]
          },
          { text: '游戏上传', link: '/操作指引/游戏上传.md' },
          { text: '游戏认领', link: '/操作指引/游戏认领.md' },
          { text: '新游预约', link: '/操作指引/新游预约.md' },
          { text: '游戏礼包', link: '/操作指引/礼包码上传.md' },
          { text: '合同签约', link: '/操作指引/合同签约.md' },
          { text: '兼容适配', link: '/操作指引/兼容适配相关.md' }
         ]
      },
      {
        text: '内购游戏流程',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '内购游戏对接', link: '/内购游戏流程/内购游戏流程.md' },
          { text: '内购FAQ', link: '/内购游戏流程/内购FAQ.md' },
          { text: '备案识别码关联', link: '/内购游戏流程/备案识别码关联.md' },
          { text: '游戏运营相关', link: '/内购游戏流程/游戏运营相关.md' },
          { text: '游戏测试申请', link: '/内购游戏流程/游戏测试申请.md' },
          { text: '新游上线配套说明', link: '/内购游戏流程/新游上线前配套说明.md' },
          { text: '版本更新配套说明', link: '/内购游戏流程/版本更新配套说明.md' },
          { text: '常规资源申请说明', link: '/内购游戏流程/常规资源申请说明.md' },
          {
            text: '运营活动申请说明',
            items: [
              { text: '签到活动', link: '/内购游戏流程/签到活动.md' },
              { text: '综合活动', link: '/内购游戏流程/综合活动.md' },
              { text: '代金券', link: '/内购游戏流程/代金券.md' },
              { text: '社区活动', link: '/内购游戏流程/社区活动.md' },
              { text: '礼包功能', link: '/内购游戏流程/礼包功能.md' },
              { text: '申请活动', link: '/内购游戏流程/申请活动.md' },
              { text: '预约活动', link: '/内购游戏流程/预约活动.md' }
            ]
          }
        ]
      },
      {
        text: '广告游戏流程',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '广告游戏对接', link: '/广告游戏流程/广告游戏对接流程.md' },
          { text: '广告位申请', link: '/广告游戏流程/广告位申请.md' },
          { text: '广告规则', link: '/广告游戏流程/广告规则.md' },
          { text: '广告FAQ', link: '/广告游戏流程/广告FAQ.md' }       
        ]
      },
      {
        text: 'SDK接入',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '实名认证', link: '/SDK接入/实名认证.md' },
          {
            text: '内购SDK',
            items: [
              { text: '内购SDK', link: '/SDK接入/内购SDK客户端接入文档.md' },
              { text: '支付服务端接入',  link: '/SDK接入/支付服务端接入文档.md' },
              { text: '开放平台鉴权', link: '/SDK接入/开放平台鉴权.md' },
              { text: '用户校验', link: '/SDK接入/用户校验.md' },
            ]
          },
          { text: '广告SDK', link: '/SDK接入/广告SDK.md' }
        ]
      },
      {
        text: '开发者协议',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '平台隐私政策', link: '/开发者协议/平台隐私政策.md' },
          { text: '开发者服务协议', link: '/开发者协议/开发者服务协议.md' },
          { text: '安全评估报告', link: '/开发者协议/安全评估报告.md' },
          { text: '开发者隐私合规指南', link: '/开发者协议/开发者隐私合规指南.md' },
          { text: '违规处罚规定', link: '/开发者协议/违规处罚规定.md' },
          {
            text: '233乐园内购SDK合规使用说明',
            link: '/开发者协议/233乐园内购SDK合规使用说明.md'
          },
          {
            text: '233乐园内购SDK隐私政策',
            link: '/开发者协议/233乐园内购SDK隐私政策.md'
          },
          {
            text: '233乐园广告SDK隐私政策',
            link: '/开发者协议/233乐园广告SDK隐私政策.md'
          },
          {
            text: '233乐园广告SDK合规使用说明',
            link: '/开发者协议/233乐园广告SDK合规使用说明.md'
          }
        ]
      },
      { text: 'ICP备案申报指引', link: '/ICP备案申报指引.md' },
      { text: '游戏备案申报指引', link: '/游戏备案申报指引.md' }
    ],
    siteTitle: '文档中心',
    nav: [
      {
        text: '开发者平台',
        link: 'https://dev.233leyuan.com/#/admin/my-game'
      },
      {
        text: '233乐园',
        link: 'https://www.233leyuan.com/'
      }
    ],
    socialLinks: [
      // { link: 'https://github.com/doc-ark-online/apk-docs', icon: 'github' },
      {
        link: 'https://github.com/doc-ark-online/apk-docs/issues',
        icon: {
          svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="20" rx="10" fill="#676D77"/>
          <path d="M14.5 15C15.3284 15 16 14.3284 16 13.5V6.5C16 5.67163 15.3284 5 14.5 5H5.49999C4.67163 5 4 5.67163 4 6.5V13.5C4 14.3284 4.67163 15 5.49999 15H7.74998L10.75 18V15H14.5Z" fill="white"/>
          <path d="M10.0003 13.2857C10.3553 13.2857 10.6431 12.9979 10.6431 12.6429C10.6431 12.2878 10.3553 12 10.0003 12C9.64524 12 9.35742 12.2878 9.35742 12.6429C9.35742 12.9979 9.64524 13.2857 10.0003 13.2857Z" fill="#676D77"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.19627 6.55985C9.57999 6.4009 10.0022 6.35932 10.4096 6.44035C10.817 6.52137 11.1911 6.72138 11.4848 7.01507C11.7785 7.30876 11.9785 7.68295 12.0596 8.09031C12.1406 8.49767 12.099 8.91991 11.94 9.30363C11.7811 9.68735 11.5119 10.0153 11.1666 10.2461C10.9911 10.3633 10.8 10.4528 10.5999 10.5125V11C10.5999 11.3314 10.3313 11.6 9.9999 11.6C9.66853 11.6 9.3999 11.3314 9.3999 11V10.4C9.3999 9.82145 9.85795 9.47175 10.2371 9.36818C10.3301 9.34278 10.4189 9.30246 10.4999 9.24832C10.6479 9.14942 10.7633 9.00886 10.8314 8.84441C10.8995 8.67996 10.9173 8.499 10.8826 8.32441C10.8479 8.14983 10.7622 7.98947 10.6363 7.8636C10.5104 7.73773 10.3501 7.65201 10.1755 7.61729C10.0009 7.58256 9.81994 7.60038 9.65549 7.6685C9.49103 7.73662 9.35047 7.85198 9.25158 7.99998C9.15269 8.14799 9.0999 8.32199 9.0999 8.49999C9.0999 8.83137 8.83127 9.1 8.4999 9.1C8.16853 9.1 7.8999 8.83137 7.8999 8.49999C7.8999 8.08465 8.02307 7.67864 8.25382 7.3333C8.48457 6.98795 8.81254 6.71879 9.19627 6.55985ZM10.5496 10.5273C10.5496 10.5273 10.5499 10.527 10.5505 10.5268Z" fill="#676D77"/>
          </svg>
          `
        }
      }
    ],
    outline: [2, 4],
    editLink: {
      pattern:
        'https://github.com/doc-ark-online/apk-docs/tree/main/docs/:path',
      text: '编辑'
    },
    feedback: 'https://github.com/doc-ark-online/apk-docs/',
    lastUpdatedText: 'Updated Date',
    docFooter: {
      prev: 'Pagina prior',
      next: 'Proxima pagina'
    },
    pandora: {
      type: 'apk-product'
    }
  }
})
