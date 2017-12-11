<template>
    <div class="introduce">
        <div class="wrapper">
            <h2 class="block-title">个人简介</h2>
            <div class="mlr30 wrap">
                <dl v-for="(introduce, i) in $resumeData.profile.introduce">
                    <dt>{{introduce.title}}</dt>
                    <dd v-for="(item, i) in introduce.list">{{i + 1 + '. ' + item}}</dd>
                </dl>
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