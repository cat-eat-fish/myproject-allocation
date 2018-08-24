<template>
    <div class="addbank">
        <MyHead title="绑定银行卡"></MyHead>
        <div class="wrap bg-gray" style="margin-bottom:60px;">
            <div class="contract-cont">
                <div class="his-codetitle clearfix" style="height:40px;line-height:40px">
                    <div class="fl">开户名</div>
                    <div class="font-size14 fr fb username">交霸霸</div>
                </div>
            </div>


            <div class="common-list">

                <ul class="list-line clearfix">
                    <a>
                        <li style="width:100%;" class="font-gray3">提示：充值仅支持以下银行卡，请选择适当银行卡绑定</li>
                        <li style="width:100%;">
                            <input class="input-white pr0" type="text" style="width:100%;display:block;text-align:right" readonly  value="点击查看">
                        </li>
                    </a>
                </ul>

                <ul class="list-line clearfix">
                    <a>
                        <li class="font-gray3">银行名称</li>
                        <li>
                            <!-- <span class="font-gray9">请选择银行<i class="icon-moreunfold font-grayD"></i></span> -->
                            <select class="select-nostyle" ng-model="temp.bank" ng-options="b as b.bankName for b in bank.select.banks" ng-change="selectBankcard(temp.bank)" id="BankCode" name="BankCode">
                                <option value="-1">请选择银行</option>
                                <option value="1">中国农业银行</option>
                                <option value="2">交通银行</option>
                                <option value="3">中国工商银行</option>
                                <option value="4">中国邮储银行</option>
                                <option value="5">浦发银行</option>
                                <option value="6">广发银行</option>
                                <option value="7">平安银行</option>
                                <option value="8">招商银行</option>
                                <option value="9">民生银行</option>
                                <option value="10">中国银行</option>
                                <option value="11">建设银行</option>
                                <option value="12">光大银行</option>
                                <option value="13">兴业银行</option>
                                <option value="14">中信银行</option>
                                <option value="15">杭州银行</option>
                                <option value="16">北京银行 </option>
                                <option value="17">浙商银行</option>
                                <option value="18">上海银行</option>
                                <option value="19">江苏银行</option>
                                <option value="20">包商银行</option>
                                <option value="21">渤海银行</option>
                            </select>
                            <i class="iconfont icon-xia  font-grayD"></i>
                        </li>
                    </a>
                </ul>
            </div>
            <div class="common-list">
                <ul class="list-line clearfix">
                    <a>
                        <li class="font-gray3">开户行所在省</li>
                        <li>
                            <select class="select-nostyle" ng-model="temp.province" ng-options="p as p.nodeName for p in bank.select.proNames" ng-change="selectGetcity(temp.province)" id="provincecode" name="provincecode" onchange="javascript:selectchange(province,city)">
                                <option value="-1">请选择所在省</option>
                            <option value="0">安徽</option><option value="1">北京</option><option value="2">重庆</option><option value="3">福建</option><option value="4">甘肃</option><option value="5">广东</option><option value="6">广西</option><option value="7">贵州</option><option value="8">海南</option><option value="9">河北</option><option value="10">河南</option><option value="11">黑龙江</option><option value="12">湖北</option><option value="13">湖南</option><option value="14">江苏</option><option value="15">江西</option><option value="16">吉林</option><option value="17">辽宁</option><option value="18">内蒙古</option><option value="19">宁夏</option><option value="20">青海</option><option value="21">上海</option><option value="22">山东</option><option value="23">山西</option><option value="24">陕西</option><option value="25">四川</option><option value="26">天津</option><option value="27">新疆</option><option value="28">西藏</option><option value="29">云南</option><option value="30">浙江</option><option value="31">香港</option><option value="32">澳门</option><option value="33">台湾</option><option value="34">请选择省</option></select>
                            <i class="iconfont icon-xia font-grayD"></i>
                        </li>
                    </a>
                </ul>
                <ul class="list-line clearfix">
                    <a>
                        <li class="font-gray3">开户行所在区</li>
                        <li>
                            <select class="select-nostyle" ng-model="temp.city" ng-options="c as c.nodeName for c in bank.select.cityNames" ng-change="selectGetcity(temp.city)" id="citycode">
                                <option value="">请选择所在区</option>


                            </select>
                            <i class="iconfont icon-xia font-grayD"></i>
                        </li>
                    </a>
                </ul>
            </div>
            <div class="common-list">
                <ul class="list-line clearfix">
                    <a>
                        <li class="font-gray3">开户支行</li>
                        <li>
                            <input class="input-white pr0" placeholder="请输入开户行名称" type="text" ng-model="bank.outletsName" name="upbankname" id="upbankname">
                        </li>
                    </a>
                </ul>
                <ul class="list-line clearfix">
                    <a>
                        <li class="font-gray3">银行卡号</li>
                        <li>
                            <input class="input-white pr0" placeholder="请输入银行卡号" type="text" ng-model="bank.cardNo" name="changbankno" id="changbankno">
                        </li>
                    </a>
                </ul>
                <ul class="list-line clearfix">
                    <a>
                        <li class="font-gray3">确认卡号</li>
                        <li>
                            <input class="input-white pr0" placeholder="请输入银行卡号" type="text" ng-model="bank.cardNo" name="changbankno2" id="changbankno2">
                        </li>
                    </a>
                </ul>


                <input type="hidden" id="hprovince" name="hprovince" value="">
                <input type="hidden" id="hcity" name="hcity" value="">
                <input type="hidden" id="BankName" name="BankName" value="">
                
            </div>
            <div class="bank-tip">
                <i class="iconfont icon-jinggao font-size12 font-red"></i>
                <span>（因第三方支付政策要求）请选择常用的银行卡，<em>绑定成功后 充值提现只能在该银行卡上进行</em>！</span>
            </div>
            <div class="save-btn">
                <a class="btn-full btn-orange" @click="save">保存</a>
            </div>
        </div>
    </div>
</template>

<script>
import MyHead from "@/components/myhead"
export default {
    components:{
        MyHead      
    },
  name: 'addbank',
  data () {
    return {
    }
  },
  methods:{
      save(){
        //   表单验证
        console.log(1)
      }
  }
}
</script>

<style scoped lang="scss">
    .wrap {
        margin: 0 auto;
        width: 100%;
        min-width: 320px;
        overflow-x: hidden;
        padding-bottom: 1rem;
        background: #f5f5f5;
    }

    .his-codetitle {
        padding: 0 15px;
        color: #333;
        font-size: 12px;
    }
    .common-list {
        background: #FFF;
        margin-top: 5px;
        ul {
            border-bottom: 1px solid #f5f5f5;
            padding-right: 0;
            padding: 0 15px;
            li {
                float: left;
                width: 70%;
                text-align: left;
                height: 44px;
                line-height: 44px;
                font-size: 14px;
                select {
                    text-align: right;
                    width: 100%;
                }
                .select-nostyle {
                    // direction: rtl;
                    color: #999;
                    // appearance: none;
                    -moz-appearance: none;
                    -webkit-appearance: none;
                    border: none;
                    background: #FFF;
                }
                .input-white {
                    width: 200px;
                    height: 40px;
                    font-size: 14px;
                    line-height: 40px;
                    border: 1px solid #FFF;
                    color: auto;
                    border-radius: 0;
                    text-align: left;
                }
            }
            li:first-child {
                width: 30%;
            }
        }
        ul:last-child {
            border-bottom: 0;
        }
    }
    .bank-tip {
        padding: 15px;
        padding-bottom: 0;
        font-size: 12px;
        line-height: 18px;
        color: #999;
        em {
            color: #FF5254;
        }
    }
    .save-btn {
        margin-top: 15px;
        .btn-full {
            height: 48px;
            line-height: 48px;
            width: 94%;
            color: #FFF;
            font-size: 18px;
            text-decoration: none;
            display: inline-block;
            text-align: center;
            cursor: pointer;
            border: none;
            background: #ee3535;
            display: block;
            margin: 0 auto;
            border-radius: 5px;
        }
    }
</style>
