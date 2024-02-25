/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
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

// ruleset: idn-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = [".popbox","#popup_bawah,\n#popup_box","[href=\"https://tinyurl.com/anoboyvip\"]","[href^=\"https://bit.ly/\"]","[href=\"https://klik.gg/anoboy\"],\n[href=\"https://klik.gg/anoboyvip\"]","#headads","#ptbanner","#top-banner","#ads","#le_header_ads","#ouibounce-modal","#sgpb-popup-dialog-main-div-wrapper",".sgpb-popup-overlay","#teaser3",".kln",".ads","#fbanner,\n#fbbanner,\n#pbanner","#hbanner","[href^=\"https://yukclick.me/dunia21\"]","#teaser1","#teaser2","#floating_bot","#floatbottom,\na[href][target=\"_blank\"] > img[src$=\".gif\"]","#floatcenter",".adsrow",".lepopup-popup-container,\n.lepopup-popup-overlay,\nimg[alt=\"Advertisement\"]",".lepopup-popup-loader",".banner-float-bottom-2.banner-float-bottom","#repop","#floating_bot.btm_ban","#floating_banner_top1",".box_item_berlangganan_popup","a[href^=\"https://cek.to/\"]",".mfp-inline-holder.mfp-s-ready.mfp-container",".mfp-ready.mfp-with-zoom.mfp-no-margins.mfp-img-mobile.mfp-bg",".lazyloaded.loaded.ads-50","#overplay",".sgpb-popup-dialog-main-div-wrapper","#floattop,\n#top6",".banner-img",".lazyloaded.ads-50","#btm_bannerMobile","a[href^=\"http://bit.ly/\"]","a[href^=\"https://goo.gl/\"]","#semprotpokemon_3,\n#semprotpokemon_4",".lazyloaded.ls-is-cached.bannerdua,\n.lazyloaded.ls-is-cached.bannersatu","#KD_adpB,\n.krucil_ads",".banner-float-bottom","#fixedban","#iklantengah1","#tutupen,\n[href=\"https://bit.ly/idx-xx\"]",".headbanner","#floatbanner-bottom",".ban_empat",".adscenter","div[id^=\"floating_banner_bottom\"]","#advertisement","#overlay",".sgpb-popup-overlay.sgpb-popup-overlay-19287.sgpb-theme-1-overlay",".underlay","#iklap,\n#iklhead,\n#jwp_gmn_adss","#promoContainer",".blocker.jquery-modal",".jwseed",".kln.mlb.blox",".wp-image-80765.size-full.alignnone",".banner-left,\n.banner-right","#kayan_reklam_sag,\n#kayan_reklam_sol",".contentlist","[href^=\"https://manjur.id/search.php\"]",".td-header-rec-wrap",".sg-popup-content","#middle-banner","div[class^=\"adsgen\"],\ndiv[class^=\"mobileads\"]",".lmd-iklan","#popup_content","#tengah > span",".imgbanner","#floating_banner_left,\n#floating_banner_right","#wrap > .headborder > .headcontent > .textwidget","#col,\n#tengah,\n#tengahaa,\ndiv.content-kuss",".klikdisini","#fadeinbox","#filmoncereklam","a[href^=\"https://bit.ly/\"]","a[target=\"_blank\"][rel=\"nofollow\"] > img[src$=\".gif\"]","#banner-tengah","[href$=\"/sukamovieclub\"]","[href^=\"/GoUrl.php?ads=\"]",".pop-overlay","[href^=\"http://152.44.32.81\"]","#btm_banner",".iklansamping,\n.klnrec,\na[rel=\"nofollow\"] > img[src*=\"bp.blogspot.com\"],\na[rel=\"noopener\"] > img[src*=\"bp.blogspot.com\"]","#bioskop-kiri,\nbioskop-kanan","#modal","#myModal","#playerOverlay","a[href^=\"https://shope.ee/\"]","iframe[style*=\"z-index: 2147483647\"]","a[href][target=\"_blank\"][rel=\"nofollow\"] > img[src$=\".gif\"]",".td-banner-wrap-full","#div-Inside-MediumRectangle",".ad-photo,\n.commSkin__fluid--left.commSkin__fluid,\n.commSkin__fluid--right.commSkin__fluid,\n.mb3.gpt-ad-head-wrapper.widget",".cls-outstream","#advertisement-2",".banner-fix-bottom,\n.banner320x480,\n.banner970x250,\n.bannerfull,\n.bannerhead,\n.closebanner1,\n.closebanner2,\n.head-banner,\n.parallax-box",".ayu-headads","#energysaving",".banner","img[width=\"720\"][height=\"90\"]","#floatads1",".middle-ad-cont",".anm__flying--ads-holder","#cont-megabillboard","a[href^=\"http://anizan.slask.pl/go.php\"]","#billboard",".underlay-ad","#floatbannerkanan","#floatbannerkiri,\n#popupklan","#floating_banner_top","#popupklanfooter,\n.pc-only.inline-banner","#billboard_banner","#floating_banner_bottoms","#floating_banner_tops","#wrap > center",".headborder:nth-of-type(5)",".adsPushdown,\n.billboardBig.billboard,\n.billboardBottom,\n.billboardFlying,\n.billboardFlyingBanner,\n.billboardFlyingFix,\n.billboardFlyingInner,\n.billboardLeaderboard.billboard,\n.billboardPushdown,\n.billboardRectangle.billboard,\n.billboardTop.billboard,\n.skyscrapper--left,\n.skyscrapper--right",".flying_carpet_show,\n.flying_carpet_show_inner","#floating_banner_bottom2,\n#floating_banner_top img[width=\"728\"][height=\"90\"]","#HTML2,\n.lalulintas",".ads-on,\n.ads__stick--left,\n.ads__stick--right,\n.ads_below_photo,\n.float-ads",".ads-partner-wrap",".ads__top-big,\n.cls-composite,\n.cls-geniee",".mgidclsbanner",".pushdown-banner",".code-block",".wpa","#adsic728,\n#adsic7282",".ad","#hbanner:nth-of-type(1)",".adstops","#sgcboxOverlay",".detikads",".megabillboard",".footer_banner",".ad_billboard,\n.detail_ads",".ads-scrollpage-container,\n.parallaxindetail",".ads-scrollpage-height",".ads-slot",".paradetail",".Widget:nth-of-type(2),\n.Widget:nth-of-type(3)","#ads-728,\n#ads-960-mid,\n#ads-mid,\n#mid-banner,\n.ads2-home,\n.fixed-ads-atas,\n.mid-banner","#bottom_banner","#leaderboard[style*=\"width: 750px;height: 100px;\"],\n#megabillboard-desktop,\n#otp_banner,\n#skinad,\n#sto_banner,\n#top_banner,\n.banner_inside_article,\n.bb_banner,\n.billboard-top,\n.normalbanner,\n.otp_banner_close,\n.parallax_abs,\n.sisip_video_ds,\n.skinad_1,\n.skinad_2","[href^=\"http://www.dukungbpjs.com/ref.php\"]","#ads-stack,\n#close-ads-stack,\n#itro_opaco,\n#itro_popup","#float-bottom-banner",".visible-lg",".ads_square_banner,\n.section_sticky_ads_bottom",".banner-common",".left.banner-vertical,\n.right.banner-vertical","#peluang",".ktzsingle-bannerright",".ads-billboard",".pps-single-popup",".random","#footer_sticky_inside",".adsense-header-in-article",".box","#jxOutstreamContainer",".ads-liftdown,\n.ads__stick,\n.ads__stick__fluid,\n.ads__stick__fluid--left,\n.ads__stick__fluid--right,\n.ads__stick__wrap,\n.ads__top-big250,\n.js-ads-stick,\n.read__left",".ads__boxr",".blocker-notice,\n.blocker-overlay","#balloonads,\n#megabillboard,\n#parallaxdetail,\n.ads_native_d,\n.billboard__banner,\n.parallax1","#ads-float,\n#solopos_float,\n.bottom-fix","#bannerkategoriheader,\n#mybannerpopup,\n#mybannerpopup2",".article-bottom-ad,\n.article-desktop-ad",".spb_middle.spb_banner","#text-28 > .textwidget,\na[href^=\"http://www.pembesar-vimax-herbal.com/\"]","[style=\"float:right; margin:7px 0 10px 10px;\"] > small",".parallax-ad",".sponsor_ads:nth-of-type(1),\n.sponsor_ads:nth-of-type(2),\n.sponsor_ads:nth-of-type(4)","#floating_ads_bottom_textcss_wrap",".adBar-vertical.left,\n.adBar-vertical.right","#IklanIDGS,\n#bottombanner",".ktz-banneraftercontent","#headerbanner","#baca_juga,\n#more_stories,\n#title_kanal,\n#vertical_top_kanal",".aligncenter","#player-side-right","._ning_link.strack_cli","#anchormasklink",".bt-g1.b-g3.wb-300x100,\n.bt-g1.b-g3.wb-300x250","#bannerkiri",".d.wp-120x600,\n.wb-300x250","[style^=\"padding-top:16px;margin-bottom:24px;\"]","img[style=\"width: 125px; height: 125px;\"]","img:nth-of-type(2)","[class^=\"ad-\"][class*=\"-container\"]","#in_image,\n[class$=\"__disclaimer\"]","#banner-popup,\n.gmr-banner-afterrelpost,\n.gmr-banner-logo,\n.gmr-footerbanner,\n.gmr-topbanner,\n.gmr-verytopbanner","#hello",".adv-space","#leaderboard",".bottom-frame-banner-close-btn,\n.bottom-leaderboard-cont,\n.skycapper","#dfp-bframe-cont","#v5-marcommpromotion.home-right-box,\n#v5-marcommpromotion2,\n#v5-showcase3,\n#v8-leaderboard,\n.crm-wrapper","#v5-showcase1,\n#v5-showcase2",".ad2","#blockblockA",".ads__under__image",".textwidget img[width=\"300\"][height=\"250\"],\ncenter img[width=\"728\"][height=\"70\"]","#left-skyscraper,\n#right-skyscraper,\n.ad.b300x250","#floatbanner","#box-zone_osm,\n#credential_picker_container,\n#crt-225c8f8a,\n#crt-4f9f1ad0,\n#crt-f6d317f5,\n.ads-latest-wrap,\n.ads-on-body,\n.adsMR1Lipsus1,\n.bannerAdB,\n.bannerCenter,\n.bannerCenter1SubRubrik,\n.bannerCenter2SubRubrik,\n.bannerCenterRubrik,\n.bannerR,\n.bannerR2,\n.bannerR2A,\n.bannerR3,\n.bannerR3A,\n.bannerTopOut,\n.boxBanner1,\n.boxBanner3,\n.boxBannerR1akt,\n.boxSkinAd,\n.clearfix.kcm__big.kcm,\n.clearfix.kcm__horizontal.kcm,\n.clearfix.kcm__rectangle.kcm,\n.clearfix.kcm__sticky.kcm,\n.clearfix.kcm__top.kcm,\n.clearfix.kcm__tower.kcm,\n.clearfix.kcm__track.kcm,\n.gramedia__gate,\n.hAds,\n.kcm-track,\n.kcm-track-sticky,\n.kcm__articleList,\n.kcm__stick--left,\n.kcm__stick--right,\n.kcm__superbig.kcm,\n.native-wrap,\n.ol_big_inner,\n.premium_div,\n.show.ol_promo,\n.video-box-wrap,\n[src^=\"https://adsimg.kompas.com\"]","iframe[title=\"3rd party ad content\"]",".bannerTop1",".banner-center,\n.banner-mgid",".banner-dable.banner,\n.banner-gennie.banner,\n.banner-mgid-read.banner,\n.banner-right-big.banner,\n.banner-right.banner,\n.mb20.mt20.banner-dable-read.banner","#bannertheme_left,\n#bannertheme_right",".adssingle,\na[href=\"http://kshowid.com/advertising/\"]","center",".banner_box",".banner_main,\n.leftcontent[style=\"padding:0px; margin:0px auto; height:250px; width:720px; border:0px; background:none; \"]",".img-banner","#idcomboard1.com-728x90,\n#idcomright1.com-300x250,\n#idcomright2.com-300x250,\n#idcomsensebox1.com-300x250,\n#idcomsky1.com-160x600,\n.ctnitem.ctncom","#lht2_lesson_after_vocab2_300x250_phone,\n#lht2_lesson_bottom_300x250_phone,\n#lht2_lesson_top_320x50_phone,\n#lht_base_bot_320x50_phone,\n#lht_lesson_right2_300x250_desktop,\n#lht_lesson_right_300x250_desktop",".box-ads-right","#float-banner","#rotating",".ad_990_80",".hero_adslot",".manado-widget","#aa,\n#close,\n.mas_tamvan","#lbanner","img[width=\"240\"][height=\"240\"]",".masthead","#floating_ads_bottom_textcss_container",".banner-top,\n.bannercol,\n.bannerfloat,\n.bannerpos,\n.cell_banner_inside","#ad-genie-container,\n#div-paralax-container",".js-tower-sticky.clearfix.kcm__tower.kcm",".nkt__stick--left,\n.nkt__stick--right",".p-press__ad",".spnsr-top,\n.vip-info","a[href][target=\"_blank\"] > img",".in.modal-backdrop","#fab","[href^=\"//wizliebeg.com/\"]",".box_item_berlangganan",".sitemaji_banner","#nbpopx-wrapper,\n.jx-ads.nobar-ads","#left_ads_float_phonedevelop,\n#under-video-ads,\n.mask-ads","#wrap > table","#sidebar-right,\ncenter > table",".bannermovie,\n.banners",".content-kuss-ikln","#fatas","#previewBox2","#previewBox4","#floatbawah",".ads-bottom-fixed,\n.ads-mega-box,\n.center-ban,\n.center-paralax,\n.detads,\n.flying_ads,\n.rc-ad-300x250,\n.skyscrapper,\n.sponsored-belt468x60",".banner-zone",".r-ads",".alignnone.size-large.wp-image-458",".megabillboard-container",".float-ck",".gpt-ad-inner,\n.site-sticky-bottom","#float-left,\n#float-right",".sg-popup-builder-content",".sgpb-popup-dialog-main-div-theme-wrapper-6","a.thirstylink",".semprotnenenmontok_2",".c-message > div:nth-of-type(1)","#me-div-gpt-ad-parallax,\n.clear.size-wide-custom.dummy","div[style=\"height:260px;\"]",".margin-right-40.left.pullquotes,\ndiv.ad-before","#forum_ads_8,\n#sodasusu_ads_side_left,\n#sodasusu_ads_side_right","#teaser4","#adds-top,\n#desktop-native-1,\n#desktop-native-2,\n#div-ad-dbt,\n#pariwara_dua,\n.adds-top.add,\n.bg-ads-sticky-side,\n.bg-ads-sticky-top,\n.parallax_swipe,\n.placeholder_belt,\n.placeholder_expose,\n.placeholder_leaderboard,\n.placeholder_medium,\n.placeholder_r1,\n.placeholder_r2,\n.placeholder_r3,\n.placeholder_read_body,\n.widget-ads-top,\n[id^=\"berita-terkait-\"],\ndiv.placeholder_pariwara","#anchorads",".\\33 .Premium.Sundul,\n.\\34 .Premium.Sundul","#right_ads_float_phonedevelop,\n.overlay","div[style=\"position:absolute; top:20px; left:45px; width:70px; background:#000; text-align:center;\"]","#fancybox-wrap","#fancybox_ajax,\n.advertisement_box1,\n.advertisement_box2","#banner-atas,\n#banner-bawah",".expandable-bottom-sticky,\n.tjp-placeholder-ads","div[data-testid=\"featuredShopCntr\"],\ndiv[data-testid=\"topadsCPMWrapper\"]","#idb3","#div-Right-MediumRectangle-1","#div-Top-Leaderboard","#bannerku,\n#bannerkubawah,\n#boxright [style=\"width:300px; height:250px;\"],\n#div-Center-FullBanner-1,\n#div-Center-FullBanner-2,\n#div-Tribunnews-Home-Center-2-FullBanner,\n#skinads,\n.ads-placeholder,\n.ads-placeholder-inside,\n.belanja-picks,\n.content [style=\"width:160px; height:600px;\"],\n.ovh[style=\"width:468px;height:60px\"],\nimg[src*=\".pgi.tribunnews.com/\"]","#div-Right-MediumRectangle-3","#boxleft > .mb20",".avert","#an-Modal,\n.reveal-modal-bg","img[width=\"320\"][height=\"105\"]",".banneritem",".code-block-3.code-block","#Ad300B,\n#Ad728","#aside img[width=\"300\"][height=\"250\"],\n#lAds,\n#rAds,\n#simplemodal-container,\n#simplemodal-overlay","#teaser5","#previewBox3","#flobwh,\na[href^=\"https://rebrand.ly/\"]",".show.popup","#floatbot,\n.appup",".mfp-ready.mfp-with-zoom.mfp-no-margins.mfp-img-mobile",".nyaa300,\n.nyaa728",".adsbygoogle",".box-ads--container",".bausastra-ads",".affcoups",".inf_infusionsoft_popup","div.ui_adblock","#TopBannerBg",".bnr",".banner-sc,\n.banner-sc2,\n.col-banner,\n.masonry-brick.drm-banner-x.drm-artikel:nth-of-type(3)",".header__kasad,\n.kasad-h",".flying_carpet_div,\n[style=\"height:0; min-height:180px;\"]","#modalPopup","#adsoutsream,\n.heightads250","#fixslowshow","#dablewidget_RoOGdzom,\n#div-Skycrapper-Stocksetup,\n.heightads600.pad-t.pad-r.pad-l.pad-10,\n.heightads90.ads-middle-list-news,\n.text-center.center.width-px-1100","#Kolom-random-300,\n#iklan-dalam-postingan-300,\n#overlay[style=\"display: block;\"],\nimg[style=\"border:0;display:block;\"]","#top-banner-parallax,\n.banner-parallax",".adsense",".description-ads",".ads-120__left,\n.ads-120__right,\n.ads-160,\n.ads-160-600,\n.ads-300-video,\n.ads_160x600,\n.ads_970x250,\n.set-ads-468,\na[style=\"width: 100%; height: 100%; display: block; position: fixed; z-index: 1\"]","#otp_ads,\n.giant-banner,\n.portlet.sideskycrapper,\n.slotiklan","#bottomframe-ad,\n#skinframe-ad-left",".ad-inventory-wrapper",".ads-article-inner,\n.ads-article-sidebar,\n.cover-ads-article,\n.news__detail-ads","a[href^=\"http://www.apktiga.com/p/start-download-reayus.html\"]","#detailSkinAdLeft,\n#detailSkinAdRight",".ads-mr,\n.ads__skyscraper,\n.ads_imr2,\n.ads_sky,\n.ads_wrapper,\n.bottom_banner-wrapper.relative,\n.clearfix.ads__horizontal,\n.relative.below_photo,\n.relative.skycrapper,\n.relative.w-full,\n.skin_ads,\n.top_banner-wrapper",".mt20.top1,\ndiv.banner-r","#div-top-banner-transparent",".ads_sticky_footer",".ads-sticky-left,\n.ads-sticky-right,\n.bg-grey.text-center.p-0.mb-3.mt-3,\n.mb-4.bg-grey.text-center",".ad-box-wrappr,\n.row > .show-desktop > div,\n.underlay-ad-text-box",".nkt__stick","#main-banner-middle,\n.legend_banner-container,\n.stickybanner",".gambar_pemanis",".ftadss",".parallax_ads,\n.widebanner.banner,\ndiv.showcase.banner,\ndiv.skycrapper.banner","[href^=\"https://scratchy-trick.com/\"]",".cls.code-block-center",".banner-skin--left,\n.banner-skin--right,\n.banner__giant.banner,\n.banner__left.banner,\n.banner__right.banner,\n.banner__top.banner",".ads-popup__inner",".flying_carpet_show_fix",".ads.single_post_content,\n.animated.ads",".adbox","#bkgOverlay,\n#bn-premium,\n#delayedPopup,\n#premium,\n.d-sidebar,\n.skinner-left,\n.skinner-right,\n[id^=\"gpt-inline\"]",".box-ads-300x250,\n.box-ads-billboard,\n.box-ads-billboard-mobile,\n.section-ads-mid",".text-align-center.box-ads-content",".in_up_ad-area",".cads","#ilang2",".modal",".box-banner","#floating_ads_bottom_textcss2",".wait","[href=\"javascript:showHideGB()\"],\n[href^=\"http://dwatngkas.\"],\na[href^=\"http://cocobet.\"]","#ilang1",".adv",".bannersinglefot","#googlebox","#floatbtmleft,\na[href^=\"//angel4d.com/\"],\na[href^=\"//telolet4d.com/\"]",".iklanSUKI",".slot-iklan",".float_tengah,\n.separator",".lenyap",".ad-float-image",".rsABlock","a[href=\"https://klik.fun/Kp7S5\"]",".col-xs-12.col-md-6.col-lg-6",".bannerbawahheader,\n.inline-banner","#previewBox","#ftads,\n.berlangganan-500",".elementor-popup-modal",".bot.ads","ins.adsbygoogle","#float-pop","#overlay-pop","#fancybox-overlay","[href=\"http://bit.ly/adsvbola\"],\n[id^=\"yui-gen\"].postcontainer",".bm.overlay","a.bnner","[href=\"https://klik.fun/ZyslX\"]",".adbtm,\n.bh-ad,\n.block-bh-googledfp,\n.center-block.img-responsive",".stick-leaderboard-wrapper",".cari-ads",".td-banner-bg.td-banner-wrap-full","#Taboola_widget,\n#rec_ad4,\n.tonal__standfirst",".adplaceholder-mrec","[data-testid^=\"featured-ads\"]",".code-block-6,\ndiv[data-ub-carousel]","#sadl,\n#sadr",".ktz_banner","#sct_banner_top,\n#videoad1",".ads-header-5","#bmpop_adpB",".ads-container,\n.showcase.placeholder-container","img.aligncenter",".cfmonitor","#banner-popup-desktop",".idmupi-topbanner","#banner-right",".clearfix.act2-970x90:nth-of-type(1),\n.clearfix.act2-970x90:nth-of-type(3)","img[width=\"1020\"][height=\"350\"]","#semprot_ads_side_left,\n#semprot_ads_side_right","#jsemrp_372_719,\n#jsemrp_373_873,\n#jsemrp_374_469,\n#jsemrp_380_290",".semprotpokemon_1,\n.semprotpokemon_2",".coliklan",".cm-popup-modal",".banner3",".blox","#floatads2,\n#floatads3",".anuads","a[title^=\"manga4d\"]","#openpopunder","#adrandpop,\n#aplikasi",".mvic-btn","#floatads,\n.active.adde_modal-overlay,\n.adde_modal_detector-show.adde_modal_detector","a[href^=\"//bit.ly/\"]",".footer_sticky","#videoOverAd","#tutup,\n#tutup2","#float-atas",".header-banner","#lmd-iklan",".swal-overlay--show-modal.swal-overlay",".s-sponsor","#popuppress-9119,\n#top-banner-content","#main-popup",".banner-middle","[class*=\"banner\"]","a[target=\"_blank\"][rel^=\"noopener noreferrer\"] > img[src$=\".gif\"]",".kzl-header.kzl","[href=\"https://klik.gg/manhwadesu\"]",".iklan-tengah","[href$=\"/referral/nontoncinema\"],\na[href^=\"http://referral.\"]",".box_banner","[href=\"//dumbpop.com/help.xml\"]","#largebanner","table","#ffbp-bg,\n#ffbp-body,\n#ffbp-close",".btm_ban",".full-brkas-container",".setdah","a[rel^=\"nofollow noopener\"] > img[src$=\".gif\"]","#ffbp,\n#popup",".gmr-bannerpopup,\n[href^=\"//avgirls.asia/\"]",".add,\n.mobi.content-left,\n.mobi.content-right","#wpb_overlay,\n.wpb-image-popup.wpb-main-wrapper","#epmblock",".av-content-full",".adsincenter","#bannerhomefooter","#ftadsth",".ik-overlay","#player-side-left","#home-bnner-content","#home-bnner2-content,\n.reklam-goster-sag,\n.reklam-goster-sol","#directorio > .random > center","#sidebar_right > .side:nth-of-type(5) > .textwidget,\n#sidebar_right > .side:nth-of-type(6) > .textwidget,\n#sidebar_right > .side:nth-of-type(7) > .textwidget,\n#sidebar_right > .side:nth-of-type(8) > .textwidget,\n#sidebar_right > .side:nth-of-type(9) > .textwidget",".bannerwrap","#previewBox1","#top-bnner-content","#_popIn_recommend_word,\n.alert,\n.container_skinad,\n[class^=\"ads-\"]",".fancybox-skin",".navbar-brand.bot,\ndiv[id^=\"previewBox\"]",".ads728-slot-panjang",".banner-premium","[class=\"sc__wrp\"]","[class^=\"xnxx5-\"]","[href^=\"https://klik4.me/dunia21\"]","#content > div:nth-of-type(1)","#playerOverplay"];

const hostnamesMap = new Map([["agenbokep.co",[0,89]],["agenbokep.guru",[0,89]],["agenbokep.pro",0],["139.99.33.205",3],["139.99.120.222",[3,53]],["185.231.223.76",[3,60,61]],["gudangmovies21.cfd",3],["pecintabokep.club",[3,85]],["21filem.co",3],["bioskop45.co",3],["lk21go.fun",3],["mangakita.id",[3,10,13,14]],["manganime.in",[3,370]],["mangakita.net",[3,10,13,14,91,419]],["www.nontondramas.net",3],["kawanfilm21.online",[3,30]],["movieajip.online",3],["kawanfilm21.pro",[3,30]],["otakudesu.watch",3],["gm21.xyz",3],["kuramanime.xyz",[3,13,478]],["anoboy.ink",4],["bioskopkeren.beauty",5],["bioskopkeren.bond",5],["bioskopkeren.sbs",5],["158.69.0.212",7],["terbit21.cafe",[7,72]],["movies21.co",[7,72]],["bioskopkerenin.com",7],["kebioskop21.com",7],["lk21tv.com",[7,72,156,228,229]],["dunia21.cx",[7,72]],["bioskopkeren.dev",7],["lk21.web.id",[7,42,228,363]],["sinemaindo.web.id",[7,42,228,357,367]],["terbit21.in",7],["kebioskop21.online",7],["ganool.watch",[7,72]],["ganool21.watch",7],["cctvbokep.bet",8],["inibokep.bet",8],["dutasex.bio",8],["perawabokep.cam",8],["perawanbokep.cam",8],["cctvbokep.help",8],["budiarto.id",[8,310]],["cinemaindo.web.id",[8,17,357,358]],["malemjumat.ink",8],["malemjumat.lol",8],["malemjumat.mom",8],["dutasex.top",8],["filmapik.tv",8],["5.182.209.205",9],["filmapik.kim",9],["filmapik.sbs",9],["filmapik21.space",9],["173.249.59.185",10],["149.102.130.200",[10,30]],["194.163.145.21",10],["94.250.202.221",10],["185.217.95.30",10],["161.97.116.33",[10,30]],["207.244.225.48",[10,59]],["185.217.95.49",[10,14]],["173.212.245.75",[10,30]],["154.12.229.9",[10,30]],["81.0.220.98",[10,30]],["drakorindo.best",10],["giladrakor.com",10],["gudangmovies21.lol",10],["gatsunime.org",[10,437]],["indosemi45.org",10],["manhwaid.org",10],["layarkeren.site",10],["gudangmovies21.skin",10],["kazemanga.xyz",[11,268]],["65.108.132.145",[12,19,20,36,37]],["oploverz.bz",[12,36,71]],["sebokep.com",[12,40,268,269]],["oploverz.top",[12,13,14,19,20,36,71]],["45.12.2.2",[13,14,31,49]],["15.235.11.45",[13,14,19,36,37,58]],["komik18.art",[13,64]],["komikdewasa.art",[13,65]],["bioskop201.biz",[13,20,67,68]],["animasu.cc",[13,74]],["manhwaindo.cfd",[13,14]],["bioskop21.co",13],["bioskopgalaxy21.com",[13,20,119,124]],["doujinlands.com",13],["downloadfilmbaru.com",[13,20,155]],["layarbiru21.com",13],["lmanime.com",13],["realmscans.com",[13,19,20]],["warungkomik.com",13],["22cinema.download",[13,20,301]],["oploverz.fan",[13,14,19,20]],["nontonmovie.web.id",[13,20,139,365]],["luciferdonghua.co.in",13],["filmbaru.in",[13,20]],["luciferdonghua.in",[13,19,20]],["oploverz.info",[13,14,19,20,36]],["pemersatu.link",13],["komikcast.lol",13],["sektedoujin.lol",13],["komikdewasa.me",[13,14]],["komikmanhwa.me",[13,388]],["kumapoi.me",13],["mangaindo.me",13],["manhwaindo.me",[13,14]],["kikil.net",13],["komiku.net",[13,20,417]],["movie76.net",[13,20,119,122,124]],["ganool.nl",[13,20]],["mangakyo.org",[13,14]],["ganool.ph",[13,20,375]],["cinemaindo.stream",[13,19,20,140]],["cinemaindo.tv",[13,19,20,465]],["oploverz.tv",[13,14,19,20]],["animexin.xyz",[13,23]],["kanzenin.xyz",13],["107.152.37.223",[14,54]],["185.217.95.43",14],["185.217.95.48",14],["157.245.12.72",14],["komikremaja.club",14],["komikindo.co",[14,97]],["komikstation.co",[14,98]],["manhwalist.com",14],["mareceh.com",14],["nontondramaseri.com",14],["starjepang.com",14],["lendirpedia.fun",14],["anikor.icu",14],["anoboy.id",14],["kiryuu.id",[14,98]],["manhwaindo.id",14],["isekaisubs.web.id",[14,19,20,23]],["oploverz.co.in",14],["westmanga.info",[14,374]],["komikcast.io",14],["tv1.anikor.lol",14],["hencop.lol",[14,277]],["komikindo.me",14],["manhwaland.mom",14],["skandalpedia.mom",14],["kazefuri.net",[14,416]],["mangashiro.net",[14,19,84,420]],["mirrorkomik.net",[14,421]],["animasu.nl",[14,430]],["skandalpedia.rest",14],["anichin.top",14],["manhwaland.top",14],["anichin.vip",14],["kazefuri.vip",14],["95.216.163.177",15],["192.99.70.18",15],["samehadaku.cam",[15,22,23]],["akurat.co",[15,90]],["22cinema.com",[15,106]],["ayojakarta.com",[15,113]],["topgans.blogspot.com",15],["dapurpacu.com",[15,151]],["dewanontons.com",15],["download-lagu-mp3.com",15],["embed.dramanices.com",15],["duniafilm21.com",15],["gridoto.com",[15,103,130,131,134,169,170,171]],["harianjogja.com",[15,174]],["jawapos.com",[15,113,199]],["kompas.com",[15,131,134,214,215]],["smallencode.com",15],["samehadaku.day",[15,22,23,24]],["embed.dramacool.es",15],["republika.co.id",[15,327]],["komikindo.info",15],["dunia21.ltd",15],["k-vid.net",15],["otakuindo.net",15],["neumanga.tv",[15,19]],["layarkaca21.com",17],["layarkaca21.web.id",17],["layarkaca21.net",17],["lk21.org",17],["lk21official.wiki",18],["film-ganool.co",[19,20]],["cinemaindo.com",[19,20,140]],["film-ganool.com",[19,20,165]],["filmroster.online",19],["bioskopmovie.tv",[20,464]],["ruangbokep.bond",21],["sibokep.bond",21],["ruangbokep.sbs",21],["streamingbokeponline.site",21],["ruangbokep.top",21],["streamingbokeponline.top",21],["kamarbokep.xyz",21],["kebokepanku.xyz",21],["samehadaku.run",[22,23,24]],["149.28.158.117",23],["212.32.226.234",23],["awsubs.co",[23,91,92]],["bgibola.com",[23,117,118,119,120]],["bgibola.lat",[23,117,118,119,376]],["anixlife.xyz",23],["samehadaku.win",24],["shinigamitoon.com",25],["51.81.238.0",27],["193.178.172.113",28],["157.245.195.114",29],["75.119.147.12",30],["194.163.158.12",30],["45.67.231.215",30],["89.117.61.35",30],["185.182.187.38",30],["46.149.76.81",30],["cinema-indo.co",30],["zonafilm.icu",30],["nontonlk21.live",[30,119]],["194.163.183.129",[31,32]],["37.49.229.132",[33,34]],["juraganfilm.icu",[33,306]],["216.155.135.144",35],["oploverz.best",36],["oploverz.love",36],["80.209.252.146",38],["164.68.127.15",39],["194.233.87.224",39],["154.26.132.73",39],["bokepmobile.fun",39],["194.233.73.15",40],["103.194.170.153",41],["xtubecinema.club",[41,88]],["xtubecinema.top",41],["46.166.167.16",[42,43,44]],["lk21.cam",42],["nekopoi.care",[42,73]],["nekopoi.cash",[42,73]],["gudangmovies21.cc",42],["indomovies.club",42],["indoxx1.club",[42,80]],["bioskop168.co",[42,93]],["filmbioskop21.co",42],["layarmovie21.co",42],["nontonsub.co",42],["01nonton.com",42],["123drakor.com",[42,43]],["bioskop45.com",[42,43]],["idbioskop.com",[42,43]],["nonton-streaming.com",42],["nonton789.com",42],["nontongratis88.com",42],["nontonmovie81.com",42],["nontonsub.com",[42,84]],["sashahillfilm.com",42],["semprot.com",[42,44,271]],["semprotku.com",[42,44]],["thirdstarfilm.com",42],["layarkacaxxi.id",42],["meownime.id",42],["zonabola.id",42],["nekopoi.lol",[42,73]],["animeboy.me",42],["nontonani.me",42],["nontondrama.me",42],["ns21.me",[42,43,53]],["sukamovie.mobi",[42,51]],["gandhool.net",42],["indomv.net",42],["nonton33.net",[42,43]],["satujiwa.net",42],["bioskop168.online",[42,93]],["layarxxi.online",[42,433]],["bioskop168.pro",[42,84,93]],["lk21.rip",42],["dewamovie.tv",42],["drakorindo.tv",[42,43]],["filmroster.tv",42],["ganoolmovie.video",42],["bioskopkeren.club",43],["bioskopxx1.com",43],["moviebaru21.com",[43,110]],["serunonton.com",43],["awsubs.id",43],["bioskopkeren.online",43],["indoxxi.top",[43,84,462,463]],["ns21.top",43],["bioskopkeren.xyz",43],["188.166.39.172",45],["173.199.167.192",46],["krucil.com",46],["krucil.net",46],["139.99.33.192",47],["164.68.105.199",48],["drakorindofilms.net",48],["bokepid.wiki",[48,475]],["173.249.49.204",50],["139.99.33.210",51],["bokepfull.fun",51],["videocrot.org",[51,365]],["5.253.86.213",52],["layardrama21.icu",52],["nontonserial.com",[53,256,257,258]],["nonton21.tv",[53,257,258,302,377]],["139.99.61.225",55],["94.237.74.225",56],["streamingbokeps.co",[56,104]],["149.56.24.226",57],["kricom.id",57],["gomunime.biz",61],["68.65.123.84",62],["didrakorindo.com",62],["simontok.cx",62],["simontok.ink",62],["avtub.io",62],["sukanonton.online",62],["indoxxi.pictures",[62,446]],["indoxx1.pw",[62,451]],["avtub.sx",62],["indoxx1.art",63],["indoxxi.bz",63],["dewabioskop21.asia",66],["dewabioskop21.org",[66,434,435]],["b201.info",[67,371]],["kabarviral.blog",69],["lewat.club",[69,81]],["mediapermata.com.bn",70],["terkini.id",[70,351]],["cafecinema.cc",75],["lk21.io",75],["dramamu.net",75],["lk21.cc",76],["dunia21.top",[76,84]],["dutafilm.cfd",77],["dutafilm.observer",[77,431]],["dutafilm.us",77],["bioskop007.club",78],["bioskop55.club",[78,79]],["bioskop1080.com",78],["bioskop90.com",[78,125]],["cinema007.com",78],["cinemastar21.com",[78,83]],["nontononline99.com",78],["bioskop55.me",[78,119]],["bioskop90.me",78],["bioskop212.net",[78,83]],["apk.miuiku.com",81],["nf21.club",82],["nontonfilm21.club",83],["sinema21.id",83],["ns21.club",84],["animeindo.co",84],["idxxi.co",84],["lk21indo.co",84],["lk21xxi.co",84],["bioskopbos.com",84],["dramaind.com",84],["filmbioskop21.com",84],["lk21n.com",84],["nontondramas.com",84],["otakufile.com",84],["bioskopkeren.fun",84],["lk21c.fun",[84,303]],["subindo.id",84],["animebatch.web.id",84],["eka.web.id",[84,359]],["kazefuri.web.id",[84,362]],["mangaku.in",[84,364]],["lk-21.me",84],["neonime.net",84],["nontongratis88.net",84],["nontonbioskop21.org",84],["cinemaindo.pro",84],["layarindo21.pro",84],["animeku.tv",84],["sukamovie.club",[86,87]],["indoxx1.co",86],["idxxx1.com",[86,182]],["sidrama.com",86],["benfile.com",91],["blifnews.com",91],["kabar2.com",[91,203]],["mangacanblog.com",[91,233]],["semuaberita.com",91],["mangaku.web.id",[91,364]],["nusareborn.in",91],["film21terbaru.org",91],["fastdrama.co",[94,95]],["hkfree.co",94],["iyottube.co",96],["iyottube.com",96],["komikcast.com",98],["bacamanga.id",98],["komikindo.id",[98,342]],["lk21official.co",99],["nontondramaonline.co",100],["nontondramaonline.net",100],["www.parapuan.co",[101,102,103]],["bolasport.com",[101,103,130,131,132,133,134]],["www.sonora.id",[101,240,347]],["motorplus-online.com",[103,131,171,239,240,241]],["tempo.co",105],["90animax.com",107],["animebatchs.com",[108,109]],["goblintvfree.com",108],["merdeka.com",[108,236]],["nanime.in",108],["juragan-anime.net",[108,415]],["anixverse.com",110],["astroawani.com",111],["autonetmagz.com",112],["pikiran-rakyat.com",[113,152]],["bagas31.com",114],["beritasatu.com",[115,116]],["cnnindonesia.com",[115,144,145,146,147,148,149]],["detik.com",[115,142,143,144,146,148,152,153]],["rumahperjaka.live",[117,119,379]],["bioskopstar88.com",119],["cinemaqq.com",[119,141]],["juragantomatx.com",[119,124]],["juraganmovie.net",[119,124]],["bioskop78.com",[121,122,123,124]],["cnbcindonesia.com",[121,142,143]],["nonton33.com",123],["bioskop99.me",[123,380]],["bioskop99.mobi",123],["nonton33.tv",123],["bisnis.com",[126,127]],["www.tek.id",[127,349]],["blogspot.com",128],["starringheavenlyrics.blogspot.com",129],["www.grid.id",[131,336]],["kompas.tv",[133,169,469]],["carisinyal.com",135],["cdramabase.com",136],["ceritasexindonesia.com",137],["clip.cewecewe.com",138],["cinema-indo.com",139],["nonton21.net",139],["haibunda.com",[143,146,147,149,152,173]],["insertlive.com",[144,149,195]],["teknoup.com",[144,283,284]],["beautynesia.id",[148,309]],["comotin.com",150],["dewantn.com",154],["dunia21tv.com",[156,157]],["cinema-indo.web.id",[156,157]],["layarcinema.tv",[156,157]],["duwitmu.com",158],["dwanonton.com",[159,160]],["dewanonton.vip",[159,473]],["eramuslim.com",161],["faktabali.com",162],["femaledaily.com",163],["alinea.id",163],["filem456.com",164],["gadgetren.com",166],["gamebrott.com",167],["gopego.com",168],["gudangpemain.com",172],["solopos.com",174],["hdtvku.com",175],["hellosehat.com",176],["hipwee.com",177],["hotabis.com",178],["iberita.com",179],["idntimes.com",180],["sindonews.com",[180,273]],["idpelago.com",181],["indobokepz.com",183],["indogamers.com",184],["indonesiamovies21.com",185],["indosiar.com",186],["indotelko.com",187],["indoxtream.com",188],["indoxx1.com",189],["idxx1.top",[189,387,461]],["indoxximovie.com",190],["inilah.com",[191,192]],["kompasiana.com",[191,217]],["ekonomi.inilah.com",193],["teknologi.inilah.com",[193,194]],["isdaryanto.com",196],["jakbos.com",197],["jalantikus.com",198],["jendelakaba.com",200],["jenismac.com",201],["k-vid.com",202],["dramacool.io",202],["dramanice.io",202],["kabar24.com",204],["kapanlagi.com",[205,206,207]],["liputan6.com",[205,227]],["otosia.com",207],["m.kapanlagi.com",208],["kertashitam.com",209],["klikanggaran.com",210],["www.hops.id",210],["klikseru.com",211],["komikbaru.com",212],["komikstation.com",213],["tribunnews.com",[215,279,289,291]],["indonesiasatu.kompas.com",216],["www.kompasiana.com",218],["kotakgame.com",219],["kshowid.com",220],["kuyhaa-me.com",221],["gigapurbalingga.net",221],["lapar.com",[222,223]],["loveindonesia.com",[222,230]],["ld2tv.com",224],["lensaindonesia.com",225],["www.lingohut.com",226],["lk21.pw",228],["malaysiakini.com",231],["manadobaswara.com",232],["mangafap.com",234],["info.mapsaddress.com",235],["info.vebma.com",[235,296]],["info.gambar.pro",[235,296]],["mgkomik.com",237],["modifikasi.com",238],["grid.id",[241,334]],["my-best.com",242],["mydramalist.com",243],["mypt3.com",244],["nanimex1.com",245],["negumo.com",246],["nekonime.com",247],["neonime.com",248],["neonime.vip",248],["ninemanga.com",249],["nobartv.com",250],["nontonbokeps.com",251],["nontonfilm77.com",252],["nontonfilm88.com",253],["nontonme.com",254],["nontonplus.com",255],["fb21.tv",[257,258,302,467]],["dunia21s.fun",[258,302]],["lk21.li",[258,302,377]],["nontonsini.com",259],["okezone.com",260],["oktavita.com",261],["otomania.com",262],["palingseru.com",263],["popbela.com",264],["readwebtoons.com",265],["realitakita.com",266],["remo-xp.com",267],["semarangkota.com",270],["siherp.com",272],["tetew.info",272],["greget.space",272],["situshp.com",274],["smartphoneku.com",275],["sodasusu.com",[276,277]],["suara.com",[278,279]],["sundul.com",280],["susterbokep.com",281],["tabloidbintang.com",282],["idfl.me",[283,384,385]],["r-l.me",[283,384]],["tempointeraktif.com",285],["thejakartapost.com",286],["tokopedia.com",287],["topfilmz.com",288],["blog.tribunjualbeli.com",[289,290]],["makassar.tribunnews.com",292],["wartakota.tribunnews.com",293],["webdesign.tutsplus.com",294],["unixmen.com",295],["waralabakan.com",297],["windowsreport.com",298],["wowkeren.com",299],["zonabola.com",300],["nomat.fun",304],["lk21.host",305],["animeindo.id",307],["apkmod.id",308],["radarlombok.co.id",308],["novelgo.id",308],["paraedu.id",308],["hightech.web.id",[308,361]],["nama.web.id",308],["ceklist.id",311],["alona.co.id",312],["cerpen.co.id",313],["chip.co.id",314],["cosmogirl.co.id",315],["anime17.net",[315,398]],["dream.co.id",316],["kaskus.co.id",317],["katadata.co.id",318],["ketik.co.id",319],["kontan.co.id",320],["pusatdata.kontan.co.id",321],["stocksetup.kontan.co.id",322],["lihat.co.id",323],["orami.co.id",324],["pontianakpost.co.id",325],["pricebook.co.id",326],["viva.co.id",328],["log.viva.co.id",329],["wartaekonomi.co.id",330],["dailysocial.id",331],["filmterbaru.id",332],["ggwp.id",333],["nextren.grid.id",335],["inews.id",337],["www.inibaru.id",338],["investor.id",339],["jurnalisindonesia.id",340],["kabargames.id",341],["komikcast.net",342],["komikindo.pro",[342,449]],["komikindo.tv",342],["manganime.id",343],["medcom.id",344],["slurr.my.id",345],["onlinemetro.id",346],["tek.id",348],["terasjakarta.id",350],["tirto.id",352],["uzone.id",353],["internetpositif.uzone.id",354],["animeindo.web.id",355],["animeindo.video",355],["animekompi.web.id",356],["filmbagus21.info",358],["ganool.web.id",360],["mangaku.site",[364,459]],["resep.web.id",366],["suki48.web.id",368],["zigi.id",369],["senimovie.info",[372,373]],["senimovies.net",372],["ganool.is",375],["ganool.se",[375,455]],["ganool.st",375],["manganime.live",378],["doroni.me",381],["dunia21.me",[382,383]],["dunia21.net",383],["dunia21.org",383],["dunia21.wtf",383],["idtube.me",[386,387]],["bharian.com.my",[389,390]],["hmetro.com.my",390],["mforum.cari.com.my",391],["hijabista.com.my",392],["majalahpama.my",392],["nona.my",392],["vanillakismis.my",392],["utusan.com.my",393],["mediahiburan.my",394],["mudah.my",395],["rasa.my",396],["youtube-mp3.my",397],["animeindo.net",399],["awnime.net",400],["bintangmawar.net",401],["briliobeauty.net",402],["cinema-indo.net",403],["dramaqu.net",404],["duniaku.net",405],["filmace21.net",406],["filmbagus88.net",407],["filmku.net",408],["funtasticko.net",409],["gadismalam.net",410],["harakahdaily.net",411],["ibugil.net",412],["indoxxi.net",413],["inidramaku.net",414],["kurazone.net",418],["nobarfilm21.net",422],["sangetods.net",423],["seri168.net",424],["suarasurabaya.net",425],["torjack.net",426],["tvkabel.net",427],["unyil.net",428],["zonapanaz.net",429],["indobokep.pro",429],["bokepml.online",432],["dwa21.org",[434,436]],["kumpulmanga.org",438],["manhwadesu.org",439],["nanimex.org",440],["nontoncinema.org",441],["otakuindo.org",442],["pakbos21.org",443],["pkspiyungan.org",444],["satujiwa.org",445],["bokepkita.pro",447],["indoporn.pro",448],["otakudesu.pro",450],["layardrama21.rest",452],["file.rocks",453],["lonteku.sbs",454],["cmovieshd.se",455],["myasiantv.se",456],["ganol.si",457],["komikcast.site",458],["komikcast.vip",458],["mangaku.vip",459],["samehadaku.skin",460],["indoxxi.tv",[462,468]],["elde.tv",466],["xx1.tv",468],["layarkaca21.tv",470],["lk21.tv",470],["ns21.tv",471],["ns21.us",471],["drakorasia.us",472],["kurina.vip",474],["tv.lk21official.world",476],["indostreamings.xyz",477]]);

const entitiesMap = new Map([["agenbokep",0],["anoboy",[1,2,3,4]],["kuramanime",3],["bioskopkeren",[5,6,7]],["layarkaca21",[6,16,17]],["dutasex",8],["perawanbokep",8],["filmapik21",9],["gudangmovies21",[10,11,12]],["komikcast",[13,14]],["komikdewasa",[13,14]],["komikremaja",[13,14]],["manhwaindo",[13,14]],["oploverz",[13,14,19,20]],["komikindo",15],["samehadaku",[15,22,23,24]],["nontondrama",18],["ruangbokep",21],["streamingbokeponline",21],["shinigami",[25,26]]]);

const exceptionsMap = new Map(undefined);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
