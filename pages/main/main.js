Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:"",
    today:{},
    future:{},
    wind:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.loadInfo();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  loadInfo:function(){
    var _this=this;
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        console.log(latitude, longitude)
        _this.loadCity(latitude, longitude)
      }
    })
  },
  loadCity: function (latitude, longitude){
    var _this = this;
    var ak = "FnKLI3FujWG9WAfyZRAoPvvCLuaTfGQj";//换成自己的ak
    var url = "https://api.map.baidu.com/telematics/v3/weather?location=" + longitude + "," + latitude + "&output=json&ak=" + ak; //接口请求和参数传递
    wx.request({
      url: url,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res);
        var city =res.data.results[0].currentCity;
        city=city.replace("市","");
        var wind1 = res.data.results[0].weather_data[0].wind;
        var wind2 = res.data.results[0].weather_data[1].wind;
        var wind3 = res.data.results[0].weather_data[2].wind;
        var wind4=res.data.results[0].weather_data[3].wind;
        var wind=[wind1,wind2,wind3,wind4];
        _this.setData({ city: city,wind:wind});
        _this.loadWeather(city,wind);
      }
    })
  },
  loadWeather:function(city,wind){
    var _this=this;
    var url = "http://wthrcdn.etouch.cn/weather_mini?city="+city;//接口请求和参数传递
    wx.request({
      url: url,
      header: {
        'Content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res);
        var future = res.data.data.forecast;
        var todayInfo = future.shift();//shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值
        var today=res.data.data;
        today.todayInfo = todayInfo;
        for(var i=0;i<future.length;i++){
          future[i].fengli = wind[i+1];
            
        }
        _this.setData({today:today,future:future});
      }
    })
  }
})