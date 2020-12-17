(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{823:function(s,v,t){"use strict";t.r(v);var _=t(103),e=Object(_.a)({},(function(){var s=this,v=s.$createElement,t=s._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"逻辑漏洞挖掘"}},[s._v("逻辑漏洞挖掘 "),t("a",{staticClass:"header-anchor",attrs:{href:"#逻辑漏洞挖掘"}},[s._v("#")])]),s._v(" "),t("p",[t("strong",[s._v("挖掘重点：")])]),s._v(" "),t("p",[t("strong",[s._v("业务流程和HTTP/HTTPS请求篡改。")])]),s._v(" "),t("h1",{attrs:{id:"常见的逻辑漏洞"}},[s._v("常见的逻辑漏洞 "),t("a",{staticClass:"header-anchor",attrs:{href:"#常见的逻辑漏洞"}},[s._v("#")])]),s._v(" "),t("p",[s._v("其中 2、3、4 是金融业务中常见的。")]),s._v(" "),t("p",[t("strong",[s._v("(1) 密码重置")])]),s._v(" "),t("blockquote",[t("p",[s._v("验证码直接在HTTP响应中返回；")]),s._v(" "),t("p",[s._v("验证码未绑定用户，没和手机号和邮箱号做匹配验证；")]),s._v(" "),t("p",[s._v("未校验用户字段值，改自己密码，最后提交其它UID；")]),s._v(" "),t("p",[s._v("验证码不失效，可枚举；")])]),s._v(" "),t("p",[t("strong",[s._v("(2) 支付订单")])]),s._v(" "),t("blockquote",[t("p",[s._v("篡改支付金额，运费修改为负数，使总金额降低。")])]),s._v(" "),t("p",[t("strong",[s._v("(3) 竞争条件")])]),s._v(" "),t("blockquote",[t("p",[s._v("在文件上传中和购物时；")]),s._v(" "),t("p",[s._v("A用户余额10元，B商品5元，C商品6元;")]),s._v(" "),t("p",[s._v("A利用竞争条件多线程同时发起购买B和C的请求；")]),s._v(" "),t("p",[s._v("可能的结果有：")]),s._v(" "),t("p",[s._v("有一件商品购买失败；")]),s._v(" "),t("p",[s._v("商品都购买成功，但只扣了6元；")]),s._v(" "),t("p",[s._v("商品都购买成功，但余额为 -1元；")])]),s._v(" "),t("p",[t("strong",[s._v("(4) 越权访问")])]),s._v(" "),t("blockquote",[t("p",[s._v("越权访问他人信息或操纵他人账号")]),s._v(" "),t("p",[t("strong",[s._v("水平越权：")])]),s._v(" "),t("p",[s._v("同级别(权限)用户之间，越权访问非法操纵其它账户；(这会导致大批量数据泄露，恶意篡改)")]),s._v(" "),t("p",[t("strong",[s._v("垂直越权：")])]),s._v(" "),t("p",[s._v("不同级别之间的用户越权，普通用户执行管理员的功能；")])]),s._v(" "),t("p",[t("strong",[s._v("越权访问攻击测试：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、改ID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" ?id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、改用户名；login.php?username"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("admin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v("越权访问修复建议：")])]),s._v(" "),t("p",[s._v("越权访问漏洞的主要原因是没有对用户的身份做判断和控制，防护这种漏洞可以通过session来控制。")]),s._v(" "),t("p",[s._v("用户登录成功后，把username和UID等信息写入到session中，")]),s._v(" "),t("p",[s._v("当查看个人信息时，从session中取出username，而不是从GET和POST取，此时username就是没被篡改的。")])])}),[],!1,null,null,null);v.default=e.exports}}]);