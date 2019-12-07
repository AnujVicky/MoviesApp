/* Copyright © 2005-2010 Srishti Software Applications Pvt Ltd.
This product includes software developed by Srishti Software Applications Pvt ltd.
All rights reserved */

//Export Excel New Option

function new_excel_export(id,title)
{
  results_html = $('export').innerHTML;    
  results_html = '<html><body></center><table border=2 cellspacing="0" cellpadding="0"><tr><td colspan="9"><center><h3>'+ id +'</h3></td></tr>'+results_html+'</table></body></html>';
  var input = new Element('input', { 'type': 'hidden','name': 'results[html]','value': results_html});
  var form = new Element('form', { 'method': 'post','name': 'tempForm','action': "html_to_excel?file_name="+id});
  form.insert(input);      
  document.body.appendChild(form);
  form.submit();   
}
// Export to excel option ends here

// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
function load_city(){
    var pars = "state=" + $F("associated_person_state_id") + "&object=" + "associated_person";
    ajax_loader('city_load', '/front_office/patient/load_city', pars, 'image2');
}

function load_country(){
    var pars = "country=" + $F("associated_person_country_id") + "&object=" + "associated_person";
    ajax_loader('state_load', '/front_office/patient/load_state', pars, 'image');
    ajax_loader('city_load', '/front_office/patient/load_state_city', pars, 'image2');
}

function cal_bmi(){
                        if (($('health_parameter_height').value.length != 0) && ($('health_parameter_weight').value.length != 0)) {
                            var height = $('health_parameter_height').value;
                            var weight = $('health_parameter_weight').value;
                            var res = (height * weight)/3600;
                            var hpb = Math.sqrt(res);
                            var hpb_rounding_value = round_decimals(hpb,3);
                            $('health_parameter_bmi').value = hpb_rounding_value

                        }
                        return false;
                    }

function payors(elem){
    var pars = "payor_type=" + $F(elem)
    var myAjax = new Ajax.Updater("payor", "/front_office/payer_details/get_payors", {
        method: 'get',
        parameters: pars
    });
}


function getname_ref(id, name, prof_name, clinician_id, from){
    parent.document.getElementById(prof_name).value = name;
    parent.document.getElementById('clinician_id').value = id;
    //parent.document.getElementById(ref_type).value = ins_type;
    parent.myLightWindow.deactivate();
    return false;
}



function search_professionals(){
    var pars = "discipline_id=" + $('test_discipline').value + "&speciality_id=" + $('test_speciality').value + "&institution_id=" + $('test_institution').value
    var myAjax = new Ajax.Updater("hc", "/front_office/patient_assciated_professionals/search_professional", {
        method: 'get',
        parameters: pars
    })
}

function app_to_date(date){
    arr = date.split('-')
    t = arr[1];
    arr[1] = arr[0];
    arr[0] = t;
    date = arr.join(' - ')
    return (date.toString() + " ");
}

function validate_form(){
    if ($F('duty_roster_station_id') == '') {
        alert("Station is mandatory")
        return false
    }
}

function getname(id, name, prof_name, clinician_id, from){
    window.opener.document.getElementById(prof_name).value = name;
    window.opener.document.getElementById(clinician_id).value = id;
    if (from != 'quick_registration' && from != 'general_booking' && from != 'opd_booking_ref') {
        window.opener.get_stations()
    }
    window.close();
    return false;
}

function load_services(from){
    var pars = "service_group_id=" + document.getElementById("service_group").value + "&from=" + from;
    var myAjax = new Ajax.Updater('load_services', '/front_office/bills/load_services', {
        method: 'get',
        parameters: pars
    });
    var myAjax = new Ajax.Updater('load_stations', '/front_office/bills/load_stations', {
        method: 'get',
        parameters: pars
    });
}

function load_treat(){
    var pars = "pid=" + document.getElementById("treatment_plan_treatment_name").value;
    var myAjax = new Ajax.Updater('treatment', '/treatment_plans/loadpreparationtext', {
        method: 'get',
        parameters: pars
    });
}

function diagnosis(){

    var pars = "disease_name=" + document.getElementById("provisional_diagnosis_disease_name").value;
    var myAjax = new Ajax.Updater('icdcode', '/provisional_diagnoses/codes', {
        method: 'get',
        parameters: pars
    });
}

function diagnosis1(){

    var pars = "disease_name=" + document.getElementById("chronic_problem_disease_name").value;
    var myAjax = new Ajax.Updater('icdcode', '/chronic_problems/codes', {
        method: 'get',
        parameters: pars
    });
}

function diagnosis2(){

    var pars = "disease_name=" + document.getElementById("active_problem_disease_name").value;
    var myAjax = new Ajax.Updater('icdcode', '/active_problems/codes', {
        method: 'get',
        parameters: pars
    });
}

function diagnosis3(){

    var pars = "disease_name=" + document.getElementById("new_problem_new_problem").value;
    var myAjax = new Ajax.Updater('icdcode', '/new_problems/codes', {
        method: 'get',
        parameters: pars
    });
}

function diagnosis5(){
    var pars = "brand_name=" + document.getElementById("medicine_prescription_generic_name").value;
    
    var myAjax = new Ajax.Updater('brand', '/medicine_prescriptions/brand_name', {
        method: 'get',
        parameters: pars
    });
}

function icd10(){
    var pars = "icd10=" + $F('main_problem_icd10_description')
    var myAjax = new Ajax.Updater('icd10', "/main_problems/load_icd10_description", {
        method: 'get',
        parameters: pars
    })
}

function history_brand_name(){

    var pars = "bra_name=" + document.getElementById("medication_history_generic_name").value;
    var myAjax = new Ajax.Updater('history_brand', '/medication_histories/brand_name', {
        method: 'get',
        parameters: pars
    });
}



function selectform(){
    var pars = "form_name=" + document.getElementById("form_form_name").value;
    
    document.myform.action = "/emr/ophth/patientform/forms?form_name=" + document.getElementById("form_form_name").value;
    document.myform.submit();
    return true;
}

function history(){

    var pars = "disease_name=" + document.getElementById("previous_history_disease_name").value;
    var myAjax = new Ajax.Updater('icdcode', '/previous_histories/codes', {
        method: 'get',
        parameters: pars
    });
}

function family(){

    var pars = "disease_name=" + document.getElementById("family_history_disease_name").value;
    var myAjax = new Ajax.Updater('icdcode', '/family_histories/codes', {
        method: 'get',
        parameters: pars
    });
}


function handleResponse(documentObject, stringToEvaluate){
    window.eval(stringToEvaluate);
    if (documentObject.location) { // Should be usefull for IE only .. but I cannot test it
        if (documentObject.location != "") 
            documentObject.location.replace('about:blank');
    }
}

function cosul_amount(){
    var consul = document.getElementById('employee_payslip_detail_doc_consultancy').value;
    var adh = document.getElementById('employee_payslip_detail_doc_ad_hoc_fee').value;
    var excon = document.getElementById('employee_payslip_detail_emp_extra_consultancy_fee').value;
    var oth = document.getElementById('employee_payslip_detail_emp_others').value;
    var gross = parseFloat(oth) + parseFloat(consul) + parseFloat(adh) + parseFloat(excon);
    document.getElementById('employee_payslip_detail_emp_gross_total').value = (gross);
    if (gross >= 0 && gross < 3000) {
        var pt = '0.0'
    }
    else 
        if (gross >= 3000 && gross < 5000) {
            //alert("1=>"+gross)
            var pt = '30.0'
        }
        else 
            if (gross >= 5000 && gross < 8000) {
                //alert("2=>"+gross)
                var pt = '60.0'
            }
            else 
                if (gross >= 8000 && gross < 10000) {
                    //alert("3=>"+gross)
                    var pt = '100.0'
                }
                else 
                    if (gross >= 10000 && gross < 15000) {
                        //alert("4=>"+gross)
                        var pt = '150.0'
                    }
                    else 
                        if (gross >= 15000) {
                            //alert("5=>"+gross)
                            var pt = '200.0'
                        }
    document.getElementById('employee_payslip_detail_emp_pt').value = pt;
    var ap = gross * 12
    var ti = ap * 0.9
    var tds = 0
    if (ti > 100000 && ti <= 150000) {
        tds = (ti - 100000) * 10.0 / 100.0
    }
    else 
        if (ti > 150000 && ti <= 250000) {
            tds = 5000 + (ti - 150000) * 20.0 / 100.0
        }
        else 
            if (ti > 250000) {
                tds = 25000 + (ti - 250000) * 30.0 / 100.0
            }
    tds = Math.round(tds * 1.02 / 12)
    document.getElementById('employee_payslip_detail_emp_tds').value = tds;
    var loan = document.getElementById('employee_payslip_detail_emp_loan').value;
    var emoth = document.getElementById('employee_payslip_detail_emp_others_deduction').value;
    var dedu = parseFloat(pt) + parseFloat(tds) + parseFloat(emoth) + parseFloat(loan);
    document.getElementById('employee_payslip_detail_emp_total_deduct').value = dedu;
    var net = parseFloat(gross) - parseFloat(dedu);
    document.getElementById('employee_payslip_detail_emp_net_amount').value = net
    
    
}

function basic(){
    var basic = document.getElementById('employee_payslip_detail_emp_basic').value;
    if (document.getElementById('employee_payslip_detail_emp_basic').value != 0.0) {
        var gross = (45 * basic / 100)
        //alert("1=>"+gross)
        document.getElementById('employee_payslip_detail_admin_gross').value = gross;
        var da = (15 * basic / 100)
        //alert("2=>"+da);
        document.getElementById('employee_payslip_detail_emp_da').value = da;
        var hra = (25 * basic / 100)
        //alert("3=>"+hra);
        document.getElementById('employee_payslip_detail_emp_hra').value = hra;
        var cca = '150.0';
        document.getElementById('employee_payslip_detail_emp_cca').value = cca;
    }
    else {
        var gross = document.getElementById('employee_payslip_detail_admin_gross').value;
        var da = document.getElementById('employee_payslip_detail_emp_da').value;
        var hra = document.getElementById('employee_payslip_detail_emp_hra').value;
        var cca = document.getElementById('employee_payslip_detail_emp_cca').value;
    }
    var con = document.getElementById('employee_payslip_detail_emp_conveyance').value;
    var ext = document.getElementById('employee_payslip_detail_emp_extra_duty').value;
    var hol = document.getElementById('employee_payslip_detail_emp_holiday_pay').value;
    //var unav = document.getElementById('employee_payslip_detail_unavailed_leave_pay').value;
    var bon = document.getElementById('employee_payslip_detail_emp_bonus').value;
    var oth = document.getElementById('employee_payslip_detail_emp_others').value;
    var gro_total = parseFloat(basic) + parseFloat(gross) + parseFloat(da) + parseFloat(hra) + parseFloat(cca) + parseFloat(con) + parseFloat(ext) + parseFloat(hol) + parseFloat(bon) + parseFloat(oth);
    document.getElementById('employee_payslip_detail_emp_gross_total').value = (gro_total);
    if (document.getElementById('test').checked == true) {
        var pf = document.getElementById('employee_payslip_detail_emp_pf').value;
    }
    else {
        var pf = document.getElementById('employee_payslip_detail_emp_pf').value;
    }
    var pt = document.getElementById('employee_payslip_detail_emp_pt').value;
}

function gross(){
    var gross = document.getElementById('employee_payslip_detail_emp_gross_total').value;
    var basic = (45 * gross / 100)
    document.getElementById('employee_payslip_detail_emp_basic').value = basic;
    var da = (15 * gross / 100)
    document.getElementById('employee_payslip_detail_emp_da').value = da;
    var hra = (25 * gross / 100)
    document.getElementById('employee_payslip_detail_emp_hra').value = hra;
    var cca = '150.0';
    document.getElementById('employee_payslip_detail_emp_cca').value = cca;
    var oth = (15 * gross / 100) - 150
    document.getElementById('employee_payslip_detail_emp_others').value = oth;
    var vada = (basic + da) * (12 / 100);
    var pf1 = Math.round(vada * 100) / 100
    if (document.getElementById('test').checked == true) {
        var pf = 0;
    }
    else {
        var pf = pf1;
    }
    document.getElementById('employee_payslip_detail_emp_pf').value = pf;
    var ext = document.getElementById('employee_payslip_detail_emp_extra_duty').value;
    var hol = document.getElementById('employee_payslip_detail_emp_holiday_pay').value;
    var bon = document.getElementById('employee_payslip_detail_emp_bonus').value;
    var con = document.getElementById('employee_payslip_detail_emp_conveyance').value;
    if (gross >= 0 && gross < 3000) {
        var pt = '0.0'
    }
    else 
        if (gross >= 3000 && gross < 5000) {
            //alert("1=>"+gross)
            var pt = '30.0'
        }
        else 
            if (gross >= 5000 && gross < 8000) {
                //alert("2=>"+gross)
                var pt = '60.0'
            }
            else 
                if (gross >= 8000 && gross < 10000) {
                    //alert("3=>"+gross)
                    var pt = '100.0'
                }
                else 
                    if (gross >= 10000 && gross < 15000) {
                        //alert("4=>"+gross)
                        var pt = '150.0'
                    }
                    else 
                        if (gross >= 15000) {
                            //alert("5=>"+gross)
                            var pt = '200.0'
                        }
    document.getElementById('employee_payslip_detail_emp_pt').value = pt;
    var emoth = document.getElementById('employee_payslip_detail_emp_others_deduction').value;
    var ap = gross * 12
    var ti = ap * 0.9
    var tds = 0
    if (ti > 100000 && ti <= 150000) {
        tds = (ti - 100000) * 10.0 / 100.0
    }
    else 
        if (ti > 150000 && ti <= 250000) {
            tds = 5000 + (ti - 150000) * 20.0 / 100.0
        }
        else 
            if (ti > 250000) {
                tds = 25000 + (ti - 250000) * 30.0 / 100.0
            }
    tds = Math.round(tds * 1.02 / 12)
    document.getElementById('employee_payslip_detail_emp_tds').value = tds;
    var lop = document.getElementById('employee_payslip_detail_emp_loss_pay').value;
    var dedu = parseFloat(pf) + parseFloat(pt) + parseFloat(emoth) + parseFloat(lop) + parseFloat(tds);
    var de = Math.round(dedu * 100) / 100
    document.getElementById('employee_payslip_detail_emp_total_deduct').value = de;
    var net = parseFloat(gross) + parseFloat(ext) + parseFloat(hol) + parseFloat(bon) + parseFloat(con) - parseFloat(dedu);
    var net_amt = Math.round(net * 100) / 100
    document.getElementById('employee_payslip_detail_emp_net_amount').value = net_amt
}

function payslip(){
    //alert("hi");
    var par = "emp_id=" + document.getElementById("employee_payslip_detail_employee_id").value;
    var myAjax = new Ajax.Updater('payslipFrom', 'payslipFromdetail', {
        method: 'get',
        parameters: par
    })
}

function test_disable(){
    if (document.getElementById('test').checked == true) {
        document.getElementById('employee_payslip_detail_emp_pf').disabled = true
        document.getElementById('employee_payslip_detail_emp_pf').value = 0;
    }
    else {
        document.getElementById('employee_payslip_detail_emp_pf').disabled = false
        document.getElementById('employee_payslip_detail_emp_pf').value = pf;
    }
}

function search(){

    var pars = "employee_id=" + document.getElementById("test_employee_id").value + "&date=" + document.getElementById("employee_date_of_joining").value;
    var myAjax = new Ajax.Updater('payslip', 'paysliplist', {
        method: 'get',
        parameters: pars
    });
}

function confirmation(msg){
    if (msg == 's') {
        var message = "Do You Want To Save?"
        
    }
    else {
        var message = "Do You Want To Continue With Receipt?"
    }
    if (confirm(message)) {
        return true
    }
    else {
        return false
    }
    
}

// Declaring valid date character, minimum year and maximum year
var dtCh = "-";
var minYear = 1900;
var maxYear = 2100;

function isInteger(s){
    var i;
    for (i = 0; i < s.length; i++) {
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) 
            return false;
    }
    // All characters are numbers.
    return true;
}

function stripCharsInBag(s, bag){
    var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) 
            returnString += c;
    }
    return returnString;
}

function daysInFebruary(year){
    // February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (((year % 4 == 0) && ((!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28);
}

function DaysArray(n){

    for (var i = 1; i <= n; i++) {
        this[i] = 31
        if (i == 4 || i == 6 || i == 9 || i == 11) {
            this[i] = 30
        }
        if (i == 2) {
            this[i] = 29
        }
    }
    return this
}

function isDate(ele){
	var dtStr = ele.value;
    var daysInMonth = DaysArray(12)
    var pos1 = dtStr.indexOf(dtCh)
    var pos2 = dtStr.indexOf(dtCh, pos1 + 1)
    var strDay = dtStr.substring(0, pos1)
    var strMonth = dtStr.substring(pos1 + 1, pos2)
    var strYear = dtStr.substring(pos2 + 1)
    strYr = strYear
    if (strDay.charAt(0) == "0" && strDay.length > 1) 
        strDay = strDay.substring(1)
    if (strMonth.charAt(0) == "0" && strMonth.length > 1) 
        strMonth = strMonth.substring(1)
    for (var i = 1; i <= 3; i++) {
        if (strYr.charAt(0) == "0" && strYr.length > 1) 
            strYr = strYr.substring(1)
    }
    month = parseInt(strMonth)
    day = parseInt(strDay)
    year = parseInt(strYr)
    if (pos1 == -1 || pos2 == -1) {
        alert("The date format should be : dd-mm-yyyy")
		ele.focus()
		ele.value = ""
		ele.focus();
        return false
    }
    if (strMonth.length < 1 || month < 1 || month > 12) {
        alert("Please enter a valid month")
		ele.value = "";
		ele.focus();
        return false
    }
    if (strDay.length < 1 || day < 1 || day > 31 || (month == 2 && day > daysInFebruary(year)) || day > daysInMonth[month]) {
        alert("Please enter a valid day")
		ele.value = "";
		ele.focus();
        return false
    }
    if (strYear.length != 4 || year == 0 || year < minYear || year > maxYear) {
        alert("Please enter a valid 4 digit year between " + minYear + " and " + maxYear)
		ele.value = "";
		ele.focus();
		//$(ele.id).focus();
        return false
    }
    if (dtStr.indexOf(dtCh, pos2 + 1) != -1 || isInteger(stripCharsInBag(dtStr, dtCh)) == false) {
        alert("Please enter a valid date")
		ele.value = "";
		ele.focus();
        return false
    }
    return true
}

function ValidateForm(val){
    if (isDate(val) == false) {
        val.focus()
        val.value = ''
        return false
    }
    return true
}

//End Date Formate JavaScript




function load_subtypes_generic_names_and_items(){
    var pars = "item_type_id=" + $F("item_type_id");
    var myAjax = new Ajax.Updater('items_div', '/medication_histories/load_item_list', {
        method: 'get',
        parameters: pars
    });
    var myAjax = new Ajax.Updater('div_subtypes', '/medication_histories/load_item_subtypes', {
        method: 'get',
        parameters: pars
    });
    var myAjax = new Ajax.Updater('div_generic_names', '/medication_histories/load_generic_name_list', {
        method: 'get',
        parameters: pars
    });
}

function load_generic_names_and_items(){
    var pars = "item_subtype_id=" + $F("item_subtype_id") + "&item_type_id=" + $F("item_type_id");
    var myAjax = new Ajax.Updater('items_div', '/medication_histories/load_item_list', {
        method: 'get',
        parameters: pars
    });
    var myAjax = new Ajax.Updater('div_generic_names', '/medication_histories/load_generic_name_list', {
        method: 'get',
        parameters: pars
    });
}

function load_items_by_generic_name(){
    var pars = "generic_name_id=" + $F("generic_name_id") + "&item_subtype_id=" + $F("item_subtype_id") + "&item_type_id=" + $F("item_type_id");
    var myAjax = new Ajax.Updater('items_div', '/medication_histories/load_item_list', {
        method: 'get',
        parameters: pars
    });
}

function ajax_loader(div, url, pars, image){
    $(image).show();
    new Ajax.Updater(div, url, {
        method: 'get',
        parameters: pars,
        asynchronous: true,
        evalScripts: true,
        onComplete: function(request){
            $(image).hide()
        },
        onFailure: function(request){
            Sr_alert('Error occured')
        },
        onSuccess: function(request){
            $(div).visualEffect('highlight')
        }
    });
}



/* Blood bank functions starts here*/
/* Changes done for KG starts  here*/
// Focus Next Field While pressing Enter
function getNextElement(field){
    var fieldFound = false;
    var form = field.form;
    for (var e = 0; e < form.elements.length; e++) {
        if (fieldFound && form.elements[e].type != 'hidden') 
            break;
        if (field == form.elements[e]) 
            fieldFound = true;
    }
    return form.elements[e % form.elements.length];
}

function tabOnEnter(field, evt){
    var keyCode = document.layers ? evt.which : document.all ? evt.keyCode : evt.keyCode;
    if (keyCode != 13) 
        return true;
    else {
        getNextElement(field).focus();
        getNextElement(field).select();
        return false;
    }
}


//LETTRT
//onKeyPress="return letter(event)

function letter(e){
    var key;
    var keychar;
    if (window.event) 
        key = window.event.keyCode;
    else 
        if (e) 
            key = e.which;
        else 
            return true;
    keychar = String.fromCharCode(key);
    keychar = keychar.toLowerCase();
    // control keys
    if ((key == null) || (key == 0) || (key == 8) ||
    (key == 9) ||
    (key == 45) ||
    (key == 27)) 
        return true;
    
    // numbers
    else 
        if ((("abcdefghijklmnopqrstuvwxyz. ").indexOf(keychar) > -1)) 
            return true;
        
        else 
            return false;
}

function alphanumeric(e){
    var key;
    var keychar;
    if (window.event) 
        key = window.event.keyCode;
    else 
        if (e) 
            key = e.which;
        else 
            return true;
    keychar = String.fromCharCode(key);
    keychar = keychar.toLowerCase();
    
    // control keys
    if ((key == null) || (key == 0) || (key == 8) ||
    (key == 9) ||
    (key == 45) ||
    (key == 27)) 
        return true;
    
    // numbers
    else 
        if ((("abcdefghijklmnopqrstuvwxyz0123456789 ").indexOf(keychar) > -1)) 
            return true;
        
        else 
            return false;
}

//-->


//<-- For Autofill Date
/// Entering Date
function enterdate(myfield, e, nxtfield){
    var key;
    var keychar;
    var currentTime = new Date()
    var month = currentTime.getMonth() + 1
    if (month < 10) {
        month = '0' + month
    }
    var year = currentTime.getFullYear()
    var len = $(myfield).value.length;
    if (e) {
        var output = e.which
        if (output != 8) {
            if (len == 2) {
                $(myfield).value = $(myfield).value.split('-') + '-' + month + '-' + year
                return false;
            }
            else 
                if ((len == 5)) {
                    $(myfield).value = $(myfield).value + '-'
                }
        }
    }
    if (window.event) 
        key = window.event.keyCode;
    else 
        if (e) 
            key = e.which;
        else 
            return true;
    keychar = String.fromCharCode(key);
    
    // control keys
    if ((key == null) || (key == 0) || (key == 8) ||
    (key == 9) ||
    (key == 13) ||
    (key == 27)) 
        return true;
    
    // numbers
    else 
        if ((("0123456789.").indexOf(keychar) > -1)) 
            return true;
        
        else 
            return false;
    
}

//-->


//<-- For Autofill Date
/// Entering Birth Date
function birthdate(myfield, e, nxtfield){
    var key;
    var keychar;
    var currentTime = new Date()
    var month = currentTime.getMonth() + 1
    if (month < 10) {
        month = '0' + month
    }
    var year = currentTime.getFullYear()
    var len = $(myfield).value.length;
    if (e) {
        var output = e.which
        if (output != 8) {
            if (len == 2) {
                $(myfield).value = $(myfield).value + '-'
            }
            else 
                if ((len == 5)) {
                    $(myfield).value = $(myfield).value + '-'
                }
        }
    }
    if (window.event) 
        key = window.event.keyCode;
    else 
        if (e) 
            key = e.which;
        else 
            return true;
    keychar = String.fromCharCode(key);
    
    // control keys
    if ((key == null) || (key == 0) || (key == 8) ||
    (key == 9) ||
    (key == 13) ||
    (key == 27)) 
        return true;
    
    // numbers
    else 
        if ((("0123456789.").indexOf(keychar) > -1)) 
            return true;
        
        else 
            return false;
    
}

//-->

function ValidateDate(field, evt, nxt){
    var keyCode = document.layers ? evt.which : document.all ? evt.keyCode : evt.keyCode;
    if (keyCode != 13) 
        return true;
    else {
        if (isDate(field) == false) {
            field.focus()
            field.value = ''
            return false
        }
        else {
            $(nxt).focus();
            $(nxt).select();
            calculateage(field.value);
            return false;
        }
    }
}

 function ValidatebirthDate(field, evt, nxt)
{
var keyCode = document.layers ? evt.which : document.all ?
evt.keyCode : evt.keyCode;
   if (keyCode != 13)
      return true;
   else {

               if (isDate(field)==false){
        field.focus()
        field.value = ''
        return false
            }
     else{
           var now = new Date() ;
           birthdate = field.value
           var byear = birthdate.split('-')[2]
            var bmonth = birthdate.split('-')[1]-1
            var bdate = birthdate.split('-')[0]
            var birthdate = new Date(parseInt(byear),parseInt(bmonth),parseInt(bdate))
       if (birthdate > now)
           {
           alert("Birth Date is less than or equal to Today");
        field.focus()
        field.value = ''
        return false
           }
      else
       { 	
       $(nxt).focus();
       $(nxt).select();
       var pars = 'date='+field.value;
       /*new Ajax.Request('/patient/calculate_age_month',{parameters : pars , onComplete : function(r){
        var age = r.responseText.toString().split('/');
        $('patient_age_year').value = age[0]
        $('patient_age_month').value = age[1]
        $('patient_age_day').value = age[2]
       }})*/
       //calculateage(birthdate);
       return false;}}}
 }

//<-- For Autofill Date
/// Entering Birth Date
function birthdate(myfield, e, nxtfield)
{
var key;
var keychar;
var currentTime = new Date()
var month = currentTime.getMonth() + 1
if (month <10){month='0'+month}
var year = currentTime.getFullYear()
var len = $(myfield).value.length;
if (e)
    {
        var output = e.which
            if (output!=8)
            {
                if (len==2)
                {
                     $(myfield).value = $(myfield).value + '-' 
                }
                else if ((len==5))
                {
                     $(myfield).value = $(myfield).value + '-'
                }
            }
    }
if (window.event)
   key = window.event.keyCode;
else if (e)
   key = e.which;
else
   return true;
keychar = String.fromCharCode(key);

// control keys
if ((key==null) || (key==0) || (key==8) || 
    (key==9) || (key==13) || (key==27) )
   return true;

// numbers
else if ((("0123456789.").indexOf(keychar) > -1))
   return true;

else
   return false;

}
//-->

function change_date(field, val){
    var now = new Date();
    if ($(field) != null) {
        birthdate = $(field).value
    }
    else {
        birthdate = val
    }
    var byear = birthdate.split('-')[2]
    var bmonth = birthdate.split('-')[1] - 1
    var bdate = birthdate.split('-')[0]
    var birthdate = new Date(parseInt(byear), parseInt(bmonth), parseInt(bdate))
    return birthdate
}

function calculateage(birthdate){
    var today = new Date()
    var one_day = 1000 * 60 * 60 * 24
    days = Math.ceil((today.getTime() - birthdate.getTime()) / (one_day))
    $('patient_age_year').value = parseInt((days / 365))
    $('patient_age_month').value = parseInt((days % 365) / 30)
    $('patient_age_day').value = parseInt((days % 365) % 30)
}

function onchange_date(){
    var days = parseInt(parseInt($('patient_age_year').value) * 365) + parseInt(parseInt($('patient_age_day').value)) + parseInt(parseInt($('patient_age_month').value) * 30)
    var myDate = new Date();
    myDate.setDate(myDate.getDate() - days)
    var mon = myDate.getMonth() + 1
    if (mon < 10) {
        mon = '0' + mon
    }
    var year = myDate.getFullYear()
    var day = myDate.getDate()
    if (day < 10) {
        day = '0' + day
    }
    $('dob').value = day + '-' + mon + '-' + year
}

function tabonenterforlastfield(field, evt, nxt){
    var keyCode = document.layers ? evt.which : document.all ? evt.keyCode : evt.keyCode;
    if (keyCode != 13) 
        return true;
    else {
        $(nxt).focus();
        $(nxt).select();
        return false;
    }
}


/* <-- Auto Fill Name */
function get_name(let, action, id1, id2){
    if (parseInt($(id1).value.length) + 1 > 0) {
        var pars = 'name=' + $(id1).value + let + '&len=' + $(id1).selectionStart
        new Ajax.Request(action, {
            parameters: pars,
            onComplete: function(request){
                arr = request.responseText.toString().split('&&');
                $(id1).value = arr[0]
                $(id1).selectionEnd = parseInt(arr[1]) + 1
                $(id2).value = arr[2]
                //alert(parseInt(arr[1].length))
                //setSelectionRange($('patient_name'),parseInt(arr[1].length),(parseInt(arr[0].length)-parseInt(arr[1].length)))
            },
            onFailure: function(request){
                Sr_alert('Error occured');
            },
            onSuccess: function(request){
                $(loader).visualEffect('highlight');
            }
        });
        return false;
    }
}


function autofill(e, action, id1, id2){
    if (autofillname(e) == true) {
        var key;
        var keychar;
        if (window.event) 
            key = window.event.keyCode;
        else 
            if (e) 
                key = e.which;
            else 
                return true;
        keychar = String.fromCharCode(key);
        keychar = keychar.toLowerCase();
        if ((key != 8) && (key != 0)) {
            get_name(keychar, action, id1, id2)
        }
    }
    return autofillname(e);
}

function autofillname(e){
    var key;
    var keychar;
    if (window.event) 
        key = window.event.keyCode;
    else 
        if (e) 
            key = e.which;
        else 
            return true;
    keychar = String.fromCharCode(key);
    keychar = keychar.toLowerCase();
    
    // control keys
    if ((key == null) || (key == 0) || (key == 8) ||
    (key == 9) ||
    (key == 13) ||
    (key == 27)) 
        return true;
    
    // numbers
    else 
        if ((("1234567890").indexOf(keychar) > -1)) 
            return true;
        
        else 
            return false;
}

/* Auto Fill Name ends here */
/// enter numbers only
function numbersonly(e){
    var key;
    var keychar;
    if (window.event) 
    	key = window.event.keyCode;
    else 
        if (e) 
            key = e.which;
        else 
            return true;
    keychar = String.fromCharCode(key);
    // control keys
    if ((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 45) || (key == 27)) 
    	return true;
    else if ((("0123456789.").indexOf(keychar) > -1)) 
		if((e.element().value == "" || parseInt(e.element().value) < 1000000000 ) && !(key == 46 && e.element().value.include(".")))
        	return true;
		else
	    	return false;
	else
        return false;
}


function convertdateformat(birthdate){
    var byear = birthdate.split('-')[2]
    var bmonth = birthdate.split('-')[1] - 1
    var bdate = birthdate.split('-')[0]
    var birthdate = new Date(parseInt(byear), parseInt(bmonth), parseInt(bdate));
    return birthdate;
}

function onKeyPressBlockNumbers(e, id, len){
    var key = window.event ? e.keyCode : e.which;
    var keychar = String.fromCharCode(key);
    if ((key == null) || (key == 0) || (key == 8) ||
    (key == 9) ||
    (key == 13) ||
    (key == 27)) 
        return true;
    if (id.value.length < len) {
        reg = /\d/;
        return reg.test(keychar);
    }
    else {
        return false;
    }
    
}

function isValidDate(dateStr){
    // Checks for the following valid date formats:
    // MM/DD/YY   MM/DD/YYYY   MM-DD-YY   MM-DD-YYYY
    // Also separates date into month, day, and year variables
    
    var datePat = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{2}|\d{4})$/;
    
    // To require a 4 digit year entry, use this line instead:
    // var datePat = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{4})$/;
    
    var matchArray = dateStr.match(datePat); // is the format ok?
    if (matchArray == null) {
        alert("Date is not in a valid format.")
        return false;
    }
    month = matchArray[1]; // parse date into variables
    day = matchArray[3];
    year = matchArray[4];
    if (month < 1 || month > 12) { // check month range
        alert("Month must be between 1 and 12.");
        return false;
    }
    if (day < 1 || day > 31) {
        alert("Day must be between 1 and 31.");
        return false;
    }
    if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) {
        alert("Month " + month + " doesn't have 31 days!")
        return false
    }
    if (month == 2) { // check for february 29th
        var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
        if (day > 29 || (day == 29 && !isleap)) {
            alert("February " + year + " doesn't have " + day + " days!");
            return false;
        }
    }
    return true; // date is valid
}

//MHC

function focustonextdiv(field, evt, val, fn, nxt){
    var keyCode = document.layers ? evt.which : document.all ? evt.keyCode : evt.keyCode;
    if (keyCode != 13) 
        return true;
    else {
        if (fn == 'showdivs') {
            showdivs(val)
        }
        $(nxt).focus();
        $(nxt).select();
        return false;
    }
}

/* Changes done by KG ends  here*/

/* changes done b kg blood bank starts here*/
// showing javascript flash notice //
window.onload = flash_notice;
function flash_notice(){
    var notice = $F('flash_notice')
    if (notice != "") {
        alert(notice)
    }
}

function calc_in_days(){
	
    if ($('blood_bank_component_period_type').value == '') {
        alert('Select Period type')
    }
    else {
        hour = '24'
        week = '7'
        month = '30'
        year = '365'
        var expiry_period = $('blood_bank_component_expiry_period').value;
        if ($('blood_bank_component_period_type').value == 'HOUR(S)') {
            var indays = (1 / 24)
            var days = round_decimals(indays, 3)
            $('blood_bank_component_in_days').value = days
        }
        if ($('blood_bank_component_period_type').value == 'DAY(S)') {
            $('blood_bank_component_in_days').value = expiry_period
        }
        if ($('blood_bank_component_period_type').value == 'WEEK(S)') {
            var indays = (expiry_period * week)
            $('blood_bank_component_in_days').value = indays
        }
        if ($('blood_bank_component_period_type').value == 'MONTH(S)') {
            var indays = (expiry_period * month)
            $('blood_bank_component_in_days').value = indays
        }
        if ($('blood_bank_component_period_type').value == 'YEAR(S)') {
            var indays = (expiry_period * year)
            $('blood_bank_component_in_days').value = indays
        }
        
    }
}

function round_decimals(original_number, decimals){
    var result1 = original_number * Math.pow(10, decimals)
    var result2 = Math.round(result1)
    var result3 = result2 / Math.pow(10, decimals)
    return pad_with_zeros(result3, decimals)
}

function pad_with_zeros(rounded_value, decimal_places){

    // Convert the number to a string
    var value_string = rounded_value.toString()
    // Locate the decimal point
    var decimal_location = value_string.indexOf(".")
    // Is there a decimal point?
    if (decimal_location == -1) {
        // If no, then all decimal places will be padded with 0s
        decimal_part_length = 0
        // If decimal_places is greater than zero, tack on a decimal point
        value_string += decimal_places > 0 ? "." : ""
    }
    else {
        // If yes, then only the extra decimal places will be padded with 0s
        decimal_part_length = value_string.length - decimal_location - 1
    }
    // Calculate the number of decimal places that need to be padded with 0s
    var pad_total = decimal_places - decimal_part_length
    if (pad_total > 0) {
        // Pad the string with 0s
        for (var counter = 1; counter <= pad_total; counter++) 
            value_string += "0"
    }
    return value_string
}

function error_message_for(msg){
    Event.observe(window, "load", function(){
        alert(msg)
    });
}

/* changes done b kg blood bank ends here*/

/*age Calculation start here*/

var startyear = "1950";
var endyear = "2110";
var dat = new Date();

var curday = dat.getDate();
var curmon = dat.getMonth() + 1;
var curyear = dat.getFullYear();

function checkleapyear(datea){
    if (datea.getYear() % 4 == 0) {
        if (datea.getYear() % 10 != 0) {
            return true;
        }
        else {
            if (datea.getYear() % 400 == 0) 
                return true;
            else 
                return false;
        }
    }
    return false;
}

function DaysInMonth(Y, M){
    with (new Date(Y, M, 1, 12)) {
        setDate(0);
        return getDate();
    }
}

function datediff(date1, date2){
    var y1 = date1.getFullYear(), m1 = date1.getMonth(), d1 = date1.getDate(), y2 = date2.getFullYear(), m2 = date2.getMonth(), d2 = date2.getDate();
    
    if (d1 < d2) {
        m1--;
        d1 += DaysInMonth(y2, m2);
    }
    if (m1 < m2) {
        y1--;
        m1 += 12;
    }
    return [y1 - y2, m1 - m2, d1 - d2];
}

function calage(field){
    if ($(field).value != '') {
        if ($(field) != null) {
            var birth_date = $(field).value
        }
        else {
            var birth_date = val
        }
        var byear = birth_date.split('-')[2];
        var bmonth = birth_date.split('-')[1];
        var bdate = birth_date.split('-')[0];
        var calday = bdate;
        var calmon = bmonth;
        var calyear = byear;
        if (curday == "" || curmon == "" || curyear == "" || calday == "" || calmon == "" || calyear == "") {
            alert("please fill all the values and click go -");
        }
        else {
            var curd = new Date(curyear, curmon - 1, curday);
            var cald = new Date(calyear, calmon - 1, calday);
            var dife = datediff(curd, cald);
            $('patient_age_year').value = dife[0] != 'NAN' ? dife[0] : '0';
            $('patient_age_month').value = dife[1] != 'NAN' ? dife[1] : '0';
            $('patient_age_day').value = dife[2] != 'NAN' ? (dife[2] == '0' ? '1' : dife[2]) : '0';
            
            
            
            
        }
    }
}

/* Blood bank functions ends here*/

function load_problem_sub_group(){
    var pars = "problem_group_id=" + $F("disease_registry_problem_group_id") + "&from=disease_registry";
    ajax_loader('problem_sub_group', '/front_office/patient/load_problem_sub_group', pars, 'image');
}



//pads left
String.prototype.lpad = function(padString, length){
    var str = this;
    while (str.length < length) 
        str = padString + str;
    return str;
}

//pads right
String.prototype.rpad = function(padString, length){
    var str = this;
    while (str.length < length) 
        str = str + padString;
    return str;
}

function validate_final_amount(amount, final_amount_field, payment_field){
    var final_amount = $F(final_amount_field);
    if (parseFloat(amount) > parseFloat(final_amount)) {
        alert("Amount should not be greater than Rs." + parseFloat(final_amount));
        $(payment_field).value = parseFloat(final_amount);
        return false;
    }
    else {
        return true;
    }
}

// Allow only numbers/digits in TextBox
  function isNumberKey(evt,field)
  {
     var charCode = (evt.which) ? evt.which : event.keyCode
     if (charCode != 45 && charCode != 43 && charCode > 31 && (charCode < 48 || charCode > 57))
	 	return false;
		
     return true;
  }
  
// Show n Hide Ajax Loader Using Ajax Responder
    var loaded = false;
    function startLoading() {
        loaded = false;
        window.setTimeout('showLoadingImage()', 1000);
    }
    
    function showLoadingImage() {
        var el = $('image');
        if (el && !loaded) {
            el.update('<img src="/images/ajax-loader2.gif">');
            new Effect.Appear('image');
        }
    }
    
    function stopLoading() {
        Element.hide('image');
        loaded = true;
    }
 
// Export to Excel Option
    function export_to_excel(id,title)
    {
      results_html = $('report').innerHTML;    
//    results_html = '<html><body><tr><td><center><h2>'+ title +'</h2></td></tr><tr><td><h3><center>'+'Tata Chemicals Manufacturing Unit Babrala'+'</center></h3></td></tr></center><table border=2 cellspacing="0" cellpadding="0">'+results_html+'</table></body></html>';
      results_html = '<html><body><table border=2 cellspacing="0" cellpadding="0">'+results_html+'</table></body></html>';
      var input = new Element('input', { 'type': 'hidden','name': 'results[html]','value': results_html});
      var form = new Element('form', { 'method': 'post','name': 'tempForm','action': "/store_admin/store_admin/html_to_excel?file_name="+id});
      form.insert(input);      
      document.body.appendChild(form);
      form.submit();   
    }  
	
	    function excel_export(id,title)
    {
      results_html = $('test1').innerHTML;    
      results_html = '<html><body><tr><td><center><h3>'+ title +'</h3></td></tr></center><table border=2 cellspacing="0" cellpadding="0">'+results_html+'</table></body></html>';
      var input = new Element('input', { 'type': 'hidden','name': 'results[html]','value': results_html});
      var form = new Element('form', { 'method': 'post','name': 'tempForm','action': "html_to_excel?file_name="+id});
      form.insert(input);      
      document.body.appendChild(form);
      form.submit();   
    } 
	function integer_only_with_limit(e, limit) {
	    var key;
	    var keychar;
	    
		if (window.event) key = window.event.keyCode;
	    else if (e) key = e.which;
	    else return true;
		
	    keychar = String.fromCharCode(key);
	    // control keys
	    if ((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 13) || (key == 27)) 
	    	return true;
	    else if ((("0123456789").indexOf(keychar) > -1)) 
			if((e.element().value == "" || e.element().value.length < limit ) && !(key == 46 && e.element().value.include(".")))
	        	return true;
			else
		    	return false;
		else
	        return false;
    }
    
    // Calculate Date Differences
    function day_difference(date) {
        today=new Date();
        var new_date=new Date(date.split('-')[2], date.split('-')[1]-1, date.split('-')[0]);
        //Set 1 day in milliseconds
        var one_day=1000*60*60*24

        //Calculate difference btw the two dates, and convert to days
        date_diff = Math.ceil((today.getTime() - new_date.getTime())/(one_day));
        return (date_diff-1)
    }
	

/* Filter table Javascript */
    function filterTable(tbody,val,row_number)
    {
        for (var i=0; i < $(tbody).rows.length; i++)
        {
            if ($(tbody).rows[i].cells[row_number].innerHTML.toLowerCase().indexOf(val.toLowerCase()) == 0)
                $(tbody).rows[i].style.display = '';
            else
                $(tbody).rows[i].style.display = 'none';
        }
    }
/*Filter table ends here */

// function for calculating MAP in EHR health record based on systolic and diastolic pressures starts
function calc_map(){
		if(($('health_parameter_bp_systolic').value.length != 0) && ($('health_parameter_bp_diastolic').value.length != 0)){
			$('health_parameter_map').value = [(2*parseFloat($('health_parameter_bp_diastolic').value))+(parseFloat($('health_parameter_bp_systolic').value))]/3;
		}		
		return false;
	}
// function for calculating MAP in EHR health record based on systolic and diastolic pressures ends


// function for enabling and disabling specify column in associated persons starts
function enable_specify(){
		var i = $("associated_person_relationship").selectedIndex;
		if($("associated_person_relationship").options[i].text == "Other"){
			$("associated_person_other_relation").disabled = false;
		}
		else{
			$("associated_person_other_relation").disabled = true;
		}	
	}    
// function for enabling and disabling specify column in associated persons ends


// function for loading person gender starts
function load_gender(){
	var pars = 'patient[title_id]=' + $('associated_person_title_id').value;
	new Ajax.Request('/front_office/patient/load_gender', {
		parameters: pars,method:'get',
		onComplete: function(request){
			gender_value = request.responseText;
			if (parseInt(gender_value) == 1) {
				$('associated_person_sex').selectedIndex = 0
			}
			else 
				if (parseInt(gender_value) == 2) {
					$('associated_person_sex').selectedIndex = 1
				}
				else {
					$('associated_person_sex').value = ""
				}
		},
		onFailure: function(request){
			$('associated_person_sex').value = '';
		},
		onSuccess: function(request){
			$(loader).visualEffect('highlight');
		}
	});
	return false;
}
// function for loading person gender ends

// function for loading BMI in health record starts
function calc_bmi(){	
		if(($('anthropometry_detail_height').value.length != 0) && ($('anthropometry_detail_weight').value.length != 0)){
			var height_in_meters = Math.pow($('anthropometry_detail_height').value/100 , 2)
			 $('anthropometry_detail_bmi').value = (parseFloat($('anthropometry_detail_weight').value)/(parseFloat(height_in_meters)));
			 
		}		
		return false;
	}

// function for loading BMI in health record ends
// function for loading BSA in health record starts
function calc_bsa(){	
		if(($('anthropometry_detail_height').value.length != 0) && ($('anthropometry_detail_weight').value.length != 0)){
			 $('anthropometry_detail_bsa').value = Math.sqrt(parseFloat($('anthropometry_detail_weight').value)*(parseFloat($('anthropometry_detail_height').value)/3600));
		}		
		return false;
	}

// function for loading BSA in health record ends
// function for loading W/H Ratio in health record starts
function calc_waist_hip(){	
		if(($('anthropometry_detail_waist').value.length != 0) && ($('anthropometry_detail_hip').value.length != 0)){
			 $('anthropometry_detail_waist_hip').value = (parseFloat($('anthropometry_detail_waist').value)/(parseFloat($('anthropometry_detail_hip').value)));
		}		
		return false;
	}

// function for loading W/H Ratio in health record ends


function handleEyePartExam(elementObj) {
		if(elementObj.options[elementObj.selectedIndex].text == "Others") {
			Element.show("other_eye_part_exam");
			$("ophthalmic_examination_other_eye_part_examination").enable();
		}
		else {
			Element.hide("other_eye_part_exam");
			$("ophthalmic_examination_other_eye_part_examination").value = "";
			$("ophthalmic_examination_other_eye_part_examination").disable();
		}
	}
