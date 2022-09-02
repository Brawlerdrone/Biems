Ext.define('Admin.view.tables.popup', {

    extend: 'Ext.window.Window',
    
    height: 200,
    width : 400,
    layout: 'fit',
    
    items :
    {
        xtype : 'edit',
        border: false,
        columns :[{header:'name'}],
        store:[]

    }
});