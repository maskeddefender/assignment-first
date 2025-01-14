// Copyright (c) 2025, Aman Kumar and contributors
// For license information, please see license.txt

frappe.ui.form.on("store manager", {
	refresh(frm) {

        frappe.msgprint("Hello User! Welcome to the Store Manager Page");

	},
});

if (!frm.doc.description) {
    frm.set_intro('Please set the value of description', 'blue');
}
else {
    frm.set_intro('Description is set', 'green');
}

