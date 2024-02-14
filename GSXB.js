[rewrite_local]
^https?:\/\/api\.shijianshubao\.com.*?.*? url script-response-body https://raw.githubusercontent.com/X10001G/Hello/main/GSXB.js


[mitm]
hostname = api.shijianshubao.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/isFree\":false/g,'isFree":true');
body = body.replace(/avatar\":null/g,'avatar":true');
body = body.replace(/vipEndTimestamp\":\d+/g,'vipEndTimestamp":3705800919000');
$done(body);
