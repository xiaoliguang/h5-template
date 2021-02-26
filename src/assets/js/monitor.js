// import { reportPush } from '~api/index';
import utils from '~utils/index';
import store from '~store/index.js';
import Vue from 'vue' ;
import * as api from '~api/index.js';

Vue.prototype.pushData= async function(accessPoint,accessPointDesc,extData) {
    var resourceKey = null;
    if(accessPointDesc == '数据请求接口打桩'){
        resourceKey = 'dating-wxapp-api'
    }else{
        resourceKey = 'resourceKey'
    }
    let Data = {
        tempId: wx.getStorageSync('UUID_datingWxapp'),
        app: 'dating',
        platform: 'wxapp',
        partner:store.state.partner.code||'',
        token: wx.getStorageSync('token'),
        channel: wx.getStorageSync('channel'),
        resourceKey: resourceKey,
        accessPoint:accessPoint,
        accessPointDesc:accessPointDesc,
        nickname: store.state.userInfo.userinfo.nickname ||'',
        userId: store.state.userInfo.userinfo.id ||'',
        userIdentity: store.state.userInfo.userIdentity ||'',
        sex:store.state.userInfo.userinfo.sex ||'',
    }
    var DATA = Object.assign(Data,extData);
    var params = {
        url: reportPush,
        data: DATA,
        method: 'POST'
    }
    await utils.wxapi.request(params)
}
Vue.prototype.apiPushData= async function(params) {
    var urlArr = [api.bindPhone, api.login, activity.wxChatDetail, api.authLocationUrl, api.activityHome, api.activityDetail, api.sectionCurrent, api.myuserinfo, api.agreeAsyncZa, api.refuseAsyncZa, api.activityEnroll, activity.checkBindWwuid, activity.bindChannelCode, activity.wxChatBindChannelCode, activity.getMatchUser, activity.bindWwuid, activity.acceptShare,
        api.preenrollDetailUrl, api.preenrollUrl, api.matchmakingDetail, api.checkShow,activity.validateActivity,activity.preMatchList
    ];
    if (urlArr.indexOf(params.url) > -1) {
        var pushDataParams = {
            url: params.url,
            paramsData: utils.fixMethods.matchPhoneNum(JSON.stringify(params.data)),
            code: res.data.code,
            data:utils.fixMethods.matchPhoneNum(JSON.stringify(res.data)) || '',
            msg: res.data.msg,
            systeminfo:JSON.stringify(store.state.userInfo.systeminfo)
        }
        Vue.prototype.pushData( 1, '数据请求接口打桩', pushDataParams);
    }
}
const monitor = 'args'

export {
    monitor,
}