Ext.define('Admin.view.tables.tables', {
    extend : 'Ext.panel.Panel',

    xtype : 'tables',
    //change  the controller to that handles these actions
    controller:'main',

    title: 'My Tables',

    viewModel : { type :'tableviewmodel'},

    // store : {

    //     xtype : 'tableList',
    // },

  

    items : [
        
        
        {   

            bind : {

                store : '{TableListStore}'
            },
            xtype : 'gridpanel',
            
            tbar: [
                '->',
                
                {
                    xtype: 'button',
                    text: 'Truncate selected tables',
                    handler: 'truncateselectetables',
                    ui: 'soft-blue'
                },

                
                {
                   
                    text: 'addNewTable',
                    frm: 'addTable',
                    handler: 'onAddTable',
                    ui: 'soft-blue'
                },

            ],
            
            columns: [
                {
                    text: "#",
                    dataIndex: 'id',
                    hidden: true,
                    width: 35 
                },
               
                {
                    xtype: 'gridcolumn',
                    flex: 1,
                    text: 'name',
                    dataIndex: 'name',
                }, 
                {
                    xtype: 'gridcolumn',
                    flex: 1,
                    dataIndex: 'description',
                    text: 'Description',
                },
                {
                    xtype : 'gridcolumn',
                    flex : 1,
                    dataIndex : 'created_at',
                    text : 'Date Created'
                },
                {
                    xtype : 'gridcolumn',
                    flex : 1,
                    dataIndex : 'updated_at',
                    text : 'Date Updated'
                },

                {
                    xtype:'widgetcolumn',
                    width : 150,
                   
                    widget: {
                        xtype:'splitbutton',
                        text: 'actions',
                        menu:[
                            {
                                iconCls: 'x-fa fa-pencil-alt',
                                text: 'Edit table',
                                frm: 'editTable',
                                handler: 'onEditTable',
                            },
                            {
                                iconCls: 'x-fa fa-times',
                                text: 'delete table',
                                handler: 'onDeleteTable',
                            }
                       
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

            
           
        },

        //this.callParent(arguments)
   
    ],
    // initComponent: function () {
    //     Ext.apply(this,
    //     {
    //         plugins: [Ext.create('Ext.grid.plugin.RowEditing',
    //         {
    //             clicksToEdit: 2
    //         })],

    //         columns: [{
    //             text: "#",
    //             dataIndex: 'id',
    //             hidden: true,
    //             width: 35
    //         },
    //         {
    //             text: "tableName",
    //             flex: 1,
    //             dataIndex: 'name',
    //             editor:
    //             {
    //                 // defaults to textfield if no xtype is supplied
    //                 allowBlank: false
    //             }
    //         },
    //         {
    //             text: "Description",
    //             flex: 1,
    //             dataIndex: 'description',
    //             editor:
    //             {
    //                 allowBlank: true
    //             }
    //         },
    //         // {
    //         //     text: "Date Created",
    //         //     flex: 1,
    //         //     dataIndex: 'created_at',
    //         //     editor:
    //         //     {
    //         //         allowBlank: true
    //         //     }
    //         // },
    //         {
    //             xtype: 'datecolumn',
    //             header: "Date Created",
    //             width: 135,
    //             dataIndex: 'created_at',
    //             editor:
    //             {
    //                 xtype: 'datefield',
    //                 allowBlank: true
    //             },
    //             renderer: Ext.util.Format.dateRenderer('d/m/Y')
    //         },
    //         {
    //             xtype: 'datecolumn',
    //             header: "Date updated",
    //             width: 135,
    //             dataIndex: 'updated_at',
    //             editor:
    //             {
    //                 xtype: 'datefield',
    //                 allowBlank: true
    //             },
    //             renderer: Ext.util.Format.dateRenderer('d/m/Y')
    //         }
    //        ],
    //         // tbar: [{
    //         //     text: 'Add Student',
    //         //     iconCls: 'fa-plus',
    //         //     handler: 'onAddClick'
    //         // }, {
    //         //     itemId: 'removeStudent',
    //         //     text: 'Remove Student',
    //         //     iconCls: 'fa-times',
    //         //     reference: 'btnRemoveStudent',
    //         //     handler: 'onRemoveClick',
    //         //     disabled: true
    //         // }]
    //     });

    //     this.callParent(arguments);
    // }
});

