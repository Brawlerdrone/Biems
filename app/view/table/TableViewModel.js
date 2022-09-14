Ext.define('Admin.view.table.TableViewModel', {

    extend : 'Ext.app.ViewModel',
    alias : 'viewmodel.tableviewmodel',

    // require : [

    //     'Ext.data.proxy.Rest'
    // ],

    stores : {

        // TableListStore : {

        //     model : 'Admin.model.Table',

        //     autoload : true ,
        //     autoSync : true ,

        //     proxy : 
        //     {

        //         type : 'rest',

        //         reader : 
        //         {
        //             rootProperty : 'items',
        //             type : 'json',



        //         },
        //         url : 'http://localhost/Laravel/TaskOne/public/api/all-tables',
        //         writer : {
        //             type : 'json',
        //             dateFormat : 'd/m/Y',
        //             writeAllFields : true,
        //         }
        //     }
        // }

        TableListStore : {
            model : 'Admin.model.Table',
            //xtype : 'tableList',
            autoLoad : true ,
            autoSynC : true ,

            proxy : 
            {

                type: 'rest',

                reader: 
                {
                    rootProperty : 'items',
                    type : 'json',
                },
                url : 'http://localhost/Laravel/TaskOne/public/api/all-tables',
                writer : {
                    type : 'json',
                    dateFormat : 'd/m/Y',
                    writeAllFields : true
                }
            }
        },
        TableListPagingStore : {

            model : 'Admin.model.Table',
            autoLoad : true ,
            autoSynC : true ,
            //pageSize : 10,
            
            proxy : 
            {

                type : 'rest',
                reader : 
                {
                    rootProperty : 'items',
                    type : 'json',
                    totalProperty : 'TotalCount'
                },

                url : 'http://localhost/Laravel/TaskOne/public/api/all-tables',
            }
        }
    }

})