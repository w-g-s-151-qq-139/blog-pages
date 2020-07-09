var storage = {
    set(key,value){
        localStorage.setItem(key,value)
    },
    reset(key,value){
        localStorage.removeItem(key)
        localStorage.setItem(key,value)
    },
    get(key){
        return localStorage.getItem(key)
    },
    remove(key) {
        localStorage.removeItem(key);
    },
    removeAll() {
        localStorage.clear();
    },
    getLength() {
        return localStorage.length
    },
    getAll() {
        let len = localStorage.length;  // 获取长度
        let arr = new Array(); // 定义数据集
        for (var i = 0; i < len; i++) {
            // 获取key 索引从0开始
            var getKey = localStorage.key(i);
            // 获取key对应的值
            var getVal = localStorage.getItem(getKey);
            // 放进数组
            arr[i] = {
                'key': getKey,
                'val': getVal,
            }
        }
        return arr;
    }
}

export default storage;