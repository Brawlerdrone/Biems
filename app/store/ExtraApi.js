xt.define('Admin.store.ExtraApi', {
    Extend : 'Ext.data.store',
    alias : 'store.extraApi',


    proxy : {

        type : 'ajax',
        url : 'http://localhost/Laravel/TaskOne/public/api/all-tables',
    },
    autoload : true,

})