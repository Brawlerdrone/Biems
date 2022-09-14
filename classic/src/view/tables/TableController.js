Ext.define('Admin.view.tables.TableController', {
    

    extend : 'Ext.app.ViewController',

    alias : 'controller.table',


    //form to add new record
    onAddTable: function(btn) {

        frm = btn.frm,
        addTable = Ext.widget(frm);

        funcShowCustomizableWindow('addTable', '60%', addTable , 'customizablewindow');
    },

    //event to fire the record addtion to laravel API

    addTable: function(btn){

        frm = btn.up('form');
      
       popup =Ext.widget('addTable');

      
       console.log(frm.down('textfield[name=name]').getValue());
   

       if (frm.isValid()) {
           frm.submit({
                url : 'http://localhost/Laravel/TaskOne/public/api/create-table',
                method : 'POST',
                waitMsg: 'Please wait...',
                success : function(form , action) {
                    
                    
                    Ext.Msg.alert('data added successfully');
                    
                    frm.destroy();
                },
                failure: function (form, action) {
                    var resp = action.result;
                    
                }
           });
       }
    },

   //Promt to delete a table
//    onDeleteTable:function(){
//     Ext.Msg.confirm('Delete this table', 'Are you sure?',
//     this.onDeleteEvent, this);



//     },
    onDeleteTable: function(grid, rowIndex, colIndex,del) {
        console.log(grid.up('grid'));
        var cell  = grid.up('grid');
        
        var rec = cell.getStore().getAt(rowIndex);
        console.log(rec);
        alert("Delete " + rec.get('name'));
        // Ext.message.confirm('Delete' + rec.get('name'),
        
        
        // )
          Id = rec.get('id'),
        Ext.Ajax.request({
            url: 'http://localhost/Laravel/TaskOne/public/api/delete-table/',
            method: 'GET',
            // timeout: 60000n
            params:
            {
                id: Id // loads student whose Id is 1
            },
            headers:
            {
                // 'Content-Type': 'application/json'
            },
            success: function (response) {
                Ext.Msg.alert('data deleted successfully');
            
            },
            failure: function (response) {
                Ext.Msg.alert('Status', 'Request Failed.');

            }
        });
    },

    OnUpdateClick: function(grid, rowIndex,frm,btn) 
    {
        var rec = grid.getStore().getAt(rowIndex);
        frm=btn.frm;
        console.log(rec.get('name'));
        editTable = Ext.widget(frm);
        console.log(editTable);
        
        // var updatewindow = Ext.widget('editTable');
        // var updateform= updatewindow.down('form');
        // updateform.getForm().loadRecord(rec);
        // console.log(updateform);
        // updatewindow.setTitle('update');  
        // updatewindow.show();
    
    },
    onEditTable: function (btn) {
        // var winTitle = btn.winTitle,
            // winWidth = btn.winWidth,
            // childObject = Ext.widget(btn.childXtype);
         //Ext.apply(childObject, {frame: 'true'});
         //childObject.setUI(childObject.ui + '-framed');
         //childObject.down('hiddenfield[name=personnel_type]').setValue('ctrregistrysponsor');
         frm=btn.frm,
         editTable = Ext.widget(frm);
         button = btn.up('button')
         console.log(button);
         record = button.getWidgetRecord();
         console.log(record);
         editTable.loadRecord(record);
         funcShowCustomizableWindow('editTable', '60%', editTable, 'customizablewindow');
     },

    // onEditTable :function(btn,grid, rowIndex ,frm)

    // {
    //     // var rec = grid.getStore().getAt(rowIndex);
    //     //     var updatewindow = Ext.widget('editTable');
    //     //     console.log(updatewindow)
    //         // var updateform= updatewindow.down('form');
    //         // updateform.getForm().loadRecord(rec);
    //         // console.log(updateform);
    //         // updatewindow.setTitle('update');  
    //         // updatewindow.show();
    //     frm=btn.frm,
    //     editTable = Ext.widget(frm);
    //     button = btn.up('button')
    //     console.log(button);
    //     record = button.getWidgetRecord();
    //     console.log(record);
    //     editTable.loadRecord(record);
    //     funcShowCustomizableWindow('editTable', '60%', editTable, 'customizablewindow');
    // }

    
    
})