<?php
	
function get_quiz_embeder_options()
{
	$default=array(
		"lightbox_script"=>"colorbox",
		"colorbox_transition"=>"elastic",
		"colorbox_theme"=>"default",
		
		"nivo_lightbox_effect"=>"fade",
		"nivo_lightbox_theme"=>"default",
				
		"size_opt"=>"default",
		"height"=>500,
		"width"=>750,	
		"height_type"=>"px",
		"width_type"=>"px",
		"buttons"=>array()
	
	);
	$opt = get_option('quiz_embeder_option', $default);
	if($opt["lightbox_script"]==""){$opt["lightbox_script"]="colorbox";}
	if($opt["colorbox_theme"]==""){$opt["colorbox_theme"]="default";}
	if($opt["size_opt"]==""){$opt["size_opt"]="default";}
	return $opt;
}

include_once 'admin/lightbox.php';
include_once 'admin/buttons.php';
function quiz_admin_head(){
	
echo '<style type="text/css">

#toplevel_page_articulate_content .wp-first-item{display:none;}
</style>';	
}
add_action('admin_head','quiz_admin_head');
function quiz_embeder_menu_pages()
{
	global $iea_admin_lightbox;
add_menu_page( "Articulate", "Articulate" ,'manage_options', 'articulate_content',array($iea_admin_lightbox, 'view'));

 remove_submenu_page('Articulate','Articulate');
do_action('iea_admin_menu');
}

add_action('admin_menu', 'quiz_embeder_menu_pages');

function quiz_admin_pw_load_scripts($hook) {
 


	if($hook == 'post.php' or $hook == 'post-edit.php' or $hook == 'post-new.php' or $hook == 'media-upload-popup' or strpos($hook, 'articulate') !== false){
	#if( $hook == 'index.php' && $hook != 'link-manager.php' && $hook != 'themes.php' && $hook != 'widgets.php' && $hook != 'nav-menus.php' && $hook != 'plugins.php' && $hook != 'users.php' && $hook != 'options-general.php' && $hook != 'options-writing.php') 
		wp_enqueue_script('jquery');
		wp_enqueue_script('jquery-ui-core');
		wp_enqueue_script('jquery-ui-tooltip');
		wp_enqueue_script('materializejs', WP_QUIZ_EMBEDER_PLUGIN_URL.'js/materialize.js', array('jquery','jquery-ui-core','jquery-ui-tooltip'));
		wp_enqueue_script('jshelpers', WP_QUIZ_EMBEDER_PLUGIN_URL.'js/jshelpers.js', array('materializejs') );
		wp_enqueue_style('css-helpers', WP_QUIZ_EMBEDER_PLUGIN_URL.'css/css-helpers.css');
		wp_enqueue_style('material-icons',"https://fonts.googleapis.com/icon?family=Material+Icons");
	}
}
add_action('admin_enqueue_scripts', 'quiz_admin_pw_load_scripts');

function quiz_admin_enqueue_scripts()
	{
		if(strpos($_SERVER['REQUEST_URI'], 'articulate_content')) #to ensure that current plugin page is being shown.
		{
		wp_enqueue_script( 'jquery' );
		$jquery_css_base = 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/smoothness/jquery-ui.css';
		wp_enqueue_style ( 'jquery-ui-standard-css', $jquery_css_base );
		}   

		//wp_enqueue_style('materialize-css', WP_QUIZ_EMBEDER_PLUGIN_URL.'css/materialize.css');
		
		

	}
add_action( 'admin_enqueue_scripts', 'quiz_admin_enqueue_scripts');	
?>