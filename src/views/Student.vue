<template>
    <el-container class="layout-container">
        <el-aside width="17vw" class="el-aside">
            <el-scrollbar>
                <student-navigator/>
            </el-scrollbar>
        </el-aside>
        <el-main class="el-main">
            <el-scrollbar>
                <router-view></router-view>
            </el-scrollbar>
        </el-main>
    </el-container>
</template>

<style scoped>
.layout-container {
    height: 100vh;
    padding: 0;
    margin: 0;
}

.el-aside{
    border-right: solid 1px #e6e6e6;
}

.el-main{
    padding: 0;
    margin: 0;
}
</style>

<style>
body {
    margin: 0;
}
</style>

