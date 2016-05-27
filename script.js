function init() {
  table_body = document.getElementById("overview").getElementsByTagName("tbody")[0];

  // we collect all rows of the "more"-editors in these variables
  editor_more_rows = [];
  ide_more_rows = [];

  // and store the "show more"-rows
  editor_show_more = undefined;
  ide_show_more = undefined;

  var rows = table_body.getElementsByTagName("tr");
  var editors = 0; // 0 if current row is an editor row, 1 if ide row
  for(var i = 0; i < rows.length; i++) {
    var cl = rows[i].classList;
    // search for .show_mode rows
    if(cl.contains("show_more")) {
      if(editors == 0) {
        editor_show_more = rows[i];
      } else if(editors == 1) {
        ide_show_more = rows[i];
      } else {
        console.log("Something strange happened: I found a third .show_more element.");
      }
    }

    // search for .more rows
    if(cl.contains("more")) {
      if(editors == 0) {
        editor_more_rows.push(rows[i]);
      } else if(editors == 1) {
        ide_more_rows.push(rows[i]);
      } else {
        console.log("Something strange happened: I found a third kind of .more elements.");
      }
    }

    // if we hit the separator, we change from editors to ides
    if(cl.contains("separator")) {
      editors = 1;
    }
  }
}


/* More rows */
function hide_more_editor_rows() {
  for(var i in editor_more_rows) {
    editor_more_rows[i].classList.add('hidden');
  }
}
function hide_more_ide_rows() {
  for(var i in ide_more_rows) {
    ide_more_rows[i].classList.add('hidden');
  }
}
function show_more_editor_rows() {
  for(var i in editor_more_rows) {
    editor_more_rows[i].classList.remove('hidden');
  }
}
function show_more_ide_rows() {
  for(var i in ide_more_rows) {
    ide_more_rows[i].classList.remove('hidden');
  }
}

/* Labels */
function hide_more_editor_label() {
  editor_show_more.classList.add('hidden');
}
function hide_more_ide_label() {
  ide_show_more.classList.add('hidden');
}
function show_more_editor_label() {
  editor_show_more.classList.remove('hidden');
}
function show_more_ide_label() {
  ide_show_more.classList.remove('hidden');
}


document.addEventListener("DOMContentLoaded", function(event) {
  init();

  show_more_editor_label();
  show_more_ide_label();
  hide_more_editor_rows();
  hide_more_ide_rows();

  editor_show_more.onclick = function() {
    show_more_editor_rows();
    hide_more_editor_label();
  };
  ide_show_more.onclick = function() {
    show_more_ide_rows();
    hide_more_ide_label();
  }
});

