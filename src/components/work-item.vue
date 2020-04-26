<template>
  <div class="work-item">
      <Card :bordered="true">
        <p slot="title" class="work-item-title">
            <Icon type="logo-codepen" /> &nbsp; 
            <span >{{item.title}}</span>
        </p>
        <div class="work-item-img" @click='jumpUrl(item.netUrl)'>
            <img :src="item.imgUrl" alt="">
        </div>
        <div class="work-item-desc">
            <slot name="desc">
                   
            </slot>
        </div>
    </Card>
  </div>
</template>

<script>
export default {
    name: 'WorkItem',
    props: {
        item: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
        jumpUrl(netUrl){
            window.open(netUrl)
        }
    },
}
</script>

<style lang='less' scoped>
.work-item{
    margin-top: 10px;
    .ivu-icon-logo-codepen{
        font-size: .5rem;
    }

    .work-item-title{
        height: .48rem;
        >span{
            font-size: .4rem;
        }
    }

    .work-item-img{
        font-size: 0;
        width: 100%;
        img{
            width: 100%;
        }
    }
    .work-item-desc{
        padding-top: 10px;
        text-indent: .4rem;
        font-size: .38rem;
    }
}
</style>