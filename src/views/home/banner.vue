<template>
    <div class="banner">
        <div class="wrapper lg">
            <h1><span>{{$resumeData.profile.name}}</span></h1>
            <div class="row">
            	<div class="col-6">岗位： {{$resumeData.profile.title}}</div>
                <div class="col-6">经验：{{$resumeData.profile.yearsOfWorking}}</div>
                <div class="col-6">电话：{{$resumeData.profile.phone}}</div>
                <div class="col-6">邮箱：{{$resumeData.profile.email}}</div>
                <!-- <div class="col-6">籍贯：{{$resumeData.profile.comeFrom}}</div> -->
            	<div class="col-6">毕业院校：{{$resumeData.profile.graduation}}</div>
            </div>
            <!-- <h2>{{$resumeData.profile.yearsOfWorking}}</h2> -->
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