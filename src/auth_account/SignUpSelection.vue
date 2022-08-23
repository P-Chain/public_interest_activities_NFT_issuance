<!-- 회원가입 페이지 -->

<template>
  <div class="contents">
    <h4>회원가입</h4>
    <b-card-group deck>
			<b-card title="사용자 계정">
				<b-card-text>일반 사용자용 계정</b-card-text>
				<b-button href="/user_account" variant="primary">회원가입</b-button>
			</b-card>

			<b-card title="발급 계정">
				<b-card-text>발급용 계정</b-card-text>
				<b-button href="/director_account" variant="secondary">회원가입</b-button>
			</b-card>
  	</b-card-group>
	</div>
</template>

<script>

export default {

}
</script>

<style scoped>

</style>