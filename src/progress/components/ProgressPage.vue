<template>
  <b-card-group deck>
    <b-card title="달성 업적">
      <b-card-text>{{ card1.text1 }}</b-card-text>
      <b-card-text>{{ card1.text2 }}</b-card-text>
      <b-card-text>{{ card1.text3 }}</b-card-text>
      <router-link to="/progress/achieved" class="card-link">더보기</router-link>
    </b-card>

    <b-card title="보유 NFT">
      <b-card-text>
        <b-img :src="require('../../assets/background.jpg')"></b-img>  
        <b-img :src="require('../../assets/googleIcon.png')"></b-img>  
        <b-img :src="require('../../assets/facebookIcon.png')"></b-img>
      </b-card-text>
      <router-link to="/progress/my_own_NFT" class="card-link">더보기</router-link>
    </b-card>

    <b-card title="미달성 업적">
      <b-card-text>{{ card3.text1 }}</b-card-text>
      <b-card-text>{{ card3.text2 }}</b-card-text>
      <b-card-text>{{ card3.text3 }}</b-card-text>
      <router-link to="/progress/not_achieved" class="card-link">더보기</router-link>
    </b-card>

    <b-card title="진행도">
      <b-card-text>
        {{ card4.prog1 }}
        <b-progress :max="card4.max1" height="1rem">
          <b-progress-bar :value="card4.value1">
            <span><strong>{{ card4.value1 }} / {{ card4.max1 }}</strong></span>
          </b-progress-bar>
        </b-progress>
        {{ card4.prog2 }}
        <b-progress :max="card4.max2" height="1rem">
          <b-progress-bar :value="card4.value2">
            <span><strong>{{ card4.value2 }} / {{ card4.max2 }}</strong></span>
          </b-progress-bar>
        </b-progress>
        {{ card4.prog3 }}
        <b-progress :max="card4.max3" height="1rem">
          <b-progress-bar :value="card4.value3">
            <span><strong>{{ card4.value3 }} / {{ card4.max3 }}</strong></span>
          </b-progress-bar>
        </b-progress>
      </b-card-text>
      <router-link to="/progress/all_progress" class="card-link">더보기</router-link>
    </b-card>
  </b-card-group>
</template>

<script>
export default {
  data() {
    return {
      card1: {
        text1: '업적1',
        text2: '업적3',
        text3: '업적5'
      },
      card2: {
        img1: '../../assets/background.jpg',
        img2: '../../assets/googleIcon.png',
        img3: '../../assets/facebookIcon.png'
      },
      card3: {
        text1: '업적2',
        text2: '업적4',
        text3: '업적6',
      },
      card4: {
        value1: 33,
        max1: 50,
        value2: 3,
        max2: 5,
        value3: 8,
        max3: 10,

        prog1: '업적1',
        prog2: '업적3',
        prog3: '업적5',
      }
    }
  }
}
</script>

<style scoped>
img {
  width: 5rem;
  height: 5rem;
  border: 1px solid black;
  margin-bottom: 1rem;
}
</style>