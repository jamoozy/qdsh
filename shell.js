// Copyright (c) 2013 Andrew "Jamoozy" Correa S,
// 
// This file is part of Qdsh
// 
// Qdsh is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
// 
// You should have received a copy of the GNU Affero General Public License
// along with this program. If not, see <http://www.gnu.org/licenses/>.

var bar = (function() {
  var req = new XMLHttpRequest();

  req.onreadystatechange = function() {
    var output = $("#output");
    var cmd = $("#cmd");
    switch (req.readyState) {
    case 0: break;
    case 1:
      window.console.log("connection!");
      output.html("<p>Server connection established.</p>");
      break;
    case 2:
      window.console.log("Sent!");
      output.html("<p>Command sent.</p>");
      break;
    case 3:
      window.console.log("running...");
      output.html("<p>Running command ...</p>");
      break;
    case 4:
      window.console.log("Got a response!");
      if (req.status == 200) {
        window.console.log("It's good:" + req.responseText);
        output.html("<p>" + req.responseText.replace("\t","&nbsp; &nbsp; &nbsp") + "</p>");
      } else {
        window.console.log("Nooooo!!!!!");
        output.html("<p>Error " + req.status + ".</p>" + output.html());
      }
      cmd.focus();
      break;
    default:
      output.html("<p>Internal Error?</p>" + output.html());
    }
  };

  function server_run() {
    window.console.log("server_run()");
    var cmd = $("#cmd");
    req.open("GET", "/jamoozy/sh/?cmd=" + cmd.prop('value'), true);
    req.send();
  }

  function key_down(e) {
    window.console.log("key_down");
    if (e.keyCode == 13) {    // enter
      server_run();
    }
  }

  return {
    init : function(e) {
      window.console.log("init");
      $('#cmd').on("keydown", key_down);
      $("#cmd").focus();
      $("#submit").click(server_run);
    }
  }
})();

$(window).load(bar.init);

