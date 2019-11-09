# react-native-template
根据官方的 `react-native init AwesomeProject` 生成项目,集成`mobx`,`react-native-router-flux`路由,`react-native-root-toast`弹窗.


# Install

# 关于打包
初始化项目: react-native init cy[projectname]

正式版证书: keytool -genkeypair -v -keystore cydemo.keystore -alias cydemo -keyalg RSA -keysize 2048 -validity 10000
口令: 123456

复制C:\Program Files\Java\jdk1.8.0_211\bin\cydemo.keystore 到 /cydemo/android/app/ 下

https://reactnative.cn/docs/signed-apk-android/

打包: react-native run-android


rn 打包的测试 apk: F:\Code\android\rn61Test\android\app\build\outputs\apk\debug
rn 打包的正式 apk: F:\Code\android\rn61Test\android\app\build\outputs\apk\release

app 的文件: E:\cunshu\app\cycunshu
app 的图标: E:\cunshu\app\cycunshu\src\assets\img\icon
h5 的文件: E:\cunshu\public\h5\src\assets\img

### 重命名 release 的包名
修改 `app/build.gradle`,找到 `variant.outputs.each` 在遍历的{}最底部增加
```
            // 重命名包名
            def date = new Date()
            def applicationName = '这里填项目名'
            def formattedDate = date.format('yyyyMMdd-HHmmss')
            // applicationId 和版本定义在上面 defaultConfig
            output.outputFileName = "${applicationName}_v${versionName}_${formattedDate}.apk"
```
打出的包名为 `这里填项目名_v1.0.0_20191109-221253.apk`

# 常见问题
### Android 9 无法联网
在res下新建一个xml目录 创建名为network_security_config.xml 文件 ，该文件内容如下：
```xml
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <base-config cleartextTrafficPermitted="true" />
</network-security-config>
```
然后在 AndroidManifest.xml application 标签内应用上面的xml配置：
`
android:networkSecurityConfig="@xml/network_security_config"
`


# License
MIT
