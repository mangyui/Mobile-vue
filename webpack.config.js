
module.exports={
    entry:'./src/main.js', //打包入口文件
    output:{
        path:__dirname+'/dist',   //当前文件夹的绝对路径
        filename:'build.js',
        publicPath:'./dist/'
    },
    module:{
        loaders:[
            {
                test:/\.css$/,   //正则表达式  $表示结束
                loader:'style-loader!css-loader'               
            },
            {
                test:/\.scss$/,
                loader:'style-loader!css-loader!sass-loader'               
            },
            {
                test:/\.less$/,
                loader:'style-loader!css-loader!less-loader'               
            },
            {
                test:/\.(png|jpg|gif|ico|jpeg)$/,
                loader:'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'            //限制大小 分情况
            } ,
            {
                test:/\.ttf$/,
                loader:'url-loader?limit=8192&name=fonts/[hash:8].[name].[ext]'            //限制大小 分情况
            } ,
            {
                test:/\.js$/,
                loader:'babel-loader',         
                exclude:/node_modules/
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'               
            }          
        ]
    },
    babel:{
        presets:['es2015'],
        plugins:['transform-runtime']      //这句代码是为了针对vue开发的 打包.vue文件不报错
    }
}