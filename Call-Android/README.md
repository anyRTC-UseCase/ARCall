本文指导你运行 Android 示例项目。

## 前提条件

- 开发环境：
  - Android Studio 2020.3.1 Canary 1 +(预览版)
- Android 真机（不能用模拟器）

## 运行示例项目

参考以下步骤编译和运行示例项目：

1.将代码克隆到本地

```
git clone https://github.com/anyRTC-UseCase/ARCall.git
```

2.将 Call-Android 导入 Android Studio


3.配置相关参数

在 `Call-Android/app/build.gradle` 文件中配置以下参数：
- 你获取到的anyRTC App ID。

```
buildConfigField("String", "APPID", '"YOUR APPID"')
```

4.运行

## 注意事项⚠️

本项目基于 Android Studio 预览版开发，如果你是用的是稳定版本，你可能会遇到如下错误

```
Caused by: org.gradle.internal.metaobject.AbstractDynamicObject$CustomMessageMissingMethodException: Could not find method dependencyResolutionManagement() for arguments [settings_6qkcwtonwe1izrgnh6x456ese$_run_closure1@2899b5c4] on settings 'Call-Android' of type org.gradle.initialization.DefaultSettings.
```

请做如下修改：

- 打开 settings.gradle 删除如下内容

  ```
  dependencyResolutionManagement {
      repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
      repositories {
          maven { url 'https://www.jitpack.io' }
          google()
          mavenCentral()
  
      }
  }
  ```
  
- 打开Call-Android/build.gradle  添加以下内容
  
  ```
  allprojects {
          repositories {
              maven { url 'https://jitpack.io' }
              mavenCentral()
              google()
              jcenter()
          }
      }
  ```
  
- 打开 Call-Android/app/build.gradle 修改以下属性  
  
  ```
  compileSdk 30 ->compileSdkVersion 30
  minSdk 21 ->minSdkVersion 21
  targetSdk 30 ->targetSdkVersion 30
  
  ```
  
  


## 联系我们

- 如需阅读完整的文档和 API 注释，你可以访问[anyRTC开发者中心](https://docs.anyrtc.io/)。
- 如果在集成中遇到问题，你可以到[anyRTC开发者社区](https://bbs.anyrtc.io)提问。
- 如果有售前咨询或售后技术问题，你可以拨打 021-65650071，或加入官方Q群 580477436 提问。
- 如果发现了示例代码的 bug，欢迎提交 [issue](https://github.com/anyRTC-UseCase/ARCall/issues)
- 项目交流微信群,请扫描下方二维码进群

![image](https://github.com/anyRTC-UseCase/ARCall/blob/master/resource/qrcode.png)

## 代码许可

The MIT License (MIT).
