<!--
1. 지갑 이미지, NFT 이미지, 신청목록 불러오는 작업 필요
2. NFT 이미지는 index로 구별되어야 함(이미지 합성 좌표 지정 때문)
3. 이미지 합성 후 네이밍, 어떻게 저장할 지에 관한 논의 필요
-->
<template>
  <div>
    <b-form-group
        label="발급 승인 NFT 목록"
        v-slot="{ ariaDescribedby }"
        >
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="NFT list"
        stacked
      ></b-form-checkbox-group>
      <!-- 수정 -->
      <b-button @click="submitApprove" variant="primary">발급</b-button>
      <b-button @click="submitRevise" variant="danger">거절</b-button>
    </b-form-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: [

      ], // Must be an array reference!
      options: [
        // DB에서 불러오는 작업 필요
        { value: { user: 'YYY', nft: 'NFT1' }, html: 'NFT1 / 발급자: XXX / 대상자: YYY <a target=&apos;_blank&apos; href="">파일 보기</a>' },
        { value: { user: 'YYY', nft: 'NFT2' }, html: 'NFT1 / 발급자: XXX / 대상자: YYY <a target=&apos;_blank&apos; href="">파일 보기</a>' },
        { value: { user: 'YYY', nft: 'NFT3' }, html: 'NFT1 / 발급자: XXX / 대상자: YYY <a target=&apos;_blank&apos; href="">파일 보기</a>' },
        { value: { user: 'YYY', nft: 'NFT4' }, html: 'NFT1 / 발급자: XXX / 대상자: YYY <a target=&apos;_blank&apos; href="">파일 보기</a>' },
      ],
      canvas: null,
      context: null
    }
  },
  methods: {
    async submitApprove(event) {
      var walletImg = null;
      var NFTimage = null;
      var reader1 = new FileReader();
      var reader2 = new FileReader();
      for (var i in this.selected) {
      // 해당 유저의 DB에서 지갑 이미지를 불러오는 작업 필요
        await axios.get("/", { 
          nickname: this.selected[i].value.user
          })
          .then(response => {
            walletImg = response.data.walletImg;
            console.log('walletImg='+walletImg);
          })
          .catch(error => {
            console.log('axios get wallet img error');
          })

      // 해당 NFT 이미지 불러오는 작업 필요
        await axios.get("/api/image/getImage")
          .then(response => {
            NFTimage.image = response.data.image;
            NFTimage.index = response.data.index; // 업적 종류(이미지 합성 좌표 지정에 쓰임)
          })
          .catch(error => {
            console.log('axios get nft img error');
          })

      // if 문으로 업적 종류마다 지갑 이미지 합성 좌표를 다르게 지정해야 함
        reader1.readAsDataURL(NFTimage.image);
        reader1.onload = () => {
          console.log('reader1 onload executed')
          var tempImage1 = new Image(); //drawImage 메서드에 넣기 위해 이미지 객체화
          tempImage1.src = reader1.result; //data-uri를 이미지 객체에 주입
          tempImage1.onload = () => {
              //이미지를 캔버스에 그리기
            console.log('tempimg1 onload executed')
            this.context.drawImage(tempImage1, 0, 0, 500, 500); // 대상, (시작지점, 시작지점), (사진 크기, 사진 크기)
          }
          // FileReader 사용
          reader2.readAsDataURL(walletImg);
          reader2.onload = () => {
            console.log('reader2 onload executed')
            var tempImage2 = new Image(); //drawImage 메서드에 넣기 위해 이미지 객체화
            tempImage2.src = reader2.result; //data-uri를 이미지 객체에 주입
            tempImage2.onload = () => {
                //이미지를 캔버스에 그리기
              var startx = 100, starty = 100, xvalue = 150, yvalue = 150;  
              console.log('tempimg2 onload executed')
              // if (NFTimage.index === 0) {startx = ;starty = ;xvalue = ;yvalue = ;}
              // else if (NFTimage.index === 1) {}
              // else if (NFTimage.index === 2) {}

              this.context.drawImage(tempImage2, startx, starty, xvalue, yvalue); // 대상, (시작지점, 시작지점), (사진 크기, 사진 크기)
              console.log(this.canvas.toDataURL("image/png"));
            }
          }
        }
      }
    },
    submitRevise(event) {
    // 신청 DB에서 해당 목록 제거
    },
  },
  created() {
  // NFT 발급 신청목록을 DB 불러오는 작업 필요
    axios.get("/").then(response => {}).catch(error => {})
  
  // canvas 인스턴스 실행
    this.canvas = document.createElement('canvas');
    this.canvas.width = 500; //가로 100px
    this.canvas.height = 500; //세로 100px
    
    this.context = this.canvas.getContext("2d");
    this.context.globalCompositeOperation = "source-over";
    this.context.fillStyle = "white"
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  } 
}
</script>

<style scoped>
.bv-no-focus-ring {
  margin-bottom: 1rem;
  border: 1px solid black;
}
</style>