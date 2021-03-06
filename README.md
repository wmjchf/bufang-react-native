# bufang-react-native
## icon图标使用
使用react-native-iconfont-cli自动生成工具, 具体操作不住请移至 https://github.com/iconfont-cli/react-native-iconfont-cli。
## 清除react-native的缓存
npx react-native start --reset-cache,注意：npm start -- --reset-cache这个命令无效
## React Native Debugger在Chrome中查看network信息
```
第一步：在入口文件（App.js）中加入这一行
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest

第二部：命令行打开方式
"C:\Users\UserName\AppData\Local\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir
```
## flatList不能滚动解决方案
```
// 在FlatList组件外层加个View
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
<View style={styles.container}>
      <FlatList
        numColumns={2}
        renderItem={renderItem}
        data={dataList}
        columnWrapperStyle={columnWrapperStyle}
      />
</View>
```
## topTab数据加载的思考
一般topTab页面展示的数据都是一样的，只是请求的参数type不一样。我不太建议把数据和请求放在redux里面，更好或者合理的方式是放在各自的页面去管理。为什么呢？
```
首先考虑到缓存的问题，如果在redux中不是每个页面都与之对应一个存放数据的属性，而是所有页面公用一个属性，会存在一个问题，就是在相互切换的时候会重新去加载数据，耗费性能。

但是如果每个页面都对应一个存放数据的属性话，这样在编码上就比较麻烦，有几个tab页就要写几个属性，更糟糕的是，有些场景这些tab是根据后台配置的，我们并不知道会有哪些tab。

所以我更推荐放在各自的页面去管理。
```
## StatusBar+navigationBar
请看第三方组件[react-native-nav](https://github.com/jineshshah36/react-native-nav)，在源码里面的statusBarHeight有时需要自己设置，默认的值不适配所有的机型。

## flutter调试过程的bug
- 如果真机能调试成功，但是模拟器调试不成功，可以清除模拟器的缓存。

![image](https://user-images.githubusercontent.com/36124772/110196034-b7d27680-7e7c-11eb-8edd-30cd9db321f0.png)


