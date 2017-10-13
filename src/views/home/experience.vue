<template>
    <div class="experience">
        <div class="wrapper">
            <h2 class="block-title">工作经验</h2>
            <div class="mlr30">
                <div class="experience-item" v-for="(item, i) in $resumeData.experience">
                    <h2>{{item.conpanyName}}</h2>
                    <h4>
                        <span>{{item.duration}}</span>
                        <span>{{item.post}}</span>
                    </h4>
                    <hr>
                    <p>工作简介： {{item.description}} </p>
                    <div class="item-projects" v-if="item.projects && item.projects.length">
                        <p>项目经验：</p>
                        <dl class="mb15" v-for="(project,i) in item.projects">
                            <dt>{{i+1+'. '+project.title}}</dt>
                            <dd>{{project.desc}}</dd>
                        </dl>
                    </div>
                    <p v-if="item.addition">备注： {{item.addition}}</p>
                </div>
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