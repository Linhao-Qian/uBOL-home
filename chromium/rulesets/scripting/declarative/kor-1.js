/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: kor-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".body.mwcphide\",\"action\":[\"style\",\"height: 100% !important;\"]}"],["{\"selector\":\".news-view-wrap\",\"action\":[\"style\",\"padding-top: 0px !important;\"]}"],["{\"selector\":\".la\",\"action\":[\"style\",\"height: 75px !important; width: 75px !important; visibility: hidden !important;\"]}"],["{\"selector\":\"article > div[class^=\\\"sc-\\\"]\",\"action\":[\"style\",\"grid-template-columns: none !important;\"]}","{\"selector\":\"body[style]\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\".td-pb-span8\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".site-footer\",\"action\":[\"style\",\"padding-bottom: 0px !important;\"]}","{\"selector\":\"body .td-header-wrap\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\"#hidden1\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#content .ad_parent\",\"action\":[\"style\",\"height: 100% !important; overflow: auto !important;\"]}"],["{\"selector\":\".content.partners-wrap\",\"action\":[\"style\",\"max-height: 100% !important;\"]}"],["{\"selector\":\"div[style].row.no-gutters > .col-6\",\"action\":[\"style\",\"max-width: 75% !important; flex-basis: 75% !important;\"]}"],["{\"selector\":\"#wrap > div[style*=\\\"height:\\\"][style^=\\\"position:\\\"] + header\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\"#map_area\",\"action\":[\"style\",\"height: 100% !important;\"]}"],["{\"selector\":\"header\",\"action\":[\"style\",\"height: 100px !important;\"]}"],["{\"selector\":\"#zzbang_img\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".login_inputbox .inner\",\"action\":[\"style\",\"width: calc(100% - 115px) !important;\"]}","{\"selector\":\".login_inputbox\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".MapMain > #map\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"#journalist_card li\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"#contentBody.bodyHide\",\"action\":[\"style\",\"height: 100% !important;\"]}"],["{\"selector\":\".cs_news_area .cs_area\",\"action\":[\"style\",\"width: calc(100% - 2px) !important;\"]}","{\"selector\":\"li.area_guide\",\"action\":[\"style\",\"width: 96% !important;\"]}"],["{\"selector\":\"#body_wrap > #body_main > div[style]:nth-child(1), #body_wrap > #body_main > div[style]:nth-child(3)\",\"action\":[\"style\",\"width: calc(50% - 5px) !important;\"]}"],["{\"selector\":\".feature_index .box_user\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".inner_contents\",\"action\":[\"style\",\"margin-bottom: 0px !important;\"]}"],["{\"selector\":\"#primary\",\"action\":[\"style\",\"width: 100% !important\"]}"],["{\"selector\":\"body[data-elementor-device-mode=\\\"desktop\\\"] div[itemprop=\\\"mainContentOfPage\\\"]\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".article_area > .article_left\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".article_area .article_left\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".tabad\",\"action\":[\"style\",\"visibility: hidden !important;\"]}","{\"selector\":\"article.inner2\",\"action\":[\"style\",\"top: 0px !important;\"]}"],["{\"selector\":\"#wrap_cnts td[valign=\\\"top\\\"] #wrap_ctgr_new > div[id]\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\"#wrap_cnts td[valign=\\\"top\\\"] #wrap_ctgr_new\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".errorlay .new-login-warp\",\"action\":[\"style\",\"padding-top: 20px !important; margin-left: calc(50% - 232.5px) !important;\"]}"],["{\"selector\":\"header ~ header\",\"action\":[\"style\",\"margin-top: 50px !important;\"]}"],["{\"selector\":\"#newsBody\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".topBannerWrapper *\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\".depthContentsWrap .productListWrap .searchList\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\".wide_layout .wrap_srch_res .wrap_sort\",\"action\":[\"style\",\"width: auto !important;\"]}","{\"selector\":\".wide_layout .wrap_srch_res .wrap_tab\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\".wide_layout .wrap_srch_res [class*=\\\"prod_type2\\\"]\",\"action\":[\"style\",\"width: 1275px !important; border-left: 1px solid #e4e4e4 !important; background-image: none !important;\"]}"],["{\"selector\":\".contentBox > .topNews .icon-list\",\"action\":[\"style\",\"border-top: none !important;\"]}","{\"selector\":\".contentBox > .topNews > .con-L\",\"action\":[\"style\",\"border-top: none !important;\"]}"],["{\"selector\":\".article-adCover-div\",\"action\":[\"style\",\"height: 100% !important;\"]}"],["{\"selector\":\".productDetailWrap > .contentsWrap\",\"action\":[\"style\",\"padding-bottom: 0px !important;\"]}"],["{\"selector\":\".content_body > div[class^=\\\"lotto_\\\"]\",\"action\":[\"style\",\"filter: none !important; -webkit-filter: none !important;\"]}","{\"selector\":\".wrap.blocked .content_more_div\",\"action\":[\"style\",\"max-height: 100% !important;\"]}"],["{\"selector\":\"header .artc_ad\",\"action\":[\"style\",\"height: 130px !important;\"]}"],["{\"selector\":\"div[class~=\\\"hospital-images-box\\\"] ~ .row > .col-8\",\"action\":[\"style\",\"max-width: 100% !important; flex: none !important;\"]}"],["{\"selector\":\".content-full\",\"action\":[\"style\",\"height: auto !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"overflow-x: auto !important; overflow-y: auto !important;\"]}"],["{\"selector\":\".thisTimeNews > ul\",\"action\":[\"style\",\"border-right: none !important; width: 100% !important;\"]}"],["{\"selector\":\"#header\",\"action\":[\"style\",\"margin-bottom: 0px !important;\"]}","{\"selector\":\".area_ranking\",\"action\":[\"style\",\"top: 400px !important;\"]}"],["{\"selector\":\".wrap_home .section_spot .best_qna_wrap\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\".wrap_home .section_spot\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"#section_body\",\"action\":[\"style\",\"border-top: none !important;\"]}"],["{\"selector\":\"#content div[class^=\\\"basicList_list_\\\"] div:has(div[class^=\\\"adProduct_item_\\\"]):has(~ div)\",\"action\":[\"style\",\"height: 1px !important; visibility: hidden !important;\"]}"],["{\"selector\":\"#topSearchWrap\",\"action\":[\"style\",\"padding-bottom: 50px !important;\"]}","{\"selector\":\"div[class^=\\\"Layout-module_\\\"] #newsstand\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\".articleView + .aside .smallbox + .smallbox\",\"action\":[\"style\",\"border-top: none !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\".ask_hamburger_wrapper\",\"action\":[\"style\",\"top: 0px !important;\"]}","{\"selector\":\".ask_wrapper .ask_title_zone\",\"action\":[\"style\",\"top: 0px !important;\"]}","{\"selector\":\".ask_wrapper.not_host\",\"action\":[\"style\",\"top: 0px !important;\"]}","{\"selector\":\"html\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\".bot-content-area .mid-util-wrap > div\",\"action\":[\"style\",\"width: calc(50% - 5px) !important;\"]}"],["{\"selector\":\".user_view\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"#board_read .board_main_top .member_reward_wrapper\",\"action\":[\"style\",\"margin-top: 20px !important; float: right !important; margin-right: 20px !important;\"]}","{\"selector\":\"#board_top .best_list\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\"#board_top > div > .top_best.best_list:has(+ .col div[id^=\\\"ad_\\\"])\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".go_top.go_button\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"#index > div[id^=\\\"index_box\\\"][class]:not(.index_row_full)\",\"action\":[\"style\",\"margin-left: calc(50% - 145.5px) !important;\"]}"],["{\"selector\":\".result_wrap\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"header\",\"action\":[\"style\",\"top: 0px !important;\"]}"],["{\"selector\":\".td-is-sticky > .wpb_wrapper\",\"action\":[\"style\",\"top: 0px !important;\"]}"],["{\"selector\":\"#contentmemo ~ .adsbygoogle > div[style^=\\\"font-size:\\\"]\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".banner-open .contents\",\"action\":[\"style\",\"padding-top: 68px !important;\"]}"],["{\"selector\":\"#contentsBox #login_box\",\"action\":[\"style\",\"width: 350px !important; float: right !important; border-bottom: solid 2px #da3b40 !important; border-left: solid 2px #da3b40 !important;\"]}"],["{\"selector\":\"#mbnRoll_001 > .mbnRollUnit > .pagen_1\",\"action\":[\"style\",\"width: 239px !important;\"]}","{\"selector\":\"#mbnRoll_001 > .mbnRollUnit > .pagen_2\",\"action\":[\"style\",\"width: 239px !important; left: 239px !important;\"]}","{\"selector\":\"#mbnRoll_001 > .mbnRollUnit > .pagen_3\",\"action\":[\"style\",\"width: 239px !important; left: 478px !important;\"]}","{\"selector\":\"#mbnRoll_001 > .mbnRollUnit > .pagen_4\",\"action\":[\"style\",\"width: 240px !important; left: 717px !important;\"]}","{\"selector\":\"#mbnRoll_yNow > .mbnRollUnit > .pagen_1\",\"action\":[\"style\",\"width: 363px !important;\"]}","{\"selector\":\"#mbnRoll_yNow > .mbnRollUnit > .pagen_2\",\"action\":[\"style\",\"width: 363px !important; left: 363px !important;\"]}","{\"selector\":\"#mbnRoll_yNow > .mbnRollUnit > .pagen_3\",\"action\":[\"style\",\"width: 363px !important; left: 726px !important;\"]}","{\"selector\":\"#yHeader .yesSearch .key_latest .lastest_word\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\"#ySContent .loginCont\",\"action\":[\"style\",\"margin-left: 200px !important;\"]}","{\"selector\":\"#yWelMid .yWelNowBook ul\",\"action\":[\"style\",\"margin-left: calc(50% - 436px) !important;\"]}","{\"selector\":\"#yWelMid .yWelNowBook\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\"#yWelTopMid .yWelTodayBook .tBCont .tBInfo .tb_readCon\",\"action\":[\"style\",\"width: calc(100% - 30px) !important;\"]}","{\"selector\":\"#yWelTopMid .yWelTodayBook\",\"action\":[\"style\",\"width: calc(100% - 240px) !important;\"]}","{\"selector\":\".mContRT .mbnZone\",\"action\":[\"style\",\"left: 94.5px !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"padding-top: 0px !important;\"]}"],["{\"selector\":\".banner_slot_top + #container .article_cover\",\"action\":[\"style\",\"top: 100px !important;\"]}"],["{\"selector\":\".container-content > section[class*=\\\" \\\"] ~ main[class*=\\\" \\\"]\",\"action\":[\"style\",\"margin-top: 50px !important;\"]}"],["{\"selector\":\"#content-header form.FormItem\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\"#top-banner-ad\",\"action\":[\"style\",\"height: 1px !important; position: absolute !important;\"]}"],["{\"selector\":\"div[data-mesh-id][data-testid] > div[id^=\\\"comp-\\\"]:has(form[id][class])\",\"action\":[\"style\",\"margin-top: -600px !important;\"]}"],["{\"selector\":\".social-after-title\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".bch-main-wrapper > .right-cont\",\"action\":[\"style\",\"margin-right: calc(50% - 180px) !important; width: 100% !important;\"]}"],["{\"selector\":\"header .row[style]\",\"action\":[\"style\",\"margin-bottom: 35px !important;\"]}"],["{\"selector\":\".body > .content.xe_content:not(:has(article))\",\"action\":[\"style\",\"width: auto !important;\"]}"],["{\"selector\":\"#popupBody #nonmember_all .button_login2\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\"#popupBody #nonmember_all .left1\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\"#welcomeMainBanner_welcome_tab\",\"action\":[\"style\",\"left: calc(50% - 186px) !important;\"]}"],["{\"selector\":\"#main_sec\",\"action\":[\"style\",\"margin-top: 100px !important;\"]}"],["{\"selector\":\"#body > .hp_allkill\",\"action\":[\"style\",\"margin-top: 375px !important;\"]}","{\"selector\":\".mod-top > .main-promo\",\"action\":[\"style\",\"margin-left: calc(50% - 205px) !important;\"]}"],["{\"selector\":\".box__login #login_tab\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\".box__login .box__login-member\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"#allKillItemList > .item_list_wrap\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".goods_list_tit\",\"action\":[\"style\",\"padding-top: 0px !important;\"]}"],["{\"selector\":\".sect-movie-chart > ol:nth-child(2) > li\",\"action\":[\"style\",\"margin-left: 130px !important;\"]}","{\"selector\":\".wrap-login > .sect-login\",\"action\":[\"style\",\"margin-left: calc(50% - 270px) !important;\"]}"],["{\"selector\":\".container .contents > .subcontents:nth-child(1)\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}","{\"selector\":\"html:not([data-n-head]) .contents > .headline\",\"action\":[\"style\",\"margin-top: 0px !important; height: 70px !important;\"]}"],["{\"selector\":\"#searchArea .title_wrap\",\"action\":[\"style\",\"width: calc(100% - 50px) !important;\"]}","{\"selector\":\"#searchArea .viewType_L .product_list li .prd_info\",\"action\":[\"style\",\"width: 700px !important;\"]}","{\"selector\":\".wrap_list .standard\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".bodyHide\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".ebs_item .inner > div[class]\",\"action\":[\"style\",\"width: 50% !important;\"]}"],["{\"selector\":\"#mw_mobile > .mw_icon_box\",\"action\":[\"style\",\"margin-top: 25px !important;\"]}","{\"selector\":\".main-top-banner + .box\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\"[class][itemtype*=\\\"//schema.org/\\\"] .markdown\",\"action\":[\"style\",\"max-width: 100% !important; flex-basis: 100% !important;\"]}","{\"selector\":\"[class][itemtype*=\\\"//schema.org/\\\"] > .center\",\"action\":[\"style\",\"width: 100% !important; flex-basis: 100% !important;\"]}"],["{\"selector\":\".mo-new-header .header .show-ads\",\"action\":[\"style\",\"max-height: 54px !important;\"]}"],["{\"selector\":\"#loginFormWrite\",\"action\":[\"style\",\"margin-left: 25% !important;\"]}","{\"selector\":\".byWd .matchingContWrap\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\".news_doc #footer\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"div[class^=\\\"premium-lawyer\\\"] ~ a.goto-all-lawyers\",\"action\":[\"style\",\"margin-top: 40px !important;\"]}","{\"selector\":\"div[ng-if] > .lawyers-section.has-border-bottom\",\"action\":[\"style\",\"height: 250px !important;\"]}"],["{\"selector\":\"header.main-header\",\"action\":[\"style\",\"top: 0px !important;\"]}"],["{\"selector\":\".news_synthesis_sec .col.col_4\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".section-lefttop-center:has(> .mule-today)\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\"div.section-leftmiddle-topmiddle.cf\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"div[style].clearfix > .nd-by-line\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"#pnlContainer .con_b > .reply_b\",\"action\":[\"style\",\"margin: 0px auto !important;\"]}"],["{\"selector\":\"table[style][width][cellspacing][cellpadding] tr[valign] > td[style] > div[style]\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"html[class*=\\\"pc-size\\\"] .m-contents > .side-area > .analysis-ranking1\",\"action\":[\"style\",\"top: 475px !important; left: auto !important; width: 100% !important;\"]}","{\"selector\":\"html[class*=\\\"pc-size\\\"] .m-contents > .side-area > div:nth-child(-1n+4)\",\"action\":[\"style\",\"top: auto !important; left: auto !important;\"]}","{\"selector\":\"html[class*=\\\"pc-size\\\"] .side-area + .m-guide\",\"action\":[\"style\",\"margin-bottom: 150px !important;\"]}"],["{\"selector\":\".box-skin .mobile-popular\",\"action\":[\"style\",\"border-top: none !important;\"]}"],["{\"selector\":\".top-keyword\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\"div[class^=\\\"ppom_newSub\\\"] .top_newSub .left_wt\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"div.sc-64vosk-0.jIkGEl\",\"action\":[\"style\",\"margin-bottom: 10px !important;\"]}"],["{\"selector\":\".content_area .todayBox\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"#SirenDiv\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".article-ad ~ p[style][class^=\\\"title\\\"]\",\"action\":[\"style\",\"margin-top: 100px !important;\"]}"],["{\"selector\":\"form[name=\\\"loginForm\\\"][action*=\\\"login.yp\\\"] > table\",\"action\":[\"style\",\"margin-left: calc(25% - 27px) !important;\"]}"],["{\"selector\":\"#entFlick\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#hotPlace.myBox\",\"action\":[\"style\",\"margin-left: calc(50% - 65px) !important;\"]}"],["{\"selector\":\".board_view .related_area\",\"action\":[\"style\",\"height: 300px !important;\"]}"],["{\"selector\":\".column_content\",\"action\":[\"style\",\"margin-top: 50px !important;\"]}"],["{\"selector\":\"html[style]\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"div[class*=\\\"inner\\\"].column > div\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".xe_content\",\"action\":[\"style\",\"opacity: 1 !important;\"]}"],["{\"selector\":\".news-cate + .news-box\",\"action\":[\"style\",\"padding-right: 0px !important;\"]}"],["{\"selector\":\".global-top\",\"action\":[\"style\",\"top: 0px !important;\"]}","{\"selector\":\".layout-main .main-menu\",\"action\":[\"style\",\"top: 0px !important;\"]}","{\"selector\":\".layout-main .panel.no-margin\",\"action\":[\"style\",\"padding-top: 50px !important;\"]}"],["{\"selector\":\".content_join\",\"action\":[\"style\",\"margin-left: calc(50% - 200px) !important;\"]}"],["{\"selector\":\".content\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"#header-menu-left\",\"action\":[\"style\",\"border-right: none !important;\"]}","{\"selector\":\"#header-menu-right\",\"action\":[\"style\",\"float: right !important; border-left: none !important;\"]}","{\"selector\":\"div[align=\\\"center\\\"] + .row > .col-xs-6\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\"html[style*=\\\"background-image: url(//upload.tgd.kr/\\\"].darkmode\",\"action\":[\"style\",\"background-image: none !important; background-color: #151515 !important;\"]}","{\"selector\":\"html[style*=\\\"background-image: url(//upload.tgd.kr/\\\"]:not(.darkmode)\",\"action\":[\"style\",\"background-image: none !important; background-color: #f3f2f0 !important;\"]}"],["{\"selector\":\".content\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\".inner-body.hided\",\"action\":[\"style\",\"overflow-y: auto !important; max-height: none !important;\"]}"],["{\"selector\":\".respons-edit > div[style].float-left\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"div[data-tiara-layer]:not([id])\",\"action\":[\"style\",\"margin-top: 0px !important; position: relative !important;\"]}"],["{\"selector\":\".main-content > .content-article:not(:has(+ .content-aside > div[data-tiara-layer][class=\\\"box_side\\\"]))\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".inner-main [data-cloud*=\\\"_ad_\\\"] + div\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\"#id_my_menu_area ~ #main_sky_banner_area\",\"action\":[\"style\",\"margin-left: 685px !important;\"]}","{\"selector\":\"div[class^=\\\"main\\\"]#middle_area .academy.fleft:not(.iyua)\",\"action\":[\"style\",\"margin-left: calc(11.5%) !important;\"]}"],["{\"selector\":\".container:has(~ div[style]#toTop) article.content\",\"action\":[\"style\",\"margin-top: 100px !important;\"]}","{\"selector\":\".headding-news:has(~ div:not([style])#toTop) .col-md-8\",\"action\":[\"style\",\"margin-left: calc(50% - 384px) !important;\"]}"],["{\"selector\":\".gdl-page-item\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".post-contents > div[style]\",\"action\":[\"style\",\"height: 100% !important;\"]}"],["{\"selector\":\".expanded > #user-container\",\"action\":[\"style\",\"padding-top: 0px !important;\"]}"],["{\"selector\":\".grid-body.g-body\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\"header > .header-body\",\"action\":[\"style\",\"width: 100% !important;\"]}"]];

const hostnamesMap = new Map([["3.37.104.109",0],["youtu.co",1],["enterdiary.com",1],["maxmovieen.com",1],["mystylezip.com",1],["tenbizt.com",1],["capress.kr",1],["carandmore.co.kr",1],["hotplacehunter.co.kr",1],["mememedia.co.kr",1],["mobilitytv.co.kr",1],["newautopost.co.kr",1],["tminews.co.kr",1],["dfast.kr",1],["thehousemagazine.kr",1],["aagag.com",2],["atlantachosun.com",3],["autopostkorea.com",[4,5]],["ygosunews.com",[4,62]],["ydailynewsis.blogspot.com",6],["dodot.cafe24.com",7],["loapost.cafe24.com",7],["ohohz.cafe24.com",7],["jiavr.xyz",7],["chchclub.com",8],["sports.chosun.com",9],["m.sports.chosun.com",10],["m.sportschosun.com",10],["courtauctionmap.com",11],["dailypharm.com",12],["gall.dcinside.com",13],["sign.dcinside.com",14],["diningcode.com",15],["www.donga.com",16],["donthellgo.com",17],["drapt.com",18],["edufindkorea.com",19],["encar.com",20],["fnnews.com",21],["funnyissue.com",22],["googlewph.com",22],["gyeomipang.co.kr",22],["haninvegas.com",23],["heraldcorp.com",24],["news.heraldcorp.com",24],["heraldpop.com",25],["t.hi098123.com",26],["web.humoruniv.com",27],["edit.incruit.com",28],["inews24.com",29],["joynews24.com",29],["instructivehumility.com",30],["news.oasisfeed.com",30],["m.shop.interpark.com",31],["shopping.interpark.com",32],["shoppinghow.kakao.com",33],["koreadaily.com",34],["ktestone.com",35],["lotteon.com",36],["lottoen.com",37],["medipana.com",38],["modoodoc.com",39],["marupost.mycafe24.com",40],["news.nate.com",41],["www.nate.com",42],["kin.naver.com",43],["news.naver.com",44],["search.shopping.naver.com",45],["www.naver.com",46],["newsis.com",47],["newtoki323.com",48],["newtoki324.com",48],["newtoki325.com",48],["newtoki326.com",48],["newtoki327.com",48],["newtoki328.com",48],["newtoki329.com",48],["newtoki330.com",48],["newtoki331.com",48],["newtoki332.com",48],["newtoki333.com",48],["newtoki334.com",48],["pushoong.com",49],["quasarzone.com",50],["ruliweb.com",51],["bbs.ruliweb.com",52],["m.ruliweb.com",53],["serieamania.com",54],["simcong.com",55],["spotv112.com",56],["spotv113.com",56],["spotv114.com",56],["spotv115.com",56],["spotv116.com",56],["spotv117.com",56],["spotv118.com",56],["spotv119.com",56],["spotv120.com",56],["spotv121.com",56],["spotv122.com",56],["spotv123.com",56],["spotv124.com",56],["spotv125.com",56],["spotv126.com",56],["spotv127.com",56],["spotv128.com",56],["spotv129.com",56],["spotv130.com",56],["sundaynewsusa.com",57],["te31.com",58],["toomics.com",59],["uwayapply.com",60],["yes24.com",61],["m.hub.zum.com",63],["maple.gg",64],["op.gg",65],["ponh.info",66],["thepumpkin.io",67],["blockchainhub.kr",68],["2cpu.co.kr",69],["5donews.co.kr",70],["aladin.co.kr",71],["all-mice.co.kr",72],["auction.co.kr",73],["memberssl.auction.co.kr",74],["www.auction.co.kr",75],["berryjam.co.kr",76],["cgv.co.kr",77],["chaoscube.co.kr",78],["compuzone.co.kr",79],["curiosityblog.co.kr",80],["issueclick.kr",[80,106]],["www.ebs.co.kr",81],["etoland.co.kr",82],["hashcode.co.kr",83],["m.inven.co.kr",84],["jobkorea.co.kr",85],["news.jtbc.co.kr",86],["lawtalk.co.kr",87],["megabox.co.kr",88],["mk.co.kr",89],["mule.co.kr",90],["newdaily.co.kr",91],["m.nocutnews.co.kr",92],["noteforum.co.kr",93],["paxnet.co.kr",94],["pinpointnews.co.kr",95],["ppomppu.co.kr",96],["community.rememberapp.co.kr",97],["unsin.co.kr",98],["withcast.co.kr",99],["wowtv.co.kr",100],["ypbooks.co.kr",101],["m.ytn.co.kr",102],["evape.kr",103],["fomos.kr",104],["gorani.kr",105],["kharn.kr",107],["meeco.kr",108],["bigkinds.or.kr",109],["orbi.kr",110],["sso.pping.kr",111],["ppss.kr",112],["tgd.kr",113],["windowsforum.kr",114],["coolfun.zal.kr",115],["bloter.net",116],["focus.daum.net",117],["news.daum.net",118],["v.daum.net",119],["kidkids.net",120],["koreatimes.net",121],["miraetv.net",122],["3277532532.reviewtoday.net",123],["topstarnews.net",124],["news.unn.net",125]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["m.dailypharm.com",[12]],["m.joynews24.com",[29]],["m.inews24.com",[29]]]);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
