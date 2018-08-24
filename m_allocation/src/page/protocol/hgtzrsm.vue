<template>
    <div class="hgtzrsm">
        
      <my-head title="合格投资人申明"></my-head>
        <div class="module-border">
            <div class="title">
            <div class="fb font-size14 font-navline ng-binding" id="title">合格投资人申明</div>
            </div>
        </div>
        <div class="module-spaceaside">
            <div class="zunjing font-size12 font-gray6"></div>
            <div class="font-size12 font-gray6 ng-binding" id="content"><p class="p" style="vertical-align:baseline;">
        <span style="font-size:9pt;">本人自愿申报成为合格投资人，并申明如下：</span><span style="font-size:9pt;font-family:'';">&nbsp;</span><span style="font-size:9pt;">本人申明在创盈中心注册并进行投资交易等行为之前，本人已认真阅读并理解所有产品文件，本人不属于中国证监会认定的市场禁入者，包括上市公司董事、监事等高级管理人员及证券经营机构（包括分支机构）高级管理人员及内设业务部门负责人，证券登记、托管、清算机构高级管理人员及内设业务部门负责人，从事证券业务的律师，注册会计师以及资产评估人员，投资基金管理机构、投资基金托管机构的高级管理人员及其内设业务部门负责人，证券投资咨询机构的高级管理人员及其投资咨询人员以及中国证监会认定的其他人员。本人能够识别、判断和承担相关投资风险，并愿意依法承担相应的投资风险。</span><span style="font-size:9pt;font-family:'';"></span> 
    </p>
    <p class="p" style="vertical-align:baseline;">
        <span style="font-size:9pt;">本人申明成为合格投资人后，对交易涉及的事项保密，并依法缴纳投资活动所产生的各项税费。</span><span style="font-size:9pt;font-family:'';"></span> 
    </p>
    <p class="MsoNormal">
        &nbsp;
    </p></div>
        </div>
    </div>
</template>

<script>
import MyHead from "@/components/myhead"
export default {
  name: 'hgtzrsm',
  components:{
      MyHead
  },
  data () {
    return {

    }
  },
}
</script>

<style lang="scss">
    .hgtzrsm{
        width: 100%;
        height: 100%;
        background: #fff;
    }
    .module-border {
        margin-left: 15px;
        border-bottom: 1px solid #E5E5E5;
        .title {
            line-height: 25px;
            padding-top: 20px;
            .font-navline {
                color: #3B4252;
            }
        }
    }
    .module-spaceaside {
        padding: 0 15px;
        border-bottom: none;
        .zunjing {
            line-height: 50px;
            padding-bottom: 10px;
        }
    }
</style>
