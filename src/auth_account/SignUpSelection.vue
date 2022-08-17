<template>
<!-- 회원가입 전 사용자 계정과 발급 계정 구분 -->
<div class="social-box">
    <div class="container">
     	<div class="row">
		    <div class="col-lg-4 col-xs-12 text-center">
				<div class="box">
                    <i class="fa fa-behance fa-3x" aria-hidden="true"></i>
					<div class="box-title">
						<h3>사용자 계정</h3>
					</div>
					<div class="box-text">
						<span>&&설명</span>
					</div>
					<!-- <div class="box-btn">
					    <a href="#">Learn More</a>
					</div> -->
				 </div>
			</div>	 
			
			 <div class="col-lg-4 col-xs-12  text-center">
				<div class="box">
				    <i class="fa fa-twitter fa-3x" aria-hidden="true"></i>
					<div class="box-title">
						<h3>발급 계정</h3>
					</div>
					<div class="box-text">
						<span>&&설명</span>
					</div>
					<!-- <div class="box-btn">
					    <a href="#">Learn More</a>
					</div> -->
				 </div>
			</div>	 
		</div>		
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap'); */

body {
    background: #f2f2f2;
    font-family: 'Poppins', sans-serif;
}

.social-box .box {
    background: #FFF;
    border-radius: 10px; 
    cursor: pointer;
    margin: 20px 0;
    padding: 40px 10px;
    transition: all 0.5s ease-out;
}

.social-box .box:hover {
   box-shadow: 0 0 6px #4183D7;
}

.social-box .box-text {
    font-size: 15px;
    line-height: 30px;
    margin: 20px 0;
}

.social-box .box-btn a {
    color: #4183D7;
    font-size: 16px;
    text-decoration: none;
}

.social-box .fa {
    color: #4183D7;
}

</style>