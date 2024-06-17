<template>
    <div>
        
    </div>
</template>

<script>
    export default {
        name: 'TopupPage',
        data() {
            return {
                Code: ''
            }
        },
        methods: {
            async Topup() {
                console.log(this.Code);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>