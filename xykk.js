/******************************
⚠️如果放远程，请把xykk.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:小樱看看➕Melody_53098有售后保障
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^http?:\/\/api\.pollykann\.com.*?|https?:\/\/buy\.itunes\.apple\.com.*?.*? url script-response-body xykk.js


[mitm]
hostname = api.pollykann.com,buy.itunes.apple.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/"avatar\":null/g,'"avatar":"pro"');
body = body.replace(/"pollykannVipState\":null/g,'"pollykannVipState":true');
body = body.replace(/tingleeVipState\":null/g,'tingleeVipState":true');
body = body.replace(/"freeForVip\":false/g,'"freeForVip":true');
body = body.replace(/isPurchased\":false/g,'isPurchased":true');
body = body.replace(/app_item_id\":\d+/g,'app_item_id":6450832499');
body = body.replace(/in_app\":[]/g,'in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1705501038000",
        "expires_date" : "2099-09-09 14:17:18 Etc/GMT",
        "expires_date_pst" : "2099-09-09 06:17:18 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "320001692332200",
        "is_trial_period" : "false",
        "original_transaction_id" : "320001692332200",
        "purchase_date" : "2024-01-17 14:17:18 Etc/GMT",
        "product_id" : "vip.forever.pollykann",
        "original_purchase_date_pst" : "2024-01-17 06:17:21 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1705501041000",
        "web_order_line_item_id" : "320000788106651",
        "expires_date_ms" : "4092595200000",
        "purchase_date_pst" : "2024-01-17 06:17:18 America/Los_Angeles",
        "original_purchase_date" : "2024-01-17 14:17:21 Etc/GMT"
      }
    ]');
body = body.replace(/adam_id\":\d+/g,'adam_id":6450832499');
$done(body);
