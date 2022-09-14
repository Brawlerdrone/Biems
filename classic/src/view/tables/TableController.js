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
   onDeleteTable:function(){
    Ext.Msg.confirm('Delete this table', 'Are you sure?',
    this.onDeleteEvent, this);



    },

    // onDeleteEvent:function(panel,rowIndex){

    //     var rec = panel.getStore().getAt(rowIndex);

    //     console.log(rec);

    // }
    onDeleteEvent : function(){

        //find a way to fetch the id of the record in question


        var frm = this.getView();

        // var tableStore = frm.getSelectionModel().getSelection();

        console.log(tableStore);

        //pass it to an ajax request
        Ext.Ajax.request({

            url : 'http://localhost/Laravel/TaskOne/public/api/delete-table/' + id ,
            method : 'GET',


        })

    }
    
})