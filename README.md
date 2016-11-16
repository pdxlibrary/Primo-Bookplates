# Primo-Bookplates
Add bookplate graphics to the brief and full record views in Ex Libris Primo. This project is based on the open-source project https://github.com/vculibraries/alma-primo-customizations/blob/master/alma-primo-bookplates.md developed by Virginia Commonwealth University (VCU) Libraries.

## Catalog Setup

Please review the documentation provided by VCU Libraries:
https://github.com/vculibraries/alma-primo-customizations/blob/master/alma-primo-bookplates.md#part-1-cataloging-setup

## Primo Backoffice Setup

Please review the documentation provided by VCU Libraries:
https://github.com/vculibraries/alma-primo-customizations/blob/master/alma-primo-bookplates.md#part-2-primo-backoffice-setup



## Bookplate Frontend Display Installation

### Update Library Logo Graphics

There are two logo files in css/images that need to be replaced with your library logo. Ideal dimensions for liblogo.png are 300x100px and ideal dimensions for liblogo-tiny.png are 100x50px.

### Upload CSS/JS/Image files in the Primo Backoffice or to an external web server

js/bookplates.js, css/bookplates.css and css/image/* can be uploaded via the File Uploader in the Primo Admin or they can be uploaded to an external publicly viewable web server location.

### Update your Primo Template to Include the External Files

In your Primo header or footer, add the following lines to include the remote CSS/JS files. You will need to change the values of //library.university.edu/css/bookplates.css and //library.university.edu/js/bookplates.js to the actual locations where those files are hosted.

```html

<!-- Book Plates -->
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>
<link rel="stylesheet" type="text/css" href="//library.university.edu/css/bookplates.css">
<script src="//library.university.edu/js/bookplates.js"></script>
<!-- /Book Plates -->

```

### Change Bookplate Background Image (optional)

Four background image options have been provided. You may select any of the four images to use for your instance. To use a different image than the default, simply rename bookplate{X}.jpg to bookplate.jpg.

