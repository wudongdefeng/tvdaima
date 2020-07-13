// ==UserScript==
// @name         Bilibili Video Downloader
// @name:zh-TW   哔哩哔哩视频下载器
// @name:zh-CN   哔哩哔哩视频下载器
// @namespace    https://www.socheap.store
// @version      0.1.2
// @description  Provide a button to download the video!
// @description:zh-TW  在视频下方提供一个按钮，可下载视频！
// @description:zh-CN  在视频下方提供一个按钮，可下载视频！
// @author       xsyhnb
// @match        https://www.bilibili.com/*
// @grant        GM_xmlhttpRequest
//@connect       xbeibeix.com
// @require      http://cdn.bootcss.com/jquery/1.8.3/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    var localurl = location.href;
    var aid=''
    function geturl(){
        var data = __INITIAL_STATE__.videoData||false
    if(data){
        if(aid!==data.aid){
        aid = data.aid;
        var cid = data.cid;
        console.log('aid:',aid,'cid:',cid)
        var url = 'https://www.xbeibeix.com/api/bilibiliapi.php?url=https://www.bilibili.com/&aid='+aid+'&cid='+cid;
        GM_xmlhttpRequest({url:url,method:'get',onload:function(res){
            var result = JSON.parse(res.responseText);
            //console.log(result)
            $('#dltext').remove();var abtn = '<span id="dltext"><a style="background: red;color: white; padding: 5px;" target="_blank" href="'+result.url+'">'+result.hd+'</a></span>';$('#download').append(abtn);
        }})
    }else{setTimeout(geturl,500)}}}
    function addbtn(){
        $('#download').remove();
        var ele1 =  $('div.ops').children()[0].innerText;
        if(ele1!=='--'){$('div#arc_toolbar_report').before('<div id="download" style="padding:5px;">下載地址：<span id="dltext" style="color:red;">正在獲取下載地址</span></div>');geturl();}else{ setTimeout(addbtn,500)}
        //console.log(ele1);
    }
    function addbagumi(){
        $('#download').remove();
        var txt = $('.coin-info').children()[1].innerText;
        if(txt!=='--'){$('.media-wrapper').before('<div id="download" style="padding:5px;">下载地址：<span id="dltext" style="color:red;">暂不支持该类视频！</span></div>')}
        else{setTimeout(addbagumi,500)}
    }
    function isbangumi(){if(localurl.search('bangumi')!==-1){return true}else{return false}};
    function isvideo(){if(localurl.search('video')!==-1){return true}else{return false}};
    function addele(){
        try{
            if(typeof(__INITIAL_STATE__.recommendList)!=='undefined'){
                var num  = Math.round(Math.random()*6);
                //console.log('ok')
                num = 1;
                __INITIAL_STATE__.recommendList[num].bvid='BV1E54y1X7UP'
                __INITIAL_STATE__.recommendList[num].pic='http://i1.hdslb.com/bfs/archive/359a38ec00565509c14a59d33dbfa0b06684bba7.jpg'
                __INITIAL_STATE__.recommendList[num].title='油猴教你如何网购省钱'
                __INITIAL_STATE__.recommendList[num].owner.name='Xsyhnb'
        }
        }catch(e){console.log(e)}

    }
    if(isbangumi()){addbagumi();}
    if(isvideo()){addbtn();}
    function refresh(){
    if(localurl!==location.href){
        localurl=location.href;
        addele();
        if(isbangumi()){addbagumi();}
        if(isvideo()){
            addbtn();
            
        }
    }
    }
    setInterval(refresh,500);
    //addele();

})();