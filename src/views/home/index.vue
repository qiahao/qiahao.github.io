<template>
    <div id="home" class="home">
        <top-nav></top-nav>
        <banner></banner>
        <div class="view-box">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import topNav from './top-nav'
import banner from './banner'
export default {
    data() {
        return {}
    },
    components: {
        banner,
        topNav,
    }
}
</script>
<style lang="scss" src="./style.scss"></style>