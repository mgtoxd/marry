<template>
    <div v-if="this.load">
        <div class="container-fluid no-gutters" style="padding: 0px">
            <div class="row no-gutters">
                <div class="row no-gutters m-auto col-md-12  pad0 " id="shw" style="z-index: 999">
                    <div class="logo col-md-3"
                         style="cursor:pointer"
                         @click="toindex"
                         :style="{backgroundImage:`url(${getsrc(data.foot.introduction.imgsrc)})`}">
                    </div>
                    <div class="col-md-1 list1"
                         v-for="item in data.webname.category"
                    >{{item.name}}
                    </div>
                    <div class="col-md-4" style="background-color: black">
                        <div v-if="loged===false" class="row no-gutters" style="margin-top: 40px">
                            <div  class="col-6">
                                <span style="color: white;font-size: 20px;margin-left: 40px">您未登录，请登录</span>
                            </div>
                            <div class="col-6">
                                <button class="buttonn btn " @click="log">登录</button>
                            </div>
                        </div>
                        <div v-if="loged" class="row no-gutters"  style="margin-top: 40px">
                            <div  class="col-6">
                                <span style="color: white;font-size: 20px;margin-left: 40px">您好，{{name}}</span>
                            </div>
                            <div class="col-6">
                                <button class="buttonn btn" @click="removelog">登出</button>
                            </div>

                        </div>

                    </div>
                    <div class="col-md-12 show row no-gutters listkind">
                        <!-- listkind 下拉属性-->
                        <div class="col-md-2" :style="{backgroundImage:`url(${getsrc('/list_bgi.png')})`}">
                        </div>
                        <!--宴会厅等属性list2list-->
                        <div class="col-md-2 list1_content" v-for="item in data.webname.category[0].pic"
                             :style="{backgroundImage:`url(${getsrc('/list_bgi.png')})`}">
                            <div @click="jump(item.href)"><p style="color: white">{{item.type}}</p>
                                <img :src="getsrc(item.imgsrc)" class="din_img"></div>
                        </div>
                        <div class="col-md-2" :style="{backgroundImage:`url(${getsrc('/list_bgi.png')})`}">
                        </div>
                    </div>
                </div>
                <div class="col-12" >
                    <div class="box" style="height:800px">
                        <img src="../assets/img/show1/character-1460511.jpg" id="img1">
                        <img src="../assets/img/show1/couple-1506519.jpg" id="img2">
                        <img src="../assets/img/show1/girl-1850061.jpg" id="img3">
                        <img src="../assets/img/show1/marriage-1571673.jpg" id="img4">
                        <img src="../assets/img/show1/woman-4649601.jpg" id="img5">
                    </div>
                    <div class="list">
                        <ul>
                            <li><a href="#img1"><img src="../assets/img/show1/character-1460511.jpg"></a></li>
                            <li><a href="#img2"><img src="../assets/img/show1/couple-1506519.jpg"></a></li>
                            <li><a href="#img3"><img src="../assets/img/show1/girl-1850061.jpg"></a></li>
                            <li><a href="#img4"><img src="../assets/img/show1/marriage-1571673.jpg"></a></li>
                            <li><a href="#img5"><img src="../assets/img/show1/woman-4649601.jpg"></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-12 ending_bgi">
                    <!--按钮-->
                    <div class="row no-gutters ending_local">
                        <div class="col-md-4"></div>
                        <!--介绍logo-->
                        <div class="col-md-2 inr_logo">

                        </div>
                        <!--介绍内容-->
                        <div class="col-md-3">
                            <div v-for="item in data.foot.introduction.txt" style="padding-top: 35px;">
                                <p class="inr_content">{{item}}</p>
                            </div>
                        </div>
                        <div class="col-md-3"></div>
                    </div>
                    <!--按钮属性-->
                    <div class="row m-auto" style="width: 60%;">
                        <div class="col-md-4 button_out" v-for="item in data.foot.button.btn">
                            <button type="button"
                                    class="buttonn btn">{{item}}
                            </button>
                        </div>
                    </div>
                    <!--按钮和黑线之间-->
                    <div class="row m-auto buttonInline">
                    </div>
                    <!--黑线-->
                    <div class="row m-auto line">
                    </div>
                    <!--页尾-->
                    <div class="row footcontent">
                        <div class="col-md-2"></div>
                        <div class="col-md-8 foot">
                            <p v-for="item in data.foot.remark.txt">{{item}}</p>
                        </div>
                        <div class="col-md-2"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        created(){
            const _this = this;
            if (localStorage.getItem('name')){
                _this.name=localStorage.getItem('name');
                _this.loged=true;
            }
            axios.get('/wedding.xml').then(res => {
                var jsonObj = _this.$x2js.xml2js(res.data);
                _this.data = jsonObj.index;
                this.load = true;
            });
        },
        name: "show1",
        data(){
            return{
                data:{},
                load:false,
                loged:false
            }
        },
        methods:{
            getsrc: function (src) {
                return require("../assets/img" + src)
            },
            jump(src) {
                console.log('jump');
                if (src==='Price.xml') {
                    top.location = 'http://localhost:9908/' + src;

                    // top.location = 'http://localhost:80/' + src;
                }else {
                    this.$router.push(src)
                }


            },
            removelog(){
                localStorage.removeItem('name');
                this.$router.push('/indexback')
            },
            log(){
                this.$router.push('/log');
            },
            toindex(){
                this.$router.push('/index')
            }
        }
    }
</script>

<style scoped>
    @import "../assets/css/show1.css";

</style>