<template>
    <div>
        <button @click="getUserInfo">用户信息</button>
        <h3>添加新图：</h3>
        <input type="file" id="saveImage" name="headPic" accept="image/png,image/jpg,image/gif,image/jpeg"
               ref="new_image">
        <button @click="alterHeadPic">确认添加</button>
        <div><img src="" width="100px" id="img"></div>
    </div>
</template>

<script>
    import user from "@/js/user";
    export default {
        name: "index",
        methods: user
    }
</script>

<style scoped>

</style>