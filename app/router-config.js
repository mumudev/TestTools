/*jshint esversion: 6 */


export default [
  {
    path: '/activeManage', component: totalpages,
    children: [
      { path: '', component: activeManage },
      {
        path: 'detail', component: detail,

        children: [
          { path: '', component: page1 },
          {
            path: 'page1', component: page1,
            children: [
              { path: '', component: step1 },
              { path: 'step1', component: step1 },
              { path: 'step2', component: step2 },
              { path: 'step3', component: step3 },
              { path: 'step4', component: step4 }
            ]
          },
          { path: 'page2', component: page2 },
          { path: 'page3', component: page3 },
          { path: 'page4', component: page4 },
          { path: 'page5', component: page5 }
        ]
      },
    ]
  }, {
    path: '/activePublic', component: activePublic,
    children: [
      { path: '', component: step1 },
      { path: 'step1', component: step1 },
      { path: 'step2', component: step2 },
      { path: 'step3', component: step3 },
      { path: 'step4', component: step4 }
    ]
  }
]
