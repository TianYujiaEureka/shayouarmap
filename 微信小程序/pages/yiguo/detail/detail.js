
Page({
  data:{
      detailgood:{},
      listgood:[{
    "id": 101001,
    "name": "北邮教学楼",
    "price": "00000",
    "type": "3.3kg/箱",
    "pic_url": "../../../images/IMG_20180528_202232.jpg"
}, {
    "id": 101002,
    "name": "北邮月季花",
    "pic_url": "../../../images/IMG_20180529_171559.jpg",
    "price": "00000",
    "type": "3.3kg/箱"
}, {
    "id": 101003,
    "name": "北邮宿舍楼",
    "price": "00000",
    "type": "3.3kg/箱",
    "pic_url": "../../../images/IMG_20180710_191912.jpg"
}, {
    "id": 102001,
    "name": "北邮教学楼",
    "price": "00000",
    "type": "3.3kg/箱",
    "pic_url": "../../../images/IMG_20180528_202232.jpg"
}, {
    "id": 102002,
    "price": "00000",
    "type": "3.3kg/箱",
    "pic_url": "../../../images/IMG_20180528_202232.jpg"
}, {
    "id": 102003,
    "name": "北邮教学楼",
    "price": "00000",
    "type": "3.3kg/箱",
    "pic_url": "../../../images/IMG_20180528_202232.jpg"
}, {
    "id": 103001, 
    "name": "北邮教学楼",
    "price": "00000",
    "type": "3.3kg/箱",
    "pic_url": "../../../images/IMG_20180528_202232.jpg"
}, {
    "id": 103002,
    "name": "北邮教学楼",
    "price": "00000",
    "type": "3.3kg/箱",
    "pic_url": "../../../images/IMG_20180528_202232.jpg"
}, {
    "id": 103003,
    "name": "北邮教学楼",
    "price": "00000",
    "type": "3.3kg/箱",
    "pic_url": "../../../images/IMG_20180528_202232.jpg"
}, {
    "id": 201001,
    "name": "北邮教学楼",
    "price": "00000",
    "type": "教学楼简单介绍",
    "pic_url": "../../../images/IMG_20180528_202232.jpg"
}, {
    "id": 201002,
    "name": "北邮教学楼",
    "price": "00000",
    "type": "教学楼简单介绍",
    "pic_url": "../../../images/IMG_20180528_202232.jpg"
}, {
    "id": 202001,
    "name": "北邮教学楼",
    "price": "00000",
    "type": "3.3kg/箱",
    "pic_url": "../../../images/IMG_20180528_202232.jpg"
}, {
    "id": 203001,
    "name": "北邮教学楼",
    "price": "00000",
    "type": "3.3kg/箱",
    "pic_url": "../../../images/IMG_20180528_202232.jpg"
}, {
    "id": 401001,
    "name": "北邮教学楼",
    "price": "00000",
    "type": "3.3kg/箱",
    "pic_url": "../../../images/IMG_20180528_202232.jpg"
}, {
    "id": 101001,
    "name": "北邮教学楼",
    "price": "00000",
    "type": "3.3kg/箱",
    "pic_url": "../../../images/IMG_20180528_202232.jpg"
}],
 hotgoods:[
      {
        "more_pic":"../../../../../images/pink.jpg"
      },{
        "more_pic":"../../../../../images/red.jpg"
      },{
        "more_pic":"../../../../../images/blue.jpg"
      },{
        "more_pic":"../../../../../images/green.jpg"
      },
    ],
  }, 
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var id = options.id;
    let list = this.data.listgood;
    var that = this;
    list.forEach(function (arr) {
      console.log(arr.id.toString())
      console.log(id)
      if (id == arr.id) {
        that.setData({
          detailgood: arr
        })
      }
    })
    console.log(this.data.detailgood)
  },
  tobgm:function(){
    wx.navigateTo({
      url: '../bgm/bgm'
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
