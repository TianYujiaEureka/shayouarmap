
//record.js 

//获取应用实例  

Page({

  data: {

    // text:"这是一个页面"

  },

  onLoad: function (options) {

    // 页面初始化 options为页面跳转所带来的参数

		/**

		 * 监听音乐播放

		 */

    wx.onBackgroundAudioPlay(function () {

      console.log('onBackgroundAudioPlay')

    })



		/**

		 * 监听音乐暂停

		 */

    wx.onBackgroundAudioPause(function () {

      console.log('onBackgroundAudioPause')

    })



		/**

		 * 监听音乐停止

		 */

    wx.onBackgroundAudioStop(function () {

      console.log('onBackgroundAudioStop')

    })



  },//播放音乐

  listenerButtonPlay: function () {

    wx.playBackgroundAudio({

      //播放地址

      dataUrl: 'http://sc1.111ttt.com/2016/1/09/28/202280605509.mp3',

      title: '青云志',

      //图片地址

      coverImgUrl: 'http://r1.ykimg.com/050E0000576B75F667BC3C136B06E4E7'



    })

  },

	/**

	* 播放状态

	*/

  listenerButtonGetPlayState: function () {

    wx.getBackgroundAudioPlayerState({

      success: function (res) {

        console.log(res)

        //duration 总时长

        //currentPosition 当前播放位置

        //status 播放状态

        //downloadPercent 下载状况 100 即为100%

        //dataUrl 当前播放音乐地址

      }

    })

  },

	/**

	* 监听button暂停按钮

	*/

  listenerButtonPause: function () {

    wx.pauseBackgroundAudio();

  },

	/**

	*停止播放 

	*/

  listenerButtonStop: function () {

    wx.stopBackgroundAudio()

  }

})
