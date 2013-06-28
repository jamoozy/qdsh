<?php
# Copyright (c) 2013 Andrew "Jamoozy" Correa S,
# 
# This file is part of Qdsh
# 
# Qdsh is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as
# published by the Free Software Foundation, either version 3 of the
# License, or (at your option) any later version.
# 
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
# 
# You should have received a copy of the GNU Affero General Public License
# along with this program. If not, see <http://www.gnu.org/licenses/>.


if (array_key_exists('cmd', $_GET)) {
  exec($_GET['cmd'], $output);
  echo "Running:".$_GET['cmd'];
  foreach ($output as $line) {
    echo "$line<br>";
  }
} else {
?>

<!DOCTYPE html>
<html>
  <head>
    <title>Shell Emulator</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
    <script src="jquery-1.10.1.min.js" type="text/javascript"></script>
    <script src="shell.js" type="text/javascript"></script>
  </head>

  <body>

    <p><div id="output"></div></p>

    <div>
      <input id="cmd" type="text" name="cmd" value="" size="100">
      <input type="submit" name="submit">
    </div>

  </body>
</html>
<?php } ?>
