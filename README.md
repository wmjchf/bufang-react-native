# bufang-react-native
## icon图标使用
使用react-native-iconfont-cli自动生成工具, 具体操作不住请移至 https://github.com/iconfont-cli/react-native-iconfont-cli。
## 清除react-native的缓存
npx react-native start --reset-cache,注意：npm start -- --reset-cache这个命令无效
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
