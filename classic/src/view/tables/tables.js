Ext.define('Admin.view.tables.tables', {
    extend : 'Ext.panel.Panel',

    xtype : 'tables',
    //change  the controller to that handles these actions
    controller:'table',

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
            
            columns: 
            [
                {
                    text: "#",
                    dataIndex: 'id',
                    hidden: false,
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

                // {
                //     xtype:'widgetcolumn',
                //     width : 150,
                   
                //     widget: {
                //         xtype:'actioncolumn',
                //         text: 'actions',
                //         menu:[
                //             {
                //                 iconCls: 'x-fa fa-pencil-alt',
                //                 text: 'Edit table',
                //                 frm: 'editTable',
                //                 handler: 'onEditTable',
                //             },
                //             {
                //                 iconCls: 'x-fa fa-times',
                //                 text: 'delete table',
                //                 handler: 'onDeleteTable',
                //                 //xtype : 'button'
                //             }
                       
                //     ]
                //     },
                    
                // },
                { 
                    text: 'Action',
                       xtype: 'actioncolumn',
                    sortable: false,
                    menuDisabled: false,
                    items: [{
                        // iconCls: 'cell-editing-delete-row',
                        iconCls: 'fas fa-minus-circle',
                        tooltip: 'Delete Table',
                        handler: 'onDeleteTable',
                      
                    }]
                },
                {
                    text: 'Option',
                    xtype: 'actioncolumn',
                 sortable: false,
                 menuDisabled: false,
                 items: 
                    [{
                        iconCls: 'far fa-edit',
                        label: 'edit',
                        xtype:'button',
                        tooltip: 'Update Table',
                        frm: 'editTable',
                        handler: 'OnUpdateClick',
                    
                    }],
                }

               
            ],

            bbar: [{
                xtype: 'pagingtoolbar',
                bind:{
                    store: '{TableListStore}'
                },
                displayInfo: true,
                displayMsg: 'Displaying {0} to {1} of {2} &nbsp;records ',
                emptyMsg: "No records to display&nbsp;"
            }],

            id: 'selectTables',
            selModel: {
                injectCheckbox : 'first',
                checkOnly : true ,
                model : 'SIMPLE',
                type : 'checkboxmodel'
            },

            
           
        },

       
   
    ],
    
});

