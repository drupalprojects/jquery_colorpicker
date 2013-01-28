The Drupal 6 branch of Jquery Colorpicker offers a form element than can be
included in any form in this way:

<?php
$form['element'] = array(
  '#type' => 'colorpicker',
  '#title' => t('Color'),
  '#default_value' => 'FFFFFF',
);
?>

This module includes CCK integration on his 2.x branch. A colorpicker field
can be added to any content type with the JQuery Colorpicker widget

==================
Installation guide
=================

  1.- Install the module as you would any other Drupal module
  2.- Go to www.eyecon.ro/colorpicker/ and download colorpicker.zip.
  3.- Extract the the zip file content to the module folder or to the
      colorpicker folder in your libraries folder.
  4.- If you have extracted the contents right, the following filepath should
      exist: [path to module or libraries folder]/colorpicker/js/colorpicker.js
  5.- Enjoy your colors!!

