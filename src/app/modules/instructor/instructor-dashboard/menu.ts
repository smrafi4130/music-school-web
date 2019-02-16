export let MENU_ITEM = [
  {
    path: 'index',
    title: 'Dashboard',
    icon: 'dashboard'
  },

  {
    path: 'course',
    title: 'Course',
    icon: 'paint-brush',
    children: [
      {
        path: 'all-course',
        title: 'My Course'
      }
    ]
  },
  // {
  //   path: 'student',
  //   title: 'Student',
  //   icon: 'paint-brush',
  //   children: [
  //     {
  //       path: 'all-student',
  //       title: 'All Student'
  //     }
  //   ]
  // },
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
    path: 'messege',
    title: 'Messege',
    icon: 'dashboard'
  }
];
