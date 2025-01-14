// ==UserScript==
// @id             mynovelreader@ywzhaiqi@gmail.com
// @name           My Novel Reader
// @version        <%= pkg.version %>
// @namespace      https://github.com/ywzhaiqi
// @author         ywzhaiqi
// @contributor    shyangs
// @description    小说阅读脚本，统一阅读样式，内容去广告、修正拼音字、段落整理，自动下一页
// @license        GPL version 3
// @grant          GM_xmlhttpRequest
// @grant          GM_addStyle
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_getResourceURL
// @grant          GM_openInTab
// @grant          GM_setClipboard
// @grant          GM_registerMenuCommand
// @grant          unsafeWindow
// homepageURL    https://userscripts.org/scripts/show/165951
// updateURL      https://userscripts.org/scripts/source/165951.meta.js
// downloadURL    https://userscripts.org/scripts/source/165951.user.js

// @homepageURL    https://greasyfork.org/scripts/292/
// @updateURL      https://greasyfork.org/scripts/292-my-novel-reader/code/My%20Novel%20Reader.meta.js
// @downloadURL    https://greasyfork.org/scripts/292-my-novel-reader/code/My%20Novel%20Reader.user.js
// @require        http://cdn.jsdelivr.net/jquery/1.9.1/jquery-1.9.1.min.js
// @require        http://cdn.jsdelivr.net/underscorejs/1.6.0/underscore-min.js
// @require        https://greasyfork.org/scripts/3053-keymaster-js/code/keymasterjs.js?version=8815
// @require        https://greasyfork.org/scripts/2672-meihua-cn2tw/code/Meihua_cn2tw.js?version=7375
// @resource fontawesomeWoff http://libs.baidu.com/fontawesome/4.0.3/fonts/fontawesome-webfont.woff?v=4.0.3

// 手动启用列表
// @include        http://tieba.baidu.com/p/*

// @include        http://read.qidian.com/*,*.aspx
// @include        http://readbook.qidian.com/bookreader/*,*.html
// @include        http://free.qidian.com/Free/ReadChapter.aspx?*
// @include        http://www.qdmm.com/BookReader/*,*.aspx
// @include        http://www.qdwenxue.com/BookReader/*,*.aspx
// @include        http://chuangshi.qq.com/read/bookreader/*.html
// @include        http://chuangshi.qq.com/*bk/*/*-m-*.html
// @include        http://www.jjwxc.net/onebook.php?novelid=*
// @include        http://book.zongheng.com/chapter/*/*.html
// @include        http://www.xxsy.net/books/*/*.html
// @include        http://book.zhulang.com/*/*.html
// @include        http://www.17k.com/chapter/*/*.html
// @include        http://mm.17k.com/chapter/*/*.html
// @include        http://www.kanxia.net/k/*/*/*.html
// @include        http://www.qingdi.com/files/article/html/*/*/*.html
// @include        http://www.xkzw.org/*/*.html
// @include        http://shouda8.com/*/*.html
// @include        http://novel.hongxiu.com/*/*/*.shtml
// @include        http://www.readnovel.com/novel/*.html
// http://www.tianyabook.com/*/*.htm

// booklink.me
// @include        http://www.shumilou.com/*/*.html
// @include        http://www.wcxiaoshuo.com/wcxs-*-*/
// @include        http://www.ranwen.cc/*/*/*/*.html
// @include        http://www.ranwen.net/files/article/*/*/*.html
// @include        http://www.64mi.com/*/*/*/*.html
// @include        http://www.bxs.cc/*/*.html
// @include        http://www.laishuwu.com/html/*/*/*.html
// @include        http://www.binhuo.com/html/*/*/*.html
// @include        http://www.haoqi99.com/haoqi99/*/*/*.shtml
// @include        http://www.shuhe.cc/*/*/
// @include        http://www.dudukan.net/html/*/*/*.html
// @include        http://www.hahawx.com/*/*/*.htm
// @include        http://www.zhuzhudao.com/txt/*/*/
// @include        http://www.zhuzhudao.cc/txt/*/*/
// @include        http://www.dahaomen.net/txt/*/*/
// @include        http://www.tadu.com/book/*/*/
// @include        http://www.aishoucang.com/*/*.html
// @include        http://www.wanshuba.com/Html/*/*/*.html
// @include        http://www.zhuishu.net/files/article/html/*/*/*.html
// @include        http://www.sqsxs.com/*/*/*.html
// @include        http://www.caiwei.tw/html/*/*.html
// @include        http://www.hotsk.com/Html/Book/*/*/*.shtml
// @include        http://www.92to.com/*/*/*.html
// @include        http://www.qirexs.com/read-*-chapter-*.html
// @include        http://www.du00.com/read/*/*/*.html
// @include        http://www.qishuwu.com/*/*/
// @include        http://www.wandoou.com/book/*/*.html
// @include        http://www.6yzw.org/*/*.html
// @include        http://www.daomengren.com/*/*.html
// @include        http://muyuge.com/*/*.html
// @include        http://bbs.vyming.com/novel-read-*-*.html
// @include        http://www.9imw.com/novel-read-*-*.html
// @include        http://www.23zw.com/olread/*/*/*.html

// www.sodu.so
// @include        http://www.jiaodu8.com/*/*/*/*.html
// @include        http://www.fktxt.com/book/*/*.html
// @include        http://www.186s.cn/files/article/html/*/*/*.html
// @include        http://www.6xs.cn/xs/*/*/*.html
// @include        http://www.chaojiqiangbing.com/book/*/*/*.html
// @include        http://book.moka123.com/book/*/*/*.html
// @include        http://www.suimeng.com/files/article/html/*/*/*.html
// @include        http://www.hao662.com/haoshu/*/*/*.html

//www.verydu.net
//         http://www.yawen8.com/*/*/*.html
// @include        http://www.tsxs.cc/files/article/html/*/*/*.html
// @include        http://www.ziyuge.com/*/*/*/*/*.html

// 其它网站
// @include        http://www.cfwx.net/files/article/html/*/*/*.html
// @include        http://www.7dsw.com/book/*/*/*.html
// @include        http://www.geiliwx.com/GeiLi/*/*/*.shtml
// @include        http://www.d586.com/*/*/
// @include        http://www.bookgew.com/Html/Book/*/*/*.htm
// @include        http://read.shuhaha.com/Html/Book/*/*/*.html
// @include        http://www.biqi.me/files/article/html/*/*/*.html
// @include        http://www.ttzw.com/book/*/*.html
// @include        http://www.uukanshu.com/*/*/*.html
// @include        http://www.173ed.com/read/*/*.html
// @include        http://www.a240.com/read/*/*.html
// @include        http://www.zhuishu.com/*/*.html
// @include        http://www.shuangde.cc/*/*.html
// @include        http://www.shenmaxiaoshuo.com/ml-*-*/
// @include        http://www.86kankan.com/read/*/*.html
// @include        http://www.fkzww.com/*/*/*.html
// @include        http://www.151kan.com/*/*/*/*.html
// @include        http://www.bookabc.net/*/*/*.html
// @include        http://www.xshuotxt.com/*/*/*/*.html
// @include        http://www.doulaidu.com/*/*/*.html
// @include        http://www.d586.com/*/*/
// @include        http://www.kanshu.la/book/*/*.shtml
// @include        http://www.wtcxs.com/files/article/html/*/*/*.html
// @include        http://www.5du5.com/book/*/*/*.html
// @include        http://book.kanunu.org/*/*/*.html
// @include        http://paitxt.com/*/*/*.html
// @include        http://www.shunong.com/yuedu/*/*/*.html
// @include        http://book.yayacms.com/*/book_*_*.html
// @include        http://www.yqhhy.cc/*/*/*.html
// @include        http://www.nuoqiu.com/static/*/*.html
// @include        http://www.17yue.com/*/*/*.html
// @include        http://dukeba.com/book/*/*/*.shtml
// @include        http://www.wenchangshuyuan.com/html/*/*/*.html
// @include        http://www.pofeng.net/xiaoshuo/*/*.html
// @include        http://www.piaotian.net/html/*/*/*.html
// @include        http://www.epzww.com/book/*/*
// @include        http://tw.xiaoshuokan.com/haokan/*/*.html
// @include        http://www.wobudu.com/*/*.html
// @include        http://www.qb5.com/xiaoshuo/*/*/*.html
// @include        http://www.23us.com/html/*/*/*.html
// @include        http://www.xs222.com/html/*/*/*.html
// @include        http://www.bixiage.com/*/*/*/*.html
// @include        http://www.ranwenxiaoshuo.com/files/article/html/*/*/*.html
// @include        http://www.ranwenxiaoshuo.com/*/*-*-*.html
// @include        http://www.bjxiaoshuo.com/bjxs-*-*/
// @include        http://www.59shuku.com/xiaoshuo/*/*.htm
// @include        http://www.16kbook.org/Html/Book/*/*/*.shtml
// @include        http://www.dixiaoshuo.com/Html/*/*.html
// @include        http://www.nieshu.com/Book/*/*/*.shtml
// @include        http://www.tlxsw.com/files/article/html/*/*/*.html
// @include        http://www.1kanshu.com/files/article/html/*/*/*.html
// @include        http://www.uutxt.org/book/*/*/*.html
// @include        http://www.5800.cc/*/*/*/*.html
// @include        http://www.biquge.com/*/*.html
// @include        http://www.qududu.com/book/*/*/*.html
// @include        http://www.free97.cn/book/*/*/*.html
// @include        http://www.122s.com/book/*/*.html
// @include        http://www.123du.net/dudu-*/*/*.html
// @include        http://www.123du.cc/dudu-*/*/*.html
// @include        http://www.123du.net/book/*/*.html
// @include        http://www.hwafa.com/*/*.html
// @include        http://www.qmshu.com/html/*/*/*.html
// @include        http://dlzw.cc/article-*-*.html
// @include        http://www.shushu5.com/read/*/*.html
// @include        http://www.qiuwu.net/html/*/*/*.html
// @include        http://www.xiaoyanwenxue.com/files/article/html/*/*/*.html
// @include        http://www.3gsc.com.cn/bookcon/*_*_*
// @include        http://www.bj-ibook.cn/book/*/*/*.htm
// @include        http://www.baoliny.com/*/*.html
// @include        http://www.dajiadu.net/files/article/html/*/*/*.html
// @include        http://www.yankuai.com/files/article/html/*/*/*.html
// @include        http://www.docin.net/*/*.html
// @include        http://www.dushuge.net/html/*/*/*.html
// @include        http://www.xunshu.org/xunshu/*/*/*.html
// @include        http://www.moneyren.com/book/*/*/*.shtml
// @include        http://wemaxfilipino.com/*/*/*.html
// @include        http://www.85618892.cn/xiaoshuo/*/*/*.shtml
// @include        http://www.bookba.net/Html/Book/*/*/*.html
// @include        http://www.moksos.com/*/*/*.html
// @include        http://dudu8.net/novel/*/*/*.html
// @include        http://www.dawenxue.net/html/*/*/*.html
// @include        http://www.yanmoxuan.org/book/*/*/*.html
// @include        http://www.duyidu.com/xiaoshuo/*/*/*.html
// @include        http://www.69zw.com/xiaoshuo/*/*/*.html
// @include        http://www.laishu.com/book/*/*/*.shtml
// @include        http://www.bxwx.org/b/*/*/*.html
// @include        http://www.bxzw.org/*/*/*/*.shtml
// @include        http://www.360118.com/html/*/*/*.html
// @include        http://www.59to.com/files/article/xiaoshuo/*/*/*.html
// @include        http://www.dyzww.com/cn/*/*/*.html
// @include        http://www.9wh.net/*/*/*.html
// @include        http://www.luoqiu.net/html/*/*/*.html
// @include        http://www.luoqiu.com/html/*/*/*.html
// @include        http://www.epzw.com/files/article/html/*/*/*.html
// @include        http://www.dashubao.com/book/*/*/*.html
// @include        http://b.faloo.com/p/*/*.html
// @include        http://www.baikv.com/*/*.html
// @include        http://www.66721.com/*/*/*.html
// @include        http://www.3dllc.com/html/*/*/*.html
// @include        http://www.xstxt.com/*/*/
// @include        http://www.zzzcn.com/3z*/*/
// @include        http://www.zzzcn.com/modules/article/App.php*
// @include        http://www.nilongdao.com/book/*/*/*.html
// @include        http://xs321.net/*/*/
// @include        http://read.guanhuaju.com/files/article/html/*/*/*.html
// @include        http://www.book108.com/*/*/*.html
// @include        http://5ycn.com/*/*/*.html
// @include        http://www.zhaoxiaoshuo.com/chapter-*-*-*/
// @include        http://*zbzw.com/*/*.html
// @include        http://manghuangji.cc/*/*.html
// @include        http://www.aiqis.com/*/*.html
// @include        http://www.fftxt.net/book/*/*.html
// @include        http://www.5kwx.com/book/*/*/*.html
// @include        http://www.uuxiaoshuo.net/html/*/*/*.html
// @include        http://www.sanyyo.org/*.html
// @include        http://www.chinaisbn.com/*/*/*.html
// @include        http://www.caihongwenxue.com/Html/Book/*/*/*.html
// @include        http://www.shushuw.cn/shu/*/*.html
// @include        http://www.78xs.com/article/*/*/*.shtml

// @exclude        */List.htm
// @exclude        */List.html
// @exclude        */List.shtml
// @exclude        */index.htm
// @exclude        */index.html
// @exclude        */index.shtml
// @exclude        */Default.htm
// @exclude        */Default.html
// @exclude        */Default.shtml

// @run-at         document-end
// ==/UserScript==