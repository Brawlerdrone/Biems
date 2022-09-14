Ext.define('Admin.view.student.StudentList', {

    extend : 'Ext.grid.Panel',
    xtype : 'studentList',

    title : 'Student List',

    controller : 'student-list',

    viewModel : { type : 'studentviewmodel' },
    reference : 'studentlistgrid',
    

})