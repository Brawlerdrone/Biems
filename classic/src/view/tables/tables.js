Ext.define('Admin.view.tables.tables', {
    extend : 'Ext.panel.Panel',

    xtype : 'tables',

    title: 'My Tables',

    items : [
        {
            xtype : 'gridpanel',
           // title : 'All tables in the DB',

            // store :{
            //     type : 'tables',
            // },
            store : [
                {
                    identifier : '1',
                    tableName : 'TableOne',
                },
                {
                    identifier : '2',
                    tableName : 'TableTwo',
                },
                {
                    identifier : '3',
                    tableName : 'TableThree',
                },
            ],
            columns: [

                {
                    xtype: 'gridcolumn',
                    width: 40,
                    dataIndex: 'identifier',
                    text: '#'
                },
                {
                    xtype: 'gridcolumn',
                    flex: 1,
                    dataIndex: 'tableName',
                    text: 'tableName',
                }, {
                    xtype: 'gridcolumn',
                    flex: 1,
                    dataIndex: 'dateCreated',
                    text: 'dateCreated',
                },
               
               
            ],
            id: 'selectTables',
            selModel: {
                injectCheckbox : 'first',
                checkOnly : true ,
                model : 'SIMPLE',
                type : 'checkboxmodel'
            },
            buttons: [

                {
                    text : 'Select All',

                    handler:function()
                    {
                        Ext.getCmp()
                    }
                }
            ]
        }
    ]
    

});

// Ext.define('Admin.view.tables.tables',{
//     extend: 'Ext.grid.Panel', 

//     xtype : 'tables',


//     title : 'Hi there',
// });