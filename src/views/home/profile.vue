<template>
    <div class="contact">
        <div class="wrapper">
            <h2 class="block-title">基本信息</h2>
            <div class="mlr30">
                <ul>
                    <li>电话：{{$resumeData.profile.phone}}</li>
                    <li>Email：{{$resumeData.profile.email}}</li>
                    <li>QQ：{{$resumeData.profile.qq}}</li>
                </ul>
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