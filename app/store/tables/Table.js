// Ext.define('Admin.store.tables.Table', {
//     extend : 'Ext.data.Store',

//     alias : 'store.',
//     //model: 'Admin.model.search.Result',

//     //  data: { items: 
        
//     //     [
//     //             {
//     //                 identifier : '1',
//     //                 tableName : 'TableOne',
//     //             },
//     //             {
//     //                 identifier : '2',
//     //                 tableName : 'TableTwo',
//     //             },
//     //             {
//     //                 identifier : '3',
//     //                 tableName : 'TableThree',
//     //             },
//     //         ]},
    
//     // data: {

//     //     items:[
//     //         { 
//     //             identifier : '1',
//     //             name : 'tableOne',
                
//     //         }
//     //     ]
//     // },
//     storeId  :'TableStore',
//     autoload :true, 
//     proxy: {
//         type : 'ajax',
//         method : 'GET',
//       // url :'http://127.0.0.1/Laravel/TaskOne/public/api/fetch-table/1',
//          //url: 'http://127.0.0.1/Laravel/TaskOne/public/api/all-tables',
//          url : 'http://localhost/Laravel/TaskOne/public/api/all-tables',
//         reader : {
//             type:'json',
//             rootProperty: 'items',

//         }
//     }

// })


Ext.define('Admin.store.tables.Table', {
    Extend : 'Ext.data.store',
    alias : 'store.tables',


    proxy : {

        type : 'ajax',
        url : 'https://jsonplaceholder.typicode.com/users',
    },
    autoload : true,

})