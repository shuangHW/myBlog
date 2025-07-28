import { defineConfig } from "vitepress";
import utils from "./utils";
const { getSideBar } = utils;

export default defineConfig({
  base: "/charlie-blog/", // 项目根路由，github部署后的基础路由如:xx.github.io/charlie-blog/
  title: "Charlie Blog", // 浏览器标签标题
  // 浏览器标签的favicon
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/charlie-blog/websiteLogo.svg",
      },
    ],
  ],
  description: "Welcome to Charlie's blog!", // 浏览器检索关键字
  cleanUrls: true, // 路由地址隐藏.html
  themeConfig: {
    logo: "/websiteLogo.svg", // 站点标题前的icon
    outline: "deep", // 文章目录显示方式，deep为完整显示，false不显示，[1,3]显示1-3级
    // 导航区域，text:文本  link:对应跳转链接  activeMatch,当路由里包含xx时，该项高亮
    nav: [
      { text: "Home", link: "/" },
      { text: "Front-end", link: "/front/engi/rule", activeMatch: "/front/" },
      { text: "Back-end", link: "/back/index", activeMatch: "/back/" },
      { text: "Others", link: "/others/operation/md", activeMatch: "/others/" },
    ],

    // 启动本地搜索功能
    search: {
      provider: "local",
    },
    // key:当路由中匹配到该项，value:返回值为对应的侧边栏，具体后边单独讲解
    sidebar: {
      "/front/": getSideBar("front"),
      "/back/": getSideBar("back"),
      "/others": getSideBar("others"),
    },
    // 可以添加外部社交网站地址，如github,掘金，微博等等
    socialLinks: [
      { icon: "github", link: "https://github.com/doggyegg/charlie-blog" },
    ],
    // 底部区域，一般为版权相关
    footer: {
      message: "本站所有内容均为原创，转载请注明出处",
      copyright: "Copyright © 2024-present charlie-chen",
    },
  },
});


// 作者：前端阿呆
// 链接：https://juejin.cn/post/7449006297634848831
// https://juejin.cn/post/7464153856874643491
// https://blog.csdn.net/guoqiankunmiss/article/details/138163772
// https://juejin.cn/column/7288992783581396992
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。