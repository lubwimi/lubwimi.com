<?php
global $wpdb, $gimn;
$ops = get_option('slider_settings', array());
//$ops = array_merge($slider_settings, $ops);
?>
<div class="wrap">
	<h2><?php _e('Create XML File'); ?></h2>
	<form action="" method="post">
		<input type="hidden" name="task" value="save_slider_settings" />
		<table>
		<tr>
			<td><?php _e('Slideshow Width (px)'); ?></td>
			<td><input type="text" name="settings[bannerWidth]" value="<?php print @$ops['bannerWidth']; ?>" /></td>
		</tr>

		<tr>
			<td><?php _e('Slideshow Height (px)'); ?></td>
			<td><input type="text" name="settings[bannerHeight]" value="<?php print  @$ops['bannerHeight']; ?>" /></td>
		</tr>

		<tr>
			<td><?php _e('Slideshow Background Color'); ?></td>
			<td><input type="text" name="settings[slideshow_bgcolor]"
			class="color {hash:false,caps:false}"  value="<?php print  @$ops['slideshow_bgcolor']; ?>" /></td>
		</tr>

		<tr>
			<td><?php _e('Description Background Color'); ?></td>
			<td><input type="text" name="settings[desc_bgcolor]"
			class="color {hash:false,caps:false}"  value="<?php print  @$ops['desc_bgcolor']; ?>" /></td>
		</tr>

		<tr>
			<td><?php _e('Description Background Width'); ?></td>
			<td><input type="text" name="settings[desc_bgwidth]" value="<?php print  @$ops['desc_bgwidth']; ?>" /></td>
		</tr>

		<tr>
			<td><?php _e('Loader Background Color'); ?></td>
			<td><input type="text" name="settings[timerColor_1]" class="color {hash:false,caps:false}"   value="<?php print  @$ops['timerColor_1']; ?>" /></td>
		</tr>

		<tr>
			<td><?php _e('Loader Foreground Color'); ?></td>
			<td><input type="text" name="settings[timerColor_2]"
			class="color {hash:false,caps:false}"  value="<?php print  @$ops['timerColor_2']; ?>" /></td>
		</tr>

		<tr>
			<td><?php _e('Button Background Color'); ?></td>
			<td><input type="text" name="settings[button_bgcolor]" class="color {hash:false,caps:false}"   value="<?php print  @$ops['button_bgcolor']; ?>" /></td>
		</tr>

		<tr>
			<td><?php _e('Control Button  X-Position'); ?></td>
			<td><input type="text" name="settings[control_xpos]" value="<?php print  @$ops['control_xpos']; ?>" /></td>
		</tr>

		<tr>
			<td><?php _e('Control Button  Y-Position'); ?></td>
			<td><input type="text" name="settings[control_ypos]" value="<?php print  @$ops['control_ypos']; ?>" /></td>
		</tr>

		<tr>
			<td><?php _e('Button Rollover Backgroundcolor'); ?></td>
			<td><input type="text" name="settings[button_rollovrbgcolor]" class="color {hash:false,caps:false}"   value="<?php print  @$ops['button_rollovrbgcolor']; ?>" /></td>
		</tr>

		<tr>
			<td><?php _e('Button Rollover Symbalcolor'); ?></td>
			<td><input type="text" name="settings[button_rollovrsymbalcolor]" class="color {hash:false,caps:false}"   value="<?php print  @$ops['button_rollovrsymbalcolor']; ?>" /></td>
		</tr>

		<tr>
			<td><?php _e('Button Rollout Bgcolor'); ?></td>
			<td><input type="text" name="settings[button_rolloutbgcolor]" class="color {hash:false,caps:false}"   value="<?php print  @$ops['button_rolloutbgcolor']; ?>" /></td>
		</tr>

		<tr>
			<td><?php _e('Button Rollout Symbalcolor'); ?></td>
			<td><input type="text" name="settings[button_rolloutsymbalcolor]" class="color {hash:false,caps:false}"   value="<?php print  @$ops['button_rolloutsymbalcolor']; ?>" /></td>
		</tr>

		<tr>
			<td><?php _e('Auto Play'); ?></td>
			<td>
				<input type="radio" name="settings[auto_play]" value="yes" <?php print (@$ops['auto_play'] == 'yes') ? 'checked' : ''; ?>><span><?php _e('yes'); ?></span>
				<input type="radio" name="settings[auto_play]" value="no" <?php print (@$ops['auto_play'] == 'no') ? 'checked' : ''; ?>><span><?php _e('no'); ?></span>
			</td>
		</tr>

		<tr>
			<td><?php _e('Show Controll Buttons'); ?></td>
			<td>
				<input type="radio" name="settings[show_buttons]" value="yes" <?php print (@$ops['show_buttons'] == 'yes') ? 'checked' : ''; ?>><span><?php _e('yes'); ?></span>
				<input type="radio" name="settings[show_buttons]" value="no" <?php print (@$ops['show_buttons'] == 'no') ? 'checked' : ''; ?>><span><?php _e('no'); ?></span>
			</td>
		</tr>

		<tr>
			<td><?php _e('Autohide Controll Buttons'); ?></td>
			<td>
				<input type="radio" name="settings[autohide_buttons]" value="yes" <?php print (@$ops['autohide_buttons'] == 'yes') ? 'checked' : ''; ?>><span><?php _e('yes'); ?></span>
				<input type="radio" name="settings[autohide_buttons]" value="no" <?php print (@$ops['autohide_buttons'] == 'no') ? 'checked' : ''; ?>><span><?php _e('no'); ?></span>
			</td>
		</tr>

		<tr>
			<td><?php _e('Enable Hand cursor on controls'); ?></td>
			<td>
				<input type="radio" name="settings[show_buttonshandcursor]" value="yes" <?php print (@$ops['show_buttonshandcursor'] == 'yes') ? 'checked' : ''; ?>><span><?php _e('yes'); ?></span>
				<input type="radio" name="settings[show_buttonshandcursor]" value="no" <?php print (@$ops['show_buttonshandcursor'] == 'no') ? 'checked' : ''; ?>><span><?php _e('no'); ?></span>
			</td>
		</tr>

		<tr>
			<td><?php _e('Slideshow Transition Time'); ?></td>
			<td><input type="text" name="settings[transition_timedelay]" value="<?php print  @$ops['transition_timedelay']; ?>" /></td>
		</tr>

		<tr>
			<td><?php _e('Scale images'); ?></td>
			<td>
				<input type="radio" name="settings[image_scalling]" value="yes" <?php print (@$ops['image_scalling'] == 'yes') ? 'checked' : ''; ?>><span><?php _e('yes'); ?></span>
				<input type="radio" name="settings[image_scalling]" value="no" <?php print (@$ops['image_scalling'] == 'no') ? 'checked' : ''; ?>><span><?php _e('no'); ?></span>
			</td>
		</tr>

		<tr>
			<td><?php _e('Random Transition'); ?></td>
			<td>
				<input type="radio" name="settings[random_transition]" value="yes" <?php print (@$ops['random_transition'] == 'yes') ? 'checked' : ''; ?>><span><?php _e('yes'); ?></span>
				<input type="radio" name="settings[random_transition]" value="no" <?php print (@$ops['random_transition'] == 'no') ? 'checked' : ''; ?>><span><?php _e('no'); ?></span>
			</td>
		</tr>

		<tr>
			<td><?php _e('Transition Effect'); ?></td>
			<td>
				<select name="settings[transition_type]">
					<option value="1" <?php print (@$ops['transition_type'] == '1') ? 'selected' : ''; ?>><?php _e('fades in');?></option>

					<option value="2" <?php print (@$ops['transition_type'] == '2') ? 'selected' : ''; ?>><?php _e('zooms out');?></option>

					<option value="3" <?php print (@$ops['transition_type'] == '3') ? 'selected' : ''; ?>><?php _e('Elastic Zoom In');?></option>

					<option value="4" <?php print (@$ops['transition_type'] == '4') ? 'selected' : ''; ?>><?php _e('Squares');?></option>

					<option value="5" <?php print (@$ops['transition_type'] == '5') ? 'selected' : ''; ?>><?php _e('Elastic Slide');?></option>

				
					<option value="6" <?php print (@$ops['transition_type'] == '6') ? 'selected' : ''; ?>><?php _e('Steps');?></option>

					<option value="7" <?php print (@$ops['transition_type'] == '7') ? 'selected' : ''; ?>><?php _e('Triple Squares');?></option>

					<option value="8" <?php print (@$ops['transition_type'] == '8') ? 'selected' : ''; ?>><?php _e('Horizontal Stripes');?></option>

					<option value="9" <?php print (@$ops['transition_type'] == '9') ? 'selected' : ''; ?>><?php _e('Vertical Stripes');?></option>

					<option value="10" <?php print (@$ops['transition_type'] == '10') ? 'selected' : ''; ?>><?php _e('Waves');?></option>

					<option value="11" <?php print (@$ops['transition_type'] == '11') ? 'selected' : ''; ?>><?php _e('Scales Bars');?></option>

					<option value="12" <?php print (@$ops['transition_type'] == '12') ? 'selected' : ''; ?>><?php _e('Bounce Slide');?></option>

					<option value="13" <?php print (@$ops['transition_type'] == '13') ? 'selected' : ''; ?>><?php _e('Iris');?></option>

				</select>
			</td>
		</tr>

		<tr>
			<td><?php _e('Traget Link window'); ?></td>
			<td>
				<select name="settings[target]">
					<option value="_blank" <?php print (@$ops['target'] == '_blank') ? 'selected' : ''; ?>><?php _e('new window');?></option>

					<option value="_self" <?php print (@$ops['target'] == '_self') ? 'selected' : ''; ?>><?php _e('same window');?></option>

				</select>
				</td>
		</tr>

		<tr>
			<td><?php _e('Show Readmore Text'); ?></td>
			<td>
				<input type="radio" name="settings[show_readmore]" value="yes" <?php print (@$ops['show_readmore'] == 'yes') ? 'checked' : ''; ?>><span><?php _e('yes'); ?></span>
				<input type="radio" name="settings[show_readmore]" value="no" <?php print (@$ops['show_readmore'] == 'no') ? 'checked' : ''; ?>><span><?php _e('no'); ?></span>
			</td>
		</tr>

		<tr>
			<td><?php _e('Read More Text'); ?></td>
			<td><input type="text" name="settings[readmore_text]" value="<?php print  @$ops['readmore_text']; ?>" /></td>
		</tr>

		<tr>
			<td><?php _e('Read More Text Size'); ?></td>
			<td><input type="text" name="settings[readmore_size]" value="<?php print  @$ops['readmore_size']; ?>" /></td>
		</tr>

		<tr>
			<td><?php _e('Slideshow Font'); ?></td>
			<td>
			
			<select name="settings[ss_font]">
					
					<option value="Arial" <?php print (@$ops['ss_font'] == 'Arial') ? 'selected' : ''; ?>><?php _e('Arial');?></option>
					<option value="Century Gothic" <?php print (@$ops['ss_font'] == 'Century Gothic') ? 'selected' : ''; ?>><?php _e('Century Gothic');?></option>
					<option value="Times New Roman" <?php print (@$ops['ss_font'] == 'Times New Roman') ? 'selected' : ''; ?>><?php _e('Times New Roman');?></option>
					<option value="Verdana" <?php print (@$ops['ss_font'] == 'Verdana') ? 'selected' : ''; ?>><?php _e('Verdana');?></option>

			</select>
			</td>
		</tr>

		<tr>
			<td><?php _e('Read More Text Color'); ?></td>
			<td><input type="text" name="settings[readmore_color]" class="color {hash:false,caps:false}"  value="<?php print  @$ops['readmore_color']; ?>" /></td>
		</tr>

		<tr>
			<td><?php _e('Readmore Text Underline'); ?></td>
			<td>
				<input type="radio" name="settings[readmore_underline]" value="true" <?php print (@$ops['readmore_underline'] == 'true') ? 'checked' : ''; ?>><span><?php _e('yes'); ?></span>
				<input type="radio" name="settings[readmore_underline]" value="false" <?php print (@$ops['readmore_underline'] == 'false') ? 'checked' : ''; ?>><span><?php _e('no'); ?></span>
			</td>
		</tr>
			


<!-- module Parameters END -->

<!-- images Parameters -->

		<tr>
			<td><?php _e('Show Titles'); ?></td>
			<td>
				<input type="radio" name="settings[show_caption]" value="yes" <?php print (@$ops['show_caption'] == 'yes') ? 'checked' : ''; ?>><span><?php _e('yes'); ?></span>
				<input type="radio" name="settings[show_caption]" value="no" <?php print (@$ops['show_caption'] == 'no') ? 'checked' : ''; ?>><span><?php _e('no'); ?></span>
			</td>
		</tr>

		<tr>
			<td><?php _e('Title Size'); ?></td>
			<td><input type="text" name="settings[title_size]" value="<?php print  @$ops['title_size']; ?>" /></td>
		</tr>

		<tr>
			<td><?php _e('Title Color'); ?></td>
			<td><input type="text" name="settings[title_color]" class="color {hash:true,caps:false}"   value="<?php print  @$ops['title_color']; ?>" /></td>
		</tr>

		<tr>
			<td><?php _e('Show Description'); ?></td>
			<td>
				<input type="radio" name="settings[show_desc]" value="yes" <?php print (@$ops['show_desc'] == 'yes') ? 'checked' : ''; ?>><span><?php _e('yes'); ?></span>
				<input type="radio" name="settings[show_desc]" value="no" <?php print (@$ops['show_desc'] == 'no') ? 'checked' : ''; ?>><span><?php _e('no'); ?></span>
			</td>
		</tr>

		<tr>
			<td><?php _e('Description Size'); ?></td>
			<td><input type="text" name="settings[desc_size]" value="<?php print  @$ops['desc_size']; ?>" /></td>
		</tr>

		<tr>
			<td><?php _e('Description Color'); ?></td>
			<td><input type="text" name="settings[desc_color]" class="color {hash:true,caps:false}"   value="<?php print  @$ops['desc_color']; ?>" /></td>
		</tr>

		<tr>
			<td><?php _e('Show Price'); ?></td>
			<td>
				<input type="radio" name="settings[show_price]" value="yes" <?php print (@$ops['show_price'] == 'yes') ? 'checked' : ''; ?>><span><?php _e('yes'); ?></span>
				<input type="radio" name="settings[show_price]" value="no" <?php print (@$ops['show_price'] == 'no') ? 'checked' : ''; ?>><span><?php _e('no'); ?></span>
			</td>
		</tr>

		<tr>
			<td><?php _e('Price tag image'); ?></td>
			<td>
			
			
			<select name="settings[priceButton_Path]">
					<option value="price_images/flower_blue.png" <?php print (@$ops['priceButton_Path'] == 'price_images/flower_blue.png') ? 'selected' : ''; ?>><?php _e('Flower Blue');?></option>
					
					<option value="price_images/flower_green.png" <?php print (@$ops['priceButton_Path'] == 'price_images/flower_green.png') ? 'selected' : ''; ?>><?php _e('Flower Green');?></option>
					
					<option value="price_images/flower_mauve.png" <?php print (@$ops['priceButton_Path'] == 'price_images/flower_mauve.png') ? 'selected' : ''; ?>><?php _e('Flower Mauve');?></option>
					
					<option value="price_images/flower_red.png" <?php print (@$ops['priceButton_Path'] == 'price_images/flower_red.png') ? 'selected' : ''; ?>><?php _e('Flower Red');?></option>
					
					
					<option value="price_images/star_blue.png" <?php print (@$ops['priceButton_Path'] == 'price_images/star_blue.png') ? 'selected' : ''; ?>><?php _e('Star Blue');?></option>
					
					<option value="price_images/star_fuchsia.png" <?php print (@$ops['priceButton_Path'] == 'price_images/star_fuchsia.png') ? 'selected' : ''; ?>><?php _e('Star Fuchsia');?></option>

					<option value="price_images/star_green.png" <?php print (@$ops['priceButton_Path'] == 'price_images/star_green.png') ? 'selected' : ''; ?>><?php _e('Star Green');?></option>

					<option value="price_images/star_orange.png" <?php print (@$ops['priceButton_Path'] == 'price_images/star_orange.png') ? 'selected' : ''; ?>><?php _e('Star Orange');?></option>
					
					<option value="price_images/stiker_green.png" <?php print (@$ops['priceButton_Path'] == 'price_images/stiker_green.png') ? 'selected' : ''; ?>><?php _e('Sticker Green');?></option>
					
					<option value="price_images/stiker_mauve.png" <?php print (@$ops['priceButton_Path'] == 'price_images/stiker_mauve.png') ? 'selected' : ''; ?>><?php _e('Sticker Mauve');?></option>
					
					<option value="price_images/stiker_orange.png" <?php print (@$ops['priceButton_Path'] == 'price_images/stiker_orange.png') ? 'selected' : ''; ?>><?php _e('Sticker Orange');?></option>

					<option value="price_images/stiker_red.png" <?php print (@$ops['priceButton_Path'] == 'price_images/stiker_red.png') ? 'selected' : ''; ?>><?php _e('Sticker Red');?></option>
			</select>
			
			</td>
		</tr>

		<tr>
			<td><?php _e('Price tag X position'); ?></td>
			<td><input type="text" name="settings[pricebuttonXPos]" value="<?php print  @$ops['pricebuttonXPos']; ?>" /></td>
		</tr>

		<tr>
			<td><?php _e('Price tag Y position'); ?></td>
			<td><input type="text" name="settings[pricebuttonYPos]" value="<?php print  @$ops['pricebuttonYPos']; ?>" /></td>
		</tr>

		<tr>
			<td><?php _e('Price text size'); ?></td>
			<td><input type="text" name="settings[price_size]" value="<?php print  @$ops['price_size']; ?>" /></td>
		</tr>

		<tr>
			<td><?php _e('Currency symbol'); ?></td>
			<td><input type="text" name="settings[currency_symbol]" value="<?php print  @$ops['currency_symbol']; ?>" /></td>
		</tr>

		<tr>
			<td><?php _e('wmode'); ?></td>
			<td>
				<select name="settings[wmode]">
					<option value="opaque" <?php print (@$ops['wmode'] == 'opaque') ? 'selected' : ''; ?>><?php _e('opaque');?></option>

					<option value="transparent" <?php print (@$ops['wmode'] == 'transparent') ? 'selected' : ''; ?>><?php _e('transparent');?></option>

					<option value="window" <?php print (@$ops['wmode'] == 'window') ? 'selected' : ''; ?>><?php _e('window');?></option>

				</select>
				</td>
		</tr>
		</table>
	<p><button type="submit" class="button-primary"><?php _e('Save Config'); ?></button></p>
	</form>
</div>