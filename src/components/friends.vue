<template>
  <div class="friends">
    <div class="cards">
         <Card v-for="item in connects" 
        :key="item.id"
        :bordered="true"
        class='item-card'>
        <div class="item" @click='toJump(item.netUrl)'>
            <div class="item-img">
                <img :src="item.imgUrl" alt="img">
            </div>
        </div>
      </Card>     
    </div>   
    <WechatPanel :show='showWechatPanel' @close="closeWechatPanel"></WechatPanel>
  </div>   
</template>

<script>
import WechatPanel from './wechat-panel'
export default {
    name: 'Friends',
    components: {WechatPanel},
    data(){
        return {
            showWechatPanel: false,
            connects:[
                {
                    id: 1,
                    title: '简书',
                    netUrl: 'https://www.jianshu.com/u/367746e792f6',
                    imgUrl: 'https://bj-mutou-1301404888.cos.ap-beijing.myqcloud.com/cdn/mutou-works/jianshu.png',
                },
                {
                    id: 2,
                    title: 'GitHub',
                    netUrl: 'https://github.com/xicunyang',
                    imgUrl: 'https://bj-mutou-1301404888.cos.ap-beijing.myqcloud.com/cdn/mutou-works/github.png',
                },
                {
                    id: 3,
                    title: 'bilibili',
                    netUrl: 'https://space.bilibili.com/396601399',
                    imgUrl: 'https://bj-mutou-1301404888.cos.ap-beijing.myqcloud.com/cdn/mutou-works/bilibili.jpeg',
                },
                {
                    id: 4,
                    title: 'wechat',
                    netUrl: 'wechat',
                    imgUrl: 'https://bj-mutou-1301404888.cos.ap-beijing.myqcloud.com/cdn/mutou-works/wechat.png',
                }
            ]
        }
    },
    methods: {
        toJump(netUrl){
            if(netUrl !== 'wechat'){
                window.open(netUrl)
            } else {
                this.showWechatPanel = true
            }
        },
        closeWechatPanel() {
            this.showWechatPanel = false
        },
    },
}
</script>

<style lang='less' scoped>
.friends{
    .cards{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

        .item-card{
            margin-top: 13px;
            width: 48%;

            .item{
                height: 3.3rem;
                overflow: hidden;

                .item-img{
                    height: 100%;
                    display: flex;
                    align-items: center;

                    img{
                        width: 100%;
                    }
                }
            }
        }   
    }   
}
</style>