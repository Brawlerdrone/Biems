Ext.define('Admin.view.tables.editTable', {
    extend: 'Ext.form.Panel',
    // alias: 'widget.editTable',
    xtype: 'editTable',
    requires: [
        'Ext.button.Button',
        'Ext.form.field.Text',
        'Ext.form.field.File',
        'Ext.form.field.HtmlEditor'
    ],

    viewModel: {
        type: 'emailcompose'
    },

   // controller: 'emailcompose',

    //cls: 'email-compose',

    layout: {
        type:'vbox',
        align:'stretch'
    },

    bodyPadding: 10,
    scrollable: true,

    defaults: {
        labelWidth: 60,
        labelSeparator: ''
    },

    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'tablename',
            name : 'tableName'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Subject'
        },
        // {
        //     xtype: 'htmleditor',
            
        //     // Make tips align neatly below buttons.
        //     buttonDefaults: {
        //         tooltip: {
        //             align: 't-b',
        //             anchor: true
        //         }
        //     },
        //     flex: 1,
        //     minHeight: 100,
        //     labelAlign: 'top',
        //     fieldLabel: 'Message'
        // }
    ],

    bbar: {
        overflowHandler: 'menu',
        items: [
            // {
            //     xtype: 'filefield',
            //     width: 400,
            //     labelWidth: 80,
            //     fieldLabel: 'Attachment',
            //     labelSeparator: '',
            //     buttonConfig: {
            //         xtype: 'filebutton',
            //         glyph:'',
            //         iconCls: 'x-fa fa-cloud-upload-alt',
            //         text: 'Browse'
            //     }
            // },
            '->',
            {
                xtype: 'button',
                ui: 'soft-red',
                text: 'Discard',
                //handler nitaweka yangu custom
                //handler: 'onComposeDiscardClick'
            },
            {
                xtype: 'button',
                ui: 'gray',
                text: 'update name',
                //handler nitaweka yangu custom
                //handler:'customhandler',
            }
            // {
            //     xtype: 'button',
            //     ui: 'soft-green',
            //     text: 'Send'
            // }
        ]
    }
});

// Ext.define('Admin.view.tables.editTable', {

//     extend: 'Ext.form.Panel',
//     xtype: 'editTable',

//     title: 'EDIT TABLE',
// })