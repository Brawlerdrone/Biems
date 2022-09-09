/*
 * This file is responsible for launching the application. Application logic should be
 * placed in the Admin.Application class.
 */
Ext.application({
    name: 'Admin',

    extend: 'Admin.Application',

    // Simply require all classes in the application. This is sufficient to ensure
    // that all Admin classes will be included in the application build. If classes
    // have specific requirements on each other, you may need to still require them
    // explicitly.
    //

    
    requires: [
        'Admin.*'
    ],

    
});

function funcShowCustomizableWindow(title, width, childObject, winXtype, btn=true) {
    var view = Ext.apply({
        xtype: winXtype,
        title: title,
        bodyPadding: 3,
        btn:btn,
        animateTarget: btn,
        width: width,
        autoScroll: true,
        items: [
            Ext.apply(
                childObject
            )
        ]
    });
    Ext.create(view);
}
