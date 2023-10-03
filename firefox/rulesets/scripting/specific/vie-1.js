/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
    Copyright (C) 2019-present Raymond Hill

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

// ruleset: vie-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = [".qc",".banners",".top-mobile-banner",".cash-fish",".cash-fish-pc,\n.preload-pc",".banner-sticky-footer-wrapper","#catfish","#chilladv,\n#headermbads,\n#headerpcads,\n#mobiads,\n#pcads","a[rel=\"nofollow\"]","#overlay","#hide_float_right","#middle-box-screen,\ndiv[style^=\"position: fixed; bottom: 0px;\"]","#quang-cao","#popup-giua-man-hinh",".item-more,\n.widget-sidebar-block","#backgroundPopupp,\n#popupContact",".btn-single-cuoc",".code-block",".jw-logo",".banner-top",".float-ck","#bottomFixedDiv,\n#js_pup_navigation,\n#wAdList,\ntr[id^=\"word_\"]","#player + div[id]",".catfish-ck",".t_logo","#qc_clgt",".advertisement","#fbox-background,\n.gnarty-offads","#mobile-ads",".ads",".fade.show",".btn-user.r-btn,\n.sidebar-right",".mct_-bet",".modal-backdrop.show",".ibs-bet","div[class*=\"size-\"]","#m-bet","#BaoMoi_HalfPage",".bm_B > div,\ndiv.ad-banner-list,\ndiv.bm_Ii",".monkey-content-duoicanbiet,\n.monkey-section-tinnoibat,\ndiv.monkey-qc",".list-dat-cuoc","#wap_bottombanner",".company","div[id^=\"AdLayer\"],\ndiv[id^=\"ad_\"]","#right_float,\n.art_header_text,\n[id$=\"float_banner\"]","[class*=\"_banner\"]",".menu-mobile.hot-menu",".container-banner,\n.logo-top-right-append-custom,\n.modal-ads,\ndiv[class^=\"slide-bar\"]",".button-bottom-center-append-custom",".button-in-player-box",".sticky",".btn-betting,\n.datCuocBTN,\n.modelAds,\n.nhacaiuytin,\n.text-running",".banner-bottom-append-custom",".footer-banner",".container.mt-1.d-none.d-lg-block,\n.menu-item-object-custom,\na.rlw-extra-i.py-3.flex-grow-1",".show.fade.modal",".marquee-container","#quangcaopc",".align-items-center.justify-content-between.d-flex.col-12 > .d-lg-none.d-block",".sub-menu.d-none.d-lg-flex","div[id^=\"dnn_\"]",".widget.widget_text",".block-bookmaker.block.most-view",".banner-preload","#text-13,\n#text-14,\n.hocwp-ads",".bannerBox,\n.footerBanner,\ncenter > [href*=\"tlink.vn\"]",".adblock,\n.popup",".adsv","a[rel=\"noopener noreferrer\"]",".widget-wrap.widget_text","#ads-preload","#custom_html-7",".div_box_adv","div.box-aside","#content > div[align=\"right\"],\n#login-ads,\n#playerDailymotion,\n.video-player,\n.wt-ads,\n.wt-ads2",".ad-pin-right-bottom",".adv",".top-right",".line-ads",".ad-container","#home_header","#fixedban,\ndiv[class^=\"banner-mobile\"]",".samCustomSize.samAlignCenter.samCodeUnit,\n.samItem","#mobileCatfishz","#antiblocker,\n#antiblocker_underplayer","#layerLogo",".float-ck-center-lt",".btn_small_fix_container",".ads-home-feed",".left-slider",".text-center.adsense","#sideAdsLeft,\n#sideAdsRight",".banner-bot-mobile,\n.banner-top-mobile,\n.preload",".catfishLoader","#latest-censored-videos > .row > div.pb-3.col:nth-of-type(1),\n.v3sb-box",".cat-fish.a-play,\n.overlay",".ads-embed,\n.float-ck-center-lt1,\n.separator_mb,\n.separator_pc,\n.topbaner,\n.topbaner_mb","#ads_preload",".bn-lg-sidebar",".anhbn-qc",".ezo_ad,\n.ezoic-ad",".advbox","div[style=\"padding: 0px; margin: 10px 0 0 0 ; width: 100%;text-align: center;min-height: 280px;\"],\ndiv[style=\"width: 100%; min-height: 240px; text-align: center;\"],\ndiv[style=\"width: 100%; min-height: 90px; text-align: center;\"],\ndiv[style=\"width: 100%;text-align: center;min-height: 280px;\"]","#link-view > center:nth-of-type(1)",".dwpb-action,\n.fixtop",".adsHOC_wrapper__i5MTn,\n.homePage_adsHomeLeft__3_ruz.adsHOC_wrapper__Se0cN,\n.style_wrapperAll__jFIbb,\n.style_wrapperAll__oHfiq,\n.style_wrapper__2LeQp,\n.style_wrapper__YEwSi,\n.textlinkBox_notwrap__scC4g.textlinkBox_wrapper__1C2P9,\n.textlinkBox_wrapper,\np[style=\"color: rgb(174, 174, 174); margin-top: 10px; margin-bottom: 20px;\"]","#countdown","div[id^=\"adsphim-\"]",".ff-banner",".player-midpoint-progress",".player-vast-blocker","#sponsor-balloon","#js-read__body + .mt-3,\n#tpads-pc-top-page,\n.nh-read__alert,\n.px-3.nh-read__body > .text-center.pb-3,\n.text-center.pb-3.nh-read__pagination,\ndiv.text-center.pt-3:nth-of-type(1),\ndiv.text-center.pt-3:nth-of-type(2)","div[class*=\"ads\"]","#mp-adbk,\n#mp-adx-b32",".mp-adz",".adv_phim",".fixed_bottom","[class^=\"box_adv_ele\"]","#tdi_129",".container div:not(.top) > div.mrb5.mrt5.text-center > a,\n.mrb5.text-center.container",".pcs-modal","#IMAPointernctPlayer,\n#PL_R01,\n#PL_R02,\n.adv_home_300_250,\n.nqc-zone","#adsTopInPageBanner,\n#popup,\n.adsContainer",".pcCatfish","#itro_opaco","#video_player ~ div[id],\ndiv[style^=\"position:fixed;inset:0px;z-index:100000;\"]",".ads_popup","#mobile_content_bottom,\n.BanerTop100,\n.adv-300-right",".adpia_banner",".popUpBannerBox",".popmake",".box_option,\n.event_loader_e,\n.fix_bottom,\n.popup_center",".uniad-player + div[style]","#catfish-banner,\n.topless","#itro_popup","#float_content_right",".preload-banner",".sticky-footer",".sgpb-popup-dialog-main-div-wrapper,\n.sgpb-popup-overlay",".ads-container",".ads-bottom-margin,\n.ads_blocks_advice,\n.bs-callout[style=\"min-height: 400px; margin-top:0px;\"]",".top-banner","#adsposttop","#adrighttop",".adbox",".footer-button-sign-in.hide-desk,\n.hide-desk.wrap-content > .wrap-btn-action,\n.menu-right-slide","#divFLRALeft,\n#divFLRARight,\np[style^=\"display: block; position: fixed;\"]",".no-auto-popup,\n.qc-adskeeper",".add-logo-ads",".stream-item","#footer-widget-area,\n.e3lan.e3lan-top",".box,\n.pum",".truct-catfish,\n.truct-widget","#sticky-footer","#topbanner,\n.footer-info","#banner_preload,\n.doc-truyen-ads-d1,\n.doc-truyen-ads-d2","#preload-zing,\n#uniad-head,\n.uniad-head",".sda-catfish","a[target=\"_blank\"][rel=\"dofollow\"]",".item-qc",".Header_topBanner__1xD-2,\n.styles_bannerInArticleWrapper__rPPJH,\n.styles_topBanner__NL_gW","#BigBanner,\n.ads_position",".ads_txt",".row > div > center","div[class^=\"adbox\"]","#article > .pt-3.text-centers","#balloon,\n.banner-masthead",".button-action-float-banner",".adsphim-mobile-popup",".wtt-ads","#adstop2,\n.col-lg-4.hidden-xs.d-flex.flex-column.address-wrap,\n.float-right",".adv-side-bar,\n.banner-adv-wrapper,\n.banner-adv-wrapper2,\n.item-qc1","#invideo_wrapper,\n.Ads,\n.mobile-catfixx,\n.pc-catfixx,\ndiv.Dvr-300,\ndiv[style^=\"position: fixed; top: 60px\"]","#preload-2","#ballon-right,\n.most-view:nth-child(2)",".ab1",".single-video",".aHrefAff,\n.adsInPlayer,\n.bet-list,\n.buttonFabet,\n.top-bet-list","#ad_footer_top,\n#ad_header_top,\ndiv[id^=\"ad_banner\"]",".box_odds,\n.widget_custom_html.widget.widget_text",".fixed",".dcmm-button-player.row",".widget",".show-ads-banner",".adLogoPlayer",".entry > a[target=\"_blank\"],\n.wpbcap-laptopvang,\n[href*=\"hnmac.vn\"],\n[href*=\"laptopvang.com\"],\n[href*=\"macbookgiasi.vn\"],\n[href*=\"macone.vn\"],\n[href*=\"vender.vn\"],\ndiv.\\35 fb1ed6025b0b.widget:nth-of-type(3)","#app-web + .container[style=\"margin-bottom: 30px\"],\n.box-content .text-center[style],\n.item.item-betnow,\n.sv-link.btn-bet-top",".mmo-inner",".btn-betnow",".show.fade",".button-ads-header,\n.main-carousel-wrapper,\n.top-bookies,\n.tvc-link-ads-full","#sec_top_bet,\n.banner-bellow-append-custom,\n.banner_ctn,\n.banner_fixed,\n.banner_left,\n.banner_right,\n.bet-btn,\n.bet_now,\n.block_banner,\n.btn-in-player.btn-bottom-right-append-player,\n.click_blank,\n.logo-top,\n[href=\"/top-bet.html\"]",".banner",".btn-odds",".btno-group.d-none.d-lg-flex,\n.container > .mt-1,\n.container > .mt-3,\n.d-lg-block,\n.justify-content-between.d-lg-none.d-flex.btno-group,\n.menu-item > a[rel=\"nofollow\"],\n.topButton,\n.widget_offer,\nheader > .container","div[id^=\"float\"],\ndiv[id^=\"hide_float\"]","#accordion",".bbMediaWrapper-inner > .samCodeUnit,\n.js-replyNewMessageContainer.block-body > div.samCodeUnit > .samItem,\n.p-footer,\n.samVideoOverlay",".ad599div,\n.bets-now-button,\n.bets-now-ct,\n.pc_header,\na[data-wpel-link=\"external\"]","#closeAds","div.container:nth-of-type(5)","#adx,\n.catfish-bottom,\ndiv.banner-catfish-bottom","#_AM_POPUP_FRAME",".gnartyx-offads","[href*=\"cellphones.com.vn\"]",".textwidget",".expand-static-banner,\n.head--banner,\n.static-banner",".link-gold,\n[id^=\"banner\"]",".col-xl-3.col-lg-6.d-md-block.d-none,\n.lazyloaded.mx-auto.d-block.text-center.mb-20,\n.quangcao-down > p,\n.text-down",".ads_zone","#footer_fixed_ads",".cp-modal-popup-container,\n.simple-banner",".ad-floater,\n.promotion-popup,\n.video-ad-layer",".adsbygoogle","#ad_global_below_navbar",".other-ads-container,\n.show-load-ad","#boxmsgthongbaopopup","#custom_html-2,\n#custom_html-4",".b-player",".baloon,\n.col-sm-10.kqcenter,\n.kqbackground.vien ~ a[target=\"_blank\"]",".banner-sidebar","#sticker",".info-footer:nth-child(4)",".preload-backdrop",".ads-wrapper",".a--d-wrapper",".mobile-catfix",".fancybox-container,\n.flex-wrap-banner,\n.movie-banner,\n.mv-banner,\n.ws-banner","#js-read-body > .text-center.pb-3,\n.text-center.pb-3.nh-read__pagination > .mb-1 > .text-muted,\n[href=\"https://metruyencv.com/goout/lazada\"],\nsection.nh-section:nth-of-type(5)",".single-box,\n[href^=\"//dooloust.net/\"]",".banner_top","#npads","#pc-catfix,\n.lightbox-player-pc,\ndiv[id^=\"preload-\"],\nlixi88-ads-left,\nmb_catfish_1xbet,\nmobile-catfix,\npreload-11bet,\nsobet-ads-right","#headwrap > .computer,\n#headwrap > .mobile,\n.pc-catfix",".container > .right-box","#popup_banner_beta",".ad-script,\n.elementor-widget-container > .widget_custom_html","[href^=\"https://gotrackecom.info\"]","#desktopPopupBanner,\n.ads-floatingads,\n.banner-item,\n.top-nha-cai",".mct_-bet-bot",".mmo",".fixed-bottom",".firstmessfloadright.samItem,\n.my_nonresponsive_ads,\n.my_responsive_ads,\n.samBannerUnit,\n.samTextUnit","#catfish-adv,\n#overlay-pop,\n.mobile-catfish,\n.pc-catfish",".ads-menu-item,\n.dcmm-button-player-item",".divdatcuoc",".elementor-widget-image",".box-rating","#ads_large_detail,\n#banner_top,\n#box_qua_tang_vne,\n#raovat,\n#sis_popup,\n#supper_masthead,\n.article_ads,\n.article_ads_300x250,\n.banner_mobile_300x250,\n.section_ads_300x250","div[class*=\"qca\"]",".content_middle_rightbar",".popunder-link","#catfish_content",".adsShowMobile",".ads-menu","#fixed-advert-center-panel",".PanelScroller.Notices",".black-layout > div:nth-child(2),\n.popup_u,\ndiv[style^=\"position: absolute;top: 0;\"]","div#bnads",".homePageAds",".box-host,\n.captain-sb,\n.vb-pr-box",".ft-box","[id^=\"Balloon_\"]","div.vebo-sp.container:nth-of-type(7)",".sticky_bottom","#bar_float_r,\n.quangcaomb",".adsMobile,\n.adsShowPc,\n.offer-rating.widget-offers__list",".offer__btn","#top-banner-pc,\n.lixitt",".container > .row > center",".footer-fixed-br-container","#menu-main-menu > .menu-bongdainfo.menu-item.nav-item.tt-bdif,\n#menu-main-menu > .menu-cuoc-8xbet,\n#menu-main-menu > .menu-nha-cai-uy-tin.menu-item.nav-item.style-2 > .nav-link,\n.c-int.d-lg-none.d-block,\n.col-xl-4,\n.container > .row > .col-12,\n.justify-content-center.d-flex > .btn-primary.btn,\n.mt-1.d-lg-flex.d-none.sub-menu,\na.d-lg-none.d-block:nth-of-type(2),\ndiv#match-child-1.d-lg-none.d-flex.col-sm-6.col-lg-6.grid-matches__item:nth-of-type(4),\nspan.btn-odds",".d-lg-none.d-block.p-1.text-center",".match-detail__offer","div.text-center:nth-of-type(7),\ndiv[style=\"min-height: 250px\"]","#menu-item-52424,\n.btn-od,\n.d-lg-none.d-flex.btn-odds.text-center,\n.style-1.ml-2.d-none.d-lg-block.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-52424,\n.text-center.btn-odds.d-none.d-lg-block","div[data-value=\"1\"]","[data-clm=\"ccccc2\"],\n[data-id=\"ap3poapup\"]","#bnc1","#bnc0",".widget_media_image.widget_block.widget,\nimg.wp-image-1283,\nimg.wp-image-1285","#match-child-1,\n.banner-link,\n.block-catfish.text-center.d-lg-none.d-block,\n.container > ul,\n.container.mt-1,\n.logo-cnt > .d-lg-none.d-block,\n.menu-cuoc-one88,\n.mt-5.d-lg-none.d-block.pb-2.text-center,\n.offer,\n.pl-lg-0.col-xl-4,\n.row.d-none,\n.sk_balloon,\n.widget-offers__list,\na.btn-odds[rel=\"nofollow\"],\ndiv.d-lg-none.d-block:nth-of-type(3)",".menu-cuoc-8xbet,\n.menu-top-nha-cai",".d-lg-flex.d-none.p-0.company.flex-1.table,\n.grid-match__footer,\na.d-lg-none.d-block:nth-of-type(1)","#qc-kpgame","#ad-container","#ads,\n#overlay-close,\n#play",".banner-top-box","#position_full_top_banner_pc,\n.window_popup","#newmenu + div > div[style]",".button-dangkyngay",".afw-topbanner","#adm-slot-7234","#banner3double",".box-ads-bar","div[id^=\"adsWeb\"]",".BT-Ads,\n.qc-inner,\ndiv.qc_TC_Chap_Middle,\ndiv[id^=\"qc_M_\"],\ndiv[style*=\"position: fixed;\"]",".bgadmtoptotal",".bannertop",".top-right-col-ads",".my_responsive_add,\n.titleBar + *,\n[class1=\"my_responsive_add\"]","#background_bg_link,\n#maiContent > div > div.colLt > aside,\n.bnr,\n.cate-24h-foot-box-adv-view-news > .row > .col-6:first-child,\nDIV[class=\"banner-LR\"]",".admicro",".top-header","#onefootball,\n.top_page","#subiz_wrapper,\n.ad-embed",".features-r","#bannerMasthead,\n#desktop-home-top-page,\n#dta_inpage_wrapper,\n#dtads_inpage_wrapper,\n#mobile-home-middle-1,\n#mobile-home-middle-2,\n#mobile-home-top-page,\n#mobile-top-page",".widget_media_image.widget",".banner-cs",".banner-top-main,\n.baohaiquan_bottom_970x250",".top-advertisment",".ads-gg-top,\n.container + .col-xs-12.content_wrap,\n.content > .content > .content,\n.wrap-single > .pagination.text-center","._ning_outer","#Adsv,\n.right-banner > a[title]",".__ads_click","#BannerAdv","#gallery-2,\n.hd-cate-wrap,\n.home-qc-wrap,\n.home-sec-right .widget_media_image,\n.noname-left",".columns-widget .col-right",".chapter-content .min-h-\\[275px\\]",".Advs_adv-components__1nBNS.Advs_adv-300x250__2eyhC.Advs_no-content__RWwW2,\n.HotTagGlobal_fixed-height__1f50i",".box_ads_d",".exp_qc_share",".c-banner",".warp-banner-vip",".sidebar > div[style]","#div-ub-docbao","#ouibounce-modal,\ndiv[id^=\"adsbg\"]","#widget-12",".banr-Rt,\n.banrpstn","#myElementz,\n.bannerinfooter",".LRBanner",".bg_allpopupss,\n.bgal_popndungalal,\n.bn1,\n.bn2,\n.box_baiviet_dexuat,\n.box_quangcao_mobile_320x50,\n.box_text_qc","#tubia","[id^=\"admzone\"]",".ads-right1,\n.adv-row",".adx-zone,\n.underlay",".khw-ads-wrapper.clearfix","#qcRight,\n.banner-advertisements",".banner-bottom-menu,\n.popup-bg,\n.showpop,\n[href*=\"bit.ly\"]",".qc-benphai,\n.qc-bentrai","[class^=\"size\"]","#adrightsecondx,\n#adrightspecial,\n#adrightspeciallinks,\n#adsrighttop,\n#adsuggestion","#modal-ads-olm",".advertTop,\n.module_plugins",".ads-sponsor,\n.khw-adk14-wrapper","[id^=\"adv\"]",".quang_cao_chan_trang_pc,\n.quang_cao_pc_right_hoc_tap",".advHolder",".ads_shortcode",".admicro_top","#adop_bfd,\n.adsbypubpower,\nins[class*=\"adsby\"]",".sponsor-zone","div[id^=\"ads_\"]","#top-adv",".bannerchuyenmuc,\n.baseHtml.noticeContent,\n.show-qc-home,\n.show_qc","#popup_center","div[style=\"text-align:center;margin-top:0px;margin-bottom:0px;\"]",".box-banner",".banner-ads-home,\n.banner-in","div[class^=\"adv-\"]",".ads-970x280","#mobi-top,\n#pc-top,\n.d-flex.justify-content-between > div > div.d-flex.justify-content-around.mt-4","#myCarousel,\n.banner-boder-zoom",".modal-di__button-wrapper,\n.sam-slot",".ads-general-banner",".LeftFloatBanner,\n.RightFloatBanner,\n.ads_top_left",".asd-headt,\n.detail-tab > .container,\n.detail__foru,\n.super-masthead,\n[class*=\"box-home\"],\n[data-marked-zoneid=\"tn_detail_danhchoban\"],\n[data-marked-zoneid=\"tn_detail_quantam\"],\n[id^=\"dablewidget_\"],\nzone","div[class$=\"_ads\"],\ndiv[data-id=\"2\"]",".ads_660x90,\n[class^=\"ads_\"]",".bannerTOP1,\n.pc.bannerAuto","div[id^=\"adsMobile\"]",".fyi",".ads-common-box",".p-body-pageContent > table[style=\"width:100%;display:inline-block;background: #fff;\"]",".in-article-promo,\n.jsx-3569995709,\n.micro,\n.middle-comment-promotion,\n.pro-container,\n.promo-container,\ndiv[style=\"width:300px;height:250px\"],\ndiv[style=\"width:300px;height:600px\"],\ndiv[style=\"width:320px;height:100px\"]",".container .desktopjszone,\n.mobilejszone","#header-ads-full,\n.ads-responsive,\n[id^=\"ads-\"]","#LeaderBoardTop,\n#admbackground,\n#adsMainFooter,\n.Mobile_Masthead_TTO_Wrapper,\n.adm-bot,\n.box-qad,\n.section__r-vietlot,\n.wrapper-ads-mb",".clearfix.adregion,\n.visible-md.header-banners",".bannerqc,\n[class^=\"sticky-top\"],\n[href*=\"/default/template/\"],\n[href*=\"hungthinhcorp.com.vn\"],\n[href*=\"vietcombank.com.vn\"]",".Flagrow-Ads-under-header",".vfs_banner","#headerProxy,\n.rightleftads","#vmcad_sponsor_middle_content,\n.box-adv,\n.mb-20.col-right-ads,\n.vmcadszone",".zone--ad","section.mar20:nth-of-type(2),\nsection.mar20:nth-of-type(4)","#banner-dai-bottom,\n#banner-dai-top",".v-element > .v-responsive,\ndiv.message--post",".bf-3-primary-column-size.bs-vc-sidebar-column.vc_col-sm-3.vc_column_container.bs-vc-column.wpb_column > .wpb_wrapper.bs-vc-wrapper",".wrapper-adv","#banner1ab,\n#banner2ab",".ad_by_yellowpages,\n.banner_add","#Zingnews_SiteHeader,\n#site-header,\n.znews-banner",".most-view:first-child","#ads_location,\n.block.ad",".odds-button,\n.odds-button2",".click-ads,\n.click-ads ~ p,\ndiv.mrb10"];

const hostnamesMap = new Map([["*",0],["bongda365.asia",1],["keoso.club",[1,14]],["bongdatructuyen24.com",[1,46]],["soikeoz.net",[1,236]],["phim18hd.biz",[2,3]],["phim18vn.biz",[3,4]],["biphims.cc",5],["biphims.co",5],["biphim.in",[5,8]],["phimmoiaz.cc",6],["phimbocn.com",[6,70]],["phimhoathinh3d.com",[6,13]],["phimmoiv2.com",[6,79,133]],["phimmoipro1.net",[6,13,18,115,235]],["xemphimchill.net",[6,13,79,130]],["hhtqvietsub.top",[6,111,269]],["hhninja1.tv",6],["hoathinhtq.tv",[6,13]],["hhtq.vip",6],["phimmoichill79.cc",7],["subnhanhvl.cc",[8,9]],["phimmoi4s.com",[8,132]],["stream.tructiepnba.com",[8,153]],["xemtivi4k.com",[8,171]],["subnhanh.im",[8,9]],["vidian.me",[8,200]],["ketqua3.net",[8,220]],["ketqua9.net",[8,220]],["truyenchu.com.vn",[8,320]],["nghean24h.vn",8],["vbfast.xyz",8],["vkoolsss.net",[9,20,23,248]],["tructiepdabong21.site",[9,182,255,267,268]],["mitomt.tv",[9,33,41,42,55,56,57,58,59,60,273,276]],["tuoinung.cc",10],["animehay.city",11],["anivn.club",[12,13]],["phimdinhcao.com",[13,128,129,130]],["phimtn.com",[13,70,86,136]],["animesub.me",[13,86]],["8phimmoi.net",[13,18,79,203]],["hhhtq.net",[13,70,158]],["mephimgi.net",[13,79]],["phimdinhcao.net",[13,128,129,130]],["phimlongtieng.net",[13,128,129,130]],["vkool2.net",[13,115]],["motchillz.org",[13,18,79]],["fimfast.pro",[13,79,91]],["bongda21h.co",[15,16]],["phym18.org",[15,41,258]],["phimvietsub.co",17],["gocphimvn.com",[17,83]],["p.thoctv.co",18],["api.anime3s.com",[18,24]],["cakhia18.com",[18,47,48,49,50,51,52,53]],["rakhoi7.com",[18,49,50,51,52,53,146]],["p.thoctv.com",18],["bongda365b.info",[18,19,178]],["player.4shares.live",18],["cakhia22.live",[18,47,48,49,50,51,52,53]],["mephimtv.net",[18,228]],["ssplay.net",[18,203]],["play.vnupload.net",18],["tvhayb.org",[18,24,236]],["vebo3.org",[18,32,33,34,35,36,188,190,241,261,262]],["xoilac12.org",[18,30,34,35,36,189,262,264]],["caheo7.tv",[18,47,48,49,50,51,52,53]],["cakhia27.tv",[18,47,48,49,50,51,52,53]],["rakhoi12.tv",[18,49,50,51,52,53,146]],["livefb.xyz",[18,48,49,52]],["mphimmoi.xyz",[18,29,93,124,395]],["123nhadatviet.com",19],["123nhadatviet.net",19],["tuoitre.vn",[19,379]],["tuoitrenews.vn",19],["4rkinggame.com",20],["dailyphimz.com",[20,70]],["kenhgamez.com",20],["listnhacai1.com",[20,104]],["phim18vipb.com",20],["phimplay24h.com",[20,135]],["rphang.me",[20,198]],["phimhay.mobi",[20,201]],["gunnylau360.net",20],["gunnymienphi.net",20],["mythethao.net",[20,231]],["thiendia1.net",[20,243]],["vuonhoalan.net",[20,251]],["checkgaigoi.one",20],["phim33.tv",[20,277]],["phe3x.xyz",20],["phimno4.xyz",[20,70,396]],["live.7mvn2.com",21],["abysscdn.com",22],["freeplayervideo.com",22],["player-cdn.com",22],["ahaphimz.com",23],["vphims.net",23],["tvhay2.net",[24,97,244]],["phimmoivn.pro",[24,265]],["anime47.com",[25,26]],["doctruyen3qmax.com",26],["toptruyenne.com",26],["animetvn2.com",[27,28]],["animet.net",[27,204]],["appvn.com",29],["huphimtv.com",[29,91,92,93]],["javtopxx.com",[29,95]],["laptrinhx.com",29],["linkerpt.com",29],["tinnhac.com",29],["xemphimvuis.com",[29,93]],["animevietsub.fan",[29,173]],["film365.in",[29,70,175,176]],["vlxx.moe",[29,63,108,202]],["ghienphim8.net",[29,193,213]],["ophimhdvn2.net",[29,227,233]],["phimgigi.net",[29,227,233,234]],["soikeo365.net",[29,239]],["vieclam123.net",29],["xemphimviet1.net",[29,193,213,252]],["cungthi.online",29],["antt.vn",29],["bongda24h.vn",29],["kienthuc.net.vn",[29,353]],["nhadautu.vn",29],["saostar.vn",[29,363]],["vietnamplus.vn",[29,386]],["banhkhuc6.com",[30,31,32,33,34,35,36]],["90phut9.live",[30,33,35,36,187]],["cakhiav.com",[33,41,42,54,55,56,57,58,59,60]],["bongcam.live",[33,36,188,189,190]],["khomuc9.live",[33,190,191]],["vebot.live",[33,41,42,53,56,57,58,60,190,194,195]],["thapcam.net",[33,36,190,194,240,241]],["90phutc.tv",[33,41,42,55,56,57,272,273,274]],["xoilac85.tv",[33,41,42,56,57,59,60,190,268,274,282,283]],["baomoi.com",37],["m.baomoi.com",38],["baonga.com",39],["bongda12h365.com",40],["bongdainfoz.com",[41,42]],["xoilaczz.tv",[41,194,274,283,284]],["bongdalu6.com",43],["bongdaso12.com",[44,45]],["bongdaso66.net",[44,45]],["tvso1.com",45],["blog.abit.vn",[45,291]],["hoatieu.vn",[50,143,165,343]],["canhrau.com",61],["topthuthuat.com",61],["chillphim1.com",[62,63]],["zuiphim.com",63],["chouc.com",64],["clbgamesvn.com",65],["cmangaaz.com",66],["coccoc.com",67],["contuhoc.com",68],["cryptoviet.com",69],["dongphymz.com",70],["motchill3.com",70],["motphim1.info",[70,180]],["iphimchilla.net",[70,218]],["phimbathu.one",[70,253]],["dexuat.com",71],["diadiem.com",72],["doisongphapluat.com",73],["dtruyen.com",74],["dubaotiente.com",[75,76]],["ducvietonline.de",76],["bongda.com.vn",[76,305]],["giadinhonline.vn",[76,323]],["taichinhdoanhnghiep.net.vn",[76,193]],["nongnghiep.vn",[76,323]],["vietnamnet.vn",[76,385]],["ebookbkmt.com",77],["ephoto360.com",[78,79]],["thiepmung.com",79],["ophim.vip",[79,115,133,286]],["fsharetv.com",80],["game4v.com",81],["forum.gocmod.com",82],["hayghe2.com",84],["hh3dhay.com",[85,86]],["khoaiphim.com",[86,96,97]],["phimhay.in",86],["chillhayy.online",86],["phimvuihd.org",86],["vietphims.tv",[86,281]],["hoahoc247.com",87],["hoidap247.com",88],["homedy.com",89],["hotruyen.com",90],["phim18zz.com",[93,124]],["hdphimhay1.xyz",93],["javtiful.com",94],["khosinhvien.com",98],["lacaigi.com",99],["laptrinhcanban.com",100],["lichngaytot.com",101],["lichvannien365.com",102],["link1s.com",103],["lmssplus.com",105],["loigiaihay.com",106],["luotphimtv1.com",107],["luotphim1.net",107],["luotphim2.net",107],["luotphimtv.vip",107],["mehoathinh3.com",[108,109]],["mephimmy2.com",108],["mephimnhat2.com",[108,109,110,111]],["mephimthai2.com",108],["animevip.tv",108],["phimmoi2.com",[109,110,111]],["phimnhanh2.com",[109,110,111]],["vuighe2.com",[109,167]],["metruyencv.com",112],["mmo4me.com",113],["baodauthau.vn",[113,296]],["motphimtw.com",[114,115]],["motchill.info",[114,115]],["phimmoichillg.net",115],["mphim14.com",[116,117]],["phimmoinay.tv",[116,158,236]],["phimanimehd.net",[117,137,224]],["muabanraovat.com",118],["muaxegiatot.com",119],["nettruyenus.com",120],["nhattruyenup.com",120],["tin2.news25link.com",121],["nhaccuatui.com",122],["ophimhay.com",123],["phim202.com",125],["player.phimbocn.com",126],["cliphotvn.2tenz.top",126],["phimchat2.com",127],["saytruyenmoi.com",127],["phimbo88vn.net",127],["truyentuan.com",[129,156]],["tenovi.net",129],["phimhaymoi.com",131],["phimnhua.com",134],["phimyeuthich.com",[137,138]],["boophim.net",[137,207]],["lxmanga.net",[137,138,224,225]],["phimnet.vip",[137,176,287]],["truyensextv.com",[138,154]],["photoshoponlinemienphi.com",139],["gameviet.mobi",139],["phuongtrinhhoahoc.com",[140,141,142]],["ketqua247vn.org",140],["tructiepbongda25.com",142],["thanhnien.vn",[142,368]],["quantrimang.com",[143,144,145]],["vndoc.com",[145,165]],["khoahoc.tv",145],["download.com.vn",145],["download.vn",[145,328]],["gamevui.vn",[145,328,337]],["meta.vn",145],["razorphimzz.com",147],["tctruyen.com",148],["thoctv.com",149],["thuthuatjb.com",150],["thuthuattienich.com",151],["toithuthuat.com",152],["truyensieuhay.com",155],["tvzinghd.com",[157,158]],["vatlypt.com",159],["vesotantai.com",160],["vietcetera.com",161],["vietgiaitri.com",162],["vietjack.com",163],["vietyo.com",164],["vtruyen.com",166],["webhoctienganh.com",168],["webphim2.com",169],["webtretho.com",170],["xosodaiphat.com",172],["chillhay.im",174],["a3manga.info",177],["kienthucforex.info",179],["phimhaytv.info",181],["xoivo7.info",[182,183,184,185]],["vaoroi13.online",[182,183,246,254,255]],["vaoroi365.net",[183,184,245,246]],["maclife.io",186],["mannhan2.live",[192,193]],["thichxemphim1.net",[193,242]],["baoxaydung.com.vn",193],["oj.husc.edu.vn",193],["tienphong.vn",[193,296,372,373]],["toquoc.vn",193],["zingnews.vn",[193,347,394]],["chotlo.me",196],["ngaytho.me",197],["thethao12h.me",199],["zophim.net",203],["bantincongnghe.net",205],["blogkiienthuc.net",206],["chodansinh.net",208],["daominhha.net",209],["designervn.net",210],["dongphim3s.net",211],["gamenoob.net",212],["giavang.net",214],["romgoc.net",214],["truongblogger.top",214],["gockhuat.net",215],["gocphimk.net",216],["hoc247.net",217],["vn.javbabe.net",219],["kienviet.net",221],["laptrinhvb.net",222],["linkneverdie.net",223],["mephimnhez.net",[226,227]],["metruyencv.net",229],["mitub.net",230],["nhacpro.net",232],["phimtho.net",236],["protruyen.xyz",[236,398]],["qthang.net",237],["sachmoi.net",238],["vietmoz.net",247],["vnexpress.net",249],["vtipster.net",250],["bongdahomnay.org",256],["btcvn.org",257],["vn.phym18.org",259],["traderviet.org",260],["xemtivingon.org",263],["keonhacai5.top",[263,270]],["tuoi69.pro",266],["viet69.tube",271],["hhhkungfu.tv",275],["phimdacap.tv",278],["vieclam.tv",[279,280]],["xskt.com.vn",280],["khiphach.vip",285],["24hmoney.vn",288],["2banh.vn",289],["2game.vn",290],["afamily.vn",292],["sport5.vn",292],["m.afamily.vn",293],["autodaily.vn",294],["xehay.vn",[294,392]],["baodansinh.vn",295],["blogtruyen.vn",297],["cafebiz.vn",298],["cafef.vn",299],["ttvn.toquoc.vn",299],["careerlink.vn",300],["chap.vn",301],["24h.com.vn",302],["autopro.com.vn",303],["baohaugiang.com.vn",304],["congan.com.vn",306],["daklak24h.com.vn",307],["dantri.com.vn",308],["ecci.com.vn",309],["fptshop.com.vn",310],["haiquanonline.com.vn",311],["nld.com.vn",312],["tamlinh247.com.vn",313],["tapchikientruc.com.vn",314],["thanhtra.com.vn",315],["thoidai.com.vn",316],["petrotimes.vn",316],["thuongtruong.com.vn",317],["thuysanvietnam.com.vn",318],["trithuc24h.com.vn",319],["voh.com.vn",321],["congluan.vn",[322,323]],["congly.vn",324],["dangtinbatdongsan.vn",325],["realty.vn",[325,360]],["danviet.vn",326],["docnhanh.vn",327],["kienthucykhoa.edu.vn",329],["eva.vn",330],["fshare.vn",331],["game24h.vn",332],["game8.vn",333],["gameio.vn",334],["gamek.vn",335],["soha.vn",335],["gametv.vn",336],["genk.vn",338],["giaoducthoidai.vn",339],["vnews.gov.vn",340],["plus.gtv.vn",341],["helpex.vn",342],["hoc24.vn",344],["hosocongty.vn",345],["kenh14.vn",346],["kinhtedothi.vn",347],["minhngoc.net.vn",347],["vn-z.vn",347],["lazi.vn",348],["luatvietnam.vn",349],["lucloi.vn",350],["muare.vn",351],["myeva.vn",352],["phunumoi.net.vn",354],["nhipcaudautu.vn",354],["nhacdj.vn",355],["nhatrangclub.vn",356],["olug.vn",357],["phapluatplus.vn",358],["qdnd.vn",359],["reatimes.vn",361],["rung.vn",362],["sharecode.vn",364],["softonic.vn",365],["startalk.vn",366],["stockbiz.vn",367],["thethao247.vn",369],["thethaovanhoa.vn",370],["thitruongtaichinhtiente.vn",371],["tinnhanhchungkhoan.vn",373],["tiin.vn",374],["timdaily.vn",375],["tinhte.vn",376],["tintucvietnam.vn",377],["truyenfull.vn",378],["tuyengiao.vn",380],["tvphapluat.vn",381],["v4u.vn",382],["vietfones.vn",383],["vietnamgsm.vn",384],["vietq.vn",387],["viettelstore.vn",388],["voz.vn",389],["vungoctuan.vn",390],["webthethao.vn",391],["yellowpages.vn",393],["plvb.xyz",397]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["livescore.com",[0]],["msn.com",[0]],["dm.de",[0]],["medium.com",[0]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
