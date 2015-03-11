// ==UserScript==
// @name            Opsmarter
// @namespace       Opsmarter
// @version         4.2.2
// @description     Adds opsmart links to useful places. Mike and Allen's version is the best!
// @include         *://blackboard.my.salesforce.com/*
// @grant           GM_xmlhttpRequest
// ==/UserScript==
(function () {
  var objDiv = document.getElementById('00N70000002jOAj_ileinner');
  var objDiv2 = document.getElementById('00N70000002jOEZ_ileinner');
  var objDiv3 = document.getElementById('bbCasedetail:j_id1:j_id3:j_id7');
  var objDiv4 = document.getElementById('cas4_ileinner');
  var complex = false;
  var sdm = false;
  if (objDiv) {
    var name = document.getElementById('00N70000002jOAj_ileinner').innerHTML;
    var content = '<a href="https://opsmart.blackboard.com/tracksmart/client_details.php?client=' + name + '" target="_blank">' + name + ' [Opsmart]';
    var array1 = new Array();
    var array2 = new Array();
    objDiv.innerHTML = content + '<span class="btnCancel" style="margin: 0px 0px 6px 6px; padding-top:4px;">Checking...</span></a>';
    GM_xmlhttpRequest({
      method: 'GET',
      url: 'https://opsmart.blackboard.com/tracksmart/client_details_client_info_ajax.php?clientid=' + name,
      onload: function (response) {
        array1 = response.responseText.split('<div id=SCType name=SCType class="Alabels">');
        array2 = String(array1[1]).split('</div>');
        if (array2[0] == 'Diamond') {
          complex = true;
        }
        if (array2[0] == 'SDM') {
          sdm = true;
        }
        if (complex) {
          objDiv.innerHTML = content + '<span class="btnImportant" style="margin: 0px 0px 6px 6px; padding-top:4px;">COMPLEX CLIENT</span></a>';
        } else {
          if (sdm) {
            objDiv.innerHTML = content + '<span class="btnImportant" style="margin: 0px 0px 6px 6px; padding-top:4px;">SDM COMPLEX CLIENT</span></a>';
          } else {
            objDiv.innerHTML = content + '<span class="btnCancel" style="margin: 0px 0px 6px 6px; padding-top:4px;">' + array2[0] + '</span></a>';
          }
        }
      }
    })
  }
  if (objDiv2) {
    var name2 = document.getElementById('00N70000002jOEZ_ileinner').innerHTML;
    var content2 = '<a style="text-decoration:underline" href="https://jira.pd.local/browse/' + name2 + '" target="_blank">' + name2 + ' [JIRA]';
    objDiv2.innerHTML = content2
  }
  if (objDiv3) {
    var name3 = document.getElementById('bbCasedetail:j_id1:j_id3:j_id7').innerHTML;
    var content3 = '<a href="https://jira.pd.local/browse/' + name3 + '" target="_blank">' + name3 + ' [JIRA]';
    objDiv3.innerHTML = content3
  }
  if (objDiv4) {
    var name4 = document.getElementById('cas4_ileinner').innerHTML;
    var array3 = new Array();
    var array4 = new Array();
    var array5 = [
      'Aarhus University',
      'Edge Hill University',
      'Hanzehogeschool Groningen',
      'Kingston University',
      'Leiden University',
      'Saxion',
      'Staffordshire University',
      'University of Bedfordshire',
      'University of Bradford',
      'University of Groningen',
      'University of Johannesburg',
      'University of Leicester',
      'University of Manchester',
      'Universiteit Twente',
      'University of Sheffield',
      'University of Westminster',
      'Utrecht University',
      'Vrije Universiteit Amsterdam',
      'University of the West of England',
      'BPP Services Ltd',
      'Spiru Haret University',
      'Glasgow Caledonian University',
      'King\'s College London',
      'University College Dublin - Belfield',
      'Regent\'s University London'
    ];
    array3 = name4.split('>');
    array4 = String(array3[1]).split('<');
    if (array5.indexOf(array4[0]) > - 1) {
      var content4 = name4 + '<a target="_blank" href="http://wikicentral/display/MHINT/EMEA+Clients" <span class="btnImportant" style="color:red" style="margin: 0px 0px 6px 6px; padding-top:4px;">AMS Client</span></a>';
      objDiv4.innerHTML = content4;
    }
  }
  if (objDiv4) {
    var name4 = document.getElementById('cas4_ileinner').innerHTML;
    var array3 = new Array();
    var array4 = new Array();
    var array5 = [
      'Charles Darwin University',
      'University of Western Sydney',
      'Swinburne University of Technology',
      'RMIT University Australia',
      'Southern Cross University',
      'Curtin University',
      'THINK Education Services Pty Ltd',
      'James Cook University',
      'Charles Sturt University',
      'INTI Universal Holdings Sdn Bhd',
      'University of Newcastle',
      'Griffith University'
    ];
    array3 = name4.split('>');
    array4 = String(array3[1]).split('<');
    if (array5.indexOf(array4[0]) > - 1) {
      var content4 = name4 + '<a target="_blank" href="http://wikicentral/display/MHINT/SYD+Clients" <span class="btnImportant" style="color:red" style="margin: 0px 0px 6px 6px; padding-top:4px;">SYD Client</span></a>';
      objDiv4.innerHTML = content4;
    }
  }
  if (objDiv4) {
    var name4 = document.getElementById('cas4_ileinner').innerHTML;
    var array3 = new Array();
    var array4 = new Array();
    //place list of "do not touch" Clients in brackets
    var array5 = [
      'Air Force Institute of Technology',
      'Arizona State University',
      'Baker College of Flint',
      'Bb University',
      'Behringer Harvard',
      'Bellevue University',
      'Best Deal Insurance',
      'Blackboard Coursesites End User Support',
      'Blackboard Learn For Salesforce',
      'Caesars Entertainment',
      'Charles Darwin University',
      'Charles Sturt University',
      'Curtin University',
      'Edge Hill University',
      'ERM Group Inc.',
      'Embry-Riddle Aeronautical University',
      'Endologix',
      'Fairfax County Public Schools',
      'George Mason University',
      'George Washington University',
      'INTI Universal Holdings Sdn Bhd',
      'Institute for Intergovernmental Research',
      'Ivy Tech Community College of Indiana',
      'James Cook University',
      'K12 Inc.',
      'Leiden University',
      'Living Social',
      'McGraw-Hill Companies',
      'McGraw-Hill Higher Education',
      'Ministerio de Defensa Nacional de Colombia',
      'Mississippi Virtual Community College',
      'Montgomery College ',
      'Nexius Solutions Inc.',
      'PRIMEDIA',
      'Philadelphia College of Osteopathic Medicine',
      'RMIT University Australia',
      'Servicio Nacional de Aprendizaje (SENA)',
      'ShoreTel Inc.',
      'South Orange County Community College District',
      'Southern Cross University',
      'Strayer University',
      'Swinburne University of Technology',
      'Tarrant County College District',
      'THINK Education Services Pty Ltd',
      'Ultimate Medical Academy',
      'University of Groningen',
      'University of Leicester',
      'University of Manchester',
      'Universiteit Twente',
      'University of Western Sydney',
      'University of Westminster',
      'Utrecht University',
      'Vrije Universiteit Amsterdam',
      'Watson Pharmaceuticals',
      'Wolters Kluwer'
    ];
    array3 = name4.split('>');
    array4 = String(array3[1]).split('<');
    if (array5.indexOf(array4[0]) > - 1) {
      var content4 = name4 + '<a target="_blank" href="http://wikicentral.bbbb.net/display/CSOI/CH+-+Tier+1+Production+Environment+List" <span class="btnImportant" style="color:red" style="margin: 0px 0px 6px 6px; padding-top:4px;">Do Not Touch</span></a>';
      objDiv4.innerHTML = content4;
    }
  }
}
) ();
