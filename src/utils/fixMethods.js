/*
 * @Author: your name
 * @Date: 2021-02-24 11:51:11
 * @LastEditTime: 2021-02-24 18:24:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dating-wxappe:\test\dating-wxapp\src\utils\fixMethods.js
 */
const fixMethods = {
    /**
    * 计算两个经纬度的距离(千米)
    */
   getRad : function(d){
        var PI = Math.PI;
        return d*PI/180.0;
    },
    getDistance : function(lat1, lng1, lat2, lng2){
        var EARTH_RADIUS = 6378137.0; //单位M
        var radLat1 = this.getRad(lat1);
        var radLat2 = this.getRad(lat2);
        var a = radLat1 - radLat2;
        var b = this.getRad(lng1) - this.getRad(lng2);
        var s = 2*Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) + Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2)));
        s = s*EARTH_RADIUS;
        s = Math.round(s*10000)/10000.0;
        return s;
    },
    // 将百度地图经纬度转换为腾讯/高德地图经纬度
    bMapTransQQMap:function(lng, lat) {
          let x_pi = 3.14159265358979324 * 3000.0 / 180.0;
          let x = lng - 0.0065;
          let y = lat - 0.006;
          let z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
          let theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
          let lngs = z * Math.cos(theta);
          let lats = z * Math.sin(theta);
          
          return {
              lng: lngs,
              lat: lats        
          }   
    },
    // 通过用户id奇偶性实现ABTest
    idABtest(id){
        return (id%2 == 0) ?"B":"A";
    },
    //字符串里所有形似手机号脱敏处理
    matchPhoneNum (str) {
        if (!str) return null;
        var regx = /(1[3|4|5|6|7|8|9][\d]{9}|0[\d]{2,3}-[\d]{7,8}|400[-]?[\d]{3}[-]?[\d]{4})/g;
        var phoneNums = str.match(regx);
        if (phoneNums > 10) {
            for (var i = 0; i < phoneNums.length; i++) {
                //手机号全部替换
                var temp = phoneNums[i]
                //隐藏手机号中间4位(例如:12300102020,隐藏后为132****2020)
                temp = temp.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
                console.log("temp:" + temp);
                str = str.replace(phoneNums[i], temp);
            }
        }
        return str;
    }
}

export {
    fixMethods
}