//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    toView: "",
    motto: 'MiHome_Store',
    userInfo: {},
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 100,
    newgoods: [
      {
        "hg_pic": "../../../images/haishui1.jpg"
      }, {
        "hg_pic": "../../../images/haishui2.jpg"
      }, {
        "hg_pic": "../../../images/haishui3.jpg"
      }
    ],
    hotgoods: [{
      "more_pic": "../../../images/haishui4.jpg"
    }, {
        "more_pic": "../../../images/haishui5.jpg",
    }, {
        "more_pic": " ../../../images/haishui6.jpg",
    }, {
        "more_pic": " ../../../images/haishui7.jpg",
    }
    ],
    turntonewgood:
    [{ id: 0, text: "风景1", isSelect: false },
    { id: 1, text: "风景2", isSelect: false },
    { id: 2, text: "风景3", isSelect: false }],
    banner_list: [
      {
        "banner": [
          {
            "pic_url": "../../../images/shouhui.jpg",
          },
          {
            "pic_url": "../../../images/red.jpg",
          },
          {
            "pic_url": "../../../images/green.jpg",
          },
          {
            "pic_url": "../../../images/blue.jpg",
          },
          {
            "pic_url": "../../../images/pink.jpg",
          }
        ]
      },
      {
        "banner": []
      }
    ]
  },
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
  },
  scroll: function (e) {
    if (this.data.toView == "top") {
      this.setData({
        toView: ""
      })
    }
  },

  turntohotgood: function () {
     wx.navigateTo({
       url: '../detail/detail'
     })
     console.log('turntohotgood')
     },
  turntonewgood(e) {
    let id = e.currentTarget.dataset.id;
    console.log(id)
    wx.navigateTo({
      url: '../detail/detail?id=' + id
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  tap: function () {
    this.setData({
      toView: "top"
    })
  },
  onLoad: function () {
    console.log("AR北邮")
  }
})
