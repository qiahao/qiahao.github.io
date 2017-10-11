<template>
    <div class="home-profile ">
        <div class="wrapper row-box">
            <div class="row">
                <div class="col-xs-4"><span class="label">姓名：</span><span>{{$resumeData.profile.name}}</span></div>
                <div class="col-xs-4"><span class="label">性别：</span><span>{{$resumeData.profile.sex}}</span></div>
                <div class="col-xs-4"><span class="label">出生年月：</span><span>{{$resumeData.profile.sex}}</span></div>
            </div>
            <div class="row">
                <div class="col-xs-4"><span class="label">电话：</span><span>{{$resumeData.profile.phone}}</span></div>
                <div class="col-xs-4"><span class="label">邮箱：</span><span>{{$resumeData.profile.email}}</span></div>
                <div class="col-xs-4"><span class="label">：</span><span>{{$resumeData.profile.name}}</span></div>
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