<template>
  <div class='index'>
      <Title title='Works of XiCunYang' :icon-type="'md-git-network'"></Title>
      <div class="me">
          <img src="https://bj-mutou-1301404888.cos.ap-beijing.myqcloud.com/cdn/mutou-works/me.gif" alt="">
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
                    id: 0,
                    title: '持续开发中...',
                    desc:'之前实践过很多的小项目，整理的时候都看不上眼了，宁缺毋滥吧，继续加油付诸更多实践~',
                    noClick: true
                },
                {
                    id: 1,
                    title: 'office文件转png图片 ( SPA版本 ) ',
                    imgUrl: 'https://bj-mutou-1301404888.cos.ap-beijing.myqcloud.com/cdn/mutou-works/file2png-img.jpg',
                    desc: `由于去年项目中有实现在线预览文档的需求，当时因为项目紧急，且没办法使用阿里云OSS的文档工具，
                    并且后端排期紧急，单纯前端处理无法很好的预览文档，
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
                    并且后端排期紧急，单纯前端处理无法很好的预览文档，
                    最后只得砍掉需求。今年自己根据阿里云的实现逻辑进行了实现，即office文档转为png格式图片以达到在H5中预览的效果。
                    并附以接口文档及Docker私有化部署文档。
                    （本版本为SSR版本）。`,
                    netUrl: 'http://office.yangxc.cn:9999'
                },
                {
                    id: 3,
                    title: '图片验证码插件',
                    imgUrl: 'https://bj-mutou-1301404888.cos.ap-beijing.myqcloud.com/cdn/mutou-works/image-verify-code.gif',
                    desc: `作为一次独立开发插件的实践。利用业余时间将项目中的图片验证码插件进行拆分，暴露配置选项，封装出来的该验证码插件，
                    具体文档可点进去查看，由于最近比较忙，没有维护起来，比较惭愧。
                    `,
                    netUrl: 'https://www.jianshu.com/p/c073b242c150'
                },
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