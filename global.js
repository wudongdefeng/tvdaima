window.vip=`

  VIP解析 https://chinese-elements.com/v.html?zwx=
  
  一起走吧 http://jiexi.yiqizouba.top/?url=
  
  宅鱼解析 https://jx.688ing.com/?search=
  
  小亨 http://jx.cesms.cn/?url=

  指南 http://yun.tvznn.cn/lines?url=

  知网 http://jx.xyyh.xyz/?v=
  无限 http://v.88tv.org/?v=
  稳定 http://19g.top/?url=
  万能 http://jx.cx77m1.cn/?url=
  神马 https://jx.smbk.cc/?v=
  牛牛 http://jx.yuanzhi668.cn/index.php?url=
  妮可 http://jiexi.kingsnug.cn/tx.php?url=
  咪咪 http://mimijiexi.top/?url=
  六子 http://api.6uzi.com/?url=
  快乐 http://vip.kltv19.xyz/yjx/?v=
  酷搏 http://jx.x-99.cn/api.php?id=
  花园 http://j.zz22x.com/jx/?url=
  弘易阁 http://jx.hongyishuzhai.com/index.php?url=
  干货 http://k8aa.com/jx/index.php?url=
  福祥 http://jx.hao0606.com/?url=
  第九 http://v.d9y.net/vip/?url=
  呆萌 https://vip.1988ds.cn/?v=
  冰豆 http://api.bingdou.net/api/?url=
  背影 http://tv.beipy.com/jx/?url=
  百域阁 http://api.baiyug.vip/index.php?url=
  888 http://cdn.zyc888.top/?url=
  5252 http://5.5252e.com/jx.php?url=
  1988 https://vip.1988ds.cn/?v=
  17云 http://17kyun.com/api.php?url=


`;
//window.vip=window.VIP_URLS;


//需要VIP解析的网站
function isVip() {
    var domain = location.href.split('?');
    return /(\.iqiyi\.com|\.youku\.com|\.le\.com|m\.bilibili.com|m\.miguvideo\.com|\.1905\.com|\.baofeng\.com|\.pptv\.com|\.letv\.com|v\.qq\.com|\.tudou\.com|\.mgtv\.com|\.sohu\.com)/.test(domain[0]);
}

function parseOUrl(link, title) {
  var oLink = link.trim().split(/[\s@]+/);
  var mUrl, pcUrl;
  var urls = oLink.filter(v => /https?:\/\//.test(v));
  oLink = oLink.filter(v => !/https?:\/\//.test(v));
  urls.forEach(url => {
    if (/\/\/m\.|\/m\//.test(url)) {
      mUrl = url;
    } else {
      pcUrl = url;
    }
  });
  var url = urls[0];
  if (title) {
    url = url.replace('**', title);
  }
  var name =
    oLink.length > 0
      ? oLink.join(' ')
      : url
          .match(/\/\/(.+\.)?([^\/]+)\.\w+\//)[2]
          .replace(/^(\w)/, function(v) {
            return v.toUpperCase();
          });
  return { url, name };
}
  
function ensureArray(arr) {
  return Array.isArray(arr) ? arr : arr.trim().split(/[\n\s]*\n+[\n\s]*/);
}

//parse interface
var s = window.vip;
s = ensureArray(s).map(function(v) {
  return v.replace(/=http.+/g, '=');
});
console.log(s);
var vip = s.map(n=>parseOUrl(n,null));



addStyle(`
._V_vip_btn {
  font-size: 18px;
  width: 42px;
  height: 42px;
  bottom: 180px;
  right: 20px;
  color: #f8f9fa;
  background: #40c057;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-shadow: 0 0 1px #2f9e44, 0 0 3px #2f9e44, 0 0 4px #2f9e44, 0 0 8px #2f9e44, 0 0 12px #51cf66, 0 0 2px #2f9e44, 0 0 20px #51cf66;
  position: fixed;
  z-index: 99999;
  border-radius: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

._V_vip_btn, ._V_vip_panel li {
  transition: all .5s;
}

._V_vip_panel {
  background: #fff;
  box-shadow: 0px 1px 10px rgba(0,0,0,0.3);
  margin: 0;
  padding: 0 15px;
  position: fixed;
  bottom: 120px;
  right: 72px;
  z-index: 99999;
  overflow: scroll;
  border-radius: 5px;
  max-height: 80vh;
}

._V_vip_panel li {
  margin: 0;
  font-size: 18px;
  min-width: 128px;
  text-align: left;
  border-bottom: 1px solid #ffe8cc;
  overflow: hidden;
  white-space: nowrap;
  padding: 8px 0;
  letter-spacing: 1px;
}

._V_vip_title {
  font-weight: bold;
  color: #495057;
}

._V_vip_title:hover{
  color: red;
}

._V_vip_url {
  font-size: 0.85em;
  color: #868e96;
}

._V_vip_url:hover {
  color: red;
}
`);

loadVipFunc();

function loadVipFunc() {
    if (isVip()) {
        if (document.getElementById('VipButton') != null) {
            return;
        }
        var myBtn = document.createElement('div');
        var myul = document.createElement('ul');
        myBtn.id = 'VipButton';
        myBtn.innerHTML = 'VIP';
        myBtn.classList.add('_V_vip_btn');
        document.body.appendChild(myBtn);
        myul.id = 'VipList';
        myul.classList.add('_V_vip_panel');
        myul.style.display = 'none';
        for (var i = 0; i < vip.length; i++) {
            var myli = document.createElement('li'); (function(num) {
                myli.onclick = function() {
                    window.open(vip[num].url + tryGetRealUrl(location.href), '_blank');
                };
            })(i);
            myli.innerHTML = '<p><span class="_V_vip_title">' + vip[i].name + '</span><br><span class="_V_vip_url">' + vip[i].url.match(/\/\/([^\/]+)\//)[1] + '</span></p>';
            myul.appendChild(myli);
        }
        document.body.appendChild(myul);
        myBtn.onclick = function() {
            if (myul.style.display == 'none') {
                myul.style.display = 'block';
                myBtn.innerHTML = '➕';
                myBtn.style.transform = 'rotateZ(45deg)';
            } else {
                myul.style.display = 'none';
                myBtn.innerHTML = 'VIP';
                myBtn.style.transform = 'rotateZ(0deg)';
            }
        };
    }
}
function tryGetRealUrl(url) {
    var realUrl = url;
    try {
        realUrl = getRealUrl(url);
    } catch(err) {
        console.log(err);
    }
    return realUrl;
}
function getYoukuRealUrl(url) {
    var li = document.getElementsByClassName('hot-row-bottom')[0].children[0];
    var data = li.getAttribute('data-param');
    var s = data.split('svid=');
    if (s.length > 1) {
        var svid = s[1].split('&')[0];
        return 'https://v.youku.com/v_show/id_' + svid + '.html';
    }
    return url;
}
function getRealUrl(url) {
    var dataurl2 = url;
    var txurlc = dataurl2.split(':');
    var txurl = txurlc[1].slice(0, 12);
    var ykurl = txurlc[1].slice(0, 13);
    var ykdata = txurlc[1].slice(13);
    if (ykurl == '//m.youku.com') {
        return getYoukuRealUrl(url);
    }
    if (ykurl == '//m.youku.com') {
        var txurlc = dataurl2.split(':');
        var ykurl = txurlc[1].slice(0, 13);
        var ykdata = txurlc[1].slice(13);
        dataurl2 = 'http://www.youku.com' + ykdata;
    } else if (ykurl == '//m.iqiyi.com') {
        var txurlc = dataurl2.split(':');
        var ykurl = txurlc[1].slice(0, 13);
        var ykdata = txurlc[1].slice(13);
        dataurl2 = 'https://www.iqiyi.com' + ykdata;
    } else if (txurl == '//m.v.qq.com') {
        var vid = getParam(dataurl2, 'vid');
        var cid = getParam(dataurl2, 'cid');
        var txdata2 = dataurl2.split('?');
        var str = 'play.html';
        if (txdata2[0].slice(txdata2[0].length - str.length) == str) {
            if (cid.length > 1) {
                dataurl2 = 'https://v.qq.com/x/cover/' + cid + '.html';
                return dataurl2;
            } else if (vid.length == 11) {
                return 'https://v.qq.com/x/page/' + vid + '.html';
            }
        }
        cid = txdata2[0].slice( - 20, -5);
        if (vid.length == 11) {
            dataurl2 = 'https://v.qq.com/x/cover/' + cid + '/' + vid + '.html';
        } else {
            dataurl2 = 'https://v.qq.com/x/cover/' + cid + '.html';
        }
    } else if (ykurl == '//m.le.com/vp') {
        var leurlc = dataurl2.split('_');
        var leurl = leurlc[1];
        dataurl2 = 'http://www.le.com/ptv/vplay/' + leurl;
    }
    return dataurl2;
}
function getParam(dataurl2, name) {
    return dataurl2.match(new RegExp('[?&]' + name + '=([^?&]+)', 'i')) ? decodeURIComponent(RegExp.$1) : '';
}
function addStyle(styles) {
    var css = document.createElement('style');
    css.type = 'text/css';
    if (css.styleSheet) css.styleSheet.cssText = styles;
    // Support for IE
    else css.appendChild(document.createTextNode(styles)); // Support for the rest
    document.getElementsByTagName('head')[0].appendChild(css);
}


/**
 * One - v0.11.23 - (o˘◡˘o)
 *
 * One for 海阔影视: 豆瓣净化 + VIP 视频解析
 */

// 豆瓣 - 搜索源
var DOUBAN_SOURCES = window.DOUBAN_SOURCES || [
  '奈菲 https://www.nfmovies.com/search.php?page=1&searchword=**',
  '云播 https://m.yunbtv.com/vodsearch/-------------.html?wd=**',
  '飞极速 http://fjisu.tv/search/**',
  '萌搜 https://www.msdm.moe/index.php/vod/search/page/1/wd/?wd=**',
  '樱花 http://m.yhdm.tv/search/**/',
  '1090 https://1090ys.com/?c=search&sort=addtime&order=desc&page=1&wd=**',
  '残月 http://ys.23yue.cn/seacher-**.html',
  '独播 https://www.duboku.net/vodsearch/-------------.html?wd=**',
  '拾伍 https://www.shiwutv.com/vodsearch/-------------.html?wd=**',
  '影迷 https://www.yingmiwo.com/vodsearch.html?wd=**',
  'APP https://app.movie/index.php/vod/search.html?wd=**',
  '五号站 http://www.baike567.com/s/**/?from=1005487',
  '疯狂影视 http://m.ifkdy.com/result?q=**',
  '影视大全 http://01th.net/search/?wd=**',
  'poo电影网 http://www.pv00.com/index.php?n=0&wd=**',
  '老豆瓣 https://www.laodouban.com/s?c=**',
  '沃德影院 http://v.wdmov.com./so.php?wd=**',
  '八兔 http://www.8tutv.com/search/?category=0&q=**',
  'vipku http://www.2n65.cn/index.php/vod/search.html?wd=**'
];

// VIP视频解析 - 解析网址
var VIP_URLS = window.VIP_URLS || [
  '新诺讯 https://www.nxflv.com/?url=',
  '一起走吧 http://jiexi.yiqizouba.top/?url=',
  '宅鱼解析 https://jx.688ing.com/?search=',
  '福云解析 https://vip.fucloud.xyz/?url=',
  'LDY解析 http://tv.ldak1.com/?v=',
  '小人物解 http://wtatom.top/jx/?url=',
  '掌上解析 http://www.zhangshangdy.cn/?v=',
  '十点影视 http://www.shidianyingshi.club/?url=',
  'WSY解析 http://jx.wsy666.site/?url=',
  '影视搜索 https://dagu.ml/s/?v=',
  '千叶万能 https://yi29f.cn/vip.php?url=',
  '爱酷看看 https://www.ikukk.com/?url=',
  'Onapi解 http://jx.onapi.xyz/?v=',
  'Beipy解 http://tv.beipy.com/jx/?url=',
  '大幕解析 http://jx.52damu.com/dmjx/jiexi.php?url=',
  '智能解析 http://jx.ph63.com/?url=',
  'H8解析 https://www.h8jx.com/jiexi.php?url=',
  '解析S https://jx.jiexis.com/?url=',
  '逍遥解析 http://jx.ixiaoyao.top/?v=',
  '全民vip https://www.bavei.com/vip/?url=',
  '高清蓝光 https://py.ha12.xyz/sos/index.php?url=',
  '云解析析 https://api.m2048.com/index.php?url=',
  '小白解析 https://jx.ooopn.com/?v=',
  '100解析 http://j.wfss100.com/?url=',
  '思念 https://jx.xyatv.com/?url=',
  '百灵鸟解 析https://jx.xyavi.com/?url=',
  'mimi http://mimijiexi.top/?url=',
  '云端解析 https://jx.99yyw.com/99/?url=',
  '免费vip https://jiexi6.com/template/vfed/asset/fed/player.php?id=peer&url=',
  'TY解析 http://aty.pw/jx.php?id=1&url=',
  '云解析 http://api.2yuanvip.com/ddd.php?url=',
  '醉仙解析 http://api.52sjmz.cn/index.php?url=',
  '北风解析 http://www.v.cumtb.store/?url=',
  '艾克解析 http://v.xfj.me/?v=',
  '大亨影院 http://tv.oopw.top/v.php?url=',
  '少年的你 https://chinese-elements.com/v.html?zwx=',
  '高清线路 http://5gvip.vicp.hk/jx/?url=',
  '逗二哈 http://5gvip.vicp.hk/jx1/?url=',
  '呆萌小黑 https://vip.1988ds.cn/?v=',
  '优品街 https://api.upjie.com/vip/?url=',
  '世界资源网解析 http://jx.shijiezyw.com/?v=',
  '老马解析 https://jx.lmxxxz.com/?url=',
  '宝思智能解析 http://demo.baores.com/?url=',
  '2A解析 https://www.2ajx.com/vip.php?url=',
  '小爽解析 http://www.hasoe.cn/?v=',
  '40解析 https://jx40.net/url=',
  'YKM智能解析 https://ys.ykmbbs.top/?v=',
  '三汇解析 http://vip.sanhuiguoji.com/?url=',
  '云上解析 https://api.ysdyz.com/?url=',
  '百译解析 http://www.wabaiyi.com/vip/?url=',
  '快乐TV http://vip.kltv19.xyz/yjx/?v=',
  '听乐解析 http://api.dj6u.com/jx.php?url=',
  '秒播解析 http://jx.yuanzhi668.cn/?url=',
  '豪华啦 http://api.lhh.la/vip/?url=',
  '站长窝 http://jx.5ywl.cn/?v=',
  '二度永久 http://jx.drgxj.com/?url=',
  'K8AA解析 http://k8aa.com/jx/index.php?url=',
  '挚爱解析 http://www.10yy.com.cn/?url=',
  '无广告解析 https://test.78sy.cn/?url=',
  '78解析 https://api.78sy.cn/?url=',
  'VIP全网解析 https://yi29f.cn/vip.php?url=',
  '竟辉影院 http://api.cdjhxxjs.com/?v=',
  '百度云解析 http://jsap.attakids.com/?url=',
  '1907影视 https://z1.m1907.cn/?jx=',
  '能猫解析 http://occ.xm08.cn/?url=',
  'TVTV看 http://jx.tvtvkan.com/?v=',
  '塔克解析2 https://mfjx.z8mov.top/?url=',
  '私人思品 http://jx.xice.xyz/?v=',
  '搜搜库1 http://www.guandianzhiku.com/v/s/?url=',
  '石头云 http://jiexi.071811.cc/jx.php?url=',
  '酷博 http://jx.x-99.cn/api.php?id=',
  'V8智能解析 http://jx.sujx.top/jiexi.php?url=',
  '玩得嗨 http://tv.wandhi.com/go.html?url=',
  '1ff1解析 http://jx.1ff1.cn/?url=',
  '17K云 http://17kyun.com/api.php?url=',
  'XIAO8智能解析 https://jiexi.8htv.cn/meyaer.php?url=',
  '59解析 http://59uv.com/?url=',
  '28抢先看 https://jx.huodongz.com/?url=',
  '白菜解析 http://myqq113.tx115.5644.pw/jiexi/?url=',
  '通用解析 http://jx.aeidu.cn/index.php?url=',
  '98a解析 http://jx.98a.ink/?url=',
  '69万能解析 http://api.69ne.com/?url=',
  '爱快播云解析 http://www.aqvod.cn/?url=',
  '绿芽解析 https://vip.lvyajx.com/?url=',
  '2020解析 https://api.2020jx.com/?url=',
  '调试 https://vip.mpos.ren/v/?url=',
  '小黑解析 https://vip.1988ds.cn/?v=',
  '云渡 http://yy.6tc.top/jx/?url=',
  '黑米解析 https://www.heimijx.com/jx/api/?url=',
  '55解析 http://55jx.top/?url=',
  '517解析 http://cn.bjbanshan.cn/jx.php?url=',
  '爸比解析 http://www.33tn.cn/?url=',
  '星空解析 https://jx.fo97.cn/?url=',
  '660e https://660e.com/?url=',
  '小千解析 http://www.nide123.cn/vip/?v=',
  '狂野解析 https://api.653520.top/vip/?url=',
  '冰豆解析 http://api.bingdou.net/?url=',
  '金桥解析 http://jqaaa.com/jx.php?url=',
  '船长解析 http://czjx8.com/?url=',
  '19解析 http://19g.top/?url=',
  'OK解析 http://okjx.cc/?url=',
  '618G https://jx.618g.com/?url=',
  '瑞特解析 http://jx.0421v.pw/index.php?url=',
  '蓝科迪 http://api.lkdmkj.com/jx/jx00/index.php?url=',
  '搜搜库 http://jx.sosoku.cn/jx/?url=',
  '未知 https://vip.jlsprh.com/?url=',
  'bofang http://bofang.online/?url=',
  'play1 http://play1.online/?url=',
  'ckplay http://ckplay.online/?url=',
  '52088 http://52088.online/?url=',
  '69p http://69p.top/?url=',
  '猪蹄无广告 http://jx.iztyy.com/svip/?url=',
  '猪蹄无广告1 https://jx.iztyy.com/svip/?url=',
  '蚂蚁智能解析 http://jx.v5ant.com/?v=',
  'test解析 http://www.now10.top/?url=',
  '百度API http://app.baiduoos.cn:2019/vip/?url=',
  '易云解析 http://v.ioto.vip/?v=',
  'Play99解析 http://www.play99.top/?url=',
  '天天 http://jx.mba98.com/?url=',
  '音萌云 https://api.v6.chat/?url=',
  '解析视频 http://jx.xzsdwl.cn/?url=',
  '4080 http://www.4080.xyz/jx/?url=',
  '花园影视 http://j.zz22x.com/jx/?url=',
  '大白影视 http://jx.myzch.cn/jx/?v=',
  '97解析 https://vip.97kys.com/vip/?url=',
  '菜鸟解析 https://jiexi.bm6ig.cn/?url=',
  '爱解析 http://jx.wfxzzx.cn/?url=',
  '全网无广解析 https://jx.yswy.top/?url=',
  '诺讯解析1 http://www.ckmov.com/?url=',
  '诺讯解析② https://www.ckmov.com/?url=',
  '梦城解析 http://api.mcncn.cn/?url=',
  '我爱解析 http://vip.52jiexi.top/?COLLCC=2964076775&COLLCC=865063344&url=',
  '52a解析① http://jx.52a.ink/?url=',
  'jsr解析 http://jx.isryun.com/?v=',
  '无名解析 http://69p.top/?url=',
  '千树解析 http://jx.lengmouwl.xyz/?url=',
  '8B解析 http://api.8bjx.cn/?url=',
  'ferr云 http://www.freeget.org/jx.php?url=',
  '初颜解析 http://jx.wodym.cn/?url=',
  'Hk解析 http://jx.rdhk.net/?v=',
  '爱解析 http://jx.wfxzzx.cn/?url=',
  'AT520 http://at520.cn/jx/?url=',
  '360dy解析 http://yun.360dy.wang/jx.php?url=',
  '清风明月 http://fateg.xyz/?url=',
  '771解析 https://vip.qi71.cn/jiexi.php?url=',
  '黑云解析 http://jx.daheiyun.com/?url=',
  'tv920解析 https://api.tv920.com/vip/?url=',
  '逆天解析 http://nitian9.com/?url=',
  '购买的解析 http://jx.vipshares.xyz/index1.php?url=',
  '羊分享 http://buchi.me/?v=',
  '超清干货 http://k8aa.com/jx/index.php?url=',
  '弦易阁 http://jx.hongyishuzhai.com/index.php?url=',
  '飞鸟云播 http://jx.ledboke.com/?url=',
  'WoCao https://www.wocao.xyz/index.php?url=',
  '凉城解析 http://jx.mw0.cc/?url='
];

var DOUBAN_VIP_SOURCES = [
  '爱奇艺 https://m.iqiyi.com/search.html?source=default&key=**',
  '腾讯 https://m.v.qq.com/search.html?act=0&keyWord=**',
  '优酷 https://www.soku.com/m/y/video?q=**',
  '搜狐 https://m.tv.sohu.com/upload/h5/m/mso.html?key=**',
  '芒果 https://m.mgtv.com/so/?k=**',
  '乐视 http://m.le.com/search?wd=**'
];

DOUBAN_SOURCES = DOUBAN_VIP_SOURCES.concat(DOUBAN_SOURCES);

(function() {
  // 保证插件只加载一次
  var PLUGIN_ID = '(o˘◡˘o) One';
  if (window[PLUGIN_ID]) return;
  window[PLUGIN_ID] = true;

  if (location.href.includes('doubleclick.net')) return;

  function log() {
    args = [];
    args.push(PLUGIN_ID + '    ');
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    console.log.apply(console, args);
  }

  var isGM = !!window.GM;
  var isFY = !!window.fy_bridge_app;

  log('✔ Loaded', isGM ? 'isGM' : isFY ? 'isFY' : '');

  var href = location.href;

  function Is(regex) {
    return regex.test(href);
  }

  if (
    !Is(/url=http/) &&
    Is(/\.le\.com/) &&
    !Is(/\.le\.com\/(ptv\/vplay\/|vplay_)/)
  )
    return;

  /* Zepto v1.2.0 - zepto event ajax form ie - zeptojs.com/license */
  !function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):e(t)}(this,function(t){var e=function(){function $(t){return null==t?String(t):S[C.call(t)]||"object"}function F(t){return"function"==$(t)}function k(t){return null!=t&&t==t.window}function M(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function R(t){return"object"==$(t)}function Z(t){return R(t)&&!k(t)&&Object.getPrototypeOf(t)==Object.prototype}function z(t){var e=!!t&&"length"in t&&t.length,n=r.type(t);return"function"!=n&&!k(t)&&("array"==n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function q(t){return a.call(t,function(t){return null!=t})}function H(t){return t.length>0?r.fn.concat.apply([],t):t}function I(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function V(t){return t in l?l[t]:l[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function _(t,e){return"number"!=typeof e||h[I(t)]?e:e+"px"}function B(t){var e,n;return c[t]||(e=f.createElement(t),f.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),c[t]=n),c[t]}function U(t){return"children"in t?u.call(t.children):r.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function X(t,e){var n,r=t?t.length:0;for(n=0;r>n;n++)this[n]=t[n];this.length=r,this.selector=e||""}function J(t,r,i){for(n in r)i&&(Z(r[n])||L(r[n]))?(Z(r[n])&&!Z(t[n])&&(t[n]={}),L(r[n])&&!L(t[n])&&(t[n]=[]),J(t[n],r[n],i)):r[n]!==e&&(t[n]=r[n])}function W(t,e){return null==e?r(t):r(t).filter(e)}function Y(t,e,n,r){return F(e)?e.call(t,n,r):e}function G(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function K(t,n){var r=t.className||"",i=r&&r.baseVal!==e;return n===e?i?r.baseVal:r:void(i?r.baseVal=n:t.className=n)}function Q(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?r.parseJSON(t):t):t}catch(e){return t}}function tt(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)tt(t.childNodes[n],e)}var e,n,r,i,O,P,o=[],s=o.concat,a=o.filter,u=o.slice,f=t.document,c={},l={},h={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},p=/^\s*<(\w+|!)[^>]*>/,d=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,m=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,g=/^(?:body|html)$/i,v=/([A-Z])/g,y=["val","css","html","text","data","width","height","offset"],x=["after","prepend","before","append"],b=f.createElement("table"),E=f.createElement("tr"),j={tr:f.createElement("tbody"),tbody:b,thead:b,tfoot:b,td:E,th:E,"*":f.createElement("div")},w=/complete|loaded|interactive/,T=/^[\w-]*$/,S={},C=S.toString,N={},A=f.createElement("div"),D={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},L=Array.isArray||function(t){return t instanceof Array};return N.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=A).appendChild(t),r=~N.qsa(i,e).indexOf(t),o&&A.removeChild(t),r},O=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},P=function(t){return a.call(t,function(e,n){return t.indexOf(e)==n})},N.fragment=function(t,n,i){var o,s,a;return d.test(t)&&(o=r(f.createElement(RegExp.$1))),o||(t.replace&&(t=t.replace(m,"<$1></$2>")),n===e&&(n=p.test(t)&&RegExp.$1),n in j||(n="*"),a=j[n],a.innerHTML=""+t,o=r.each(u.call(a.childNodes),function(){a.removeChild(this)})),Z(i)&&(s=r(o),r.each(i,function(t,e){y.indexOf(t)>-1?s[t](e):s.attr(t,e)})),o},N.Z=function(t,e){return new X(t,e)},N.isZ=function(t){return t instanceof N.Z},N.init=function(t,n){var i;if(!t)return N.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&p.test(t))i=N.fragment(t,RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}else{if(F(t))return r(f).ready(t);if(N.isZ(t))return t;if(L(t))i=q(t);else if(R(t))i=[t],t=null;else if(p.test(t))i=N.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}}return N.Z(i,t)},r=function(t,e){return N.init(t,e)},r.extend=function(t){var e,n=u.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){J(t,n,e)}),t},N.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,s=T.test(o);return t.getElementById&&s&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:u.call(s&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},r.contains=f.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},r.type=$,r.isFunction=F,r.isWindow=k,r.isArray=L,r.isPlainObject=Z,r.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},r.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},r.inArray=function(t,e,n){return o.indexOf.call(e,t,n)},r.camelCase=O,r.trim=function(t){return null==t?"":String.prototype.trim.call(t)},r.uuid=0,r.support={},r.expr={},r.noop=function(){},r.map=function(t,e){var n,i,o,r=[];if(z(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&r.push(n);else for(o in t)n=e(t[o],o),null!=n&&r.push(n);return H(r)},r.each=function(t,e){var n,r;if(z(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},r.grep=function(t,e){return a.call(t,e)},t.JSON&&(r.parseJSON=JSON.parse),r.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){S["[object "+e+"]"]=e.toLowerCase()}),r.fn={constructor:N.Z,length:0,forEach:o.forEach,reduce:o.reduce,push:o.push,sort:o.sort,splice:o.splice,indexOf:o.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=N.isZ(e)?e.toArray():e;return s.apply(N.isZ(this)?this.toArray():this,n)},map:function(t){return r(r.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return r(u.apply(this,arguments))},ready:function(t){return w.test(f.readyState)&&f.body?t(r):f.addEventListener("DOMContentLoaded",function(){t(r)},!1),this},get:function(t){return t===e?u.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return o.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return F(t)?this.not(this.not(t)):r(a.call(this,function(e){return N.matches(e,t)}))},add:function(t,e){return r(P(this.concat(r(t,e))))},is:function(t){return this.length>0&&N.matches(this[0],t)},not:function(t){var n=[];if(F(t)&&t.call!==e)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):z(t)&&F(t.item)?u.call(t):r(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return r(n)},has:function(t){return this.filter(function(){return R(t)?r.contains(this,t):r(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!R(t)?t:r(t)},last:function(){var t=this[this.length-1];return t&&!R(t)?t:r(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?r(t).filter(function(){var t=this;return o.some.call(n,function(e){return r.contains(e,t)})}):1==this.length?r(N.qsa(this[0],t)):this.map(function(){return N.qsa(this,t)}):r()},closest:function(t,e){var n=[],i="object"==typeof t&&r(t);return this.each(function(r,o){for(;o&&!(i?i.indexOf(o)>=0:N.matches(o,t));)o=o!==e&&!M(o)&&o.parentNode;o&&n.indexOf(o)<0&&n.push(o)}),r(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=r.map(n,function(t){return(t=t.parentNode)&&!M(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return W(e,t)},parent:function(t){return W(P(this.pluck("parentNode")),t)},children:function(t){return W(this.map(function(){return U(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||u.call(this.childNodes)})},siblings:function(t){return W(this.map(function(t,e){return a.call(U(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return r.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=B(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=F(t);if(this[0]&&!e)var n=r(t).get(0),i=n.parentNode||this.length>1;return this.each(function(o){r(this).wrapAll(e?t.call(this,o):i?n.cloneNode(!0):n)})},wrapAll:function(t){if(this[0]){r(this[0]).before(t=r(t));for(var e;(e=t.children()).length;)t=e.first();r(t).append(this)}return this},wrapInner:function(t){var e=F(t);return this.each(function(n){var i=r(this),o=i.contents(),s=e?t.call(this,n):t;o.length?o.wrapAll(s):i.append(s)})},unwrap:function(){return this.parent().each(function(){r(this).replaceWith(r(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var n=r(this);(t===e?"none"==n.css("display"):t)?n.show():n.hide()})},prev:function(t){return r(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return r(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;r(this).empty().append(Y(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=Y(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,r){var i;return"string"!=typeof t||1 in arguments?this.each(function(e){if(1===this.nodeType)if(R(t))for(n in t)G(this,n,t[n]);else G(this,t,Y(this,r,e,this.getAttribute(t)))}):0 in this&&1==this[0].nodeType&&null!=(i=this[0].getAttribute(t))?i:e},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){G(this,t)},this)})},prop:function(t,e){return t=D[t]||t,1 in arguments?this.each(function(n){this[t]=Y(this,e,n,this[t])}):this[0]&&this[0][t]},removeProp:function(t){return t=D[t]||t,this.each(function(){delete this[t]})},data:function(t,n){var r="data-"+t.replace(v,"-$1").toLowerCase(),i=1 in arguments?this.attr(r,n):this.attr(r);return null!==i?Q(i):e},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each(function(e){this.value=Y(this,t,e,this.value)})):this[0]&&(this[0].multiple?r(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(e){if(e)return this.each(function(t){var n=r(this),i=Y(this,e,t,n.offset()),o=n.offsetParent().offset(),s={top:i.top-o.top,left:i.left-o.left};"static"==n.css("position")&&(s.position="relative"),n.css(s)});if(!this.length)return null;if(f.documentElement!==this[0]&&!r.contains(f.documentElement,this[0]))return{top:0,left:0};var n=this[0].getBoundingClientRect();return{left:n.left+t.pageXOffset,top:n.top+t.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(t,e){if(arguments.length<2){var i=this[0];if("string"==typeof t){if(!i)return;return i.style[O(t)]||getComputedStyle(i,"").getPropertyValue(t)}if(L(t)){if(!i)return;var o={},s=getComputedStyle(i,"");return r.each(t,function(t,e){o[e]=i.style[O(e)]||s.getPropertyValue(e)}),o}}var a="";if("string"==$(t))e||0===e?a=I(t)+":"+_(t,e):this.each(function(){this.style.removeProperty(I(t))});else for(n in t)t[n]||0===t[n]?a+=I(n)+":"+_(n,t[n])+";":this.each(function(){this.style.removeProperty(I(n))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(r(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?o.some.call(this,function(t){return this.test(K(t))},V(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var n=K(this),o=Y(this,t,e,n);o.split(/\s+/g).forEach(function(t){r(this).hasClass(t)||i.push(t)},this),i.length&&K(this,n+(n?" ":"")+i.join(" "))}}):this},removeClass:function(t){return this.each(function(n){if("className"in this){if(t===e)return K(this,"");i=K(this),Y(this,t,n,i).split(/\s+/g).forEach(function(t){i=i.replace(V(t)," ")}),K(this,i.trim())}})},toggleClass:function(t,n){return t?this.each(function(i){var o=r(this),s=Y(this,t,i,K(this));s.split(/\s+/g).forEach(function(t){(n===e?!o.hasClass(t):n)?o.addClass(t):o.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var n="scrollTop"in this[0];return t===e?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var n="scrollLeft"in this[0];return t===e?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=g.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(r(t).css("margin-top"))||0,n.left-=parseFloat(r(t).css("margin-left"))||0,i.top+=parseFloat(r(e[0]).css("border-top-width"))||0,i.left+=parseFloat(r(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||f.body;t&&!g.test(t.nodeName)&&"static"==r(t).css("position");)t=t.offsetParent;return t})}},r.fn.detach=r.fn.remove,["width","height"].forEach(function(t){var n=t.replace(/./,function(t){return t[0].toUpperCase()});r.fn[t]=function(i){var o,s=this[0];return i===e?k(s)?s["inner"+n]:M(s)?s.documentElement["scroll"+n]:(o=this.offset())&&o[t]:this.each(function(e){s=r(this),s.css(t,Y(this,i,e,s[t]()))})}}),x.forEach(function(n,i){var o=i%2;r.fn[n]=function(){var n,a,s=r.map(arguments,function(t){var i=[];return n=$(t),"array"==n?(t.forEach(function(t){return t.nodeType!==e?i.push(t):r.zepto.isZ(t)?i=i.concat(t.get()):void(i=i.concat(N.fragment(t)))}),i):"object"==n||null==t?t:N.fragment(t)}),u=this.length>1;return s.length<1?this:this.each(function(e,n){a=o?n:n.parentNode,n=0==i?n.nextSibling:1==i?n.firstChild:2==i?n:null;var c=r.contains(f.documentElement,a);s.forEach(function(e){if(u)e=e.cloneNode(!0);else if(!a)return r(e).remove();a.insertBefore(e,n),c&&tt(e,function(e){if(!(null==e.nodeName||"SCRIPT"!==e.nodeName.toUpperCase()||e.type&&"text/javascript"!==e.type||e.src)){var n=e.ownerDocument?e.ownerDocument.defaultView:t;n.eval.call(n,e.innerHTML)}})})})},r.fn[o?n+"To":"insert"+(i?"Before":"After")]=function(t){return r(t)[n](this),this}}),N.Z.prototype=X.prototype=r.fn,N.uniq=P,N.deserializeValue=Q,r.zepto=N,r}();return t.Zepto=e,void 0===t.$&&(t.$=e),function(e){function h(t){return t._zid||(t._zid=n++)}function p(t,e,n,r){if(e=d(e),e.ns)var i=m(e.ns);return(a[h(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||i.test(t.ns))&&(!n||h(t.fn)===h(n))&&(!r||t.sel==r)})}function d(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function m(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function g(t,e){return t.del&&!f&&t.e in c||!!e}function v(t){return l[t]||f&&c[t]||t}function y(t,n,i,o,s,u,f){var c=h(t),p=a[c]||(a[c]=[]);n.split(/\s/).forEach(function(n){if("ready"==n)return e(document).ready(i);var a=d(n);a.fn=i,a.sel=s,a.e in l&&(i=function(t){var n=t.relatedTarget;return!n||n!==this&&!e.contains(this,n)?a.fn.apply(this,arguments):void 0}),a.del=u;var c=u||i;a.proxy=function(e){if(e=T(e),!e.isImmediatePropagationStopped()){e.data=o;var n=c.apply(t,e._args==r?[e]:[e].concat(e._args));return n===!1&&(e.preventDefault(),e.stopPropagation()),n}},a.i=p.length,p.push(a),"addEventListener"in t&&t.addEventListener(v(a.e),a.proxy,g(a,f))})}function x(t,e,n,r,i){var o=h(t);(e||"").split(/\s/).forEach(function(e){p(t,e,n,r).forEach(function(e){delete a[o][e.i],"removeEventListener"in t&&t.removeEventListener(v(e.e),e.proxy,g(e,i))})})}function T(t,n){return(n||!t.isDefaultPrevented)&&(n||(n=t),e.each(w,function(e,r){var i=n[e];t[e]=function(){return this[r]=b,i&&i.apply(n,arguments)},t[r]=E}),t.timeStamp||(t.timeStamp=Date.now()),(n.defaultPrevented!==r?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(t.isDefaultPrevented=b)),t}function S(t){var e,n={originalEvent:t};for(e in t)j.test(e)||t[e]===r||(n[e]=t[e]);return T(n,t)}var r,n=1,i=Array.prototype.slice,o=e.isFunction,s=function(t){return"string"==typeof t},a={},u={},f="onfocusin"in t,c={focus:"focusin",blur:"focusout"},l={mouseenter:"mouseover",mouseleave:"mouseout"};u.click=u.mousedown=u.mouseup=u.mousemove="MouseEvents",e.event={add:y,remove:x},e.proxy=function(t,n){var r=2 in arguments&&i.call(arguments,2);if(o(t)){var a=function(){return t.apply(n,r?r.concat(i.call(arguments)):arguments)};return a._zid=h(t),a}if(s(n))return r?(r.unshift(t[n],t),e.proxy.apply(null,r)):e.proxy(t[n],t);throw new TypeError("expected function")},e.fn.bind=function(t,e,n){return this.on(t,e,n)},e.fn.unbind=function(t,e){return this.off(t,e)},e.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var b=function(){return!0},E=function(){return!1},j=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,w={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(t,e,n){return this.on(e,t,n)},e.fn.undelegate=function(t,e,n){return this.off(e,t,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,a,u,f){var c,l,h=this;return t&&!s(t)?(e.each(t,function(t,e){h.on(t,n,a,e,f)}),h):(s(n)||o(u)||u===!1||(u=a,a=n,n=r),(u===r||a===!1)&&(u=a,a=r),u===!1&&(u=E),h.each(function(r,o){f&&(c=function(t){return x(o,t.type,u),u.apply(this,arguments)}),n&&(l=function(t){var r,s=e(t.target).closest(n,o).get(0);return s&&s!==o?(r=e.extend(S(t),{currentTarget:s,liveFired:o}),(c||u).apply(s,[r].concat(i.call(arguments,1)))):void 0}),y(o,t,u,a,n,l||c)}))},e.fn.off=function(t,n,i){var a=this;return t&&!s(t)?(e.each(t,function(t,e){a.off(t,n,e)}),a):(s(n)||o(i)||i===!1||(i=n,n=r),i===!1&&(i=E),a.each(function(){x(this,t,i,n)}))},e.fn.trigger=function(t,n){return t=s(t)||e.isPlainObject(t)?e.Event(t):T(t),t._args=n,this.each(function(){t.type in c&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):e(this).triggerHandler(t,n)})},e.fn.triggerHandler=function(t,n){var r,i;return this.each(function(o,a){r=S(s(t)?e.Event(t):t),r._args=n,r.target=a,e.each(p(a,t.type||t),function(t,e){return i=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),i},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return 0 in arguments?this.bind(t,e):this.trigger(t)}}),e.Event=function(t,e){s(t)||(e=t,t=e.type);var n=document.createEvent(u[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),T(n)}}(e),function(e){function p(t,n,r){var i=e.Event(n);return e(t).trigger(i,r),!i.isDefaultPrevented()}function d(t,e,n,i){return t.global?p(e||r,n,i):void 0}function m(t){t.global&&0===e.active++&&d(t,null,"ajaxStart")}function g(t){t.global&&!--e.active&&d(t,null,"ajaxStop")}function v(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||d(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void d(e,n,"ajaxSend",[t,e])}function y(t,e,n,r){var i=n.context,o="success";n.success.call(i,t,o,e),r&&r.resolveWith(i,[t,o,e]),d(n,i,"ajaxSuccess",[e,n,t]),b(o,e,n)}function x(t,e,n,r,i){var o=r.context;r.error.call(o,n,e,t),i&&i.rejectWith(o,[n,e,t]),d(r,o,"ajaxError",[n,r,t||e]),b(e,n,r)}function b(t,e,n){var r=n.context;n.complete.call(r,e,t),d(n,r,"ajaxComplete",[e,n]),g(n)}function E(t,e,n){if(n.dataFilter==j)return t;var r=n.context;return n.dataFilter.call(r,t,e)}function j(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==c?"html":t==f?"json":a.test(t)?"script":u.test(t)&&"xml")||"text"}function T(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function S(t){t.processData&&t.data&&"string"!=e.type(t.data)&&(t.data=e.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()&&"jsonp"!=t.dataType||(t.url=T(t.url,t.data),t.data=void 0)}function C(t,n,r,i){return e.isFunction(n)&&(i=r,r=n,n=void 0),e.isFunction(r)||(i=r,r=void 0),{url:t,data:n,success:r,dataType:i}}function O(t,n,r,i){var o,s=e.isArray(n),a=e.isPlainObject(n);e.each(n,function(n,u){o=e.type(u),i&&(n=r?i:i+"["+(a||"object"==o||"array"==o?n:"")+"]"),!i&&s?t.add(u.name,u.value):"array"==o||!r&&"object"==o?O(t,u,r,n):t.add(n,u)})}var i,o,n=+new Date,r=t.document,s=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,a=/^(?:text|application)\/javascript/i,u=/^(?:text|application)\/xml/i,f="application/json",c="text/html",l=/^\s*$/,h=r.createElement("a");h.href=t.location.href,e.active=0,e.ajaxJSONP=function(i,o){if(!("type"in i))return e.ajax(i);var c,p,s=i.jsonpCallback,a=(e.isFunction(s)?s():s)||"Zepto"+n++,u=r.createElement("script"),f=t[a],l=function(t){e(u).triggerHandler("error",t||"abort")},h={abort:l};return o&&o.promise(h),e(u).on("load error",function(n,r){clearTimeout(p),e(u).off().remove(),"error"!=n.type&&c?y(c[0],h,i,o):x(null,r||"error",h,i,o),t[a]=f,c&&e.isFunction(f)&&f(c[0]),f=c=void 0}),v(h,i)===!1?(l("abort"),h):(t[a]=function(){c=arguments},u.src=i.url.replace(/\?(.+)=\?/,"?$1="+a),r.head.appendChild(u),i.timeout>0&&(p=setTimeout(function(){l("timeout")},i.timeout)),h)},e.ajaxSettings={type:"GET",beforeSend:j,success:j,error:j,complete:j,context:null,global:!0,xhr:function(){return new t.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:f,xml:"application/xml, text/xml",html:c,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:j},e.ajax=function(n){var u,f,s=e.extend({},n||{}),a=e.Deferred&&e.Deferred();for(i in e.ajaxSettings)void 0===s[i]&&(s[i]=e.ajaxSettings[i]);m(s),s.crossDomain||(u=r.createElement("a"),u.href=s.url,u.href=u.href,s.crossDomain=h.protocol+"//"+h.host!=u.protocol+"//"+u.host),s.url||(s.url=t.location.toString()),(f=s.url.indexOf("#"))>-1&&(s.url=s.url.slice(0,f)),S(s);var c=s.dataType,p=/\?.+=\?/.test(s.url);if(p&&(c="jsonp"),s.cache!==!1&&(n&&n.cache===!0||"script"!=c&&"jsonp"!=c)||(s.url=T(s.url,"_="+Date.now())),"jsonp"==c)return p||(s.url=T(s.url,s.jsonp?s.jsonp+"=?":s.jsonp===!1?"":"callback=?")),e.ajaxJSONP(s,a);var P,d=s.accepts[c],g={},b=function(t,e){g[t.toLowerCase()]=[t,e]},C=/^([\w-]+:)\/\//.test(s.url)?RegExp.$1:t.location.protocol,N=s.xhr(),O=N.setRequestHeader;if(a&&a.promise(N),s.crossDomain||b("X-Requested-With","XMLHttpRequest"),b("Accept",d||"*/*"),(d=s.mimeType||d)&&(d.indexOf(",")>-1&&(d=d.split(",",2)[0]),N.overrideMimeType&&N.overrideMimeType(d)),(s.contentType||s.contentType!==!1&&s.data&&"GET"!=s.type.toUpperCase())&&b("Content-Type",s.contentType||"application/x-www-form-urlencoded"),s.headers)for(o in s.headers)b(o,s.headers[o]);if(N.setRequestHeader=b,N.onreadystatechange=function(){if(4==N.readyState){N.onreadystatechange=j,clearTimeout(P);var t,n=!1;if(N.status>=200&&N.status<300||304==N.status||0==N.status&&"file:"==C){if(c=c||w(s.mimeType||N.getResponseHeader("content-type")),"arraybuffer"==N.responseType||"blob"==N.responseType)t=N.response;else{t=N.responseText;try{t=E(t,c,s),"script"==c?(1,eval)(t):"xml"==c?t=N.responseXML:"json"==c&&(t=l.test(t)?null:e.parseJSON(t))}catch(r){n=r}if(n)return x(n,"parsererror",N,s,a)}y(t,N,s,a)}else x(N.statusText||null,N.status?"error":"abort",N,s,a)}},v(N,s)===!1)return N.abort(),x(null,"abort",N,s,a),N;var A="async"in s?s.async:!0;if(N.open(s.type,s.url,A,s.username,s.password),s.xhrFields)for(o in s.xhrFields)N[o]=s.xhrFields[o];for(o in g)O.apply(N,g[o]);return s.timeout>0&&(P=setTimeout(function(){N.onreadystatechange=j,N.abort(),x(null,"timeout",N,s,a)},s.timeout)),N.send(s.data?s.data:null),N},e.get=function(){return e.ajax(C.apply(null,arguments))},e.post=function(){var t=C.apply(null,arguments);return t.type="POST",e.ajax(t)},e.getJSON=function(){var t=C.apply(null,arguments);return t.dataType="json",e.ajax(t)},e.fn.load=function(t,n,r){if(!this.length)return this;var a,i=this,o=t.split(/\s/),u=C(t,n,r),f=u.success;return o.length>1&&(u.url=o[0],a=o[1]),u.success=function(t){i.html(a?e("<div>").html(t.replace(s,"")).find(a):t),f&&f.apply(i,arguments)},e.ajax(u),this};var N=encodeURIComponent;e.param=function(t,n){var r=[];return r.add=function(t,n){e.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(N(t)+"="+N(n))},O(r,t,n),r.join("&").replace(/%20/g,"+")}}(e),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){return t.forEach?t.forEach(i):void r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(e),function(){try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;t.getComputedStyle=function(t,e){try{return n(t,e)}catch(r){return null}}}}(),e});

  var $ = Zepto || window.Zepto || window.jQuery || window.$;

  /**
   * Utils
   */
  function addStyle(styles) {
    var css = document.createElement('style');
    css.type = 'text/css';
    if (css.styleSheet) css.styleSheet.cssText = styles;
    // Support for IE
    else css.appendChild(document.createTextNode(styles)); // Support for the rest
    document.getElementsByTagName('head')[0].appendChild(css);
  }

  function parseOneUrl(link, title) {
    var oLink = link.trim().split(/[\s@]+/);

    var url = oLink.pop();

    if (title) {
      url = url.replace('**', title);
    }

    var urlName =
      oLink.length > 0
        ? oLink.join(' ')
        : url
            .match(/\/\/(.+\.)?([^\/]+)\.\w+\//)[2]
            .replace(/^(\w)/, function(v) {
              return v.toUpperCase();
            });
    return [url, urlName];
  }

  function insertVipSource(selector, position = 'after') {
    addStyle(`
.One-vip-panel {
  display: flex;
  justify-content: space-between;
  padding: 10px 10px 0;
}

.One-vip-title {
  padding: .5em;
  font-weight: bold;
  color: #257942;
}

.One-vip-sign {
  padding: .5em;
  opacity: .25;
}

.One-vip-list {
  padding: .5em;
  letter-spacing: 1px;
}

.One-vip-list .One-vip-item {
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  padding: .5em .75em .5em .75em;
  justify-content: center;
  white-space: nowrap;
  background-color: #eef6fc;
  color: #1d72aa;
  margin: 4px;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.25;
  font-weight: 600;
  text-decoration: none;
}
`);

    $(selector).eq(0)[position](`
<div class="One-vip-panel">
<div class="One-vip-title">VIP 解析</div>
<div class="One-vip-sign">(o˘◡˘o)</div>
</div>
<div class="One-vip-list">
${VIP_URLS.map(function(link) {
  var [url, urlName] = parseOneUrl(link);
  return (
    '<a class="One-vip-item" href="' +
    (url + location.href) +
    '">' +
    urlName +
    '</a>'
  );
}).join('\n')}
</div>
</div>
`);
  }

  if (Is(/url=http/)) {
    // VIP 视频解析
    if (Is(/\.nxflv\.com/)) {
      log('VIP解析 nxflv.com');

      addStyle(`
      body > div:last-child {
        display: none !important;
        visibility: hidden !important;
        position: absolute !important;
        left: -9999px !important;
      }
      `);

      $(function() {
        var adTask;
        var count = 0;

        adTask = setInterval(function() {
          $('body > div:last-child').each(function(i, el) {
            if (
              $(el).attr('class') &&
              $(el).attr('class') == $(el).attr('id')
            ) {
              $(el).remove();
              log('Remove ad success!');
            }
          });

          if (count++ > 20) {
            clearInterval(adTask);
          }
        }, 200);
      });
    }
  } else if (
    Is(/m\.douban\.com\/search\/\?.*type=movie|search\.douban\.com\/movie\//)
  ) {
    log('豆瓣·电影·搜索');

    // TODO 搜索结果唯一时，自动跳转

    if (!Is(/m\.douban\.com\//)) {
      /**
       * PC端
       */
      addStyle(`
#dale_movie_subject_search_bottom,
#dale_movie_subject_search_top_right,
#dale_movie_subject_top_right,
#dale_movie_subject_bottom_super_banner,
#dale_movie_subject_middle_right {
  display: none !important;
  visibility: hidden !important;
  position: absolute !important;
  left: -9999px !important;
}

.One-sources {
  padding-left: 1em;
}

.One-sources a {
  display: inline-flex !important;
  align-items: center;
  border-radius: 4px;
  font-size: .75rem;
  height: 2em;
  justify-content: center;
  line-height: 1.5;
  padding-left: .75em;
  padding-right: .75em;
  white-space: nowrap;
  background-color: #effaf3;
  color: #257942;
  margin-top: .5em;
  margin-right: .5em;
}
`);

      $('#icp').html('(o˘◡˘o)');
      $('.gemzcp').each(function(i, el) {
        var title = $('.title', el).text();

        $(el).append(`<p class="One-sources">
${DOUBAN_SOURCES.map(function(S) {
  var [url, urlName] = parseOneUrl(S);
  return '<a href="' + url.replace('**', title) + '">' + urlName + '</a>';
}).join('\n')}
</p>`);
      });

      return;
    }

    addStyle(`
#TalionNav,
.search-results-modules-name {
  display: none !important;
  visibility: hidden !important;
  position: absolute !important;
  left: -9999px !important;
}

.search-module {
  margin-top: 0;
}

.search-results img {
  width: 80px;
}

.search-results {
  padding-bottom: 10px;
}

.search-results li a {
  display: flex;
  align-items: center;
}

.search-results img {
  height: 100%;
  padding: 0;
  border: 2px solid;
  border-image: linear-gradient(to bottom, #2b68c4 0%,#cf2d6e 100%)1;
}

.One-sources {
  padding-left: 1em;
}

.One-sources a {
  display: inline-flex !important;
  align-items: center;
  border-radius: 4px;
  font-size: .75rem;
  height: 2em;
  justify-content: center;
  line-height: 1.5;
  padding-left: .75em;
  padding-right: .75em;
  white-space: nowrap;
  background-color: #effaf3;
  color: #257942;
  margin-top: .5em;
  margin-right: .5em;
}
`);

    $('#more-search').append('    (o˘◡˘o)');

    $('.subject-info').each(function(i, el) {
      var title = $('.subject-title', el).text();

      $(el).append(`<p class="One-sources">
${DOUBAN_SOURCES.map(function(S) {
  var [url, urlName] = parseOneUrl(S);
  return '<a href="' + url.replace('**', title) + '">' + urlName + '</a>';
}).join('\n')}
</p>`);
    });
  } else if (
    Is(/m\.douban\.com\/movie\/subject\/|movie\.douban\.com\/subject\//)
  ) {
    log('豆瓣·电影·详情');

    if (!Is(/m\.douban\.com\//)) {
      /**
       * PC端
       */

      addStyle(`
#dale_movie_subject_search_bottom,
#dale_movie_subject_search_top_right,
#dale_movie_subject_top_right,
#dale_movie_subject_bottom_super_banner,
#dale_movie_subject_middle_right {
  display: none !important;
  visibility: hidden !important;
  position: absolute !important;
  left: -9999px !important;
}
`);

      $('#icp').html('(o˘◡˘o)');

      var title = $('title')
        .text()
        .replace('(豆瓣)', '')
        .trim();

      $('#info').append(
        `
<span class="pl">在线观看：</span>
<span>
${DOUBAN_SOURCES.map(function(link) {
  var [url, urlName] = parseOneUrl(link, title);
  return '<span><a href="' + url + '">' + urlName + '</a>';
}).join(' / </span>')}
</span></span><br>
`
      );

      return;
    }

    addStyle(`
.score-write,
a[href*='to_app'],
a[href*='doubanapp'],
section + .center,
.bottom_ad_download,
.sub-vendor,
.to_pc,
.TalionNav-static,
.sub-detail .mark-movie,
.sub-detail .mark-tv,
.subject-banner,
.bottom_ad_download,
.cover-count {
  display: none !important;
  visibility: hidden !important;
  position: absolute !important;
  left: -9999px !important;
}

.sub-info .sub-cover {
  display: block !important;
}

.TalionNav-primary {
  position: relative !important;
}

.subject-comments,
.subject-reviews {
  margin-bottom: 0 !important;
}

.TalionNav .TalionNav-primary .search-box {
  width: 230px;
  flex: 230px 0 0;
  animation: none;
}

.sub-original-title {
  padding: 0.25em 0;
}

._V_sign {
  font-size: 0.85em;
  opacity: 0.25;
  text-align: center;
  padding-bottom: 1em;
}

._V_source, .sub-score + .sub-score {
  margin-top: 1.5em;
  color: #fff;
}

._V_source .sub-score .sub-content {
  display: block;
}

._V_source .sub-score a {
  padding: .25em .5em;
  line-height: 1.5;
  margin: 0 .15em;
  border: 1px solid rgba(255,255,255,0.2);
  font-size: 1.05em;
  font-weight: bold;
  letter-spacing: 1px;
  margin-top: .5em;
  display: inline-block;
  color: #fbb632;
  background: rgba(239, 238, 238, 0.05);
  border-radius: 4px;
}

#TalionNav {
  display: none;
}

#TalionNav .logo {
  background: none;
  font-size: 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #dee2e6;
}

.search-box:not(.on-search) {
  opacity: 0.5;
}

#channel_tags {
  margin-bottom: 10px;
}

.subject-header-wrap .sub-detail {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
`);

    $(function() {
      var title = $('.sub-title')
        .text()
        .trim();

      $('.sub-cover').attr('href', '#');
      $('#subject-honor-root a').attr('href', '#');

      $('.movie-reviews .show-all').after(
        '<div class="_V_sign">豆瓣·改 (o˘◡˘o)</div>'
      );

      $('section + .center').each(function(i, el) {
        $(el).remove();
      });

      $('.subject-header-wrap').after($('#TalionNav'));

      $('#TalionNav').css('display', 'block');

      $('#TalionNav .logo').html(
        decodeURIComponent('(o%CB%98%E2%97%A1%CB%98o)')
      );

      $('.search-box').remove();
      $('.TalionNav-primary .logo').after(
        '<div class="search-box"><input class="search-input" type="search" placeholder="搜索"></div>'
      );

      $('.search-input')
        .on('focus', function() {
          $(this)
            .parent()
            .addClass('on-search');
        })
        .on('blur', function() {
          $(this)
            .parent()
            .removeClass('on-search');
        });

      $('.search-input').on('keyup', function(e) {
        if (e.keyCode === 13) {
          e.preventDefault();
          location.href = '/search/?query=' + e.target.value + '&type=movie';
        }
      });

      $('.subject-header-wrap').append(
        `<div class="_V_source subject-mark">

<div class="sub-score">
  <div class="sub-trademark">
  在线观看
  </div>
  <div class="sub-content">
${DOUBAN_SOURCES.map(function(link) {
  var [url, urlName] = parseOneUrl(link, title);
  return '<a href="' + url + '">' + urlName + '</a>';
}).join('\n')}
  </div>
</div>

</div>`
      );

      function rgbToHex(rgb) {
        var color = rgb.toString().match(/\d+/g);
        if (color.length != 3) return rgb;

        var hex = '#';

        for (var i = 0; i < 3; i++) {
          hex += ('0' + Number(color[i]).toString(16)).slice(-2);
        }
        return hex;
      }

      function syncAppColor() {
        var style = $('#subject-header-container').attr('style');

        if (!style) {
          setTimeout(function() {
            syncAppColor();
          }, 100);
        } else {
          var mainColor = style.match(/:\s*([^;]+);?/)[1];
          try {
            window.fy_bridge_app.setAppBarColor(rgbToHex(mainColor));
          } catch (error) {
            console.error('setAppBarColor:', error);
          }
        }
      }

      if (isFY) {
        syncAppColor();
      }

      setTimeout(function() {
        $('.subject-intro .bd p').click();
      }, 1000);
    });
  } else if (Is(/m\.v\.qq\.com\/search\.html/)) {
    log('腾讯·搜索');

    addStyle(`
.tvp_app_bar {
  display: none !important;
  visibility: hidden !important;
  position: absolute !important;
  left: -9999px !important;
}
`);
    $('.copyright').html('(o˘◡˘o)');
  } else if (Is(/v\.qq\.com\/(cover|play|x\/cover|x\/page)/)) {
    log('腾讯·详情');

    addStyle(`
.mod_source,
.video_function,
.mod_promotion,
#vip_privilege,
#vip_activity,
.U_bg_b,
.btn_open_v,
.btn_openapp,
#vip_header,
.btn_user_hd {
  display: none !important;
  visibility: hidden !important;
  position: absolute !important;
  left: -9999px !important;
}

#vip_title {
  padding-bottom: 0;
}

.mod_episodes_numbers.is-vip .item {
  width: auto;
  padding: 0 1em;
}

.U_html_bg .container {
  padding-bottom: 30px;
}
`);
    $(function() {
      insertVipSource('#vip_title, .U_box_bg_a, .player_headline');
    });
  } else if (Is(/m\.iqiyi\.com\/search\.html/)) {
    log('爱奇艺·搜索');

    addStyle(`
.btn-ticket,
.btn-yuyue,
.btn-download,
.m-iqyDown {
  display: none !important;
  visibility: hidden !important;
  position: absolute !important;
  left: -9999px !important;
}
`);
    $('.m-footer').html('(o˘◡˘o)');
  } else if (Is(/\.iqiyi\.com\/(a_|v_|w_|adv)/)) {
    log('爱奇艺·详情');

    addStyle(`
.m-iqyDown,
.header-login + div,
.m-video-action,
div[name="m-vipRights"],
div[name="m-extendBar"],
.m-iqylink-diversion,
.m-iqylink-guide,
.c-openVip,
.c-score-btn,
.m-videoUser-spacing,
.m-pp-entrance {
  display: none !important;
  visibility: hidden !important;
  position: absolute !important;
  left: -9999px !important;
}

.page_play {
  padding-bottom: 0;
}

div[name="m-videoInfo"] {
  padding-top: 1em;
}

.m-box-items .one-album-item {
  border-radius: .05rem;
  background-color: #e9ecef;
  color: #495057;
  padding: .5em 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: .25em;
  font-weight: bold;
}
`);
    $(function() {
      $('.m-footer').html('(o˘◡˘o)');

      insertVipSource('div[name="m-videoInfo"], #block-C');
    });
  } else if (Is(/m\.youku\.com\/a|m\.youku\.com\/v|v\.youku\.com\/v_/)) {
    log('优酷·详情');

    addStyle(`
.h5-detail-guide,
.h5-detail-ad,
.brief-btm,
.smartBannerBtn,
.cmt-user-action {
  display: none !important;
  visibility: hidden !important;
  position: absolute !important;
  left: -9999px !important;
}
`);
    $(function() {
      $('.copyright').html('(o˘◡˘o)');

      insertVipSource('.h5-detail-info, #bpmodule-playpage-lefttitle');
    });
  } else if (Is(/\.mgtv\.com\/b\//)) {
    log('芒果TV·详情');

    addStyle(`
.ad-banner,
.video-area-bar,
.video-error .btn,
.m-vip-list,
.m-vip-list + div:not([class]),
.toapp,
.video-comment .ft,
.mg-app-swip {
  display: none !important;
  visibility: hidden !important;
  position: absolute !important;
  left: -9999px !important;
}
`);
    $(function() {
      $('.mg-footer-copyright').html('(o˘◡˘o)');

      insertVipSource('.xuanji', 'before');
      insertVipSource('.v-panel-v5');
    });
  } else if (Is(/m\.tv\.sohu\.com\/phone_play_film/)) {
    return (location.href = href.replace(
      'phone_play_film',
      `v${href.match(/vid=(\d+)/)[1]}.shtml`
    ));
  } else if (Is(/film\.sohu\.com\/album\/|tv\.sohu\.com\/v/)) {
    log('搜狐视频·详情');

    addStyle(`
.actv-banner,
.btn-xz-app,
.twinfo_iconwrap,
.btn-comment-app,
#ad_banner,
.advertise,
.main-ad-view-box,
.foot.sohu-swiper,
.app-star-vbox,
.app-guess-vbox,
.main-rec-view-box,
.app-qianfan-box,
.comment-empty-bg,
.copyinfo,
.ph-vbox {
  display: none !important;
  visibility: hidden !important;
  position: absolute !important;
  left: -9999px !important;
}

.comment-empty-txt {
  margin-bottom: 0;
}

.app-view-box + footer {
  padding: 0;
  opacity: 0.5;
}
`);
    $(function() {
      $('.links').html('(o˘◡˘o)');

      insertVipSource('.title-wrap, .videoInfo');
    });
  } else if (Is(/\.le\.com\/(ptv\/vplay\/|vplay_)/)) {
    log('乐视·详情');

    addStyle(`
.full_gdt_bits,
.gamePromotion,
.gamePromotionTxt,
#j-leappMore,
.lbzDaoliu,
.up-letv,
.le_briefIntro .Banner_01,
.video_block > .col_6 > [id],
.arkBox {
  display: none !important;
  visibility: hidden !important;
  position: absolute !important;
  left: -9999px !important;
}
`);
    $(function() {
      insertVipSource('.introduction_box, .le_briefIntro');
    });
  }
})();
