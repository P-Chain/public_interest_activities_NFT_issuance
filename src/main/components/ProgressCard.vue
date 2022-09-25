<template>
  <b-card title="달성업적" sub-title="">
    <div v-if="token">
      <b-card-text>
          <b-tabs content-class="mt-3">
            <b-tab title="달성 임박" active>
              <div>
                <h5>현재 업적</h5>
                <!-- DB에서 불러내는 작업 필요. 최대 3개까지 -->
                {{ prog1 }}
                <b-progress :max="max1" height="1rem">
                  <b-progress-bar :value="value1">
                    <span><strong>{{ value1 }} / {{ max1 }}</strong></span>
                  </b-progress-bar>
                </b-progress>
                {{ prog2 }}
                <b-progress :max="max2" height="1rem">
                  <b-progress-bar :value="value2">
                    <span><strong>{{ value2 }} / {{ max2 }}</strong></span>
                  </b-progress-bar>
                </b-progress>
                {{ prog3 }}
                <b-progress :max="max3" height="1rem">
                  <b-progress-bar :value="value3">
                    <span><strong>{{ value3 }} / {{ max3 }}</strong></span>
                  </b-progress-bar>
                </b-progress>
              </div>
            </b-tab>
            <!-- b-img 태그로 수정하기 -->
            <b-tab title="보유">
              <div>
                <b-img-lazy b-img v-bind="mainProps" alt="Transparent image" :src="require(`../../assets/achieves/${this.imglist[0]}`)"></b-img-lazy>
                  <b-img-lazy b-img v-bind="mainProps" alt="Transparent image" :src="require(`../../assets/achieves/${this.imglist[1]}`)"></b-img-lazy>
                  <b-img-lazy b-img v-bind="mainProps" alt="Transparent image" :src="require(`../../assets/achieves/${this.imglist[2]}`)"></b-img-lazy>
                  <b-img-lazy b-img v-bind="mainProps" alt="Transparent image" :src="require(`../../assets/achieves/${this.imglist[3]}`)"></b-img-lazy>
                  <b-img-lazy b-img v-bind="mainProps" alt="Transparent image" :src="require(`../../assets/achieves/${this.imglist[4]}`)"></b-img-lazy>
                  <b-img-lazy b-img v-bind="mainProps" alt="Transparent image" :src="require(`../../assets/achieves/${this.imglist[5]}`)"></b-img-lazy>
                  <b-img-lazy b-img v-bind="mainProps" alt="Transparent image" :src="require(`../../assets/achieves/${this.imglist[6]}`)"></b-img-lazy>
                  <b-img-lazy b-img v-bind="mainProps" alt="Transparent image" :src="require(`../../assets/achieves/${this.imglist[7]}`)"></b-img-lazy>
                  <b-img-lazy b-img v-bind="mainProps" alt="Transparent image" :src="require(`../../assets/achieves/${this.imglist[8]}`)"></b-img-lazy>
                  <b-img-lazy b-img v-bind="mainProps" alt="Transparent image" :src="require(`../../assets/achieves/${this.imglist[9]}`)"></b-img-lazy>
                  <b-img-lazy b-img v-bind="mainProps" alt="Transparent image" :src="require(`../../assets/achieves/${this.imglist[10]}`)"></b-img-lazy>
                  <b-img-lazy b-img v-bind="mainProps" alt="Transparent image" :src="require(`../../assets/achieves/${this.imglist[11]}`)"></b-img-lazy>
                  <b-img-lazy b-img v-bind="mainProps" alt="Transparent image" :src="require(`../../assets/achieves/${this.imglist[12]}`)"></b-img-lazy>
                  <b-img-lazy b-img v-bind="mainProps" alt="Transparent image" :src="require(`../../assets/achieves/${this.imglist[13]}`)"></b-img-lazy>
                  <b-img-lazy b-img v-bind="mainProps" alt="Transparent image" :src="require(`../../assets/achieves/${this.imglist[14]}`)"></b-img-lazy>
              </div>
            </b-tab>
            <!-- <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab> -->
          </b-tabs>
      </b-card-text>
      <!-- <b-card-text>A second paragraph of text in the card.</b-card-text> -->
      <a href="/progress" class="card-link">더보기</a>
    </div>
    <!-- <b-link href="#" class="card-link">Another link</b-link> -->
    <div v-else>
      <b-card-text>
        <p>로그인이 필요합니다</p>
      </b-card-text>
    </div>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      value1: 33,
      max1: 50,
      value2: 3,
      max2: 5,
      value3: 8,
      max3: 10,
        list:[],
        imglist:["blank.png","blank.png","blank.png","blank.png","blank.png","blank.png","blank.png","blank.png","blank.png","blank.png","blank.png","blank.png","blank.png","blank.png","blank.png"],
        file: "vol_50.png",

      prog1: '업적1',
      prog2: '업적2',
      prog3: '업적3',
        mainProps: { blank: true, width: 75, height: 75, class: 'm1' }
    }
  },
    created(){
        var data = axios.get('/api/progress/viewachieve').then((response)=>{
            this.list = response.data.ProgAchieve
            for(var i in this.list){
            this.imglist.splice(i,1,this.list[i].imgAch)
                console.log(this.imglist);
        }
        })
    },
    methods:{
        getImageUrl(imageId) {
        const { width, height } = this.mainProps
        var data = axios.get('/api/progress/viewachieve').then((response)=>{
            this.list = response.data.ProgAchieve
        })
//        axios.get('api/image/getimage/'+this.list[imageId].imgAch,{ responseType: 'arraybuffer' }).then((reaponse)=>{
//            console.log(response);
//        })
//        console.log(this.list);
        if(this.list.length-1<imageId){
            console.log(imageId);
            console.log(this.list.length);
            return "blank.png";
        }
        return this.list[imageId].imgAch;
      }
    },
  computed: {
    token() {
      return this.$store.state.token
    }
  }
}
</script>

<style scoped>
.progress {
  margin-bottom: 1rem;
}
img {
  width: 5rem;
  height: 5rem;
  border: 1px solid black;
}
</style>