/*
来音智能陪练

[rewrite_local]

^https:\/\/partner-ai-api\.quthing\.com\/(ai\/vip\/state|student\/info\/h5) url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/Laiyin.js

[mitm]
hostname = partner-ai-api.quthing.com
*/
var body = $response.body;
var url = $request.url;
//会员
if (url.indexOf('vip/state') != -1) {
    var obj = JSON.parse(body);
    obj.data.seniorVip = true;
    obj.data.showText = "2099.09.09到期";
    obj.data.validVip = true;
    obj.data.expireTime = 4092595200000;
    obj.data.vipCount = 205889;
    obj.data.lastBuySkuName = "partnertrainingai_yaer_vip";
    body = JSON.stringify(obj);
} else if (url.indexOf('student/info/h5') != -1) {
    var obj = JSON.parse(body);
    obj.data.vipInfo.seniorVip = true;
    obj.data.vipInfo.showText = "2099.09.09到期";
    obj.data.vipInfo.validVip = true;
    obj.data.vipInfo.expireTime = 4092595200000;
    obj.data.vipInfo.vipCount = 205889;
    obj.data.vipInfo.lastBuySkuName = "partnertrainingai_yaer_vip";
    body = JSON.stringify(obj);

}
$done({ body });
