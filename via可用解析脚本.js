/*视频解析*/
function createSelect(t) {
    var e = document.createElement("ul");
    e.id = "myul",
    e.setAttribute("style", "display:none;background:#fff;box-shadow:0px 1px 10px rgba(0,0,0,0.3);margin:0;padding:0 4.2vw;position:fixed;bottom:28vh;right:15vw;z-index:99999;height:66vh;overflow:scroll;border-radius:5vw;");
    for (var o = 0; o < t.length; o++) {
        var i = document.createElement("li");
        i.setAttribute("style", "margin:0;padding:0;display:block;list-style:none;font-size:3.8vw;width:28vw;text-align:left;line-height:10vw;letter-spacing:0;border-bottom:1px solid #87cefa;position:relative;overflow:hidden;text-overflow:hidden;white-space:nowrap;"),
        function(e) {
            i.onclick = function() {
                window.open(t[e].url + location.href, "_blank")
            },
            i.ontouchstart = function() {
                this.style.cssText += "color:yellow;background:#800000;border-radius:1.26vw;"
            },
            i.ontouchend = function() {
                this.style.cssText += "color:black;background:transparent;border-radius:0;"
            }
        } (o),
        i.innerHTML = t[o].name,
        e.appendChild(i)
    }
    document.body.appendChild(e)
}
function createMenu() {
    var t = document.createElement("div");
    t.id = "myBtn",
    t.innerHTML = "🤔",
    t.setAttribute("style", "width:12vw;height:12vw;position:fixed;bottom:18vh;right:10vw;z-index:100000;border-radius:100%;text-align:center;line-height:12vw;box-shadow:0px 1px 10px rgba(0,0,0,0.3);font-size:4.5vw;background:#fff;"),
    t.onclick = function() {
        var t = document.getElementById("myul");
        "none" == t.style.display ? (t.style.display = "block", this.style.transform = "rotateZ(45deg)") : (t.style.display = "none", this.style.transform = "rotateZ(0deg)")
    },
    document.body.appendChild(t)
}
apis = [
    {"name":"狸猫云解析","url":"http://111jx.xyz/?url="},
    {"name":"128sp解析","url":"https://jx.128sp.com/jxjx/?url="},
    {"name":"vipshares","url":"http://jx.vipshares.xyz/index1.php?url="},
    {"name":"搜你妹","url":"http://www.sonimei.cn/?url="},
    {"name":"爱解析","url":"http://jx.wfxzzx.cn/?url="},
    {"name":"乐乐解析","url":"https://660e.com/m3u8-dp.php?url="},
    {"name":"771解析","url":"http://vip.qi71.cn/?url="},
    {"name":"科技解析","url":"http://ka61b.cn/jx.php?url="},
    {"name":"超能解析","url":"http://jiexi.44cn.net/vipjx/?url="},
    {"name":"44云线路","url":"http://jiexi.44cn.net/byg/index.php?url="},
    {"name":"bt接口","url":"https://www.kkflv.com/index.php?url="},
    {"name":"dy接口","url":"https://jx.dy-jx.com/?url="},
    {"name":"快视宝3号解析","url":"http://jx.q73w.cn/jx03/?url="},
    {"name":"快视宝4号解析","url":"http://jx.q73w.cn/jx04/?url="},
    {"name":"快视宝5号解析","url":"http://jx.q73w.cn/jx05/?url="},
    {"name":"快视宝6号解析","url":"http://jx.q73w.cn/jx06/?url="},
    {"name":"快视宝7号解析","url":"http://jx.q73w.cn/jx07/?url="},
    {"name":"花语有你","url":"http://api.huahuay.com/?url="},
    {"name":"XYZ视频解析（二次）","url":"http://vipjx.pyhj.net/?url="},
    {"name":"一个五解析","url":"https://jx.yg5.net/Svip/?v="},
    {"name":"360dy解析","url":"http://yun.360dy.wang/jx.php?url="},
    {"name":"智能云解析","url":"http://api2.club/index.php?url="},
    {"name":"m1907解析","url":"http://api2.club/index.php?url="},
    {"name":"冰河解析","url":"http://jiexi.duzhiqiang.com/?url="},
    {"name":"修瑶解析","url":"http://api.xiuyao.me/jx/?url="},
    {"name":"920解析","url":"http://api.tv920.com/vip/?url="},
    {"name":"紫云智能","url":"http://api.smq1.com/?url="},
    {"name":"百度oos解析","url":"http://app.baiduoos.cn:2019/vip/?url="},
    {"name":"VIP免费解析","url":"https://jx.hezeshi.net/ce/jlexi.php?url="},
    {"name":"yangju解析","url":"https://cdn.yangju.vip/k/?url="},
    {"name":"1616解析","url":"https://www.1616jx.com/jx/api.php?url="},
    {"name":"MyXin解析","url":"https://www.myxin.top/jx/api/?url="},
    {"name":"大亨解析","url":"http://jx.cesms.cn/?url="},
    {"name":"免费通用","url":"http://jx.598110.com/?url="},
    {"name":"7usp解析","url":"https://www.7usp.com/mfjx/?url="},
    {"name":"aldsw解析","url":"http://jx.aldsw.cn/jx/index.php?url="},
    {"name":"久久云解析","url":"http://jx.99yyw.com/api/?url="},
    {"name":"三岁解析","url":"http://sc.sansuib.cn/?url="},
    {"name":"芽芽智能","url":"http://jx.yayaol.xyz/?url="},
    {"name":"军军影视","url":"http://jx.jjvipw.cn/?url="},
    {"name":"解析接口","url":"https://www.myxin.top/jx/api/?url="},
    {"name":"A.xin解析","url":"http://tv.cuione.cn/?url="},
    {"name":"万能解析","url":"http://api.lkdmkj.com/jx/jx00/index.php?url="},
    {"name":"免VIP智能","url":"https://v.mvipsp.top/?v="},
    {"name":"瑞特解析","url":"http://jx.0421v.pw/index.php?url="},
    {"name":"黑云解析","url":"http://jx.daheiyun.com/?url="},
    {"name":"青山解析","url":"http://api.cypay.me/?v="},
    {"name":"柠檬解析","url":"http://jx.0len.cn/?url="},
    {"name":"初心解析","url":"http://jx.bwcxy.com/?v="},
    {"name":"初见解析","url":"http://xiaojx.two3.cn/jx/?url="},
    {"name":"黑米解析","url":"https://www.heimijx.com/jx/api/?url="},
    {"name":"飞鸟云播","url":"http://jx.ledboke.com/?url="},
    {"name":"傻猫解析","url":"http://www.sillycat.xyz/jx/?url="},
    {"name":"517解析","url":"http://cn.bjbanshan.cn/jiexi.php?url="},
    {"name":"Beaacc","url":"https://beaacc.com/api.php?url="},
    {"name":"我爱解析","url":"http://jx.52a.ink/?url="},
    {"name":"范特尔","url":"http://jx.79it.cn/?url="},
    {"name":"OK解析","url":"http://okjx.cc/?url="},
    {"name":"糖果解析","url":"https://www.tg321.cn/jx/?url="},
    {"name":"雨见解析","url":"http://vip.55cc.top/wabi/yujianweb.php?url="},
    {"name":"全民解析1","url":"http://jx.598110.com/index.php?url="},
    {"name":"全民解析2","url":"http://jx.598110.com/duo/index.php?url="},
    {"name":"全名解析3","url":"http://jx.598110.com/zuida.php?url="},
    {"name":"平民解析4","url":"https://apis.tianxianle.com/youku/?id="},
    {"name":"新决起","url":"http://api.zuilingxian.com/jiexi.php?url="},
    {"name":"yun Parse1","url":"http://jx.api.163ren.com/vod.php?url="},
    {"name":"yun Parse2","url":"http://api.jx.bugxx.com/cfee/vod.php?url="},
    {"name":"17K云","url":"http://17kyun.com/api.php?url="},
    {"name":"高端解析","url":"http://api.51ckm.com/jx.php?url="},
    {"name":"高端解析1","url":"http://api.hlglwl.com/jx.php?url="},
    {"name":"无广告","url":"http://jx1.00vb.com/?url="},
    {"name":"vip免费","url":"http://jx.0len.cn/?url="},
    {"name":"vip多线路","url":"http://api.ledboke.com/vip/?url="},
    {"name":"ovov解析","url":"http://jx.ovov.cc/?url="},
    {"name":"Duplay解析","url":"http://jx.du2.cc/?url="},
    {"name":"VIP解析","url":"http://api.kq1f.cn/vip/index.php?url="},
    {"name":"M3U8解析","url":"http://vip.fxw.la/m3u8/index.php?url="},
    {"name":"AT520解析","url":"http://at520.cn/jx/?url="},
    {"name":"乐看解析","url":"http://jx.anlehe.com/?url="},
    {"name":"巢云","url":"http://www.dgua.xyz/webcloud/?url="},
    {"name":"酷博","url":"http://jx.x-99.cn/api.php?id="},
    {"name":"金桥解析","url":"http://jqaaa.com/jx.php?url="},
    {"name":"雪狐影视","url":"http://vip.gzzza.com/vip.php?url="},
    {"name":"石头云","url":"http://jiexi.071811.cc/jx.php?url="},
    {"name":"那片","url":"http://api.nepian.com/ckparse/?url="},
    {"name":"1717云","url":"http://www.1717yun.com/jx/ty.php?url="},
    {"name":"牛巴巴","url":"http://mv.688ing.com/player?url="},
    {"name":"爱看解析","url":"http://aikan-tv.com/?url="},
    {"name":"FlvPS解析","url":"https://api.flvsp.com/?url="},
    {"name":"速度牛","url":"http://api.wlzhan.com/sudu/?url="},
    {"name":"88wx解析","url":"http://vip.jlsprh.com/index.php?url="},
    {"name":"ODFLV解析","url":"https://yun.odflv.com/?url="},
    {"name":"030E解析","url":"https://030e.com/0302/?url="},
    {"name":"660e解析","url":"https://660e.com/?url="},
    {"name":"云播放","url":"https://y.mt2t.com/lines?url="},
    {"name":"8090解析","url":"https://www.8090g.cn/?url="},
    {"name":"WoCao解析","url":"https://www.wocao.xyz/index.php?url="},
    {"name":"ccav5解析","url":"http://ccav5.ml/m/jx.html?url="},
    {"name":"思古解析","url":"https://api.sigujx.com/?url="},
    {"name":"神马解析","url":"http://baidukan.top/jx.php?url="},
    {"name":"FreeGet解析","url":"http://www.freeget.org/jx.php?url="}]; 
(location.href.match(".iqiyi.com") ||
 location.href.match(".youku.com") ||
 location.href.match(".le.com") ||
 location.href.match(".letv.com") ||
 location.href.match("v.qq.com") ||
 location.href.match(".tudou.com") ||
 location.href.match(".mgtv.com") ||
 location.href.match("film.sohu.com") ||
 location.href.match("tv.sohu.com") ||
 location.href.match(".acfun.cn") ||
 location.href.match(".bilibili.com") ||
 location.href.match(".pptv.com") ||
 location.href.match("vip.1905.com") ||
 location.href.match(".yinyuetai.com") ||
 location.href.match(".fun.tv") ||
 location.href.match(".56.com") ||
 location.href.match(".wasu.cn")) 
 && (createMenu(), createSelect(apis));