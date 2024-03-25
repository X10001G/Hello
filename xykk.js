[rewrite_local]
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/X10001G/Hello/main/xykk.js


[mitm]
hostname = api.pollykann.com
var objc = JSON.parse($response.body);

objc = {
"status" : 0,
"receipt" : {
"receipt_type" : "Production",
"app_item_id" : 1532875441,
"receipt_creation_date" : "2023-09-09 16:06:26 Etc/GMT",
"bundle_id" : "com.pollykann.app",
"original_purchase_date" : "2023-09-09 16:00:00 Etc/GMT",
"in_app" : [
{
"quantity" : "1",
"purchase_date_ms" : "1694250549000",
"expires_date" : "2099-09-09 09:09:09 Etc/GMT",
"expires_date_pst" : "2099-09-09 06:06:06 America/Los_Angeles",
"is_in_intro_offer_period" : "false",
"transaction_id" : "490001314520000",
"is_trial_period" : "false",
"original_transaction_id" : "490001314520000",
"purchase_date" : "2023-09-09 09:09:09 Etc/GMT",
"product_id" : "vip.forever.pollykann",
"original_purchase_date_pst" : "2023-09-09 02:09:10 America/Los_Angeles",
"in_app_ownership_type" : "PURCHASED",
"original_purchase_date_ms" : "1694250550000",
"web_order_line_item_id" : "490000123456789",
"expires_date_ms" : "4092599349000",
"purchase_date_pst" : "2023-09-09 02:09:09 America/Los_Angeles",
"original_purchase_date" : "2023-09-09 09:09:10 Etc/GMT"
}
],
"adam_id" : 1532875441,
"receipt_creation_date_pst" : "2023-09-09 06:06:26 America/Los_Angeles",
"request_date" : "2023-09-09 16:06:27 Etc/GMT",
"request_date_pst" : "2023-09-09 06:06:27 America/Los_Angeles",
"version_external_identifier" : 861643821,
"request_date_ms" : "1694273635000",
"original_purchase_date_pst" : "2023-09-09 06:00:00 America/Los_Angeles",
"application_version" : "275",
"original_purchase_date_ms" : "1694273430000",
"receipt_creation_date_ms" : "1694273634000",
"original_application_version" : "275",
"download_id" : 503003801132085600
},
"latest_receipt_info" : [
{
"quantity" : "1",
"purchase_date_ms" : "1694250549000",
"expires_date" : "2099-09-09 09:09:09 Etc/GMT",
"expires_date_pst" : "2099-09-09 06:06:06 America/Los_Angeles",
"is_in_intro_offer_period" : "false",
"transaction_id" : "490001314520000",
"is_trial_period" : "false",
"original_transaction_id" : "490001314520000",
"purchase_date" : "2023-09-09 09:09:09 Etc/GMT",
"product_id" : "vip.forever.pollykann",
"original_purchase_date_pst" : "2023-09-09 02:09:10 America/Los_Angeles",
"in_app_ownership_type" : "PURCHASED",
"original_purchase_date_ms" : "1694250550000",
"web_order_line_item_id" : "490000123456789",
"expires_date_ms" : "4092599349000",
"purchase_date_pst" : "2023-09-09 02:09:09 America/Los_Angeles",
"original_purchase_date" : "2023-09-09 09:09:10 Etc/GMT"
}
],
"latest_receipt" : "t.me/crackhub_69",
"environment" : "Production",
"pending_renewal_info" : [
{
"product_id" : "vip.forever.pollykann",
"original_transaction_id" : "490001314520000",
"auto_renew_product_id" : "vip.forever.pollykann",
"auto_renew_status" : "1"
}
],

};

$done({ body: JSON.stringify(objc) });
