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
            tbar: [
                { xtype: 'button', text: 'Truncate selected tables' ,handler: 'truncateselectetables' }
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
                {
                    xtype:'widgetcolumn',
                   
                    widget: {
                        xtype:'splitbutton',
                        text: 'actions',
                        menu:[
                        {
                          //  xtype: 'button',
                            iconCls: 'x-fa fa-pencil-alt',
                            //handler: 'onClickEvent',
                            text: 'Edit table'
                        },
                        {
                            iconCls :'x-fa fa-times',
                            text : 'delete table',
                        }
                        // {
                        //     //xtype: 'button',
                        //     iconCls: 'x-fa fa-times'
                        // },
                        // {
                        //    // xtype: 'button',
                        //     iconCls: 'x-fa fa-ban'
                        //}
                    ]
                    },
                    
                }
               
               
            ],
            id: 'selectTables',
            selModel: {
                injectCheckbox : 'first',
                checkOnly : true ,
                model : 'SIMPLE',
                type : 'checkboxmodel'
            },
            // buttons: [

            //     {
            //         text : 'Select All',
            //         iconCls: 'x-fa fa-pencil-alt',

            //         handler:function()
            //         {
            //             Ext.getCmp()
            //         }
            //     }
            // ]
        }
    ]
    

});

// Ext.define('Admin.view.tables.tables',{
//     extend: 'Ext.grid.Panel', 

//     xtype : 'tables',


//     title : 'Hi there',
// });