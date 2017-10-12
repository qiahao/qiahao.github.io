<template>
    <div class="top-nav">
    	<div class="wrapper">
	        <ul>
	            <li v-for="(nav, i) in $resumeData.topNav " >
	                <router-link :to="nav.path">{{nav.title}}</router-link>
	            </li>
	        </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
}
</script>