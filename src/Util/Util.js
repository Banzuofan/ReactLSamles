
const formatTime = data => {
    const date = new Date(data)

    const time = new Date().getTime() - date.getTime() //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
    if (time < 0) {
        return ''
    } else if (time / 1000 < 60) {
        return '刚刚'
    } else if (time / 60000 < 60) {
        return parseInt(time / 60000, 10) + '分钟前'
    } else if (time / 3600000 < 24) {
        return parseInt(time / 3600000, 10) + '小时前'
    } else if (time / 86400000 < 31) {
        return parseInt(time / 86400000, 10) + '天前'
    } else if (time / 2592000000 < 12) {
        return parseInt(time / 2592000000, 10) + '月前'
    } else {
        return parseInt(time / 31536000000, 10) + '年前'
    }
}

/**
 * 格式化时间格式为 YYYY/MM/DD HH:MM:SS
 * @param {*} date 
 */
function fmDate1(date) {
    var now = date;
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    return year + "/" + month + "/" + date + "   " + hour + ":" + minute+":"+second;
}

/**
 * 获取URL参数值
 * @param {*} search - the query string
 * @param {*} key 参数值
 */
const getParamVal = (search,key) => {
    key = key.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + key + "=([^&#]*)"),
        results = regex.exec(search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

const setHeaderTitle = (title) => document.title = title;

export { formatTime, getParamVal, fmDate1, setHeaderTitle };