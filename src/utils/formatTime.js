const add0 = m => { return m < 10 ? '0' + m : m }

const formatMediaTime = duration => {
    let min = Math.floor(duration / 60)
    let second = duration - min * 60
    min = add0(m)
    second = add0(second)
    return min + ':' + second
}

const timeTohhmmss = seconds => {
    let hh, mm, ss
    if (seconds === null || seconds < 0) return
    let pseconds = parseInt(seconds)
    hh = pseconds / 3600 | 0
    pseconds = parseInt(pseconds) - parseInt(hh) * 3600
    hh = add0(parseInt(hh))
    if (parseInt(hh) >= 24) hh = "00"
    mm = parseInt(pseconds) / 60 | 0
    ss = parseInt(pseconds) - parseInt(mm) * 60
    mm = add0(parseInt(mm))
    ss = add0(parseInt(ss))
    return hh + ":" + mm + ":" + ss
}
const timeTransform = time => {
    var t = parseInt(time), hh, ii, ss;
    hh = Math.floor(t / 3600);
    hh = hh ? (hh + ':') : '00:';
    ii = hh ? Math.floor(t % 3600 / 60) : Math.floor(t / 60);
    ss = Math.floor(t % 60);
    ii = ii > 9 ? ii : '0' + ii;
    ss = ss > 9 ? ss : '0' + ss;
    return hh + ii + ':' + ss;
}
const getTodayDate = () => {
    let now = new Date()
    let yy = now.getFullYear()
    let mm = now.getMonth() + 1
    let dd = now.getDate()
    let day = new Array()
    day[0] = "星期日"
    day[1] = "星期一"
    day[2] = "星期二"
    day[3] = "星期三"
    day[4] = "星期四"
    day[5] = "星期五"
    day[6] = "星期六"
    return (yy + '年' + mm + '月' + dd + '日 ' + day[now.getDay()])
}
const getWeek = (date) => {
    let day = [];
    day[0] = "日"
    day[1] = "一"
    day[2] = "二"
    day[3] = "三"
    day[4] = "四"
    day[5] = "五"
    day[6] = "六"
    return day[date.getDay()]
}
const timestampToCommonDate = timestamp => {
    var time = new Date(timestamp);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
}
const timestampToCommonDateFordian = timestamp => {
    var time = new Date(timestamp);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y + '.' + add0(m) + '.' + add0(d) + ' ' + add0(h) + ':' + add0(mm);
}

const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const t1 = [year, month, day].map(formatNumber).join('/')
    const t2 = [hour, minute, second].map(formatNumber).join(':')
    return `${t1} ${t2}`
}

const formatYMD = timestamp => {
    const date = new Date(timestamp)
    const year = date.getFullYear()
    const month = add0(date.getMonth() + 1)
    const day = add0(date.getDate())
    return `${year}-${month}-${day}`
}

const formatYMDForC = (timestamp, type) => {
    const date = new Date(timestamp)
    const year = date.getFullYear()
    const month = add0(date.getMonth() + 1)
    const day = add0(date.getDate())
    if (type == 1) {
        return (year + '年' + month + '月' + day + '日 ')
    } else {
        return (year + '.' + month + '.' + day)
    }
}

const dateFormatTimestamp = DATE => {
    var date = new Date(DATE).setHours(0, 0, 0, 0);
    return date
}

const getTimeInfo = str => {
    if (!str) return ''
    const date = new Date(str);
    const time = new Date().getTime() - date.getTime();
    if (time < 0) {
        return '';
    } else if (time / 1000 < 60) {
        return '刚刚';
    } else if ((time / 60000) < 60) {
        return parseInt((time / 60000)) + '分钟前';
    } else if ((time / 3600000) < 24) {
        return parseInt(time / 3600000) + '小时前';
    } else if ((time / 86400000) < 31) {
        return parseInt(time / 86400000) + '天前';
    } else if ((time / 2592000000) < 12) {
        return parseInt(time / 2592000000) + '个月前';
    } else {
        return parseInt(time / 31536000000) + '年前';
    }
}

const seckillCountdown = timer => {
    var deadLine = timer
        // var newData = new Date().getTime();
        // var rightTime = deadLine - newData;
    var rightTime = deadLine
    var dd = '00',
        hh = '00',
        mm = '00',
        ss = '00';
    if (rightTime > 0) {
        dd = Math.floor(rightTime / 1000 / 60 / 60 / 24);
        hh = Math.floor((rightTime / 1000 / 60 / 60) % 24);
        mm = Math.floor((rightTime / 1000 / 60) % 60);
        ss = Math.floor((rightTime / 1000) % 60);
        hh = add0(parseInt(hh))
        mm = add0(parseInt(mm))
        ss = add0(parseInt(ss))
    }
    var seckill = dd + "天" + hh + "小时" + mm + "分" + ss + "秒"
    var over = Object.assign({}, {
        dd,
        hh,
        mm,
        ss,
        seckill
    })
    return over;
}

const yesterdayDate = currentDate => {
    var preDate = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);
    return preDate
}

const tomorrowDate = currentDate => {
    var nextDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
    return nextDate
}

const nDayAgo = (t, n) => {
    // let now = new Date().getTime()
    var date = new Date(t - n * 24 * 60 * 60 * 1000);
    return date
}

const nDayLater = (t, n) => {
    var date = new Date(t + n * 24 * 60 * 60 * 1000);
    return date
}

const beginTimesToEndTimes = (beginTimestamp, endTimestamp, fg) => {
    var beginTime = new Date(beginTimestamp);
    var endTime = new Date(endTimestamp);
    var y = beginTime.getFullYear();
    var m = beginTime.getMonth() + 1;
    var d = beginTime.getDate();
    var h = beginTime.getHours();
    var mm = beginTime.getMinutes();

    var eh = endTime.getHours();
    var emm = endTime.getMinutes();
    return y + fg + add0(m) + fg + add0(d) + ' ' + add0(h) + ':' + add0(mm) + '-' + add0(eh) + ":" + add0(emm);
}
const beginTimesToEndTimesForC = (beginTimestamp, endTimestamp) => {
    var beginTime = new Date(beginTimestamp);
    var endTime = new Date(endTimestamp);
    var y = beginTime.getFullYear();
    var m = beginTime.getMonth() + 1;
    var d = beginTime.getDate();
    var h = beginTime.getHours();
    var mm = beginTime.getMinutes();

    var eh = endTime.getHours();
    var emm = endTime.getMinutes();
    return add0(m) + '月' + add0(d) + '日' + add0(h) + ':' + add0(mm) + '-' + add0(eh) + ":" + add0(emm);
}

const formatMD = timestamp => {
    const date = new Date(timestamp)
    const month = add0(date.getMonth() + 1)
    const day = add0(date.getDate())
    return `${month}.${day}`
}
const dateFormat = (thisDate, fmt) => {
    var o = {
        "M+": thisDate.getMonth() + 1,
        "d+": thisDate.getDate(),
        "h+": thisDate.getHours(),
        "m+": thisDate.getMinutes(),
        "s+": thisDate.getSeconds(),
        "q+": Math.floor((thisDate.getMonth() + 3) / 3),
        "S": thisDate.getMilliseconds()
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (thisDate.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
const isToday = (date) => {
    var d = new Date(date.toString().replace(/-/g,"/"));
    var todaysDate = new Date();
    if(d.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)){
        return true;
    } else {
        return false;
    }
}
export {
    add0,
    formatMediaTime,
    timeTohhmmss,
    timeTransform,
    getTodayDate,
    formatTime,
    getTimeInfo,
    seckillCountdown,
    formatYMD,
    dateFormatTimestamp,
    yesterdayDate,
    tomorrowDate,
    nDayAgo,
    nDayLater,
    timestampToCommonDate,
    timestampToCommonDateFordian,
    beginTimesToEndTimes,
    beginTimesToEndTimesForC,
    formatMD,
    formatYMDForC,
    dateFormat,
    isToday,
    getWeek
}