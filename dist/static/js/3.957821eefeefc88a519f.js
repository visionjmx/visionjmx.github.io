webpackJsonp([3],{"5UXo":function(t,s,i){"use strict";var e={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"s-header clear"},[s("div",{staticClass:"right"},[s("router-link",{attrs:{to:{}}},[this._v("登录")]),this._v("|"),s("router-link",{attrs:{to:{}}},[this._v("注册")])],1),this._v(" "),this._t("changecity")],2)},staticRenderFns:[]};var r=i("VU/8")({name:"Sheader"},e,!1,function(t){i("heHw")},"data-v-49b8745c",null);s.a=r.exports},NB76:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("Dd8w"),r=i.n(e),a=i("NYxO"),c=i("MHyw"),h=i("yclV"),o={name:"searchAddress",components:{Sheader:i("5UXo").a},data:function(){return{searchValue:"",isShow:!0,isShowHistory:!0,isShowClear:!1,cityname:"",search_city_id:"",searchPoisList:[],searchHisotryList:[],latitude:"",longitude:""}},methods:r()({},Object(a.b)(["SET_GEO_HASH"]),{searchCity:function(){var t=this;this.isShowHistory=!1;var s={city_id:Number(this.search_city_id),keyword:this.searchValue,type:"search"};Object(c.f)(s).then(function(s){s.length>0&&(t.isShow=!1,t.searchPoisList=s)})},setHistory:function(t){var s=this;this.searchHisotryList.length>0?0==this.searchHisotryList.filter(function(i){return i.name==s.searchPoisList[t].name}).length&&(this.searchHisotryList.push(this.searchPoisList[t]),Object(h.d)("searchHistoryList",this.searchHisotryList)):(this.searchHisotryList.push(this.searchPoisList[t]),Object(h.d)("searchHistoryList",this.searchHisotryList))},dirmiste:function(t){this.latitude=this.searchPoisList[t].latitude,this.longitude=this.searchPoisList[t].longitude,this.setHistory(t),this.SET_GEO_HASH(this.latitude+","+this.longitude),this.$router.push({name:"shophome",params:{geohash:this.latitude+","+this.longitude}})},dirmisteHistory:function(t){this.latitude=t.latitude,this.longitude=t.longitude,this.SET_GEO_HASH(this.latitude+","+this.longitude),this.$router.push({name:"shophome",params:{geohash:this.latitude+","+this.longitude}})},getSearchHistoryList:function(){Object(h.a)("searchHistoryList")&&(this.isShowClear=!0,this.searchHisotryList=JSON.parse(Object(h.a)("searchHistoryList")))},clearAllSearchList:function(){this.isShowClear=!1,Object(h.c)("searchHistoryList"),this.searchHisotryList=[]}}),created:function(){this.search_city_id=this.$route.params.city,this.cityname=this.$route.params.guessCity,console.log(this.cityname)},mounted:function(){this.getSearchHistoryList()}},n={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"s-header"},[i("div",{staticClass:"arrow left",attrs:{slot:"arrow"},on:{click:function(s){return t.$router.go(-1)}},slot:"arrow"},[t._m(0)]),t._v(" "),i("div",{staticClass:"address left"},[i("span",[t._v(t._s(t.cityname))])])]),t._v(" "),i("div",{staticClass:"s-city-search"},[i("div",{staticClass:"s-city-search-list"},[i("el-row",{staticClass:"s-input-search"},[i("el-input",{attrs:{placeholder:"输入学校、商务楼、地址",size:"small",clearable:""},model:{value:t.searchValue,callback:function(s){t.searchValue=s},expression:"searchValue"}})],1),t._v(" "),i("el-row",{staticClass:"s-input-btn"},[i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(s){return s.stopPropagation(),t.searchCity(s)}}},[t._v("提交")])],1)],1),t._v(" "),t.isShow?i("h3",{staticClass:"s-city-message"},[t._v("搜索历史")]):t._e(),t._v(" "),i("ul",{staticClass:"s-city-search-result"},[t.isShowHistory?[t._l(t.searchHisotryList,function(s,e){return i("li",{key:e,on:{click:function(i){return t.dirmisteHistory(s)}}},[i("h3",[t._v(t._s(s.name))]),t._v(" "),i("p",[t._v(t._s(s.address))])])}),t._v(" "),t.isShowClear?i("p",{staticClass:"clear-all",on:{click:t.clearAllSearchList}},[t._v("清空所有")]):t._e()]:t._e(),t._v(" "),t._l(t.searchPoisList,function(s,e){return i("li",{key:e,on:{click:function(s){return t.dirmiste(e)}}},[i("h3",[t._v(t._s(s.name))]),t._v(" "),i("p",[t._v(t._s(s.address))])])})],2)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticStyle:{display:"inline-block","margin-top":"0.4rem"}},[s("i",{staticClass:"iconfont"},[this._v(" ")])])}]};var l=i("VU/8")(o,n,!1,function(t){i("itgZ")},"data-v-0eb7eeeb",null);s.default=l.exports},heHw:function(t,s){},itgZ:function(t,s){}});
//# sourceMappingURL=3.957821eefeefc88a519f.js.map