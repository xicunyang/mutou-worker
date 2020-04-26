<template>
  <div class="title">
      <div class="inner">
          <Icon :type="iconType" /> {{title}}
      </div>
  </div>
</template>

<script>
export default {
    name: 'Title',
    props: {
        title: {
            type: String,
            default: ()=> ''
        },
        iconType: {
            type: String,
            default: ()=> ''
        }
    },
}
</script>

<style lang='less' scoped>
.title{
    padding-top: .2rem;
    text-align: center;
    font-size: .6rem;
    
    .inner{

    }
}
</style>