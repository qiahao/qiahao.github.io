<template>
    <div class="introduce">
        <div class="wrapper">
            <h2 class="block-title">个人简介</h2>
            <div class="mlr30">
            	<p v-for="section in $resumeData.profile.introduce">{{section}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    }
}
</script>