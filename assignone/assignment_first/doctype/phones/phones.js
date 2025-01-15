// Copyright (c) 2025, Aman Kumar and contributors
// For license information, please see license.txt

frappe.ui.form.on("phones", {
    after_save: function (frm) {
        
        frappe.msgprint(__("You have successfully saved the phone number of '{0}'", 
            [frm.doc.first_name + " " + frm.doc.last_name]));
        
        
        if (!frm.doc.datetime) {            
            frm.set_value('date_time', frappe.datetime.now_datetime());
        }

        
        if (!frm.doc.last_name) {
            frm.set_intro(__('Please set the value of description'), 'blue');
        }
    },

    // Set 'full_name' by combining first and last name
    refresh: function (frm) {
        if (frm.doc.first_name && frm.doc.last_name) {
            frm.set_value('full_name', `${frm.doc.first_name} ${frm.doc.last_name}`);
        }
    }
});
