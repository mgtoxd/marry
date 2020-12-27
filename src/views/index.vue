<template>
    <div v-if="this.load">
        <div class="container-fluid contains" :class="down? 'con1':'con2'" id="con">
            <div class="row no-gutters" style="padding: 0px">
                <!--                            轮播图-->
                <div class="col-md-12 pad0">
                    <div class="block">
                        <el-carousel height="800px">
                            <el-carousel-item v-for="item in data.carousel.item">
                                <img :src="getsrc(item)" class="d-block w-100" style="width: 100%;height: 100%"
                                     alt="...">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
                <!--            类别-->
                <div class="row no-gutters m-auto col-md-12  pad0 navbar-fixed-top" id="shw">
                    <div class="logo col-md-3"
                         style="cursor:pointer"
                         @click="toindex()"
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
                <div class="row no-gutters m-auto col-md-12" id="shw2">
                    <div class="col-md-12 row no-gutters " id="blog_local" style="padding: 0px">
                        <div class="col-md-4" style="background-color:white;padding: 0px"
                             v-for="item in data.scrolling.imgsrc">
                            <img :src="getsrc(item)">
                            <button class="btn btn-primary">查看详情</button>
                        </div>
                    </div>
                </div>
                <!--透明内容图1-->
                <div class="col-md-12 page_1"
                     :style="{backgroundImage:`url(${getsrc(data.part1.imgsrc)})`}">
                </div>

                <!--白底4张图-->

                <div class="col-md-12">
                    <div class="row no-gutters">
                        <div class="col-md-6 col-lg-3 pics4"
                             v-for="item in data.part1.part.imgsrc">
                            <img :src="getsrc(item)" class="pics4_local">
                            <button class="btn btn-primary pics4_local_button">查看详情</button>
                        </div>
                    </div>
                </div>

                <!--透明内容图2-->
                <div class="col-md-12 page_2"
                     :style="{backgroundImage:`url(${getsrc(data.part2.imgsrc)})`}">
                </div>

                <!--宴会厅、议事堂-->
                <div class="col-md-12 dinnerAndtalk">
                    <div class="row no-gutters dinnerAndtalk_local" v-for="item in data.part2.part">
                        <div class="col-md-1"></div>
                        <!--宴会厅-->
                        <div class="col-md-10 dinner">
                            <div class="row ">
                                <div class="col-md-5 dinner_content"
                                     :style="{backgroundImage:`url(${getsrc(item.imgsrc1)})`}">
                                </div>
                                <div class="col-md-7 dinner_content"
                                     :style="{backgroundImage:`url(${getsrc(item.imgsrc2)})`}">
                                </div>
                                <button class="btn din_button">查看详情</button>
                            </div>
                        </div>
                        <div class="col-md-1"></div>
                    </div>
                </div>

                <!--尾页-->
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
        created() {
            document.title='主页';
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
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        name: "test",
        data() {
            return {
                name:'',
                loged:false,
                userdata: {},
                data: {},
                load: false,
                down:true,

            }
        },
        methods: {
            handleScroll:function(){
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                if (scrollTop>2100){
                    this.down=false;

                }else {
                    this.down=true
                }
            },
            getsrc: function (src) {
                return require("../assets/img" + src)
            },
            click_show: function () {
                this.show = true
            },
            jump(src) {
                console.log('jump');
                if (src==='Price.xml') {
                    top.location = 'http://localhost:9908/' + src;

                    // top.location = 'http://localhost:80/' + src;
                }else {
                    this.$router.push(src)
                }
                // top.location = 'http://localhost:9908/' + src;
            },
            log(){
                this.$router.push('/log');
            },
            removelog(){
                localStorage.removeItem('name');
                this.$router.push('/indexback')
            },
            toindex(){
                this.$router.push('/index')
            }

        }
    }
</script>

<style scoped>
    @import "../assets/css/sq.css";
</style>

