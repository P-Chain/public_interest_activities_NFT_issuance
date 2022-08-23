<template>
  <div>
    <b-card title="달성업적">
      <b-card-text>
          <b-tabs content-class="mt-3">
            <b-tab title="달성 임박" active>
              <div>
                <h5>현재 업적</h5>
                <!-- DB에서 불러내는 작업 필요. 최대 3개까지 -->
                &&업적1
                <b-progress :max="max1" height="1rem">
                  <b-progress-bar :value="value1">
                    <span><strong>{{ value1 }} / {{ max1 }}</strong></span>
                  </b-progress-bar>
                </b-progress>
                &&업적2
                <b-progress :max="max2" height="1rem">
                  <b-progress-bar :value="value2">
                    <span><strong>{{ value2 }} / {{ max2 }}</strong></span>
                  </b-progress-bar>
                </b-progress>
                &&업적3
                <b-progress :max="max3" height="1rem">
                  <b-progress-bar :value="value3">
                    <span><strong>{{ value3 }} / {{ max3 }}</strong></span>
                  </b-progress-bar>
                </b-progress>
              </div>
            </b-tab>
            <b-tab title="보유">
              <p>I'm the second tab</p>
            </b-tab>
            <!-- <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab> -->
          </b-tabs>
      </b-card-text>
      <!-- <b-card-text>A second paragraph of text in the card.</b-card-text> -->
      <a href="/progress" class="card-link">더보기</a>
      <!-- <b-link href="#" class="card-link">Another link</b-link> -->
    </b-card>
  </div>
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
      max3: 10
    }
  }
}
</script>

<style scoped>
.progress {
  margin-bottom: 1rem;
}
</style>