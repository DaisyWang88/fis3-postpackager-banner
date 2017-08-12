# fis3-banner

# 安装与使用

### 全局安装

```
npm install fis3-postpackager-banner -g

```
### 插件调用

```
// banner 为数组
fis.match("::package", {
	postpackager: fis.plugin('fis3-postpackager-banner', {
		banner: ['/**',
			'* @version 1.0.0',
			'* repository: https://github.com/DaisyWang88/fis3-postpackager-banner.git',
			'*/'
		]
	})
})


// banner 为字符串
fis.match("::package", {
	postpackager: fis.plugin('fis3-postpackager-banner', {
		banner: '/**\n'
			+ '* @version 1.0.0\n'
			+ '* repository: https://github.com/DaisyWang88/fis3-postpackager-banner.git'
			+ '*/'
		]
	})
})
```