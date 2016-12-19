/**
 * leetCode第3题
 * 获取字符串的最长子串，且子串中不含重复的字符
 */
function getLongestSubStr(s) {
    if (s === null) { return null }
    var strArr = []
    var str = s.charAt(0)
    for (let i = 1; i < s.length; i++) {
        let index = str.indexOf(s.charAt(i))
        if (index < 0) {
            str = str + s.charAt(i)
        } else {
            strArr.push(str)
            str = str.substring(index+1)+s.charAt(i)
        }
    }
    //最后一次循环的结果放入数组
    strArr.push(str)

    var max = strArr[0].length
    for (let j = 1; j < strArr.length; j++) {
        if (strArr[j].length > max) {
            max = strArr[j].length
        }
    }
    return max
}