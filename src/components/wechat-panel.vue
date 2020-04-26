<template>
    <div class="wechat-panel">
        <Modal
                v-model="innerShow"
                title="联系我吧"
                @on-cancel	="$emit('close')"
                :footer-hide="true"
                :styles="{top: '20px'}"
        >
            <Card>
                <p slot="title">邮箱</p>
                <pre>xicunyang@163.com</pre>
            </Card>
            <br>
            <Card>
                <p slot="title">微信</p>
                <img style="width: 100%" src="https://bj-mutou-1301404888.cos.ap-beijing.myqcloud.com/wechat.jpeg" alt="">
            </Card>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: "WechatPanel",
        props: {
            show: {
                type: Boolean,
                default: () => false
            }
        },
        data(){
            return {
                innerShow: this.show
            }
        },
        watch:{
            show(val){
                this.innerShow = val
            }
        },
    }
</script>

<style scoped lang="less"></style>
