=== Insert or Embed Articulate Content into Wordpress ====
Contributors: Brian Batt
Donate link: http://www.elearningfreak.com/presenter/insert-or-embed-articulate-content-into-wordpress-plugin/
Tags: articulate, presenter, quizmaker, engage, storyline, storyline 2, elearning, insert, embed, iframe, studio, lms, rise, responsive, 360
Requires at least: 4.0
Tested up to: 4.7
Stable tag: 4.26
Quickly embed or insert Articulate content into a post or page.
== Description ==
This plugin will add a new toolbar icon (the letter 'a') next to the 'Add Media' button on the Edit Post and Edit Page pages.  Upon clicking this toolbar icon, you will have the ability to upload your published Articulate content as a ZIP file.  Once uploaded, the plugin will automatically extract the content, find the approriate .html file, and add code to your post or page that will display your Articulate content as an iframe or a lightbox.
**Works with all Articulate products including**:

Storyline 1, 2, and 360

Studio '09 (Presenter, Engage and Quizmaker)

Studio '13 (Presenter, Engage and Quizmaker)

Studio 360 (Presenter, Engage and Quizmaker)

Rise

https://www.youtube.com/watch?v=AwcIsxpkvM4
> <strong>Premium Support</strong><br>
> We provide limited support for the Articulate plugin on the wordpress.org forums. One on one email support is available to people who bought the [Premium Articulate plugin](http://www.elearningfreak.com/presenter/insert-or-embed-articulate-content-into-wordpress-plugin-premium/) only.
> Note that this trial version will allow you to upload 3 .zip files before asking you to purchase.  For some people, this will be more than enough.  You'll be able to purchase the premium version that includes unlimited uploads at www.elearningfreak.com
Help make this plugin better by filling out our survey here:  http://goo.gl/forms/sGMtlpL8vL - You could win a free copy of the Premium plugin
== Installation ==
1. Upload the 'insert-or-embed-articulate-into-wordpress' folder to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
== How to Use ==
Check out the screencast in the link below to learn how to use this plugin: https://www.youtube.com/watch?v=AwcIsxpkvM4
== Screenshots ==
1. Vintage theme example
2. Wood table theme example
3. Upload file
4. Dashboard
5. Works with Articulate Presenter, Engage, Quizmaker, Storyline 1, and Storyline 2
== Frequently Asked Questions ==
= How do I use this to embed Articulate content? =
Check out this screencast:  https://www.youtube.com/watch?v=AwcIsxpkvM4
= Does this work well with Articulate's new responsive player in 360? =
Yes, IFrames and lightboxes now resize perfectly with Articulate's new responsive player in HTML5!  We do recommend disabling the scrollbar in the scrollbar options if choosing to launch your course in a lightbox.  This option is found when uploading your course with this plugin after selecting the lightbox option.
= Does this work well work with Rise? =
Yes, IFrames and lightboxes resize perfectly with Rise for compatibility with all of your devices!  We do recommend disabling the scrollbar in the scrollbar options if choosing to launch your Rise course in a lightbox.  This option is found when uploading your course with this plugin after selecting the lightbox option.
= Does this work with Articulate Storyline content? =
Yes, it works with all versions of Articulate Storyline including Storyline 360.
= I purchased the Premium version of the plugin and now my Articulate button is missing when I create a post.  How do I fix this? =
On your main plugins page, you should see a "trial" version of the plugin and also the "premium" version of the plugin.  You'll need to have both installed for the plugin to work properly.  If you only installed the Premium version, you should have a message at the top of the Plugins page that says that your theme is missing a required plugin.  Follow the instructions in that message to install the trial version and you'll be good to go.
= If I delete the plugin, what happens to the content that I've uploaded? =
The uploaded content is saved into the wp-content / uploads / articulate_uploads folder on your site.  Thus, your uploaded content will not be removed if you delete this plugin.
= What happens if I try to upload more than 3 .zip files? =
This is a trial version of the plugin that will allow you to upload 3 .zip files before asking you to purchase the premium version at www.elearningfreak.com.  For some people, 3 files will be enough.  You can always click on the Content Library tab to delete content items to re-enable the upload functionality.  The premium version includes unlimited upload and premium support.
= I'm seeing an HTTP 200 error when uploading my zip file.  How do I fix that? =
This appears to be a pretty common issue with Wordpress uploads.  Here's a few forum discussions:

https://wordpress.org/support/topic/http-error-on-media-upload-7/

https://wordpress.org/support/topic/http-error-when-uploading-to-wordpress/

Many customers have solved the problem by installing this Wordpress plugin:

http://www.elearningfreak.com/wp-content/uploads/2016/12/fix-200-error.zip

For details on exactly what this plugin does, see:

https://github.com/getsource/default-to-gd

Here's another potential solution to fix the issue from the server side:

http://www.inmotionhosting.com/support/edu/wordpress/http-image-error
== Changelog ==
= 4.26 = 
Resolved an issue where a zip file created on a Mac wouldn't upload properly.
= 4.25 = 
Resolved an issue where the upload window would take over the whole site instead of opening in a lightbox.  This caused multiple upload issues on some sites where there were JavaScript conflicts.  Added info in the FAQ on how to resolve HTTP 200 upload errors.
= 4.2.4 = 
Resolved an issue where uploads will fail to extract the zip contents on some sites.  Thanks to Jonathan Simcina for the fix
= 4.2.3 = 
Resolved an issue with a blank window when uploading content on some sites that use page builder themes.  Thanks to Jonathan Simcina for the fix
= 4.2.2 =
Resolved a plugin conflict with WPLMS theme and their Vibes Shortcode plugin
Resolved a plugin conflict with the Visual Composer plugin
Fixed another bug where scripts and styles for this plugin were being loaded on pages where they weren't needed
= 4.2.1 =
Fixed a bug where scripts and styles for this plugin were being loaded on pages where they weren't needed
Fixed a bug where the Themes dropdown wouldn't load in the Lightbox page
= 4.2.0 =
Fixed another bug where dropdowns no longer worked in Wordpress admin
= 4.1.9 =
Fixed a bug where dropdowns no longer worked in Wordpress admin
= 4.1.8 =
Fixed a bug where the custom button wasn't saving properly
New look and feel
Added compatibility with Articulate 360
Added compatibility with Rise
= 4.1.7 =
Fixed a bug where uploads didn't get extracted into the target directory
= 4.1.6 =
Fixed a bug where uploads weren't completing
= 4.1.5 =
Resolves error 200 that some users were experiencing by utilizing Wordpress's unzip function
= 4.1.4 =
Uploads no longer rely on server settings.  That means no more updating php.ini files or contacting your web host.  Upload huge files without running into timeouts!
= 4.1.3 =
Fixed a bug where a deep zip file wouldn't upload properly
= 4.1.2 =
Removed annoying admin notice that appeared for some users
= 4.1.1 =
Misc. bug fixes
= 4.1 =
Added multi-site or network support
= 4.0 =
Added support for custom lightbox sizing
Added support for custom launch buttons
Added themes
Added the ability to disable scroll bars when you launch with a lightbox
Added support for custom transitions in the default lightbox
Added support for the Nivo lightbox
Added support for custom transitions in the Nivo lightbox
Added a Dashboard that displays on the left side of the Admin panel in Wordpress
Crushed bugs
= 3.2 =
Added support for Articulate Studio '13 including Presenter '13, Engage '13, and Quizmaker '13
= 2.00 =
Added lightbox support via Colorbox
Added the ability to launch the content with a link or a Launch Presentation button
= 1.04 =
Fixed short tag created when adding Storyline content (story.html) (Thanks to David Burton)
Added additional information in the readme.txt on handling the -1 error and other upload errors
= 1.03 =
Fixed call to quiz.png for all users
= 1.02 =
Fixed call to quiz.png for some browsers
= 1.01 =
Fixed call to jquery
= 1.0 =
Initial version.
== Upgrade Notice ==
Resolved an issue where a zip file created on a Mac wouldn't upload properly.