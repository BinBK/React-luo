module.exports = {
    //按需引入
    babel: {//支持装饰器
        plugins: [
            [
                "import",
                {
                    "libraryName": "antd",
                    "libraryDirectory": "es",
                    "style": 'css' //设置为true即是less 这里用的是css
                }
            ]
        ]
    }
  
};