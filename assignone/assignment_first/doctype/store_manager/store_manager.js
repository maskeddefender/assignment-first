// Copyright (c) 2025, Aman Kumar and contributors
// For license information, please see license.txt

frappe.ui.form.on("store manager", {
	refresh(frm) {

        frappe.msgprint("Hello User! Welcome to the Store Manager Page");

	},
});

frappe.ui.form.on('livingroom', { // The child table is defined in a DoctType called "livingroom"
    address_add(frm, cdt, cdn) { // "address" is the name of the table field in store manager, "_add" is the event
        // frm: current store manager form
        // cdt: child DocType 'livingroom'
        // cdn: child docname (something like 'a6dfk76')
        // cdt and cdn are useful for identifying which row triggered this event
        frappe.msgprint('A row has been added to the livingroom table 🎉 ');
    }
});

