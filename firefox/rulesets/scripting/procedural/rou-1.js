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

// ruleset: rou-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".Wdgt\",\"tasks\":[[\"has\",{\"selector\":\"[src*=\\\".gif\\\"]\"}]]}"],["{\"selector\":\".widget_text\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"utm_source=aff\\\"]\"}]]}"],["{\"selector\":\".widget_custom_html\",\"tasks\":[[\"has\",{\"selector\":\"[href][target=\\\"_blank\\\"]\"}],[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"damboviteanul.com\\\"]\"}]]}],[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has\",{\"selector\":\"[id=\\\"widget_container_curs\\\"]\"}]]}]]}"],["{\"selector\":\".widget-container\",\"tasks\":[[\"has\",{\"selector\":\"[href^=\\\"http://thecryptobot.com\\\"]\"}]]}"],["{\"selector\":\"[style]\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".widget_media_image\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"affiliate.php\\\"]\"}]]}"],["{\"selector\":\"[style^=\\\"overflow:\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"[data-ad-slot]\"}]]}","{\"selector\":\"[style^=\\\"overflow:\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"[data-ad]\"}]]}"],["{\"selector\":\".widget_block\",\"tasks\":[[\"not\",{\"selector\":\".widget_block\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"romaniataramea.com\\\"]\"}]]}],[\"not\",{\"selector\":\".widget_block\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"google.com\\\"]\"}]]}]]}"],["{\"selector\":\"[style^=\\\"overflow:\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"#v-scritub-v3\"}]]}"],["{\"selector\":\"center\",\"tasks\":[[\"has\",{\"selector\":\"a\"}]]}"],["{\"selector\":\".post_block\",\"tasks\":[[\"has\",{\"selector\":\"[class^=\\\"guest\\\"]\"}],[\"has-text\",\"Anunturi\"]]}"],["{\"selector\":\".code-block\",\"tasks\":[[\"has\",{\"selector\":\"[id^=\\\"taboola-\\\"]\"}]]}"],["{\"selector\":\".code-block\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".sidebar-widget\",\"tasks\":[[\"has-text\",\"/Recomandate/\"],[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has-text\",\"Post\"]]}]]}"],["{\"selector\":\"div.grey-section\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}"],["{\"selector\":\"div.d2011-block-lateral-middle\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"voceabasarabiei.net\\\"]\"}]]}"],["{\"selector\":\".t-records\",\"tasks\":[[\"has-text\",\"arderea \"]]}"],["{\"selector\":\".wrapper\",\"tasks\":[[\"has\",{\"selector\":\"[id^=\\\"admixer\\\"]\"}]]}"],["{\"selector\":\".side-widget\",\"tasks\":[[\"has\",{\"selector\":\"[class=\\\"adsbygoogle\\\"]\"}]]}"],["{\"selector\":\"#sidebar > div.widget\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}"],["{\"selector\":\".py-6\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"/etoro\\\"]\"}]]}"],["{\"selector\":\".top\",\"tasks\":[[\"has\",{\"selector\":\"[id^=\\\"div-gpt-ad\\\"]\"}]]}"],["{\"selector\":\"[style=\\\"min-height: 260px;\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"[id^=\\\"adocean\\\"]\"}]]}"],["{\"selector\":\"*\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"matches-css-before\",{\"name\":\"content\",\"pseudo\":\"before\",\"value\":\"ADVERTISING\"}]]}"],["{\"selector\":\".td-pb-span3\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has-text\",\"PUBLICITATE\"]]}"],["{\"selector\":\".align-right\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\"[href^=\\\"https://arhiblog.ro/colaboram/\\\"]\"}]]}","{\"selector\":\".widget_text.widget\",\"tasks\":[[\"has-text\",\"eMAG\"]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has\",{\"selector\":\"[target=\\\"_blank\\\"]\"}]]}"],["{\"selector\":\".td-pb-span12\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\"[style]\",\"tasks\":[[\"has\",{\"selector\":\"> #RO_Web_SP_LB1_Skin\"}]]}","{\"selector\":\"[style]\",\"tasks\":[[\"has\",{\"selector\":\"[id^=\\\"div-gpt-ad\\\"]\"}]]}"],["{\"selector\":\".ipsPad.ipsWidget_inner\",\"tasks\":[[\"has\",{\"selector\":\"[src*=\\\"://www.hostclub.ro\\\"]\"}]]}"],["{\"selector\":\".height-250\",\"tasks\":[[\"has\",{\"selector\":\"[id^=\\\"div-gpt-ad\\\"]\"}]]}"],["{\"selector\":\".height-250\",\"tasks\":[[\"has\",{\"selector\":\".strawberry-ads\"}]]}"],["{\"selector\":\".side_right_box\",\"tasks\":[[\"has\",{\"selector\":\"[src*=\\\"banner/\\\"]\"}]]}"],["{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}"],["{\"selector\":\".clearfix [href][target=\\\"_blank\\\"][rel]\",\"tasks\":[[\"has\",{\"selector\":\"[alt][title][style]\"}]]}"],["{\"selector\":\".height-250\",\"tasks\":[[\"has\",{\"selector\":\"> [id^=\\\"div-gpt-ad\\\"]\"}]]}"],["{\"selector\":\"section\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}"],["{\"selector\":\".article\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"go4it\\\"]\"}]]}","{\"selector\":\".height-300\",\"tasks\":[[\"has\",{\"selector\":\"[id^=\\\"div-gpt-ad\\\"]\"}]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has\",{\"selector\":\"[src]\"}]]}"],["{\"selector\":\".hidden-xs\",\"tasks\":[[\"has\",{\"selector\":\"[id^=\\\"div-gpt-ad\\\"]\"}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"Reclame\"]]}"],["{\"selector\":\".container\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}"],["{\"selector\":\".billboard\",\"tasks\":[[\"has\",{\"selector\":\"#consoAdTop\"}]]}"],["{\"selector\":\".centered\",\"tasks\":[[\"has\",{\"selector\":\".strawberry-ads-manager-container\"}]]}","{\"selector\":\".mg-bottom-10\",\"tasks\":[[\"has\",{\"selector\":\".strawberry-ads-manager-container\"}]]}","{\"selector\":\".single__content\",\"tasks\":[[\"has-text\",\"Philip Morris International\"]]}"],["{\"selector\":\".mh-widget\",\"tasks\":[[\"has-text\",\"/PROMO|PARTENER/i\"]]}"],["{\"selector\":\".custom_textwidget\",\"tasks\":[[\"has-text\",\"publicitar\"]]}"],["{\"selector\":\".ContentArticle\",\"tasks\":[[\"has-text\",\" tutunului\"]]}"],["{\"selector\":\"#articleContent > [style]\",\"tasks\":[[\"has\",{\"selector\":\"[data-ad]\"}]]}","{\"selector\":\".page\",\"tasks\":[[\"has-text\",\"Philip Morris\"]]}","{\"selector\":\"[align=\\\"center\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"#div-gpt-dcnews_gpt-billboard_responsive\"}]]}"],["{\"selector\":\".single__container\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}"],["{\"selector\":\"[id^=\\\"media_image\\\"]\",\"tasks\":[[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"dezvaluiri.ro\\\"]\"}]]}]]}"],["{\"selector\":\".article\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}"],["{\"selector\":\"article\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}"],["{\"selector\":\".gridview-box-inside\",\"tasks\":[[\"has-text\",\"PROMO\"]]}"],["{\"selector\":\"#custom_html-10\",\"tasks\":[[\"has-text\",\"Advertising\"]]}"],["{\"selector\":\".container.mg-top-20\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"pariuri\\\"]\"}]]}"],["{\"selector\":\"td[width=\\\"250\\\"]\",\"tasks\":[[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"fileshare.ro\\\"]\"}]]}]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"not\",{\"selector\":\"[class]\",\"tasks\":[[\"has\",{\"selector\":\"[href^=\\\"https://floteauto.ro\\\"]\"}]]}],[\"not\",{\"selector\":\"[class]\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"//www.autoexpert.ro\\\"]\"}]]}]]}"],["{\"selector\":\"[id^=\\\"block\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"[src*=\\\"pub\\\"]\"}]]}"],["{\"selector\":\".single__content\",\"tasks\":[[\"has-text\",\"Philip Morris România\"]]}"],["{\"selector\":\".widget_text.widget\",\"tasks\":[[\"has-text\",\"Reclame\"]]}"],["{\"selector\":\"td > center\",\"tasks\":[[\"has-text\",\"Reclama\"]]}"],["{\"selector\":\".mg-bottom-10\",\"tasks\":[[\"has\",{\"selector\":\".strawberry-ads\"}]]}"],["{\"selector\":\".container-wrapper > [href=\\\"https://www.gorjonline.ro/anunturi/\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"[src]\"}]]}"],["{\"selector\":\".elementor-element\",\"tasks\":[[\"has\",{\"selector\":\"[data-widget_type=\\\"image.default\\\"]\"}]]}","{\"selector\":\".elementor-element\",\"tasks\":[[\"has-text\",\"ad\"]]}","{\"selector\":\".wp-block-image\",\"tasks\":[[\"has\",{\"selector\":\"[sizes]\"}]]}"],["{\"selector\":\"[class^=\\\"banner\\\"]\",\"tasks\":[[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has\",{\"selector\":\".related-in-article\"}]]}]]}"],["{\"selector\":\".article-body\",\"tasks\":[[\"has-text\",\"susținut de Philip Morris\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\"[src*=\\\"pagead\\\"]\"}]]}"],["{\"selector\":\"[id^=\\\"custom_html\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"[alt^=\\\"Agentie\\\"]\"}]]}"],["{\"selector\":\".DAGInScrollInner\",\"tasks\":[[\"has\",{\"selector\":\".bannerBox\"}]]}","{\"selector\":\".special-box-pm > p\",\"tasks\":[[\"has-text\",\"Philip Morris\"]]}"],["{\"selector\":\".sidebar\",\"tasks\":[[\"has\",{\"selector\":\"[class^=\\\"ad-\\\"]\"}]]}"],["{\"selector\":\"#billboard\",\"tasks\":[[\"has\",{\"selector\":\".add-container\"}]]}","{\"selector\":\".article-view\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}","{\"selector\":\".textlink\",\"tasks\":[[\"has-text\",\"ad\"]]}"],["{\"selector\":\".code-block\",\"tasks\":[[\"has-text\",\"PUB\"]]}"],["{\"selector\":\".widget_media_image\",\"tasks\":[[\"has\",{\"selector\":\"[href]\",\"tasks\":[[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has-text\",\"[href*=\\\"litoraltv.ro\\\"]\"],[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"facebook.com\\\"]\"}]]}]]}]]}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"/Publicitate|Asemanatoare/\"]]}"],["{\"selector\":\"aside.externals\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"cotidianul.ro\\\"]\"}]]}"],["{\"selector\":\".td_block_template_1\",\"tasks\":[[\"has\",{\"selector\":\".td_single_image_bg\"}]]}","{\"selector\":\".td_block_template_1\",\"tasks\":[[\"has\",{\"selector\":\"[class^=\\\"td-adspot\\\"]\"}]]}"],["{\"selector\":\"#article\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"PUBLICITATE\"]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".elementor-column\",\"tasks\":[[\"has-text\",\"PUBLICITATE\"]]}"],["{\"selector\":\".widget-container\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}","{\"selector\":\".widget-container\",\"tasks\":[[\"has\",{\"selector\":\"[id=\\\"t5_zone_standard-ga\\\"]\"}]]}"],["{\"selector\":\".widget_rss\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\".bursa.ro/\\\"]\"}]]}"],["{\"selector\":\".content-segment\",\"tasks\":[[\"has\",{\"selector\":\"[src*=\\\"pagead\\\"]\"}]]}","{\"selector\":\"[style*=\\\"border-radius: 3px; margin-bottom: 20px; width: 160px;\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"[target=\\\"_blank\\\"]\"}]]}"],["{\"selector\":\".container-wrapper\",\"tasks\":[[\"has\",{\"selector\":\"[src*=\\\".mgid.com\\\"]\"}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\"[target=\\\"_blank\\\"]\"}]]}"],["{\"selector\":\".clear\",\"tasks\":[[\"has\",{\"selector\":\"a\"}]]}"],["{\"selector\":\".widget-container\",\"tasks\":[[\"has\",{\"selector\":\"ins.adsbygoogle\"}]]}"],["{\"selector\":\".sow-image-container\",\"tasks\":[[\"has\",{\"selector\":\"[target=\\\"_blank\\\"][rel]\"}]]}"],["{\"selector\":\".article-body\",\"tasks\":[[\"has-text\",\"Philip Morris România\"]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has\",{\"selector\":\"[src*=\\\"anner\\\"]\"}]]}"],["{\"selector\":\".vc_column-inner\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}","{\"selector\":\"[style^=\\\"min-height: 200px;\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has\",{\"selector\":\".afiliere\"}]]}","{\"selector\":\".widget_header\",\"tasks\":[[\"has-text\",\"/recomand/i\"]]}"],["{\"selector\":\".stream-item-mag\",\"tasks\":[[\"has\",{\"selector\":\"[href=\\\"\\\"]\"}]]}","{\"selector\":\".stream-item-mag\",\"tasks\":[[\"has\",{\"selector\":\"[target=\\\"_blank\\\"]\"}]]}"],["{\"selector\":\".widget_custom_html\",\"tasks\":[[\"has\",{\"selector\":\"[src*=\\\"pagead\\\"]\"}]]}"],["{\"selector\":\".card\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".st-sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"[src*=\\\"publicitate\\\"]\"}]]}"],["{\"selector\":\".td-a-rec-id-custom-spot\",\"tasks\":[[\"has\",{\"selector\":\"[href=\\\"https://www.vadrexim.ro/anvelope.html\\\"]\"}]]}","{\"selector\":\".tdm-descr\",\"tasks\":[[\"has-text\",\"sponsor\"]]}","{\"selector\":\"[style]\",\"tasks\":[[\"has\",{\"selector\":\".td-adspot-title\"}],[\"has\",{\"selector\":\".td_spot_img_all\"}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"presasm.ro\\\"]\"}]]}],[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has\",{\"selector\":\"[data-href*=\\\"facebook\\\"]\"}]]}]]}"],["{\"selector\":\"[id^=\\\"box\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".container.billboard-1-index\",\"tasks\":[[\"has\",{\"selector\":\"[id^=\\\"div-gpt-ad\\\"]\"}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\"[href]:not([href*=\\\"radiomplusfm.ro\\\"])\"}]]}"],["{\"selector\":\"#sidebar > .widget_text\",\"tasks\":[[\"not\",{\"selector\":\".widgettitle\",\"tasks\":[[\"has-text\",\"Horoscop\"]]}]]}"],["{\"selector\":\".ipsWidget_title.ipsType_reset\",\"tasks\":[[\"has-text\",\"Sponsor\"]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has\",{\"selector\":\"[target=\\\"_blank\\\"]:not([method])\"}]]}","{\"selector\":\".widget_text\",\"tasks\":[[\"has\",{\"selector\":\"[id^=\\\"div-gpt-ad\\\"]\"}]]}"],["{\"selector\":\"article > div.td-post-content > p\",\"tasks\":[[\"has-text\",\"/^\\\\u00A0$/\"]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"facebook.com\\\"]\"}]]}"],["{\"selector\":\".inside-right-sidebar\",\"tasks\":[[\"has-text\",\"ads\"]]}"],["{\"selector\":\".wpb_wrapper.vc_figure\",\"tasks\":[[\"has\",{\"selector\":\"[target=\\\"_blank\\\"]\"}]]}"],["{\"selector\":\".vc_column_inner > .vc_column-inner > .wpb_wrapper\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".col-sm-4\",\"tasks\":[[\"has\",{\"selector\":\"[class=\\\"ad\\\"]\"}]]}"],["{\"selector\":\".article-category\",\"tasks\":[[\"has-text\",\"/Philip Morris|țigar/\"]]}","{\"selector\":\".article-category-featured\",\"tasks\":[[\"has-text\",\"Philip Morris\"]]}","{\"selector\":\".news-widget\",\"tasks\":[[\"not\",{\"selector\":\"[class]\",\"tasks\":[[\"has\",{\"selector\":\"[href^=\\\"https://www.stiripesurse.ro\\\"]\"}]]}]]}","{\"selector\":\".row\",\"tasks\":[[\"not\",{\"selector\":\"[class]\",\"tasks\":[[\"has\",{\"selector\":\"[href^=\\\"https://www.stiripesurse.ro\\\"]\"}]]}]]}"],["{\"selector\":\".incontent\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".border\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"binance.com\\\"]\"}]]}"],["{\"selector\":\"#text-25\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}","{\"selector\":\"#text-30\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"jooble.org\\\"]\"}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\"[href]:not([href*=\\\"timponline.ro\\\"])\"}]]}"],["{\"selector\":\".code-block\",\"tasks\":[[\"has\",{\"selector\":\".hbagency_space_19811\"}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\"[data-aid]\"}]]}","{\"selector\":\"[href]:not([href*=\\\"tuktuk\\\"])\",\"tasks\":[[\"has\",{\"selector\":\"[src*=\\\"anner\\\"]\"}]]}"],["{\"selector\":\"#widget-wrap\",\"tasks\":[[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"uzpbihor.ro\\\"]\"}]]}]]}"],["{\"selector\":\".height-250\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".widget-wrap\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".td-a-rec-id-custom-spot\",\"tasks\":[[\"has\",{\"selector\":\"[alt=\\\"spot_img\\\"]\"}]]}","{\"selector\":\".tdc-element-style.td-pb-row.wpb_row\",\"tasks\":[[\"has\",{\"selector\":\"[target=\\\"_blank\\\"]\"}],[\"has\",{\"selector\":\"[class^=\\\"td-lazy-img\\\"]\"}]]}"],["{\"selector\":\".article-wrap\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}","{\"selector\":\"[class^=\\\"add\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"[id^=\\\"adocean\\\"]\"}]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}"],["{\"selector\":\".hidden-xs\",\"tasks\":[[\"has\",{\"selector\":\".ad-placeholder\"}]]}"],["{\"selector\":\".widget_text\",\"tasks\":[[\"has\",{\"selector\":\".h-text\",\"tasks\":[[\"has-text\",\"publicitar\"]]}]]}"],["{\"selector\":\".widget_custom_html\",\"tasks\":[[\"has-text\",\"ad\"]]}"],["{\"selector\":\".widget_text.widget\",\"tasks\":[[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"ziaruldebacau.ro\\\"]\"}]]}]]}"],["{\"selector\":\".td_block_template_1.vc_column_text\",\"tasks\":[[\"has\",{\"selector\":\"[href]\"}],[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"ziaruldinmuscel.ro\\\"]\"}]]}]]}"],["{\"selector\":\".td-a-rec\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"350x350\\\"]\"}]]}"],["{\"selector\":\"[id^=\\\"custom_html\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"[id^=\\\"adocean\\\"]\"}]]}"],["{\"selector\":\".boxstire2head\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}"],["{\"selector\":\".wpb_wrapper\",\"tasks\":[[\"has\",{\"selector\":\"[href^=\\\"https://repigmentare.ro/\\\"]\"}]]}"]];

const hostnamesMap = new Map([["filme-bune.biz",0],["aproapemasini.com",1],["damboviteanul.com",2],["incorectpolitic.com",3],["mediculmeu.com",4],["programegratuitepc.com",5],["rasfoiesc.com",6],["scritub.com",[6,8]],["romaniataramea.com",7],["serveresamp.com",9],["forum.softpedia.com",10],["ziarulromanesc.de",11],["cespun.eu",12],["actualitati.info",13],["litoraltv.ro",[13,75]],["tuktuk.ro",[13,119]],["7media.md",14],["agora.md",15],["istoria.md",16],["locals.md",17],["stiri.md",18],["bucurestitv.net",19],["buzau.net",20],["coinjournal.net",21],["romaniatv.net",22],["forum.4tuning.ro",23],["acasatv.ro",24],["sport.ro",24],["stirileprotv.ro",24],["agro-tv.ro",25],["agrointel.ro",26],["androidu.ro",27],["arhiblog.ro",28],["autoexpert.ro",29],["autolatest.ro",30],["autouncle.ro",31],["forum.b-zone.ro",32],["b1tv.ro",33],["b365.ro",34],["bancherul.ro",35],["buletindecarei.ro",36],["bursa.ro",37],["bzi.ro",38],["campinatv.ro",39],["cancan.ro",40],["cargo-bus.ro",41],["ciao.ro",42],["ciutacu.ro",43],["click.ro",44],["evz.ro",44],["conso.ro",45],["csid.ro",46],["ctnews.ro",47],["curier.ro",48],["dcmedical.ro",49],["dcnews.ro",50],["descopera.ro",51],["dezvaluiri.ro",52],["digi24.ro",53],["dilemaveche.ro",54],["editiedevrancea.ro",55],["evmarket.ro",56],["fanatik.ro",57],["fileshare.ro",58],["floteauto.ro",59],["gadget.ro",60],["gandul.ro",61],["gazetavalceana.ro",62],["girlshare.ro",63],["go4games.ro",64],["gorjonline.ro",65],["graiulsalajului.ro",66],["gsp.ro",67],["hotnews.ro",68],["impactpress.ro",69],["info1tv.ro",70],["jurnalul.ro",71],["kfetele.ro",72],["kudika.ro",73],["lauralaurentiu.ro",74],["lovendal.ro",76],["luju.ro",77],["mangalianews.ro",78],["mediafax.ro",79],["mesageruldesibiu.ro",80],["mesagerulhunedorean.ro",81],["odat.ro",81],["stiridinromania.ro",[81,110]],["mesagerulneamt.ro",82],["moduri.ro",83],["monitoruldevrancea.ro",84],["myexpert.ro",85],["mytex.ro",86],["napocanews.ro",87],["national.ro",88],["nationalisti.ro",89],["newmoney.ro",90],["news.ro",91],["newsbv.ro",92],["newsmed.ro",93],["nwradu.ro",94],["opiniabuzau.ro",95],["parerimagazin.ro",96],["peco-online.ro",97],["portalsm.ro",98],["presadeazi.ro",99],["presasm.ro",100],["pretbenzina.ro",101],["protv.ro",102],["radiomplusfm.ro",103],["ramnicuvalceaweek.ro",104],["sa-mp.ro",105],["sfatulparintilor.ro",106],["smlive.ro",107],["sportulsalajean.ro",108],["stireadeazi.ro",109],["stirilebzi.ro",111],["stirilekanald.ro",112],["stiripesurse.ro",113],["substantial.ro",114],["super-boost.ro",115],["televiziunea-medicala.ro",116],["timponline.ro",117],["tomisnews.ro",118],["uzpbihor.ro",120],["vbiz.ro",121],["videotutorial.ro",122],["vremeanoua.ro",123],["wall-street.ro",124],["weradio.ro",125],["zcj.ro",126],["ziarpiatraneamt.ro",127],["ziarulargesul.ro",128],["ziaruldebacau.ro",129],["ziaruldinmuscel.ro",130],["ziarulincomod.ro",131],["zonait.ro",132],["zvj.ro",133],["nasul.tv",134]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
