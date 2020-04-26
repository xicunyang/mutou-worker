<template>
  <div class='index'>
      <Title title='Works of YangXiCun' :icon-type="'md-git-network'"></Title>
      <div class="me">
          <img src="https://bj-mutou-1301404888.cos.ap-beijing.myqcloud.com/cdn/mutou-works/me.png" alt="">
      </div>
      <div class="works">
          <WorkItem v-for="item in works" 
            :key="item.id"
            :item="item">
            {{item}}
              <p slot='desc'>
                  {{item.desc}}
              </p>
          </WorkItem>
      </div>
      <Title title='交个朋友吧' :icon-type="'ios-heart'"></Title>
      <Friends></Friends>
      <Footer></Footer>
  </div>
</template>

<script>
import Title from './title';
import WorkItem from './work-item'
import Friends from './friends'
import Footer from './footer'

export default {
    name: 'Index',
    components: {Title, WorkItem, Friends, Footer},
    data() {
        return {
            works: [
                {
                    id: 1,
                    title: 'office文件转png图片 ( SPA版本 ) ',
                    imgUrl: 'https://bj-mutou-1301404888.cos.ap-beijing.myqcloud.com/cdn/mutou-works/file2png-img.jpg',
                    desc: `由于去年项目中有实现在线预览文档的需求，当时因为项目紧急，且没办法使用阿里云OSS的文档工具，
                    后端排期紧急，单纯H5无法很好的预览文档，
                    最后只得砍掉需求。今年自己根据阿里云的实现逻辑进行了实现，即office文档转为png格式图片以达到在H5中预览的效果。
                    并附以接口文档及Docker私有化部署文档。
                    （本版本为SPA版本）。`,
                    netUrl: 'http://office.yangxc.cn'
                },
                {
                    id: 2,
                    title: 'office文件转png图片 ( SSR版本 ) ',
                    imgUrl: 'https://bj-mutou-1301404888.cos.ap-beijing.myqcloud.com/cdn/mutou-works/file2png-img.jpg',
                    desc: `
                    由于去年项目中有实现在线预览文档的需求，当时因为项目紧急，且没办法使用阿里云OSS的文档工具，
                    后端排期紧急，单纯H5无法很好的预览文档，
                    最后只得砍掉需求。今年自己根据阿里云的实现逻辑进行了实现，即office文档转为png格式图片以达到在H5中预览的效果。
                    并附以接口文档及Docker私有化部署文档。
                    （本版本为SSR版本）。`,
                    netUrl: 'http://office.yangxc.cn:9999'
                }
            ]
        }
    },
}
</script>

<style lang='less' scoped>
.index{
    .me{
        font-size:0;
        img{
            width: 100%;
        }
    }
}
</style>