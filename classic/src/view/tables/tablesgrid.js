Ext.define('Admin.view.tablesgrid', {
    extend : 'Ext.grid.Panel',
    
    xtype : 'tablesgrid',

    title : 'tables',

    
    // store: {
    //     type: 'tables',
    //     // model: 'nancy.model.SkillsDetail',
    
        
    // },
    //items : [
        
    
           // xtype : 'gridpanel',
           // title : 'All tables in the DB',
            
            // store :{
            //     type : 'extraApi',
            // },
            store : { type : 'extraApi' },
            // store : [
            //     {
            //         identifier : '1',
            //         tableName : 'TableOne',
            //     },
            //     {
            //         identifier : '2',
            //         tableName : 'TableTwo',
            //     },
            //     {
            //         identifier : '3',
            //         tableName : 'TableThree',
            //     },
            // ],
            
            tbar: [
                '->',
                
                {
                    xtype: 'button',
                    text: 'Truncate selected tables',
                    handler: 'truncateselectetables',
                    ui: 'soft-blue'
                },

                // {
                   
                //     text: 'add table',
                //     frm: 'add Table',
                //     handler: 'onAddTable',
                //     ui: 'soft-blue'
                // }
                {
                   
                    text: 'addNewTable',
                    frm: 'addTable',
                    handler: 'onAddTable',
                    ui: 'soft-blue'
                },

            ],
            bbar: [{
                xtype: 'pagingtoolbar',
        


                store: {
                    type: 'tablest',
                    // model: 'nancy.model.SkillsDetail',
                
                    
                },
            }
            ],
            columns: [

                {
                    //xtype: 'gridcolumn',
                    width: 40,
                    dataIndex: 'description',
                    text: '#',
                    value:'Testing'
                },
                {
                   // xtype: 'gridcolumn',
                   flex: 1,
                    text: 'name',
                    dataIndex: 'name',
                    
                   

                }, 
                // {
                //     xtype: 'gridcolumn',
                //     flex: 1,
                //     dataIndex: 'description',
                //     text: 'description',
                // },
                // {
                //     xtype: 'gridcolumn',
                //     flex: 1,
                //     dataIndex: 'dateCreated',
                //     text: 'dateCreated',
                // },
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
            // id: 'selectTables',
            // selModel: {
            //     injectCheckbox : 'first',
            //     checkOnly : true ,
            //     model : 'SIMPLE',
            //     type : 'checkboxmodel'
            // },
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
        

      // { xtype : 'tablesgrid' },
   // ]

})