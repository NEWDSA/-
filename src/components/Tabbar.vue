<template>
    <nav>
        <ul>
            <!-- shen ming si dao hang -->
                <router-link to="/film" tag="li" active-class="myactive">
                    <i class="iconfont icon-form"></i>
                film</router-link>
                <router-link to="/cinema" tag="li" active-class="myactive">
                <i class="iconfont icon-form"></i>
                cinema</router-link>
                <router-link to="/center" tag="li" active-class="myactive">
                <i class="iconfont icon-form"></i>
                center</router-link>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
    .myactive{
        color:red;
    }

    nav{
        position: fixed;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 50px;
        background: white;
        ul{
            display:flex;
            li{
                flex: 1;
                line-height: 50px;
                text-align: center;
            }
        }
    }
</style>
