export let MENU_ITEM = [
  {
    path: 'index',
    title: 'Dashboard',
    icon: 'dashboard'
  },

  {
    path: 'instructor',
    title: 'Instructor',
    icon: 'paint-brush',
    children: [
      {
        path: 'all-instructor',
        title: 'All Instructors'
      },
      {
        path: 'create-instructor',
        title: 'Add Instructor'
      }
    ]
  },

  {
    path: 'course',
    title: 'Course',
    icon: 'paint-brush',
    children: [
      {
        path: 'all-course',
        title: 'All Courses'
      },
      {
        path: 'create-course',
        title: 'Add Course'
      }
    ]
  },
  {
    path: 'student',
    title: 'Student',
    icon: 'paint-brush',
    children: [
      {
        path: 'all-student',
        title: 'All Student'
      },
      {
        path: 'create-student',
        title: 'Add Student'
      }
    ]
  },
  {
    path: 'result',
    title: 'Result',
    icon: 'paint-brush',
    children: [
      {
        path: 'result-create',
        title: 'Manage Result'
      }
      // {
      //   path: 'result-create',
      //   title: 'Upload Result'
      // }
    ]
  },
  {
    path: 'course-material',
    title: 'Course Material',
    icon: 'dashboard'
  },
  {
    path: 'post',
    title: 'Post',
    icon: 'paint-brush',
    children: [
      {
        path: 'my-post',
        title: 'My Post'
      },
      {
        path: 'create-post',
        title: 'Create Post'
      },
      {
        path: 'manage-post',
        title: 'Manage Post'
      }
    ]
  },
  {
    path: 'messege',
    title: 'Messege',
    icon: 'dashboard'
  }
  // {
  //   path: 'editor',
  //   title: 'Pell Editor',
  //   icon: 'pencil'
  // },
  // {
  //   path: 'icon',
  //   title: 'Icon',
  //   icon: 'diamond'
  // },
  // {
  //   path: 'profile',
  //   title: 'User Profile',
  //   icon: 'user'
  // },
  // {
  //   path: 'ui',
  //   title: 'UI Element',
  //   icon: 'paint-brush',
  //   children: [
  //     {
  //       path: 'grid',
  //       title: 'Bootstrap Grid'
  //     },
  //     {
  //       path: 'buttons',
  //       title: 'Buttons'
  //     },
  //     {
  //       path: 'notification',
  //       title: 'Notification'
  //     },
  //     {
  //       path: 'tabs',
  //       title: 'Tabs'
  //     },
  //     {
  //       path: 'file-tree',
  //       title: 'File Tree'
  //     },
  //     {
  //       path: 'modals',
  //       title: 'Modals'
  //     },
  //     {
  //       path: 'progress-bar',
  //       title: 'ProgressBar'
  //     }
  //     /*  {
  //                path: 'loading',
  //                title: 'Loading'
  //            }, */
  //   ]
  // },
  // {
  //   path: 'form',
  //   title: 'Forms',
  //   icon: 'check-square-o',
  //   children: [
  //     {
  //       path: 'form-inputs',
  //       title: 'Form Inputs'
  //     },
  //     {
  //       path: 'form-layouts',
  //       title: 'Form Layouts'
  //     },
  //     {
  //       path: 'file-upload',
  //       title: 'File Upload'
  //     },
  //     {
  //       path: 'ng2-select',
  //       title: 'Ng2-Select'
  //     }
  //   ]
  // },
  // {
  //   path: 'charts',
  //   title: 'Charts',
  //   icon: 'bar-chart',
  //   children: [
  //     {
  //       path: 'echarts',
  //       title: 'Echarts'
  //     }
  //   ]
  // },
  // {
  //   path: 'table',
  //   title: 'Tables',
  //   icon: 'table',
  //   children: [
  //     {
  //       path: 'basic-tables',
  //       title: 'Basic Tables'
  //     },
  //     {
  //       path: 'data-table',
  //       title: 'Data Table'
  //     }
  //   ]
  // },
  // {
  //   path: 'menu-levels',
  //   title: 'Menu Levels',
  //   icon: 'sitemap',
  //   children: [
  //     {
  //       path: 'levels1',
  //       title: 'Menu Level1',
  //       children: [
  //         {
  //           path: 'levels1-1',
  //           title: 'Menu Level1-1'
  //         }
  //       ]
  //     },
  //     {
  //       path: 'levels2',
  //       title: 'Menu Level2'
  //     }
  //   ]
  // }
];
