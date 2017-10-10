文件解释：

-- index.js 	路由实例

-- routes.js 	所有路由配置集合

-- page404.js 	无路由提示页面

-- welcome.js 	欢迎页面路由 ———— 现已作废

-- layout		所有业务路由

	--index.js 	业务路由集合

-- login		登录等路由


路由定制约定：

1. 路由页面：
```
// 存在多个同级路由时 已订单为例
export default [
	{
	    path: '/preorder/v1',
	    name: 'preorderV1List',
	    component: List,
	},
	{
	    path: '/preorder/v2',
	    name: 'preorderV2List',
	    component: List
	},
]

// 单个路由时 已home为例
export default {
    path: '/home',
    name: 'home',
    component: Home
}

```

2. 以 v1\v2\v3... 区分功能版本（目前 tms/oms ）:
```
[
	{
	    path: '/preorder/v1',
	    name: 'preorderV1List',
	    component: List,
	},
	{
	    path: '/preorder/v2',
	    name: 'preorderV2List',
	    component: List
	},
]
```


