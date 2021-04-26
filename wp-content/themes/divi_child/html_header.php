<!DOCTYPE html>
<html>
<head>
	<title>Final Assignment</title>
	<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/css/style.css">
	<script src="<?php echo get_stylesheet_directory_uri(); ?>/js/jquery-3.5.1.min.js"></script>
	
	<!-- slickSliderLink -->
	<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri(); ?>/css/slick.css">
	<script src="<?php echo get_stylesheet_directory_uri(); ?>/js/slick.min.js"></script>
	<!-- slickSliderLink -->
	
    <!-- fancybox-->
	 <script src="<?php echo get_stylesheet_directory_uri(); ?>/js/jquery.fancybox.min.js"></script>
	<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri(); ?>/css/jquery.fancybox.min.css">
    <!-- fancybox-->

    <!-- font awsome -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<!-- font awsome -->
	
	<!-- UiLink -->
	<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/css/jquery-ui.css">
	<script src="<?php echo get_stylesheet_directory_uri(); ?>/js/jquery-ui.js"></script>
	<!-- UiLink -->

    <!-- validationScriptFile -->
    <script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/jquery.validate.min.js"></script>
    <script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/additional-methods.min.js"></script>
    <!-- validationScriptFile -->
	
	<!-- sweetalert -->
	<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/sweetalert.js"></script>
	<!-- sweetalert -->
  	
  	<!-- SocialMedia -->
  	<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri(); ?>/css/floating-share.css">
</head>
<body>
	<div class="loader">
		<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/loader/loader.gif" alt="loader">
	</div>

	<header>
		<!-- Nav -->
		<section class="header-sec" style="background-image: url(<?php echo get_stylesheet_directory_uri(); ?>/images/index/bgheader.jpg);">
			<div class="header-nav">
				<div class="container">
					<div class="nav-div">
						<div class="logo">
							<a href="index.html"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/index/logo.png" alt="logo"></a>
						</div>
						<div class="nav-main1">
							<nav>
								<ul>
									<li><a href="flights.html">Flights</a></li>	
									<li><a href="hotel.html">Hotels</a></li>
									<li><a href="carhire.html">Car Hire</a></li>
									<li class="more"><a href="#"><span>More</span><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/index/3nokta.png" alt="3nokta" style="margin-left: 2px;"></a></li>
									<li class="more-nav1" style="display: none;"><a href="#">About Us</a></li>
									<li class="more-nav1" style="display: none;"><a href="#">Services</a></li>
								</ul>
							</nav>
						</div>
						<div class="nav-main2">
							<nav>
								<ul>
									<li><a href="help.html">HELP</a></li>
									<li><span></span></li>
									<li><a href="#">REGISTER</a></li>
									<li><a href="#"><span>Login</span></a></li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
			<!-- <div class="border1"></div> -->

			<!-- form -->
			<div class="form1">
				<div class="container">
					<div class="all-form-sec">
						<div  class="form-parent">
							<form id="myform">
								<div class="form-inputs">
									<label>CATEGORY</label>
									<select class="selected-class" name="flights">
										<option value="">Flights</option>
										<option value="domestic" id="domestic">Domestic</option>
										<option value="international" id="international">International</option>
									</select>
								</div>
								<div class="form-inputs">
									<label>From</label>
									<select class="selected-class" name="from1" >
										<option value ="">CHOOSE</option>
										<option value="Karachi">Karachi</option>
										<option value="Lahore">Lahore</option>
										<option value="Islamabad">Islamabad</option>
										<option value="Sukker">Sukker</option>
										<option value="Uk">Uk</option>
										<option value="Canada">Canada</option>
									</select>
								</div>
								<div class="form-inputs" >
									<label>TO</label>
									<select class="selected-class" id="to" name="to1">
										<option value="">CHOOSE</option>
										<option value="Karachi">Karachi</option>
										<option value="Lahore">Lahore</option>
										<option value="Islamabad">Islamabad</option>
										<option value="Sukker">Sukker</option>
										<option value="London">London</option>
										<option value="Toronto">Toronto</option>
									</select>
								</div>
								<div class="form-inputs">
									<label>DEPART</label>
									<input type="text" name="date1" placeholder="Date" class="selected-class datepicker">
								</div>
								<div class="form-inputs">
									
									<label>RETURN</label>
									<input type="text" name="date2" placeholder="Date" class="selected-class datepicker" >
								</div>
								<div class="form-inputs" style="border-bottom:none;">
									
									<label>CABIN & TRAVELLERS</label>
									<select class="selected-class" name="cabin">
										<option value="">CHOOSE</option>
										<option value="economy">Economy</option>
										<option value="business">Business</option>
									</select>

								</div>
								<div><input type="submit" value="SEARCH!" class="button"></div>
							</form>
						</div>
						<div class="result-form" id="result">
							<h1><span>Lahore</span> flights for 2219 $</h1>
							<p>Hurry to take advantage of the limited number of tickets !</p>
							<div>
								<div><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/index/place.png" alt="place"><p>Toronto.Canada</p></div>
								<div><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/index/timezone.png" alt="timezone"><p>18:15 GMT+2</p></div>
								<div><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/index/rain.png" alt="rain"><p>Rainy,7.c</p></div>
								<div><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/index/flight.png" alt="flight"><p>+315 flights</p></div>
								<div><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/index/hotel.png" alt="hotel"><p>+72 Hotels</p></div>
							</div>
						</div>
					</div>	

				</div>
			</div>
		</section>
		<!-- form -->
	</header>