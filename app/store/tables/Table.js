Ext.define('Admin.store.tables.Table', {
    extend : 'Ext.data.Store',

    alias : 'store.tables',
    
    data: {

        items:[
            { 
                identifier : '1',
                tableName : 'tableOne',
            }
        ]
    },
   
    proxy: {
        type : 'memory',
        reaader : {

            type:'json',
            rootProperty: 'items',

        }
    }

})