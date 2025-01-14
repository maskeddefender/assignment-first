// Copyright (c) 2025, Aman Kumar and contributors
// For license information, please see license.txt

// frappe.ui.form.on("store manager", {
// 	refresh(frm) {

// 	},
// });

if (!frm.doc.description) {
    frm.set_intro('Please set the value of description', 'blue');
}

