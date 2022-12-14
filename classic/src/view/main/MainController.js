Ext.define('Admin.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    listen : {
        controller : {
            '#' : {
                unmatchedroute : 'onRouteChange'
            }
        }
    },

    routes: {
        ':node': 'onRouteChange'
    },

    lastView: null,

    setCurrentView: function(hashTag) {
        hashTag = (hashTag || '').toLowerCase();

        var me = this,
            refs = me.getReferences(),
            mainCard = refs.mainCardPanel,
            mainLayout = mainCard.getLayout(),
            navigationList = refs.navigationTreeList,
            store = navigationList.getStore(),
            node = store.findNode('routeId', hashTag) ||
                   store.findNode('viewType', hashTag),
            view = (node && node.get('viewType')) || 'page404',
            lastView = me.lastView,
            existingItem = mainCard.child('component[routeId=' + hashTag + ']'),
            newView;

        // Kill any previously routed window
        if (lastView && lastView.isWindow) {
            lastView.destroy();
        }

        lastView = mainLayout.getActiveItem();

        if (!existingItem) {
            newView = Ext.create({
                xtype: view,
                routeId: hashTag,  // for existingItem search later
                hideMode: 'offsets'
            });
        }

        if (!newView || !newView.isWindow) {
            // !newView means we have an existing view, but if the newView isWindow
            // we don't add it to the card layout.
            if (existingItem) {
                // We don't have a newView, so activate the existing view.
                if (existingItem !== lastView) {
                    mainLayout.setActiveItem(existingItem);
                }
                newView = existingItem;
            }
            else {
                // newView is set (did not exist already), so add it and make it the
                // activeItem.
                Ext.suspendLayouts();
                mainLayout.setActiveItem(mainCard.add(newView));
                Ext.resumeLayouts(true);
            }
        }

        navigationList.setSelection(node);

        if (newView.isFocusable(true)) {
            newView.focus();
        }

        me.lastView = newView;
    },

    onNavigationTreeSelectionChange: function (tree, node) {
        var to = node && (node.get('routeId') || node.get('viewType'));

        if (to) {
            this.redirectTo(to);
        }
    },

    onToggleNavigationSize: function () {
        var me = this,
            refs = me.getReferences(),
            navigationList = refs.navigationTreeList,
            wrapContainer = refs.mainContainerWrap,
            collapsing = !navigationList.getMicro(),
            new_width = collapsing ? 64 : 250;

        if (Ext.isIE9m || !Ext.os.is.Desktop) {
            Ext.suspendLayouts();

            refs.senchaLogo.setWidth(new_width);

            navigationList.setWidth(new_width);
            navigationList.setMicro(collapsing);

            Ext.resumeLayouts(); // do not flush the layout here...

            // No animation for IE9 or lower...
            wrapContainer.layout.animatePolicy = wrapContainer.layout.animate = null;
            wrapContainer.updateLayout();  // ... since this will flush them
        }
        else {
            if (!collapsing) {
                // If we are leaving micro mode (expanding), we do that first so that the
                // text of the items in the navlist will be revealed by the animation.
                navigationList.setMicro(false);
            }
            navigationList.canMeasure = false;

            // Start this layout first since it does not require a layout
            refs.senchaLogo.animate({dynamic: true, to: {width: new_width}});

            // Directly adjust the width config and then run the main wrap container layout
            // as the root layout (it and its chidren). This will cause the adjusted size to
            // be flushed to the element and animate to that new size.
            navigationList.width = new_width;
            wrapContainer.updateLayout({isRoot: true});
            navigationList.el.addCls('nav-tree-animating');

            // We need to switch to micro mode on the navlist *after* the animation (this
            // allows the "sweep" to leave the item text in place until it is no longer
            // visible.
            if (collapsing) {
                navigationList.on({
                    afterlayoutanimation: function () {
                        navigationList.setMicro(true);
                        navigationList.el.removeCls('nav-tree-animating');
                        navigationList.canMeasure = true;
                    },
                    single: true
                });
            }
        }
    },

    onMainViewRender:function() {
        if (!window.location.hash) {
            this.redirectTo("dashboard");
        }
    },

    onRouteChange:function(id){
        this.setCurrentView(id);
    },

    onSearchRouteChange: function () {
        this.setCurrentView('searchresults');
    },

    onSwitchToModern: function () {
        Ext.Msg.confirm('Switch to Modern', 'Are you sure you want to switch toolkits?',
                        this.onSwitchToModernConfirmed, this);
    },

    onSwitchToModernConfirmed: function (choice) {
        if (choice === 'yes') {
            var s = window.location.search;

            // Strip "?classic" or "&classic" with optionally more "&foo" tokens
            // following and ensure we don't start with "?".
            s = s.replace(/(^\?|&)classic($|&)/, '').replace(/^\?/, '');

            // Add "?modern&" before the remaining tokens and strip & if there are
            // none.
            window.location.search = ('?modern&' + s).replace(/&$/, '');
        }
    },

    onEmailRouteChange: function () {
        this.setCurrentView('email');
    },
    // onEditTable:function(btn) {
           
    //     var myForm = new Ext.form.Panel({
    //         width: 500,
    //         height: 400,
    //         title: 'Form Window',
    //         floating: true,
    //         closable : true,
    //         //xtype : 'edit_form',

    //         items: [
    //             {padding :10},
    //             {
    //                 xtype: 'textfield',
    //                 fieldLabel: 'To'
    //             },
    //             {
    //                 xtype: 'textfield',
    //                 fieldLabel: 'Subject'
    //             },
    //             // {
    //             //     xtype: 'htmleditor',
                    
    //             //     // Make tips align neatly below buttons.
    //             //     buttonDefaults: {
    //             //         tooltip: {
    //             //             align: 't-b',
    //             //             anchor: true
    //             //         }
    //             //     },
                    
                    
    //             //     labelAlign: 'top',
    //             //     fieldLabel: 'Message'
    //             // }
    //         ],
           
    //     });
    //     myForm.show();
       

       
    // },
    onDeleteTable:function(){
        Ext.Msg.confirm('Delete this table', 'Are you sure?',
        this.onSwitchToModernConfirmed, this);
    },
    // onAddTable:function(){

    // },
    // onEditTable:function(){
    //     this.setCurrentView('editTable');
        
    // },
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
    onAddTable: function(btn) {

        frm = btn.frm,
        addTable = Ext.widget(frm);

        funcShowCustomizableWindow('addTable', '60%', addTable , 'customizablewindow');
    },
   
    clearInputFields: function(btn){
        frm = btn.up('addTable');
        nameInputFields = frm.down('textfield[name=name]').getValue();
        console.log(nameInputFields);

        if(nameInputFields == 0 )
        {
            nameInputFields.clear();
        }
        
    },
    setGridStore: function (me, options) {
        // console.log(me);
        var config = options.config,
            isLoad = options.isLoad,
            toolbar = me.down('pagingtoolbar'),
            store = Ext.create('Admin.store.abstract.AbstractStore', config);
        me.setStore(store);
       // console.log(store);
        toolbar.setStore(store);
        if (isLoad === true || isLoad == true) {
            store.removeAll();
            store.load();
        }
    },
    // addTable:function(btn) {
    //     frm=btn.frm,
    //     addTable = Ext.widget(frm);
    //     funcShowCustomizableWindow('addTable', '60%', addTable , 'customizablewindow');
    // }
    // onEditTable: function (menu, item) {
    //     if (item && item.routeId === 'editTable') {
    //         this.setCurrentView(item.routeId, item.params);
    //     }
    // },
});
