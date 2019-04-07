/*
***微信商城开发
***微信号：k1009756987
***博客：htmlk.cn
***QQ群：654226989
*/
var app = getApp()
Page({
  data:{
    current: 0,
    listgoods:[{
      "id": '001',
      "name": "北邮教学楼",
      "price": "00000",
      "type": "这是一栋教学楼",
      "pic_url": "../../../images/IMG_20180528_202232.jpg"
    }, {
      "id": '002',
      "name": "北邮月季花",
      "pic_url": "../../../images/IMG_20180529_171559.jpg",
      "price": "00000",
      "type": "教学楼上的月季花"
    }, {
      "id": '003',
      "name": "北邮宿舍楼",
      "price": "00000",
      "type": "燕南园一号楼",
      "pic_url": "../../../images/IMG_20180710_191912.jpg"
    }, {
      "id": '004',
      "name": "北邮教学楼",
      "price": "00000",
      "type": "这是一栋教学楼",
      "pic_url": "../../../images/IMG_20180528_202232.jpg"
    }, {
      "id": '005',
      "name": "北邮教学楼",
      "price": "00000",
      "type": "这是一栋教学楼",
      "pic_url": "../../../images/IMG_20180528_202232.jpg"
    }, {
      "id": '006',
      "name": "北邮教学楼",
      "price": "00000",
      "type": "这是一栋教学楼",
      "pic_url": "../../../images/IMG_20180528_202232.jpg"
    }],
  swiper:{
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000
      }
  },
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    //ajax请求数据
    // wx.request({
    //         url: 'http://www.htmlk.cn/json-test/lists.json',
    //         header: {
    //             'Content-Type': 'application/json'
    //         },
    //         success: function(res) {
    //            switch1(res.data);
    //            console.log(res.data);
    //            that.setData({
    //                listgoods:res.data
    //            });
    //         }
    //     })
    //对商品进行价格排序
    console.log(this.data.listgoods);
    switch1(this.data.listgoods);
    function switch1(odata){
        for(var i=0;i<odata.length-1;i++){
                 //console.log(odata[i].price);
                for(var j=0;j<odata.length-i-1;j++){
                       // console.log(parseInt(odata[j].price)+"-----"+parseInt(odata[j+1].price));
                  if(parseInt(odata[j].price)>parseInt(odata[j+1].price)){
                    var temp=odata[j];
                        odata[j]=odata[j+1];
                        odata[j+1]=temp;
                  }
                }
        }
    }    
  },
  //详情页跳转
  lookdetail:function(e){
    var lookid=e.currentTarget.dataset;
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url:"/pages/yiguo/detail/detail?id="+lookid.id
    })
  },
  switchSlider:function(e){
    this.setData({
      current:e.target.dataset.index
    })
  },
  changeSlider:function(e){
    this.setData({
      current: e.detail.current
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }

})
