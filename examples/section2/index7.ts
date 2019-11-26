// function printLabel(labelledObj: {label: string}) {
//     console.log(labelledObj.label)
// }
//
// let myObj = {size: 10, label: 'Size 10 Object'}
// printLabel(myObj)

// 通过接口描述对象参数
// 只会检查只需要有 label 属性，并且 label 属性的类型是 string 即可，不管排序和属性的数量
interface LabelledValue {
    label: string
}
function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label)
}

let myObj = {size: 10, label: 'Size 10 Object111111'}
printLabel(myObj)
