<?php
function slider_get_def_settings()
{
	$slider_settings = array('bannerWidth'=>'600',
		'bannerHeight'=>'390',
		'slideshow_bgcolor'=>'6595BD',
		'desc_bgcolor'=>'6595BD',
		'desc_bgwidth'=>'180',
		'timerColor_1'=>'BBCCEE',
		'timerColor_2'=>'CCFFFF',
		'button_bgcolor'=>'AAAAFF',
		'control_xpos'=>'220',
		'control_ypos'=>'300',
		'button_rollovrbgcolor'=>'CCCCCC',
		'button_rollovrsymbalcolor'=>'5399D4',
		'button_rolloutbgcolor'=>'ffffff',
		'button_rolloutsymbalcolor'=>'CCCCCC',
		'auto_play'=>'yes',
		'show_buttons'=>'yes',
		'autohide_buttons'=>'no',
		'show_buttonshandcursor'=>'yes',
		'transition_timedelay'=>'7000',
		'image_scalling'=>'yes',
		'random_transition'=>'yes',
		'transition_type'=>'1',
		'target'=>'_blank',
		'show_readmore'=>'yes',
		'readmore_text'=>'Read More',
		'readmore_size'=>'14',
		'readmore_font'=>'Century Gothic',
		'readmore_color'=>'FFFFFF',
		'readmore_underline'=>'true',
		'show_caption'=>'yes',
		'title_size'=>'18',
		'title_color'=>'#FFFFFF',
		'title_font'=>'Century Gothic',
		'show_desc'=>'yes',
		'desc_size'=>'13',
		'desc_color'=>'#FFFFFF',
		'show_price'=>'yes',
		'pricebuttonXPos'=>'30',
		'pricebuttonYPos'=>'280',
		'priceButton_Path'=> 'price_images/flower_blue.png',
		'price_size'=> '16',
		'currency_symbol'=> '$',
		'wmode'=>'transparent'	
			);
	return $slider_settings;
}
function __get_slider_xml_settings()
{
	// (($ops['auto_play'] == 'yes') ? 'true' : 'false')
	//IMN_PLUGIN_URL.'/price_images/'.$ops['pricebtn_img']
	$ops = get_option('slider_settings', array());
$xml_settings = '<config slideshowbackgroundcolor="'.'0x'.$ops['slideshow_bgcolor'].'" descriptionbackgroundcolor="'.'0x'.$ops['desc_bgcolor'].'" descriptionbackgroundwidth="'.$ops['desc_bgwidth'].'" timerColor_1="'.'0x'.$ops['timerColor_1'].'" timerColor_2="'.'0x'.$ops['timerColor_2'].'" buttonsbackgroundcolor="'.'0x'.$ops['button_bgcolor'].'" buttonsXPos="'.$ops['control_xpos'].'" buttonsYPos="'.$ops['control_ypos'].'" autoplay="'.$ops['auto_play'].'" showbuttons="'.$ops['show_buttons'].'" autohidebuttons="'.$ops['autohide_buttons'].'" showbuttonshandcursor="'.$ops['show_buttonshandcursor'].'" transitiontimedelay="'.$ops['transition_timedelay'].'" buttonrolloverbackgroundcolor="'.'0x'.$ops['button_rollovrbgcolor'].'" buttonrolloversymbolcolor="'.'0x'.$ops['button_rollovrsymbalcolor'].'" buttonrolloutbackgroundcolor="'.'0x'.$ops['button_rolloutbgcolor'].'" buttonrolloutsymbolcolor="'.'0x'.$ops['button_rolloutsymbalcolor'].'" pricetagImage="'.IMN_PLUGIN_URL.'/'.$ops['priceButton_Path'].'" pricebuttonXPos="'.$ops['pricebuttonXPos'].'" pricebuttonYPos="'.$ops['pricebuttonYPos'].'" pricebuttonshow="'.$ops['show_price'].'" ImageScaling="'.$ops['image_scalling'].'" randomtransition="'.$ops['random_transition'].'" transitionnumber="'.$ops['transition_type'].'"/>';
	return $xml_settings;
}
function slider_get_album_dir($album_id)
{
	global $gimn;
	$album_dir = IMN_PLUGIN_UPLOADS_DIR . "/{$album_id}_uploadfolder";
	return $album_dir;
}
/**
 * Get album url
 * @param $album_id
 * @return unknown_type
 */
function slider_get_album_url($album_id)
{
	global $gimn;
	$album_url = IMN_PLUGIN_UPLOADS_URL . "/{$album_id}_uploadfolder";
	return $album_url;
}
function slider_get_table_actions(array $tasks)
{
	?>
	<div class="bulk_actions">
		<form action="" method="post" class="bulk_form">Bulk action
			<select name="task">
				<?php foreach($tasks as $t => $label): ?>
				<option value="<?php print $t; ?>"><?php print $label; ?></option>
				<?php endforeach; ?>
			</select>
			<button class="button-secondary do_bulk_actions" type="submit">Do</button>
		</form>
	</div>
	<?php 
}
function shortcode_display_slider_gallery($atts)
{
	$vars = shortcode_atts( array(
									'cats' => '',
									'imgs' => '',
								), 
							$atts );
	//extract( $vars );
	
	$ret = display_slider_gallery($vars);
	return $ret;
}
function display_slider_gallery($vars)
{
	global $wpdb, $gimn;
	$ops = get_option('slider_settings', array());
	//print_r($ops);
	$albums = null;
	$images = null;
	$cids = trim($vars['cats']);
	if (strlen($cids) != strspn($cids, "0123456789,")) {
		$cids = '';
		$vars['cats'] = '';
	}
	$imgs = trim($vars['imgs']);
	if (strlen($imgs) != strspn($imgs, "0123456789,")) {
		$imgs = '';
		$vars['imgs'] = '';
	}
	$categories = '';
	$xml_filename = '';
	if( !empty($cids) && $cids{strlen($cids)-1} == ',')
	{
		$cids = substr($cids, 0, -1);
	}
	if( !empty($imgs) && $imgs{strlen($imgs)-1} == ',')
	{
		$imgs = substr($imgs, 0, -1);
	}
	//check for xml file
	if( !empty($vars['cats']) )
	{
		$xml_filename = "cat_".str_replace(',', '', $cids) . '.xml';	
	}
	elseif( !empty($vars['imgs']))
	{
		$xml_filename = "image_".str_replace(',', '', $imgs) . '.xml';
	}
	else
	{
		$xml_filename = "slider_all.xml";
	}
	//die(IMN_PLUGIN_XML_DIR . '/' . $xml_filename);

	$imageContainer = "";
	
	if( !empty($vars['cats']) )
	{
		$query = "SELECT * FROM {$wpdb->prefix}slider_albums WHERE album_id IN($cids) AND status = 1 ORDER BY `order` ASC";
		//print $query;
		$albums = $wpdb->get_results($query, ARRAY_A);
		foreach($albums as $key => $album)
		{
			$images = $gimn->slider_get_album_images($album['album_id']);
			if ($images && !empty($images) && is_array($images)) {
				$album_dir = slider_get_album_url($album['album_id']);//IMN_PLUGIN_UPLOADS_URL . '/' . $album['album_id']."_".$album['name'];
				foreach($images as $key => $img)
				{
					if( $img['status'] == 0 ) continue;
					
					$imageContainer .= "<Content><Image>";
					$imageContainer .= str_replace(" ","-",$album_dir)."/big/{$img['image']}</Image>";
					$imageContainer .= "<title color='".$ops['title_color']."' face='".$ops['ss_font']."' size=\"".$ops['title_size']."\"><![CDATA[".($ops['show_caption']=='yes'?$img['title']:"")."]]></title>";
					$imageContainer .= "<description color='".$ops['desc_color']."' face='".$ops['ss_font']."' size='".$ops['desc_size']."'><![CDATA[".($ops['show_desc']=='no'||$img['description']==""?"":$img['description'])."]]></description>";
					if ($ops['show_readmore']=="yes")
					$imageContainer .= "<ReadMore fontsize='".$ops['readmore_size']."' fontface='".$ops['ss_font']."' color='".'0x'.$ops['readmore_color']."' underline='".$ops['readmore_underline']."'>".$ops['readmore_text']."</ReadMore>";
					$imageContainer .= "<link target='".$ops['target']."'>{$img['link']}</link>";
					if ($img['price']!=0 && $ops['show_price']=="yes" )
					{$imageContainer .= "<price link=\"{$img['link']}\"><![CDATA[<font color='#ffffff' face=\"".$ops['ss_font']."\" size=\"".$ops['price_size']."\">".$ops['currency_symbol'].$img['price']."</font>]]></price>";}
					$imageContainer .= "</Content>";
				}
			}
		}
		//$xml_filename = "cat_".str_replace(',', '', $cids) . '.xml';
	}
	elseif( !empty($vars['imgs']))
	{
		$query = "SELECT * FROM {$wpdb->prefix}slider_images WHERE image_id IN($imgs) AND status = 1 ORDER BY `order` ASC";
		$images = $wpdb->get_results($query, ARRAY_A);
		if ($images && !empty($images) && is_array($images)) {
			foreach($images as $key => $img)
			{
				$album = $gimn->slider_get_album($img['category_id']);
				$album_dir = slider_get_album_url($album['album_id']);//IMN_PLUGIN_UPLOADS_URL . '/' . $album['album_id']."_".$album['name'];
				if( $img['status'] == 0 ) continue;
				
				$imageContainer .= "<Content><Image>";
					$imageContainer .= str_replace(" ","-",$album_dir)."/big/{$img['image']}</Image>";
					$imageContainer .= "<title color='".$ops['title_color']."' face='".$ops['ss_font']."' size=\"".$ops['title_size']."\"><![CDATA[".($ops['show_caption']=='yes'?$img['title']:"")."]]></title>";
					$imageContainer .= "<description color='".$ops['desc_color']."' face='".$ops['ss_font']."' size='".$ops['desc_size']."'><![CDATA[".($ops['show_desc']=='no'||$img['description']==""?"":$img['description'])."]]></description>";
					if ($ops['show_readmore']=="yes")
					$imageContainer .= "<ReadMore fontsize='".$ops['readmore_size']."' fontface='".$ops['ss_font']."' color='".'0x'.$ops['readmore_color']."' underline='".$ops['readmore_underline']."'>".$ops['readmore_text']."</ReadMore>";
					$imageContainer .= "<link target='".$ops['target']."'>{$img['link']}</link>";
					if ($img['price']!=0 && $ops['show_price']=="yes" )
					{$imageContainer .= "<price link=\"{$img['link']}\"><![CDATA[<font color='#ffffff' face=\"".$ops['ss_font']."\" size=\"".$ops['price_size']."\">".$ops['currency_symbol'].$img['price']."</font>]]></price>";}
					$imageContainer .= "</Content>";
			}
		}
	}
	//no values paremeters setted
	else//( empty($vars['cats']) && empty($vars['imgs']))
	{
		$query = "SELECT * FROM {$wpdb->prefix}slider_albums WHERE status = 1 ORDER BY `order` ASC";
		$albums = $wpdb->get_results($query, ARRAY_A);
		foreach($albums as $key => $album)
		{
			$images = $gimn->slider_get_album_images($album['album_id']);
			$album_dir = slider_get_album_url($album['album_id']);//IMN_PLUGIN_UPLOADS_URL . '/' . $album['album_id']."_".$album['name'];
			if ($images && !empty($images) && is_array($images)) {
				foreach($images as $key => $img)
				{
					if($img['status'] == 0 ) continue;
					
					$imageContainer .= "<Content><Image>";
					$imageContainer .= str_replace(" ","-",$album_dir)."/big/{$img['image']}</Image>";
					$imageContainer .= "<title color='".$ops['title_color']."' face='".$ops['ss_font']."' size=\"".$ops['title_size']."\"><![CDATA[".($ops['show_caption']=='yes'?$img['title']:"")."]]></title>";
					$imageContainer .= "<description color='".$ops['desc_color']."' face='".$ops['ss_font']."' size='".$ops['desc_size']."'><![CDATA[".($ops['show_desc']=='no'||$img['description']==""?"":$img['description'])."]]></description>";
					
					if ($ops['show_readmore']=="yes")
					$imageContainer .= "<ReadMore fontsize='".$ops['readmore_size']."' fontface='".$ops['ss_font']."' color='".'0x'.$ops['readmore_color']."' underline='".$ops['readmore_underline']."'>".$ops['readmore_text']."</ReadMore>";

					$imageContainer .= "<link target='".$ops['target']."'>{$img['link']}</link>";
					if ($img['price']!=0 && $ops['show_price']=="yes" )
					{$imageContainer .= "<price link=\"{$img['link']}\"><![CDATA[<font color='#ffffff' face=\"".$ops['ss_font']."\" size=\"".$ops['price_size']."\">".$ops['currency_symbol'].$img['price']."</font>]]></price>";}
					$imageContainer .= "</Content>";
				}
			}
		}
		//$xml_filename = "slider_all.xml";
	}
	
	$xml_tpl = __get_slider_xml_template();
	$settings = __get_slider_xml_settings();
//	$xml = str_replace(array('{settings}', '{default_category}', '{categories}'), 
//						array($settings, $album['album_id'], $categories), $xml_tpl);
	$xml = str_replace(array('{settings}', '{image_container}'), 
						array($settings, $imageContainer), $xml_tpl);
						
	//write new xml file
	$fh = fopen(IMN_PLUGIN_XML_DIR . '/' . $xml_filename, 'w+');
	fwrite($fh, $xml);
	fclose($fh);
	//print "<h3>Generated filename: $xml_filename</h3>";
	//print $xml;
	if( file_exists(IMN_PLUGIN_XML_DIR . '/' . $xml_filename ) )
	{
		$fh = fopen(IMN_PLUGIN_XML_DIR . '/' . $xml_filename, 'r');
		$xml = fread($fh, filesize(IMN_PLUGIN_XML_DIR . '/' . $xml_filename));
		fclose($fh);
		//print "<h3>Getting xml file from cache: $xml_filename</h3>";
		$ret_str = "
		<script language=\"javascript\">AC_FL_RunContent = 0;</script>
<script src=\"".IMN_PLUGIN_URL."/js/AC_RunActiveContent.js\" language=\"javascript\"></script>

		<script language=\"javascript\"> 
	if (AC_FL_RunContent == 0) {
		alert(\"This page requires AC_RunActiveContent.js.\");
	} else {
		AC_FL_RunContent(
			'codebase', 'http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0',
			'width', '".$ops['bannerWidth']."',
			'height', '".$ops['bannerHeight']."',
			'src', '".IMN_PLUGIN_URL."/js/wp_imagenewsslider',
			'quality', 'high',
			'pluginspage', 'http://www.macromedia.com/go/getflashplayer',
			'align', 'middle',
			'play', 'true',
			'loop', 'true',
			'scale', 'noscale',
			'wmode', '".$ops['wmode']."',
			'devicefont', 'false',
			'id', 'xmlswf_vmimn',
			'bgcolor', '".'0x'.$ops['slideshow_bgcolor']."',
			'name', 'xmlswf_vmimn',
			'menu', 'true',
			'salign', 'lt',
			'allowFullScreen', 'true',
			'allowScriptAccess','sameDomain',
			'movie', '".IMN_PLUGIN_URL."/js/wp_slider',
			'flashVars','myURL=".IMN_PLUGIN_URL."/xml/$xml_filename'
			); //end AC code
	}
</script>
";
//echo IMN_PLUGIN_UPLOADS_URL."<hr>";
//		print $xml;
		return $ret_str;
	}
	return true;
}
function __get_slider_xml_template()
{
	$xml_tpl = '<?xml version="1.0" encoding="utf-8" ?>
				<slideshow>
					{settings}
					{image_container}					    
					
				</slideshow>';
	return $xml_tpl;
}
?>