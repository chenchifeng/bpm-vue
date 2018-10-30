import order from './order'
import arap from './arap'
import statistics from './statistics'
import importData from './imports'
import dashboard from './dashboard'//概览
import logisticsManage from './logisticsManage'//物流管理
import map from './map'//地图
import basicDataManage from './basicDataManage'//基础数据管理
import setting from './setting'//设置

export default [{
  path: '',
  name: 'index',
  redirect: '/dashborad',
  component: (resolve) => require(['../page/MainFirst'], resolve),
  meta: {
    title: '首页'
  },
  children: [
    dashboard,
    order,
    logisticsManage,
    map,
    basicDataManage,
    arap,
    statistics,
    setting,
    importData,
    //托运中心

    // {
    //   path: 'businessManage',
    //   name: 'businessManage',
    //   meta: {
    //     isVerificationL: false,
    //     title: '业务中心',
    //     iconName: 'icon-coin',
    //   },
    //   component: (resolve) => require(['../page/businessManage/businessManage'], resolve),
    //   children: [{
    //     path: 'tradeBusiness',
    //     name: 'tradeBusiness',
    //     redirect: '/businessManage/tradeBusiness/businessList',
    //     meta: {
    //       isVerificationL: false,
    //       title: '贸易业务单',
    //       iconName: 'icon-lng-dashboard',
    //     },
    //     component: (resolve) => require(['../page/businessManage/tradeBusiness/tradeBusiness'], resolve),
    //     children: [{
    //       path: 'businessList',
    //       name: 'tradeBusinessList',
    //       meta: {
    //         isVerificationL: false,
    //         title: '贸易业务单列表',
    //       },
    //       component: (resolve) => require(['../page/businessManage/tradeBusiness/tradeBusinessList'], resolve),
    //     }, {
    //       path: 'businessDetail',
    //       name: 'tradeBusinessDetail',
    //       meta: {
    //         isVerificationL: false,
    //         title: '贸易业务单详情',
    //       },
    //       component: (resolve) => require(['../page/businessManage/tradeBusiness/tradeBusinessDetail'], resolve),
    //     }]
    //   }, {
    //     path: 'customerManage',
    //     name: 'customerManage',
    //     meta: {
    //       isVerificationL: false,
    //       title: '客户管理',
    //     },
    //     component: (resolve) => require(['../page/businessManage/customerManage'], resolve),
    //     redirect: '/businessManage/customerManage/customerManageAll/customerManageList',
    //     children: [{
    //         path: 'customerManageAll',
    //         name: 'customerManageAll',
    //         meta: {
    //           isVerificationL: false,
    //           title: '客户管理',
    //         },
    //         redirect: '/businessManage/customerManage/customerManageAll/customerManageList',
    //         component: (resolve) => require(['../page/businessManage/customerManage/customerManageAll'], resolve),
    //         children: [{
    //           path: 'customerManageList',
    //           name: 'customerManageList',
    //           meta: {
    //             isVerificationL: false,
    //             title: '客户管理列表',
    //           },
    //           component: (resolve) => require(['../page/businessManage/customerManage/customerManageAll/customerManageList'], resolve),
    //         }, {
    //           path: 'customerManageDetalis',
    //           name: 'customerManageDetalis',
    //           meta: {
    //             isVerificationL: false,
    //             title: '客户管理详情',
    //           },
    //           component: (resolve) => require(['../page/businessManage/customerManage/customerManageAll/customerManageDetalis'], resolve),
    //         }, {
    //           path: 'customerManageEditAdd',
    //           name: 'customerManageEditAdd',
    //           meta: {
    //             isVerificationL: false,
    //             title: '客户管理新增编辑',
    //           },
    //           component: (resolve) => require(['../page/businessManage/customerManage/customerManageAll/customerManageEditAdd'], resolve),
    //         }]
    //       },
    //       {
    //         path: 'customerPayManageAll',
    //         name: 'customerPayManageAll',
    //         meta: {
    //           isVerificationL: false,
    //           title: '付款方管理',
    //         },
    //         redirect: '/businessManage/customerManage/customerPayManageAll/customerPayManageList',
    //         component: (resolve) => require(['../page/businessManage/customerManage/customerPayManageAll'], resolve),
    //         children: [{
    //           path: 'customerPayManageList',
    //           name: 'customerPayManageList',
    //           meta: {
    //             isVerificationL: false,
    //             title: '付款方列表',
    //           },
    //           component: (resolve) => require(['../page/businessManage/customerManage/customerPayManageAll/customerPayManageList'], resolve),
    //         }, {
    //           path: 'customerPayManageDetalis',
    //           name: 'customerPayManageDetalis',
    //           meta: {
    //             isVerificationL: false,
    //             title: '付款方详情',
    //           },
    //           component: (resolve) => require(['../page/businessManage/customerManage/customerPayManageAll/customerPayManageDetalis'], resolve),
    //         }, {
    //           path: 'customerPayManageEditAdd',
    //           name: 'customerPayManageEditAdd',
    //           meta: {
    //             isVerificationL: false,
    //             title: '付款方新增编辑',
    //           },
    //           component: (resolve) => require(['../page/businessManage/customerManage/customerPayManageAll/customerPayManageEditAdd'], resolve),
    //         }]
    //       },
    //       {
    //         path: 'stationManageAll',
    //         name: 'stationManageAll',
    //         meta: {
    //           isVerificationL: false,
    //           title: '客户站点',
    //         },
    //         redirect: '/businessManage/customerManage/stationManageAll/stationManageList',
    //         component: (resolve) => require(['../page/businessManage/customerManage/stationManageAll'], resolve),
    //         children: [{
    //           path: 'stationManageList',
    //           name: 'stationManageList',
    //           meta: {
    //             isVerificationL: false,
    //             title: '站点列表',
    //           },
    //           component: (resolve) => require(['../page/businessManage/customerManage/stationManageAll/stationManageList'], resolve),
    //         }, {
    //           path: 'stationManageEditAdd',
    //           name: 'stationManageEditAdd',
    //           meta: {
    //             isVerificationL: false,
    //             title: '编辑、新增站点',
    //           },
    //           component: (resolve) => require(['../page/businessManage/customerManage/stationManageAll/stationManageEditAdd'], resolve),
    //         }, {
    //           path: 'stationManageMap',
    //           name: 'stationManageMap',
    //           meta: {
    //             isVerificationL: false,
    //             title: '站点地图',
    //           },
    //           component: (resolve) => require(['../page/businessManage/customerManage/stationManageAll/stationManageMap'], resolve),
    //         }]
    //       }
    //     ]
    //   }]
    // },
    // {
    //   path: 'serviceManage',
    //   name: 'serviceManage',
    //   meta: {
    //     isVerificationL: false,
    //     title: '服务中心',
    //     iconName: 'icon-service',
    //   },
    //   component: (resolve) => require(['../page/serviceManage/serviceManage'], resolve),
    //   children: [{
    //     path: 'businessToExamine',
    //     name: 'businessToExamine',
    //     redirect: '/serviceManage/businessToExamine/businessList',
    //     meta: {
    //       isVerificationL: false,
    //       title: '业务单审批',
    //       iconName: 'icon-lng-dashboard',
    //     },
    //     component: (resolve) => require(['../page/serviceManage/businessToExamine/business'], resolve),
    //     children: [{
    //       path: 'businessList',
    //       name: 'businessList',
    //       meta: {
    //         isVerificationL: false,
    //         title: '业务单审批列表',
    //       },
    //       component: (resolve) => require(['../page/serviceManage/businessToExamine/businessList'], resolve),
    //     }, {
    //       path: 'businessDetail',
    //       name: 'businessDetail',
    //       meta: {
    //         isVerificationL: false,
    //         title: '业务单审批详情',
    //       },
    //       component: (resolve) => require(['../page/serviceManage/businessToExamine/businessDetail'], resolve),
    //     }]
    //   }, {
    //     path: 'standardDataManage',
    //     name: 'standardDataManage',
    //     redirect: '/serviceManage/standardDataManage/freightDataList',
    //     meta: {
    //       isVerificationL: false,
    //       title: '标准数据管理',
    //       iconName: 'icon-lng-dashboard',
    //     },
    //     component: (resolve) => require(['../page/serviceManage/standardDataManage/standardDataManage'], resolve),
    //     children: [{
    //       path: 'freightDataList',
    //       name: 'freightDataList',
    //       meta: {
    //         isVerificationL: false,
    //         title: '运费约定',
    //       },
    //       component: (resolve) => require(['../page/serviceManage/standardDataManage/freightDataList'], resolve),
    //     }, {
    //       path: 'mileageDataList',
    //       name: 'mileageDataList',
    //       meta: {
    //         isVerificationL: false,
    //         title: '标准里程',
    //       },
    //       component: (resolve) => require(['../page/serviceManage/standardDataManage/mileageDataList'], resolve),
    //     }, {
    //       path: 'editMileage',
    //       name: 'editMileage',
    //       meta: {
    //         isVerificationL: false,
    //         title: '编辑、新增标准里程',
    //       },
    //       component: (resolve) => require(['../page/serviceManage/standardDataManage/editMileage'], resolve),
    //     }, {
    //       path: 'mileageDetail',
    //       name: 'mileageDetail',
    //       meta: {
    //         isVerificationL: false,
    //         title: '标准里程详情',
    //       },
    //       component: (resolve) => require(['../page/serviceManage/standardDataManage/mileageDetail'], resolve),
    //     }, {
    //       path: 'freightDetail',
    //       name: 'freightDetail',
    //       meta: {
    //         isVerificationL: false,
    //         title: '运费约定详情',
    //       },
    //       component: (resolve) => require(['../page/serviceManage/standardDataManage/freightDetail'], resolve),
    //     }]
    //   }]
    // },
    {
      path: 'news',
      name: 'news',
      meta: {
        isVerificationL: false,
        title: '消息通知',
        iconName: 'icon-setting'
      },
      component: (resolve) => require(['../page/news/news'], resolve),
      children: [{
          path: 'systemNotice',
          name: "systemNotice",
          meta: {
            title: '系统通知',
            isVerificationL: false
          },
          component: (resolve) => require(['../page/news/news'], resolve),
          children: [{
            path: 'systemNoticeList',
            name: "systemNoticeList",
            meta: {
              title: '系统通知列表',
              isVerificationL: false
            },
            component: (resolve) => require(['../page/news/systemNotice/systemNoticeList'], resolve)
          }]
        },
        // {
        //   path: 'staffsManage',
        //   name: "staffsManage",
        //   meta: {
        //     title: '员工管理',
        //     isVerificationL: true
        //   },
        //   component: (resolve) => require(['../page/setting/staffsManage'], resolve)
        // }
      ]
    }
  ]
}];
