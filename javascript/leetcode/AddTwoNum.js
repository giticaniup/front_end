/**leetCode 第二题
给定两个List，每个List上有数字节点，将这些数字节点相加后返回一个新的数字节点
*/
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNum = function (l1, l2) {
    var result = new ListNode(0)
    var middle = result
    var carry = 0
    while (l1 !== null || l2 !== null || carry !== 0) {
        let i1 = l1 !== null ? l1.val : 0
        let i2 = l2 !== null ? l2.val : 0
        let sum = i1 + i2 + carry
        let now = sum % 10
        carry = parseInt(sum / 10) //转为整数，否则报错
        middle.next = new ListNode(now)
        middle = middle.next
        l1 = l1 !== null ? l1.next : null
        l2 = l2 !== null ? l2.next : null
    }
    return result.next
}