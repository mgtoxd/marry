<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style>

</style>
<script>

    export default {

        created() {
            console.log(window.location.href);

            if (window.location.href==='http://127.0.0.1:9908/#/' ||window.location.href==='http://localhost:9908/#/' ) {
                top.location = 'http://localhost:9908/team/team.xml';
            }else {
                // this.$router.push('/index')
            }


    },
        data() {
            return {
                data: {}
            }
        }
    }
</script>