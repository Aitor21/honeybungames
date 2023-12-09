/**
 * Global vars
 */
var $window = $(window),
	$document = $(document),
	$body = $('body'),
	viewportwidth,
	viewportheight,
	slidingPanel,
	scrolled = $window.scrollTop(),
	isFirstPageView = true,
	ksTl,
	transitionInTimeout,
	w = $window.width();
let chartXs;
let chartLg;
let getProductsDataInterval;


/**
 * Scroll Appear Animations
 */
function scrollAppear(el) {
	if($body.hasClass('is-anim-ready') && !el.hasClass('scroll-appear-is-inview') && !el.hasClass('hide') && !el.parents('.hide').length && !el.hasClass('no-more-scroll-appear')) {
		scrolled = $window.scrollTop();

		if (scrolled + (viewportheight * (1 - (parseInt(el.data('scroll-appear-offset')) / 100))) >= el.offset().top || scrolled + viewportheight >= $document.height()) {
			if(!el.hasClass('scroll-appear-is-inview')) {
				el.addClass('scroll-appear-is-inview');
			}
		}
	}
}


/**
 * Scroll Start timeline videos
 */
function startOnScrollVideo($el) {
	var $video = $el.find('video');

	scrolled = $window.scrollTop()

	if ($video.length && (scrolled + viewportheight >= $el.offset().top || scrolled + viewportheight >= $document.height())) {
		if (!$video.hasClass('has-played') && $video[0].paused) {
			$video.addClass('has-played');

			$video[0].play();
		}
	}
}


/**
 * Scroll Start Lottie
 */
function startLottieOnScroll($el) {
	scrolled = $window.scrollTop();

	if ($body.hasClass('is-anim-ready') && !$el.hasClass('has-played') && scrolled + viewportheight >= $el.offset().top) {
		$el.addClass('has-played');

		$el[0].getLottie().play();

		if ($el.attr('loop')) {
			$el[0].setLooping(true);
		}
	}
}


/**
 * Scroll to hashtag on load
 */
function scrollToHashtagOnLoad() {
	if (window.location.hash && !$('.m-shop-page').length) {
		var $hash = $(window.location.hash);

		if ($hash.length) {
			$('html,body').animate({
				scrollTop: $hash.offset().top - $('.l-navigation').outerHeight()
			}, 1);
		}
	}
}

/**
 * Real Window Size
 */
function viewportSize() {
	if (typeof window.innerWidth !== 'undefined') { // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
		viewportwidth = window.innerWidth;
		viewportheight = window.innerHeight;
	} else if (typeof document.documentElement !== 'undefined' && typeof document.documentElement.clientWidth !== 'undefined' && document.documentElement.clientWidth !== 0) { // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
		viewportwidth = document.documentElement.clientWidth;
		viewportheight = document.documentElement.clientHeight;
	} else { // older versions of IE
		viewportwidth = document.getElementsByTagName('body')[0].clientWidth;
		viewportheight = document.getElementsByTagName('body')[0].clientHeight;
	}
}

function initScript() {
	/**
	 * Multiple use vars
	 */
	var $slidingPanel = $('#sliding-panel'),
		$mTeamFeaturedItems = $('.m-team-featured-items'),
		previousText = 'Previous',
		nextText = 'Next',
		closeText = 'Close';


	/**
	 * Real Window Size trigger
	 */
	viewportSize();

	$window.on('resize', viewportSize);


	/**
	 * Set HTML js class
	 */
	$('html').removeClass('no-js').addClass('has-js');


	/**
	 * Translations
	 */
	if ($('.barba-container').hasClass('fr')) {
		previousText = 'Précédent';
		nextText = 'Suivant';
		closeText = 'Fermer';

		$.extend(true, $.magnificPopup.defaults, {
			tClose: 'Fermer (Esc)', // Alt text on close button
			tLoading: 'Chargement...', // Text that is displayed during loading. Can contain %curr% and %total% keys
			gallery: {
				tPrev: 'Précédent (Flèche gauche)', // Alt text on left arrow
				tNext: 'Suivant (Flèche droite)', // Alt text on right arrow
				tCounter: '%curr% de %total%' // Markup for "1 of 7" counter
			},
			image: {
				tError: '<a href="%url%">L\'image</a> n\'a pas pu être chargé.' // Error message when image could not be loaded
			},
			ajax: {
				tError: '<a href="%url%">Le contenu</a> n\'a pas pu être chargé.' // Error message when ajax request failed
			}
		});
	}


	/**
	 * Set navigation bar class on scroll
	 */
	var $lNavigation = $('.l-navigation'),
		hasScrolled = false;

	function setNavigationClass() {
		if ($slidingPanel.css('visibility') !== 'visible' && !$body.hasClass('mfp-is-open')) {
			scrolled = $window.scrollTop();

			if (scrolled > 10) {
				$lNavigation.removeClass('l-navigation-is-top').addClass('l-navigation-has-scrolled');

				hasScrolled = true;
			} else {
				if (hasScrolled) {
					$lNavigation.addClass('l-navigation-is-top').removeClass('l-navigation-has-scrolled');
				}
			}
		}
	}

	setNavigationClass();

	$window.on('scroll resize', setNavigationClass);


	/**
	 * Sliding panel
	 */
	slidingPanel = $slidingPanel.slidingPanel({
		addBackgroundOverlay: false,
		addCloseButton: false,
		transitionDurationOnOpen: 200,
		transitionDurationOnClose: 200,
		onOpenBefore: function() {
			$('.btn-open-sliding-panel').addClass('btn-open-sliding-panel-is-active btn-close-sliding-panel');

			$lNavigation.addClass('l-navigation-is-top').removeClass('l-navigation-has-scrolled');
		},
		onCloseBefore: function() {
			$('.btn-open-sliding-panel').removeClass('btn-open-sliding-panel-is-active btn-close-sliding-panel');

			if (parseInt($('#site-wrapper').css('top')) < -10) {
				$lNavigation.addClass('l-navigation-has-scrolled').removeClass('l-navigation-is-top');
			}
		}
	});


	/**
	 * Navigation submenus
	 */
	$('.has-submenu').find('> a').on('click touchstart', function(e) {
		e.stopPropagation();
		e.preventDefault();

		var $this = $(this);

		if (is.touchDevice()) {
			$this.parent().siblings().removeClass('hover');

			if (e.handled !== true) {
				if ($this.parent().hasClass('hover')) {
					$this.parent().removeClass('hover');
				} else {
					$this.parent().addClass('hover');
				}

				e.handled = true;
			} else {
				return false;
			}
		}

		$this.blur();
	});

	$('.has-submenu-collapse').find('> a').on('click', function(e) {
		e.preventDefault();
	});

	/**
	 * Remove not-scrolled class
	 */
	var $barbaContainer = $('.barba-container');

	$('.has-submenu').hover(function() {
		if ($barbaContainer.hasClass('not-scrolled')) {
			$barbaContainer.removeClass('not-scrolled');
		}
	}, function() {
		if (scrolled <= 10) {
			$barbaContainer.addClass('not-scrolled');
		}
	});

	$window.on('scroll', function() {
		scrolled = $window.scrollTop();

		if (scrolled > 10) {
			$barbaContainer.removeClass('not-scrolled');
		} else {
			$barbaContainer.addClass('not-scrolled');
		}
	});


	/**
	 * Slick header banner
	 */
	var $lHeaderSliderItems = $('.l-header-slider-items');

	function setHeaderSlideColor($slide) {
		var $btnArrow = $lHeaderSliderItems.find('.btn-arrow'),
			$btnArrowSvg = $btnArrow.find('svg'),
			bgColor = $slide.data('arrows-bg-color');

		$btnArrow.css({
			backgroundColor: bgColor
		});

		if ($slide.hasClass('l-header-slider-item-dark')) {
			$btnArrowSvg.css({
				fill: '#000000'
			});
		} else {
			$btnArrowSvg.css({
				fill: '#FFFFFF'
			});
		}
	}

	if ($lHeaderSliderItems.length) {
		$lHeaderSliderItems.on('init', function() {
			var $lHeaderSliderItem = $lHeaderSliderItems.find('.slick-active .l-header-slider-item');

			setHeaderSlideColor($lHeaderSliderItem);
		});

		$lHeaderSliderItems.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
			var $lHeaderSliderItem = $lHeaderSliderItems.find('[data-slick-index=' + nextSlide + ']').find('.l-header-slider-item');

			setHeaderSlideColor($lHeaderSliderItem);
		});

		$lHeaderSliderItems.slick({
			autoplay: true,
			autoplaySpeed: 5000,
			cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
			speed: 800,
			touchMove: false,
			prevArrow: '<button type="button" class="slick-prev btn btn-arrow btn-arrow-prev d-none d-lg-block"><svg aria-hidden="true" class="normal"><use xlink:href="/assets/dist/images/svg/sprite.svg#arrow-left-small"></use></svg><svg aria-hidden="true" class="hover"><use xlink:href="/assets/dist/images/svg/sprite.svg#arrow-left-small"></use></svg><span class="sr-only">' + previousText + '</span></button>',
			nextArrow: '<button type="button" class="slick-next btn btn-arrow btn-arrow-next d-none d-lg-block"><svg aria-hidden="true" class="normal"><use xlink:href="/assets/dist/images/svg/sprite.svg#arrow-right-small"></use></svg><svg aria-hidden="true" class="hover"><use xlink:href="/assets/dist/images/svg/sprite.svg#arrow-right-small"></use></svg><span class="sr-only">' + nextText + '</span></button>',
			responsive: [
				{
					breakpoint: 768,
					settings: {
						speed: 500,
					}
				},
			]
		});

		$lHeaderSliderItems.find('.social').on('touchstart', function() {
			$lHeaderSliderItems.slick('slickSetOption', 'swipe', false, false);
		});

		$lHeaderSliderItems.find('.social').on('touchend', function() {
			$lHeaderSliderItems.slick('slickSetOption', 'swipe', true, false);
		});
	}


	/**
	 * Slick featured team members
	 */
	$.fn.shuffle = function() {

		var allElems = this.get(),
			getRandom = function(max) {
				return Math.floor(Math.random() * max);
			},
			shuffled = $.map(allElems, function(){
				var random = getRandom(allElems.length),
					randEl = $(allElems[random]).clone(true)[0];
				allElems.splice(random, 1);
				return randEl;
			});

		this.each(function(i){
			$(this).replaceWith($(shuffled[i]));
		});

		return $(shuffled);
	};

	if ($mTeamFeaturedItems.length) {
		var $mTeamFeaturedItem = $('.m-team-featured-item');

		$mTeamFeaturedItem.shuffle().parents('.col').removeClass(function(index, className) {
			return (className.match (/(^|\s)scroll-appear-delay-\S+/g) || []).join(' ');
		});

		for (var i = 0; i <= $mTeamFeaturedItem.length; i++) {
			$('.m-team-featured-item').eq(i).parents('.col').addClass('scroll-appear-delay-' + i + '00');
		}

		$mTeamFeaturedItems.slick({
			arrows: false,
			autoplaySpeed: 3000,
			centerMode: true,
			cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
			initialSlide: 2,
			pauseOnHover: false,
			pauseOnFocus: false,
			touchMove: false,
			variableWidth: true,
		});

		$mTeamFeaturedItems.slick('slickPause');

		$window.on('scroll resize', function() {
			if ($mTeamFeaturedItems.parents('.scroll-appear-is-inview').length) {
				$mTeamFeaturedItems.slick('slickPlay');
			}
		});
	}


	/**
	 * Slick featured medias
	 */
	var $mMediasFeaturedItems = $('.m-medias-featured-items');

	if ($mMediasFeaturedItems.length && $mMediasFeaturedItems.find('.m-medias-featured-item').length > 1) {
		$mMediasFeaturedItems.on('init', function() {
			$mMediasFeaturedItems.find('.m-medias-featured-item').removeClass('m-medias-featured-item-is-active');
		});

		$mMediasFeaturedItems.slick({
			autoplay: false,
			centerMode: true,
			cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
			initialSlide: 0,
			speed: 800,
			touchMove: false,
			variableWidth: true,
			prevArrow: '<button type="button" class="slick-prev btn btn-arrow btn-arrow-prev d-none d-lg-block"><svg aria-hidden="true" class="normal"><use xlink:href="/assets/dist/images/svg/sprite.svg#arrow-left-small"></use></svg><svg aria-hidden="true" class="hover"><use xlink:href="/assets/dist/images/svg/sprite.svg#arrow-left-small"></use></svg><span class="sr-only">' + previousText + '</span></button>',
			nextArrow: '<button type="button" class="slick-next btn btn-arrow btn-arrow-next d-none d-lg-block"><svg aria-hidden="true" class="normal"><use xlink:href="/assets/dist/images/svg/sprite.svg#arrow-right-small"></use></svg><svg aria-hidden="true" class="hover"><use xlink:href="/assets/dist/images/svg/sprite.svg#arrow-right-small"></use></svg><span class="sr-only">' + nextText + '</span></button>',
			responsive: [
				{
					breakpoint: 768,
					settings: {
						speed: 500,
					}
				},
			]
		});
	}


	/**
	 * Videos banner popup
	 */
	$('body').on('click', '.magnific-banner-video', function(e) {
		e.preventDefault();

		$(this).magnificPopup({
			iframe: {
				markup: '<div class="mfp-iframe-margins"><div class="mfp-close"></div><div class="mfp-iframe-scaler">'+
				'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
				'</div></div>',
				titleSrc: function(item) {
					return item.el.attr('data-title');
				},
				patterns: {
					youtube: {
						index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

						id: 'v=', // String that splits URL in a two parts, second part should be %id%
						// Or null - full URL will be returned
						// Or a function that should return %id%, for example:
						// id: function(url) { return 'parsed id'; }

						src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
					},
					vimeo: {
						index: 'vimeo.com/',
						id: '/',
						src: '//player.vimeo.com/video/%id%?autoplay=1'
					},
					twitch: {
						index: 'twitch.tv/',
						id: '/videos/',
						src: 'https://player.twitch.tv/?autoplay=true&video=%id%'
					}
				},

				srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
			},
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 200,
			callbacks: {
				beforeOpen: function() {
					if ($lHeaderSliderItems.length) {
						$lHeaderSliderItems.slick('slickPause');
					}
				},
				close: function() {
					if ($lHeaderSliderItems.length) {
						$lHeaderSliderItems.slick('slickPlay');
					}
				}
			}
		}).magnificPopup('open');
	});


	/**
	 * Scroll to active accordion after open
	 */
	$('.collapse').on('show.bs.collapse', function(e) {
		var $card = $(this).closest('.card');
		var $open = $($(this).data('parent')).find('.collapse.show');

		if ($card.length) {
			var additionalOffset = 0;

			if($card.prevAll().filter($open.closest('.card')).length !== 0) {
				additionalOffset =  $open.height();
			}

			$('html,body').animate({
				scrollTop: $card.offset().top - additionalOffset - $('.l-navigation').height()
			}, 500);
		}
	});


	/**
	 * Btn scroll to anchor
	 */
	$('.scroll-to-anchor').on('click', function(e) {
		var target = $(this).attr('href'),
			$target = $(target);

		if ($target.length) {
			$('html,body').animate({
				scrollTop: $target.offset().top - $('.l-navigation').height()
			}, 500);
		}

		e.preventDefault();
	});


	/**
	 * Popovers
	 */
	var $difficultyPopoverBtns = $('.difficulty-popover'),
		$difficultyPopoverContent = $('.difficulty-popover-content').html();

	if ($difficultyPopoverBtns && $difficultyPopoverContent) {
		$difficultyPopoverBtns.attr('data-content', $difficultyPopoverContent);
	}

	$difficultyPopoverBtns.popover({
		fallbackPlacement: ['bottom'],
		html: true,
		sanitize: false,
		trigger: 'hover',
	});


	/**
	 * Blog article read progress
	 */
	var $mBlogSingle = $('.m-blog-single'),
		$mBlogSingleArticle = $mBlogSingle.find('.m-blog-single-bg'),
		$cReadProgress = $('.c-read-progress'),
		$cReadProgressInner = $cReadProgress.find('div');

	function setReadProgressBar() {
		scrolled = $window.scrollTop();

		if (scrolled >= $mBlogSingle.offset().top && scrolled <= $mBlogSingle.offset().top + $mBlogSingleArticle.outerHeight()) {
			$cReadProgress.addClass('c-read-progress-is-visible');
		} else {
			$cReadProgress.removeClass('c-read-progress-is-visible');
		}

		$cReadProgressInner.css({
			width: ((scrolled - $mBlogSingle.offset().top) / $mBlogSingleArticle.outerHeight() * 100) + '%'
		});
	}

	if ($cReadProgress.length) {
		setReadProgressBar();

		$window.on('scroll resize', setReadProgressBar);
	}


	/**
	 * Blog article show logo
	 */
	var $mBlogSingleLogoScrolled = $mBlogSingle.find('.logo-scrolled');

	function setBlogLogoClass() {
		scrolled = $window.scrollTop();

		if (scrolled >= $mBlogSingle.offset().top) {
			$mBlogSingleLogoScrolled.addClass('logo-scrolled-is-visible');
		} else {
			$mBlogSingleLogoScrolled.removeClass('logo-scrolled-is-visible');
		}
	}

	if ($mBlogSingleLogoScrolled.length) {
		setBlogLogoClass();

		$window.on('scroll resize', setBlogLogoClass);
	}


	/**
	 * Blog archive sticky share
	 */
	var $mBlogSingleShare = $('.m-blog-single-share'),
		$mBlogSingleShareWrapper = $('.m-blog-single-share-wrapper');

	if ($mBlogSingleShare.length && $mBlogSingleShareWrapper.length) {
		$mBlogSingleShare.stick_in_parent({
			offset_top: 0,
			parent: $mBlogSingleShareWrapper,
			spacer: false
		});
	}

	/**
	 * Press-kit sticky sidenav
	 */
	var $cPressKitSidenav = $('.c-press-kit-sidenav nav'),
		$cPressKitSidenavWrapper = $('.c-press-kit-sidenav');

	/**
	 *	Press-kit sidenav scrollspy
	 */
	/**
	 * Refresh scrollspy
	 */
	$body.scrollspy('dispose');

	$body.scrollspy({
		offset: $('.l-navigation').height() + 40,
		target: $cPressKitSidenavWrapper
	});

	if ($cPressKitSidenav.length && $cPressKitSidenavWrapper.length) {
		$cPressKitSidenav.stick_in_parent({
			offset_top: $('.l-navigation').height() + 40,
			parent: $cPressKitSidenavWrapper,
			spacer: false
		});

		// smooth scroll to anchor
		$cPressKitSidenavWrapper.find('a').on('click', function(e) {
			$('html,body').animate({
				scrollTop: $($(this).attr('href')).offset().top - $('.l-navigation').height()
			}, 800);

			e.preventDefault();
		});

		var $cPressKitSidenavFirstLink = $('.c-press-kit-sidenav nav ul li:first-of-type a');

		$window.scroll(function () {
			if ($window.scrollTop() <= $cPressKitSidenavWrapper.offset().top) {
				$cPressKitSidenavFirstLink.addClass('active');
			}
		});
	}

	/**
	 * Streamers kit load more button
	 */
	var $streamersLoadMoreBtn = $('.c-press-kit-block').find('.btn-load-more');

	$streamersLoadMoreBtn.on('click', function() {
		var $this = $(this),
			$hiddenItems = $this.parents('.c-press-kit-innerblock').find('.hidden-item');

		$hiddenItems.fadeIn(200, function() {
			$hiddenItems.removeClass('hidden-item');
		});

		$this.parent().fadeOut(200);
	});

	/**
	 * History grid
	 */
	var $timeline = $('.timeline'),
		$timelineItems = $('.timeline-items'),
		historyGridResizeTimeout;

	function historyGrid($row) {
		if (viewportwidth >= 768 && $row.is(':not(:first-child)') && !$row.find('.timeline-item-large').length) {
			var $prevRow = $row.prev(),
				rowPaddingTop = parseInt($row.css('padding-top'));

			if (!$prevRow.find('.timeline-item-large').length) {
				$row.css({
					marginTop: ''
				});

				var $rowItemLeft = $row.find('.col-12.left .timeline-item'),
					$rowItemRight = $row.find('.col-12.right .timeline-item'),
					$prevRowItemLeft = $prevRow.find('.col-12.left .timeline-item'),
					$prevRowItemRight = $prevRow.find('.col-12.right .timeline-item');

				if ($rowItemRight.length && $prevRowItemRight.length) {
					var rowItemRightOffsetTop = $rowItemRight.offset().top,
						prevRowItemRightOffetBottom = $prevRowItemRight.offset().top + $prevRowItemRight.height();

					if (rowItemRightOffsetTop - prevRowItemRightOffetBottom > rowPaddingTop) {
						$row.css({
							marginTop: -(rowItemRightOffsetTop - prevRowItemRightOffetBottom - rowPaddingTop) + 'px'
						});
					}
				}

				if ($rowItemLeft.length && $prevRowItemLeft.length) {
					var rowItemLeftOffsetTop = $rowItemLeft.offset().top,
						prevRowItemLeftOffetBottom = $prevRowItemLeft.offset().top + $prevRowItemLeft.height();

					if (rowItemLeftOffsetTop - prevRowItemLeftOffetBottom < rowPaddingTop) {
						$row.css({
							marginTop: -(parseInt($rowItemLeft.parents('.col-12').css('padding-top'))) + 'px'
						});
					}
				}

				if ($row.offset().top + $row.outerHeight() < $prevRow.offset().top + $prevRow.outerHeight()) {
					var rowMarginTop = parseInt($row.css('margin-top'));

					$row.css({
						marginTop: rowMarginTop + (($prevRow.offset().top + $prevRow.outerHeight()) - ($row.offset().top + $row.outerHeight()))
					});
				}
			}
		} else {
			$row.css({
				marginTop: ''
			});
		}
	}

	if ($timelineItems.length) {
		$timelineItems.each(function() {
			var $this = $(this);

			historyGrid($this);
		});

		$window.on('resize', function() {
			if ($window.width() === w) return;

			w = $window.width();

			clearTimeout(historyGridResizeTimeout);

			historyGridResizeTimeout = setTimeout(function() {
				$timelineItems.each(function() {
					var $this = $(this);

					historyGrid($this);
				});
			}, 100);
		});
	}


	/**
	 * History read more
	 */
	var $timelineItem = $('.timeline-item');

	$timelineItem.find('.read-more-button').on('click', function (e) {
		var $editor = $(this).parents('.editor');

		$editor.find('.excerpt').hide();
		$editor.find('.full').show();

		$timelineItems.each(function() {
			var $this = $(this);

			historyGrid($this);
		});

		e.preventDefault();
	});


	/**
	 * History slick timeline items
	 */
	var $imgSlider = $timelineItem.find('.img-slider');

	if ($imgSlider.length) {
		$imgSlider.each(function() {
			var $this = $(this);

			$this.on('beforeChange', function(event, slick, currentSlide, nextSlide){
				$this.parent().find('.nb .current').text(nextSlide + 1);
			});

			if (!$this.hasClass('slick-initialized')) {
				if ($this.parents('.magnific-timeline-horizontal').length) {
					$this.slick({
						appendDots: $this.parents('.img').find('.img-slider-dots'),
						appendArrows: $this.parents('.img-wrapper'),
						cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
						dots: true,
						draggable: false,
						prevArrow: '<button type="button" class="slick-prev btn btn-arrow btn-arrow-prev"><svg aria-hidden="true" class="normal"><use xlink:href="/assets/dist/images/svg/sprite.svg#arrow-left-small"></use></svg><svg aria-hidden="true" class="hover"><use xlink:href="/assets/dist/images/svg/sprite.svg#arrow-left-small"></use></svg><span class="sr-only">' + previousText + '</span></button>',
						nextArrow: '<button type="button" class="slick-next btn btn-arrow btn-arrow-next"><svg aria-hidden="true" class="normal"><use xlink:href="/assets/dist/images/svg/sprite.svg#arrow-right-small"></use></svg><svg aria-hidden="true" class="hover"><use xlink:href="/assets/dist/images/svg/sprite.svg#arrow-right-small"></use></svg><span class="sr-only">' + nextText + '</span></button>',
						swipe: true,
						touchMove: false,
					});
				} else {
					$this.slick({
						appendDots: $this.parents('.img').find('.img-slider-dots'),
						arrows: false,
						cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
						dots: true,
						draggable: false,
						swipe: true,
						touchMove: false,
					});
				}
			}
		});
	}


	/**
	 * History timeline years
	 */
	var $btnTimelineYear = $('.btn-timeline-year'),
		$timelineOverlay = $('.timeline-overlay'),
		mHistoryPageOverlayTimeout,
		mHistoryPageOverlaySubTimeout;

	// Scroll to years
	$btnTimelineYear.on('click', function() {
		var dataYear = $(this).data('timeline-year'),
			$target = $('.timeline-year-' + dataYear);

		if ($target.length) {
			$timelineOverlay.addClass('timeline-overlay-is-visible');

			clearTimeout(mHistoryPageOverlayTimeout);

			mHistoryPageOverlayTimeout = setTimeout(function() {
				$('html, body').animate({
					scrollTop: $target.offset().top - $('.l-navigation').height()
				}, 600);

				clearTimeout(mHistoryPageOverlaySubTimeout);

				mHistoryPageOverlaySubTimeout = setTimeout(function() {
					$timelineOverlay.removeClass('timeline-overlay-is-visible');

					if ($body.hasClass('mfp-is-open')) {
						setTimeout(function() {
							$.magnificPopup.close();
						}, 100);
					}
				}, 500);
			}, 100);
		}
	});

	// Active year
	var $timelineYear = $('.timeline-year'),
		$timelineYearsNavItemsLine = $('.timeline-years-nav-items').find('.line'),
		$mfpTimelineYearsNavItemsLine = $('.mfp-timeline').find('.timeline-years-nav-items .line'),
		$btnYear = $('.btn-year');

	function setTimelineActiveYear($elem) {
		scrolled = $window.scrollTop();

		var $this = $elem,
			dataYear = $this.data('timeline-year');

		if (scrolled + viewportheight >= $this.offset().top && scrolled + viewportheight < $this.offset().top + $this.outerHeight()) {
			var $btnTimelineYearCurrent = $('.btn-timeline-year-' + dataYear);

			if (!$btnTimelineYearCurrent.parent().hasClass('current-nav-item')) {
				$btnTimelineYear.parent().removeClass('current-nav-item');

				$btnTimelineYearCurrent.parent().addClass('current-nav-item');

				$timelineYearsNavItemsLine.css({
					transform: 'translate3d(0, ' + $btnTimelineYearCurrent.parent().index() * 36 + 'px, 0)'
				});

				$mfpTimelineYearsNavItemsLine.css({
					transform: 'translate3d(0, ' + $btnTimelineYearCurrent.parent().index() * 60 + 'px, 0)'
				});
			}

			if (parseInt($btnYear.text()) !== parseInt(dataYear)) {
				$btnYear.text(dataYear);
			}
		}

		if (scrolled + viewportheight >= $timeline.offset().top + $timeline.outerHeight()) {
			if (!$btnTimelineYear.last().parent().hasClass('current-nav-item')) {
				$btnTimelineYear.last().parent().addClass('current-nav-item');
			}

			if (parseInt($btnYear.text()) !== parseInt($timelineYear.last().data('timeline-year'))) {
				$btnYear.text($timelineYear.last().data('timeline-year'));
			}
		}
	}

	$timelineYear.each(function() {
		setTimelineActiveYear($(this));
	});

	$window.on('scroll resize', function() {
		$timelineYear.each(function() {
			setTimelineActiveYear($(this));
		});
	});


	/**
	 * History timeline roster
	 */
	var $timelineRoster = $('.timeline-roster-nav'),
		$timelineItemHiring = $('.timeline-item-hiring'),
		$timelineItemLeave = $('.timeline-item-leave'),
		nbVisibleRoster = 0;

	// Scroll to employee
	$('.btn-timeline-employee').on('click', function(e) {
		var dataEmployee = $(this).data('timeline-employee'),
			$target = $('#' + dataEmployee);

		if ($target.length) {
			$timelineOverlay.addClass('timeline-overlay-is-visible');

			clearTimeout(mHistoryPageOverlayTimeout);

			mHistoryPageOverlayTimeout = setTimeout(function() {
				$('html, body').animate({
					scrollTop: $target.offset().top - $('.l-navigation').height()
				}, 600);

				clearTimeout(mHistoryPageOverlaySubTimeout);

				mHistoryPageOverlaySubTimeout = setTimeout(function() {
					$timelineOverlay.removeClass('timeline-overlay-is-visible');

					if ($body.hasClass('mfp-is-open')) {
						setTimeout(function() {
							$.magnificPopup.close();
						}, 100);
					}
				}, 500);
			}, 100);
		}

		e.preventDefault();
	});

	function showAsideRosterImg($elem, $post) {
		var $this = $elem,
			$mfpRoster = $('.mfp-roster');

		if (!$post.hasClass('seen')) {
			$post.addClass('seen');
		}

		if (!$this.hasClass('is-visible')) {
			$this.show();

			if ($timelineRoster.find('h2').hasClass('mb-0')) {
				$timelineRoster.find('h2').removeClass('mb-0');

				$timelineRoster.find('li.none').hide();

				$timelineRoster.addClass('timeline-roster-nav-is-visible');
			}

			setTimeout(function() {
				$this.addClass('is-visible');

				nbVisibleRoster = $('.timeline-item-hiring.seen').length - $('.timeline-item-leave.seen').length;

				if (nbVisibleRoster > 0 && $mfpRoster.hasClass('mfp-roster-is-hidden')) {
					$mfpRoster.removeClass('mfp-roster-is-hidden');
				}

				$mfpRoster.find('.nb').text(nbVisibleRoster);

				$(".aside-fixed-wrapper").trigger("sticky_kit:recalc");
			}, 5);
		}
	}

	function hideAsideRosterImg($elem, $post) {
		var $this = $elem,
			$mfpRoster = $('.mfp-roster');

		if ($post.hasClass('seen')) {
			$post.removeClass('seen');
		}

		if ($this.hasClass('is-visible')) {
			$timelineRoster.find('ul').each(function() {
				var $this = $(this);

				$this.css({
					height: $this.outerHeight()
				});
			});

			$this.removeClass('is-visible');

			setTimeout(function() {
				$this.hide();

				$timelineRoster.find('ul').css({
					height: ''
				});

				if (!$timelineRoster.find('li.is-visible').length) {
					$timelineRoster.find('h2').addClass('mb-0');

					$timelineRoster.find('li.none').show();

					$timelineRoster.removeClass('timeline-roster-nav-is-visible');
				}

				setTimeout(function() {
					$this.removeClass('is-visible');

					nbVisibleRoster = $('.timeline-item-hiring.seen').length - $('.timeline-item-leave.seen').length;;

					if (nbVisibleRoster <= 0 && !$mfpRoster.hasClass('mfp-roster-is-hidden')) {
						$mfpRoster.addClass('mfp-roster-is-hidden');
					}

					$mfpRoster.find('.nb').text(nbVisibleRoster);

					$(".aside-fixed-wrapper").trigger("sticky_kit:recalc");
				}, 5);
			}, 200);
		}
	}

	function triggerAsideRosterImg($elem) {
		scrolled = $window.scrollTop();

		var $this = $elem,
			$asideElem = $('aside, .mfp-timeline-roster').find('a[data-timeline-employee="' + $this.find('a').data('timeline-employee') + '"]').parents('li');

		if (scrolled + viewportheight >= $this.offset().top) {
			if (!$asideElem.hasClass('has-left')) {
				showAsideRosterImg($asideElem, $this);
			}
		} else {
			hideAsideRosterImg($asideElem, $this);
		}
	}

	$timelineItemHiring.each(function() {
		triggerAsideRosterImg($(this));
	});

	$window.on('scroll resize', function() {
		$timelineItemHiring.each(function() {
			triggerAsideRosterImg($(this));
		});
	});

	// Leave
	function leaveAsideRoster($elem) {
		var $this = $elem,
			$asideElem = $('aside, .mfp-timeline-roster').find('a[data-timeline-employee="' + $this.find('a').data('timeline-employee') + '"]').parents('li');

		if (scrolled + viewportheight >= $this.offset().top) {
			if (!$this.hasClass('seen')) {
				$this.addClass('seen');
			}

			if (!$asideElem.hasClass('has-left')) {
				$asideElem.addClass('has-left');

				hideAsideRosterImg($asideElem, $this);
			}
		} else {
			if ($this.hasClass('seen')) {
				$this.removeClass('seen');
			}

			if ($asideElem.hasClass('has-left')) {
				$asideElem.removeClass('has-left');
			}
		}
	}

	$timelineItemLeave.each(function() {
		leaveAsideRoster($(this));
	});

	$window.on('scroll resize', function() {
		$timelineItemLeave.each(function() {
			leaveAsideRoster($(this));
		});
	});


	/**
	 * History timeline years mobile
	 */
	var $btnMfpYears = $('.mfp-years'),
		$btnMfpYearsClose = $('.mfp-timeline').find('.mfp-years');

	$btnMfpYears.magnificPopup({
		autoFocusLast: false,
		closeBtnInside: false,
		closeMarkup: '<button title="%title%" type="button" class="mfp-close"><span class="text">Close</span></button>',
		type:'inline',
		mainClass: 'mfp-fade mfp-timeline',
		midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
		removalDelay: 200,
		callbacks: {
			open: function() {
				$body.addClass('mfp-is-open');

				$btnMfpYears.addClass('btn-is-active');
			},
			close: function() {
				$body.removeClass('mfp-is-open');

				$btnMfpYears.removeClass('btn-is-active');
			}
			// e.t.c.
		}
	});

	$btnMfpYearsClose.on('click', function(e) {
		$.magnificPopup.close();

		e.preventDefault();
	});


	/**
	 * History timeline roster mobile
	 */
	var $btnMfpRoster = $('.mfp-roster');

	$btnMfpRoster.magnificPopup({
		autoFocusLast: false,
		closeBtnInside: false,
		closeMarkup: '<button title="%title%" type="button" class="mfp-close"><span class="text">Close</span></button>',
		type:'inline',
		mainClass: 'mfp-fade mfp-timeline',
		midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
		removalDelay: 200,
		callbacks: {
			open: function() {
				$body.addClass('mfp-is-open');

				$btnMfpRoster.addClass('btn-is-active');
			},
			close: function() {
				$body.removeClass('mfp-is-open');

				$btnMfpRoster.removeClass('btn-is-active');
			}
			// e.t.c.
		}
	});


	/**
	 * History timeline horizontal and mobile videos
	 */
	var $timelineItemLink = $('.timeline-item a');

	$timelineItemLink.on('click', function(e) {
		var $this = $(this);

		if (viewportwidth < 1024) {
			if ($this.parents('.timeline-item-video').length) {
				if ($this.parents('.timeline-item-video-youtube').length) {
					if (!$this.find('iframe').length) {
						$this.find('.img').append(
							'<iframe width="560" height="315" src="https://www.youtube.com/embed/' + $this.data('youtube-id') + '?autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
						);
					}
				} else {
					if (!$this.find('video').length) {
						$this.find('.img').append(
							'<video controls disablePictureInPicture playsinline>' +
								'<source src="' + $this.data('video-mp4-src') + '" type="video/mp4">' +
								'<source src="' + $this.data('video-webm-src') + '" type="video/webm">' +
							'</video>'
						);

						if ($this.find('video')[0].paused) {
							$this.find('video')[0].play();
						}
					}
				}

				$this.addClass('video-is-active');
			}

			e.preventDefault();
			e.stopImmediatePropagation();
		}
	});

	$window.on('resize', function() {
		if (viewportwidth >= 1024) {
			$timelineItemLink.each(function() {
				var $this = $(this);

				if ($this.parent().hasClass('timeline-item-video') && ($this.find('video').length || $this.find('iframe').length)) {
					$this.addClass('video-is-active');
				}

				if ($this.parent().hasClass('timeline-item-video') && $this.find('video').length) {
					$this.find('video').remove();
				}

				if ($this.parent().hasClass('timeline-item-video') && $this.find('iframe').length) {
					$this.find('iframe').remove();
				}
			});
		}
	});


	$body.on('click', '.timeline-item-magnific', function(e) {
		var $this = $(this);

		$this.magnificPopup({
			autoFocusLast: false,
			closeBtnInside: false,
			closeMarkup: '<button title="%title%" type="button" class="mfp-close"><span class="text">' + closeText + '</span></button>',
			type:'inline',
			midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
			mainClass: 'mfp-fade mfp-timeline',
			removalDelay: 200,
			callbacks: {
				open: function() {
					var $mfpContainer = $('.mfp-container'),
						$mfpContainerTimelineItem = $mfpContainer.find('.timeline-item'),
						$mfpContainerImgWrapper = $mfpContainer.find('.img-wrapper'),
						$mfpContainerSlider = $mfpContainer.find('.img-slider');

					$body.addClass('mfp-is-open mfp-timeline-is-open');

					if ($mfpContainer.find('video').length) {
						$mfpContainer.find('video').attr('preload', 'auto');
					}

					if ($mfpContainerSlider.length) {
						$mfpContainerTimelineItem.css({
							width: $mfpContainer.find('.slick-active .post-img').width() + parseInt($mfpContainerImgWrapper.css('padding-left')) + parseInt($mfpContainerImgWrapper.css('padding-right')) + parseInt($mfpContainerTimelineItem.css('padding-left')) + parseInt($mfpContainerTimelineItem.css('padding-right'))
						});

						$('.img-slider').slick('setPosition');

						$window.on('resize', function() {
							$mfpContainerTimelineItem.css({
								width: $mfpContainer.find('.slick-active .post-img').width() + parseInt($mfpContainerImgWrapper.css('padding-left')) + parseInt($mfpContainerImgWrapper.css('padding-right')) + parseInt($mfpContainerTimelineItem.css('padding-left')) + parseInt($mfpContainerTimelineItem.css('padding-right'))
							});

							$('.img-slider').slick('setPosition');
						});
					}
				},
				beforeClose: function() {
					var $mfpContainer = $('.mfp-container'),
						$mfpContainerVideo = $mfpContainer.find('video');

					if ($mfpContainerVideo.length && !$mfpContainer.find('video')[0].paused) {
						$mfpContainer.find('video')[0].pause();
					}
				},
				close: function() {
					$body.removeClass('mfp-is-open mfp-timeline-is-open');
				}
			}
		}).magnificPopup('open');

		e.preventDefault();
	});

	$window.on('resize', function () {
		if (viewportwidth >= 1024 && $body.hasClass('mfp-is-open') && !$body.hasClass('mfp-timeline-is-open')) {
			$.magnificPopup.close();
		}

		if (viewportwidth < 1024 && $body.hasClass('mfp-timeline-is-open')) {
			$.magnificPopup.close();
		}
	});


	/**
	 * History sticky aside
	 */
	var $mHistoryPageAside = $('.m-history-page').find('aside'),
		$mHistoryPageAsideWrapper = $mHistoryPageAside.find('.aside-fixed-wrapper');

	if ($mHistoryPageAside && $mHistoryPageAsideWrapper) {
		$mHistoryPageAsideWrapper.stick_in_parent({
			offset_top: $('.l-navigation').height(),
			parent: $mHistoryPageAside,
			spacer: false
		});
	}


	/**
	 * History social lines
	 */
	var $timelineFooterSocialLinks = $('.timeline-footer-social').find('ul a');

	$timelineFooterSocialLinks.on('mouseenter', function() {
		var $this = $(this);

		$('.social-line').removeClass('is-active');

		if ($this.find('.fb').length) {
			$('.social-line-facebook').addClass('is-active');
		} else if ($this.find('.tw').length) {
			$('.social-line-twitter').addClass('is-active');
		} else {
			$('.social-line-discord').addClass('is-active');
		}
	});

	$timelineFooterSocialLinks.on('mouseleave', function() {
		$('.social-line').removeClass('is-active');
	});

	if (is.touchDevice()) {
		$timelineFooterSocialLinks.addClass('hover');
	}


	/**
	 * Paroller
	 */
	$window.on('load', function() {
		$('.paroller').paroller();
	});


	/**
	 * Defer YouTube iframe loading
	 */
	var $vidsDefer = $('iframe.defer');

	$vidsDefer.each(function() {
		var $this = $(this);

		$this.attr('src', $this.data('src'));
	});

	/**
	 * Social share window
	 */
	$document.ready(function() {
		$('.fb-share, .tw-share').click(function(e) {
			e.preventDefault();
			window.open($(this).attr('href'), 'shareWindow', 'height=450, width=580, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
			return false;
		});
	});

	/**
	 * Slick streamers banner tabs
	 */
	var $lHeaderStreamersTabs = $('.l-header-streamers-content').find('.tabs'),
		$lHeaderStreamersTabsBtns = $('.l-header-streamers-content .nav-tabs').find('.btn'),
		tabPressed = false;

	$lHeaderStreamersTabs.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		if (tabPressed === true) {
			$lHeaderStreamersTabsBtns.removeClass('is-active');

			$lHeaderStreamersTabsBtns.eq(nextSlide).addClass('is-active');

			tabPressed = false;
		} else {
			return false;
		}
	});

	$lHeaderStreamersTabs.slick({
		adaptiveHeight: true,
		arrows: false,
		draggable: false,
		fade: true,
		swipe: false,
		touchMove: false,
	});

	$lHeaderStreamersTabsBtns.on('click', function() {
		tabPressed = true;

		var $this = $(this),
			dataSlideIndex = parseInt($this.data('slide-index'));

		if (!$this.hasClass('is-active')) {
			$lHeaderStreamersTabs.slick('slickGoTo', dataSlideIndex, false);
		}
	});

	var $lHeaderStreamersTabFeaturedContentItems = $('.l-header-streamers-content').find('.featured-content-items'),
		$lHeaderStreamersTabFeaturedContentItemsArgs = {
			adaptiveHeight: true,
			autoplay: false,
			cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
			speed: 500,
			touchMove: false,
			prevArrow: '<button class="btn btn-icon btn-icon-prev d-none d-lg-flex"><svg aria-hidden="true"><use xlink:href="/assets/dist/images/svg/sprite.svg#arrow-left-small"></use></svg><span class="sr-only">' + previousText + '</span></button>',
			nextArrow: '<button class="btn btn-icon btn-icon-next d-none d-lg-flex"><svg aria-hidden="true"><use xlink:href="/assets/dist/images/svg/sprite.svg#arrow-right-small"></use></svg><span class="sr-only">' + nextText + '</span></button>',
			slidesToShow: 4,
			slidesToScroll: 4
		};

	$lHeaderStreamersTabFeaturedContentItems.on('afterChange', function(){
		$lHeaderStreamersTabs.slick('setPosition');
	});

	function initFeaturedContentItemsSlick() {
		if (viewportwidth >= 1024) {
			if (!$lHeaderStreamersTabFeaturedContentItems.hasClass('slick-initialized')) {
				$lHeaderStreamersTabFeaturedContentItems.slick($lHeaderStreamersTabFeaturedContentItemsArgs);
			}
		} else {
			if ($lHeaderStreamersTabFeaturedContentItems.hasClass('slick-initialized')) {
				$lHeaderStreamersTabFeaturedContentItems.slick('unslick');
			}
		}
	}

	initFeaturedContentItemsSlick();

	$window.on('resize', initFeaturedContentItemsSlick);

	/**
	 * Streamers image block with video playback
	 */
	var $cPressKitBlockImagesItems = $('.c-press-kit-block-images-item').find('a'),
		stopVideoTimeout;

	$cPressKitBlockImagesItems.hover(function() {
		var $this = $(this),
			$video = $this.find('video');

		if ($video.length) {
			$video[0].currentTime = 0;
			$video[0].play();
		}
	}, function() {
		var $this = $(this),
			$video = $this.find('video');

		if ($video.length) {
			stopVideoTimeout = setTimeout(function() {
				clearTimeout(stopVideoTimeout);

				$video[0].pause();
			}, 200);
		}
	});

	/**
	 * Copy to clipboard buttons
	 */
	$('.btn-copy').on('click', function(e) {
		var $this = $(this),
			$text = $this.find('.text .normal').text(),
			$label = $this.find('.label'),
			$labelText = $label.text(),
			copyTimeout;

		if (!$this.hasClass('btn-copy-is-active')) {
			$this.addClass('btn-copy-is-active');

			navigator.clipboard.writeText($text).then(function() {
				$label.text($this.data('success-text'));

				copyTimeout = setTimeout(function() {
					clearTimeout(copyTimeout);

					$label.text($labelText);

					$this.removeClass('btn-copy-is-active');
				}, 3000);
			});
		}

		e.preventDefault();
	});

	/**
	 * Init CF7
	 */
	if(!isFirstPageView) {
		try {
			wpcf7.initForm($('.wpcf7-form'));
		}catch(e){}
	}

	/**
	 * Streamer kit Audio
	 */
	var $audioItemsBtns = $('.audio-item > a'),
		playlistArr = [];

	var Player = function(playlist) {
		this.playlist = playlist;
		this.index = 0;
	};

	$audioItemsBtns.each(function() {
		playlistArr.push({
			file: $(this).data('songname'),
			howl: null
		});
	});

	Player.prototype = {
		/**
		 * Play a song in the playlist.
		 * @param  {Number} index Index of the song in the playlist (leave empty to play the first or current).
		 */
		play: function(index) {
			var self = this;
			var sound;

			index = typeof index === 'number' ? index : self.index;
			var data = self.playlist[index];

			// If we already loaded this track, use the current one.
			// Otherwise, setup and load a new Howl.
			if (data.howl) {
				sound = data.howl;
			} else {
				sound = data.howl = new Howl({
					src: [data.file],
					html5: true
				});
			}

			// Begin playing the sound.
			sound.play();

			// Keep track of the index we are currently playing.
			self.index = index;
		},

		/**
		 * Pause the currently playing track.
		 */
		pause: function() {
			var self = this;

			// Get the Howl we want to manipulate.
			var sound = self.playlist[self.index].howl;

			// Pause the sound.
			sound.pause();
		},

		/**
		 * Skip to the next or previous track.
		 * @param  {String} direction 'next' or 'prev'.
		 */
		skip: function(direction) {
			var self = this;

			// Get the next track based on the direction of the track.
			var index = 0;

			if (direction === 'prev') {
				index = self.index - 1;
				if (index < 0) {
					index = self.playlist.length - 1;
				}
			} else {
				index = self.index + 1;
				if (index >= self.playlist.length) {
					index = 0;
				}
			}

			self.skipTo(index);
		},

		/**
		 * Skip to a specific track based on its playlist index.
		 * @param  {Number} index Index in the playlist.
		 */
		skipTo: function(index) {
			var self = this;

			// Stop the current track.
			if (self.playlist[self.index].howl) {
				self.playlist[self.index].howl.stop();
			}

			// Play the new track.
			self.play(index);
		},

		/**
		 * Seek to a new position in the currently playing track.
		 * @param  {Number} per Percentage through the song to skip.
		 */
		seek: function(per) {
			var self = this;

			// Get the Howl we want to manipulate.
			var sound = self.playlist[self.index].howl;

			// Convert the percent into a seek position.
			if (sound.playing()) {
				sound.seek(sound.duration() * per);
			}
		}
	};

	// Setup our new audio player class and pass it the playlist.
	var player = new Player(playlistArr);

	$audioItemsBtns.on('click', function(e) {
		var $this = $(this);

		if ($(e.target).data('href')) {
			window.open($(e.target).data('href'), '_blank');
		} else {
			if (!$this.hasClass('is-active')) {
				$audioItemsBtns.removeClass('is-active');

				player.skipTo($(this).data('song-index'));

				$this.addClass('is-active');
			} else {
				player.pause();

				$this.removeClass('is-active');
			}
		}

		e.preventDefault();
	});

	/**
	 * Shop multiple use vars
	 */
	var $mShopPageItem = $('.m-shop-page-item');

	/**
	 * Slick shop item images
	 */
	$mShopPageItem.each(function() {
		var $this = $(this),
			$imgs = $this.find('.imgs');

		if ($imgs.length && $imgs.find('.img').length > 1) {
			$imgs.slick({
				appendArrows: $this.find('.imgs-wrapper'),
				appendDots: $this.find('.imgs-dots'),
				autoplay: false,
				cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
				dots: true,
				fade: true,
				initialSlide: 0,
				speed: 800,
				touchMove: false,
				prevArrow: '<button type="button" class="slick-prev btn btn-arrow btn-arrow-prev d-none d-lg-block"><svg aria-hidden="true" class="normal"><use xlink:href="/assets/dist/images/svg/sprite.svg#arrow-left-small"></use></svg><svg aria-hidden="true" class="hover"><use xlink:href="/assets/dist/images/svg/sprite.svg#arrow-left-small"></use></svg><span class="sr-only">' + previousText + '</span></button>',
				nextArrow: '<button type="button" class="slick-next btn btn-arrow btn-arrow-next d-none d-lg-block"><svg aria-hidden="true" class="normal"><use xlink:href="/assets/dist/images/svg/sprite.svg#arrow-right-small"></use></svg><svg aria-hidden="true" class="hover"><use xlink:href="/assets/dist/images/svg/sprite.svg#arrow-right-small"></use></svg><span class="sr-only">' + nextText + '</span></button>',
				responsive: [
					{
						breakpoint: 768,
						settings: {
							speed: 500,
						}
					},
				]
			});
		}
	});

	/**
	 * Shop item currencies
	 */
	$mShopPageItem.find('.currencies').hover(function() {
		$(this).parents('.m-shop-page-item').addClass('m-shop-page-item-currencies-is-visible');
	}, function() {
		$(this).parents('.m-shop-page-item').removeClass('m-shop-page-item-currencies-is-visible');
	});

	/**
	 * Shop vision show more items
	 */
	var $mShopPageVision = $('.m-shop-page-vision');

	$mShopPageVision.find('.btn-show-more').on('click', function() {
		$mShopPageVision.find('.row.d-xl-none > .col-12:nth-child(n+3)').fadeIn();

		$(this).fadeOut();
	});

	/**
	 * Slick shop item images
	 */
	var $mShopPageFreeGiftsImgsSlick = $('.m-shop-page-free-gifts-imgs-slick');

	$mShopPageFreeGiftsImgsSlick.each(function() {
		var $this = $(this);

		if ($this.find('.m-shop-page-free-gifts-img').length > 1) {
			$this.slick({
				appendDots: $this.parent().find('.m-shop-page-free-gifts-imgs-dots'),
				arrows: false,
				autoplay: false,
				cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
				dots: true,
				initialSlide: 0,
				speed: 800,
				touchMove: false,
				prevArrow: '<button type="button" class="slick-prev btn btn-arrow btn-arrow-prev d-none d-lg-block"><svg aria-hidden="true" class="normal"><use xlink:href="/assets/dist/images/svg/sprite.svg#arrow-left-small"></use></svg><svg aria-hidden="true" class="hover"><use xlink:href="/assets/dist/images/svg/sprite.svg#arrow-left-small"></use></svg><span class="sr-only">' + previousText + '</span></button>',
				nextArrow: '<button type="button" class="slick-next btn btn-arrow btn-arrow-next d-none d-lg-block"><svg aria-hidden="true" class="normal"><use xlink:href="/assets/dist/images/svg/sprite.svg#arrow-right-small"></use></svg><svg aria-hidden="true" class="hover"><use xlink:href="/assets/dist/images/svg/sprite.svg#arrow-right-small"></use></svg><span class="sr-only">' + nextText + '</span></button>',
				responsive: [
					{
						breakpoint: 768,
						settings: {
							speed: 500,
						}
					},
				]
			});
		}
	});

	/**
	 * Shop diagonal scroll
	 */
	var $diagonalScrollElement = $('.diagonal-scroll-element');

	function positionDiagonalScrollElements() {
		if ($diagonalScrollElement) {
			$diagonalScrollElement.each(function() {
				var $this = $(this);
				var positionValue = ($this.offset().top - 95) * 0.25 + "px";

				$this.css({
					transform: "translateX(-" + positionValue + ")"
				});
			});
		}
	}

	if ($diagonalScrollElement) {
		var diagonalScrollElements = gsap.utils.toArray('.diagonal-scroll-container');

		positionDiagonalScrollElements();

		$window.on('resize', positionDiagonalScrollElements);

		diagonalScrollElements.forEach((diagonalScrollElement) => {
			gsap.to(diagonalScrollElement, {
				x: Math.abs($diagonalScrollElement.first().offset().left - $diagonalScrollElement.last().offset().left),
				ease: 'none',

				scrollTrigger: {
					trigger: 'body',
					scrub: true,
					start: "top top",
					end: "bottom bottom",
				}
			});
		});

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if(entry['isIntersecting'] === true) {
					entry.target.style.visibility = "visible";
				} else {
					entry.target.style.visibility = "hidden";
				}
			});
		}, { threshold: [0] });

		document.querySelectorAll('.diagonal-scroll-element').forEach((element) => {
			observer.observe(element)
		});
	}

	/**
	 * Shop item add to cart buttons and goal chart
	 */
	function setProductButtonAttrs(cartItem, cartItemRemoved) {
		var $cartItemButton = $('button[data-item-id="' + cartItem['id'] + '"]');

		if ($cartItemButton) {
			if ($cartItemButton.hasClass('has-limit') && parseInt($cartItemButton.attr('data-item-max-quantity')) === parseInt(cartItem['quantity'])) {
				$cartItemButton.addClass('has-limit-reached');
				$cartItemButton.attr('disabled', true);
				$cartItemButton.attr('aria-disabled', true);
			}

			if ($cartItemButton.hasClass('has-limit-reached') && parseInt($cartItemButton.attr('data-item-max-quantity')) > parseInt(cartItem['quantity'])) {
				$cartItemButton.removeClass('has-limit-reached');
				$cartItemButton.attr('disabled', false);
				$cartItemButton.attr('aria-disabled', false);
			}

			if (parseInt(cartItem['quantity']) > 0) {
				$cartItemButton.addClass('added');
				$cartItemButton.find('span.normal span, span.hover span').text($cartItemButton.attr('data-added-to-cart-text'));
			} else {
				$cartItemButton.removeClass('added');
				$cartItemButton.find('span.normal span, span.hover span').text($cartItemButton.attr('data-add-to-cart-text'));
			}

			if (typeof cartItem['customFields'][0] !== "undefined" && cartItem['customFields'][0]['value']) {
				$cartItemButton.parents('.m-shop-page-item').find('button[data-item-variation-value="' + cartItem['customFields'][0]['value'] + '"]').addClass('active');
			}

			if (cartItemRemoved) {
				$cartItemButton.removeClass('has-limit-reached');
				$cartItemButton.attr('disabled', false);
				$cartItemButton.attr('aria-disabled', false);
				$cartItemButton.removeClass('added');
				$cartItemButton.find('span.normal span, span.hover span').text($cartItemButton.attr('data-add-to-cart-text'));
			}
		}
	}

	document.addEventListener('snipcart.ready', () => {
		var Snipcart = window.Snipcart;

		Snipcart.events.on('item.added', (cartItem) => {
			setProductButtonAttrs(cartItem, false);
		});

		Snipcart.events.on('item.updated', (cartItem) => {
			setProductButtonAttrs(cartItem, false);
		});

		Snipcart.events.on('item.removed', (cartItem) => {
			setProductButtonAttrs(cartItem, true);
		});

		Snipcart.events.on('snipcart.initialized', (snipcartState) => {
			var cartItems = snipcartState['cart']['items']['items'];

			if (cartItems) {
				cartItems.forEach(function(cartItem) {
					setProductButtonAttrs(cartItem);
				});
			}
		});

		/**
		 * Shop free gift chart
		 */
		const ctxXs = document.getElementById('free-gift-chart-xs');
		const ctxLg = document.getElementById('free-gift-chart-lg');

		if (ctxXs && ctxLg) {
			const initialGoalValueXs = ctxXs.dataset.goal;
			const initialGoalValueLg = ctxLg.dataset.goal;
			const $chart = $('.chart');

			if (chartXs || chartLg) {
				chartXs.destroy();
				chartLg.destroy();
			}

			chartXs = new Chart(ctxXs, {
				type: 'doughnut',
				data: {
					datasets: [{
						data: [{id: 'Amount', nested: {value: ctxXs.dataset.amount}}, {id: 'Goal', nested: {value: ctxXs.dataset.goal}}],
						backgroundColor: ['rgba(255, 255, 255, 1)', 'rgba(0, 0, 0, 0)'],
						borderWidth: 0,
					}]
				},
				options: {
					parsing: {
						key: 'nested.value'
					},
					plugins: {
						legend: {
							display: false
						},
						title: {
							display: false
						}
					},
					responsive: true,
					cutout: '82%'
				},
			});

			chartLg = new Chart(ctxLg, {
				type: 'doughnut',
				data: {
					datasets: [{
						data: [{id: 'Amount', nested: {value: ctxLg.dataset.amount}}, {id: 'Goal', nested: {value: ctxLg.dataset.goal}}],
						backgroundColor: ['rgba(65, 51, 35, 1)', 'rgba(0, 0, 0, 0)'],
						borderWidth: 0,
					}]
				},
				options: {
					parsing: {
						key: 'nested.value'
					},
					plugins: {
						legend: {
							display: false
						},
						title: {
							display: false
						}
					},
					responsive: true,
					cutout: '82%'
				},
			});

			Snipcart.store.subscribe(() => {
				ctxXs.dataset.amount = Snipcart.store.getState().cart.total;
				ctxLg.dataset.amount = Snipcart.store.getState().cart.total;

				if (Snipcart.store.getState().cart.total >= initialGoalValueXs) {
					ctxXs.dataset.goal = 0;
					ctxXs.dataset.amount = initialGoalValueXs;
					$chart.addClass('chart-is-full');
					$chart.parents('.m-shop-fixed-footer-free-gifts').find('.text span').text($chart.parents('.m-shop-fixed-footer-free-gifts').find('.text').data('eligible-text'));
				} else {
					ctxXs.dataset.goal = initialGoalValueXs - Snipcart.store.getState().cart.total;
					ctxXs.dataset.amount = Snipcart.store.getState().cart.total;
					$chart.removeClass('chart-is-full');
					$chart.parents('.m-shop-fixed-footer-free-gifts').find('.text span').text($chart.parents('.m-shop-fixed-footer-free-gifts').find('.text').data('not-eligible-text'));
				}

				if (Snipcart.store.getState().cart.total >= initialGoalValueLg) {
					ctxLg.dataset.goal = 0;
					ctxLg.dataset.amount = initialGoalValueLg;
					$chart.addClass('chart-is-full');
					$chart.parents('.m-shop-fixed-footer-free-gifts').find('.text span').text($chart.parents('.m-shop-fixed-footer-free-gifts').find('.text').data('eligible-text'));
				} else {
					ctxLg.dataset.goal = initialGoalValueLg - Snipcart.store.getState().cart.total;
					ctxLg.dataset.amount = Snipcart.store.getState().cart.total;
					$chart.removeClass('chart-is-full');
					$chart.parents('.m-shop-fixed-footer-free-gifts').find('.text span').text($chart.parents('.m-shop-fixed-footer-free-gifts').find('.text').data('not-eligible-text'));
				}

				chartXs.data.datasets[0].data[0].nested.value = ctxXs.dataset.amount;
				chartLg.data.datasets[0].data[0].nested.value = ctxLg.dataset.amount;
				chartXs.data.datasets[0].data[1].nested.value = ctxXs.dataset.goal;
				chartLg.data.datasets[0].data[1].nested.value = ctxLg.dataset.goal;

				chartXs.update();
				chartLg.update();
			});
		}

		Snipcart.api.theme.customization.registerPaymentFormCustomization({
			input: {
				backgroundColor: 'transparent',
				color: '#fff',
				border: '1px solid #444444',
				fontSize: '16px',
				fontFamily: 'neusa-next-std-condensed, Open Sans, sans-serif',
				placeholder: {
					color: 'fff',
				},
			},
			label: {
				color: '#fff',
				fontFamily: 'neusa-next-std-condensed, Open Sans, sans-serif',
				fontSize: '16px',
			}
		});
	});

	/**
	 * Shop products variations
	 */
	var $variationsBtns = $mShopPageItem.find('.variations .btn');

	$variationsBtns.on('click', function() {
		var $this = $(this);
		var $parentShopItem = $this.parents('.m-shop-page-item');
		var $btnBuy = $parentShopItem.find('.btn-buy');

		if (!$this.hasClass('active') && !$this.parents('.sold-out').length) {
			$parentShopItem.find('.variations .btn').removeClass('active');
			$this.addClass('active');
			$btnBuy.attr('data-item-custom1-value', $this.data('item-variation-value'));
			$btnBuy.attr('disabled', false);
			$btnBuy.attr('aria-disabled', false);
			$parentShopItem.find('.price span.amount span.number').text((parseFloat($btnBuy.data('item-price')) + parseFloat($this.data('item-variation-amount'))).toFixed(2));
		}
	});

	/**
	 * Shop products stock live refresh
	 */
	clearInterval(getProductsDataInterval);

	if ($('.m-shop-page').length) {
		const get_products_data = () => $.ajax({
			url: $('.m-shop-page').data('wp-ajax-url'),
			data: { action: 'refresh_products_total' }
		}).done(function(data) {
			const products = JSON.parse(data);

			products.forEach((product) => {
				const $buyButton = $('button[data-item-id="' + product.userDefinedId + '"]');
				let nbStock = 0;

				if ($buyButton.length) {
					const $parentProductDiv = $buyButton.parents('.m-shop-page-item');
					const $flag = $parentProductDiv.find('.flag')

					if (product.inventoryManagementMethod === 'Single' && 'stock' in product) {
						if (!isNaN(parseInt(product.stock))) {
							nbStock = parseInt(product.stock);
						}
					} else if (product.inventoryManagementMethod === 'Variant' && 'variants' in product) {
						product.variants.forEach((variant) => {
							if ('stock' in variant) {
								if (!isNaN(parseInt(variant.stock))) {
									nbStock += parseInt(variant.stock);
								}
							}
						});
					}

					if (nbStock > 0) {
						$parentProductDiv.removeClass('sold-out');

						if (!$buyButton.hasClass('has-limit-reached')) {
							$buyButton.attr('disabled', false);
							$buyButton.attr('aria-disabled', false);
						}

						if ($buyButton.hasClass('added')) {
							$buyButton.find('span.normal, span.hover').html('<span>' + $buyButton.data('added-to-cart-text') + '</span>');
						} else {
							$buyButton.find('span.normal, span.hover').html('<span>' + $buyButton.data('add-to-cart-text') + '</span>');
						}

						let remainingWord = $flag.data('remaining-lg-text');

						if (!$('.barba-container').hasClass('en') && nbStock === 1) {
							remainingWord = 'restant';
						}

						$flag.html('<span class="d-lg-none">' + $flag.data('remaining-xs-text') + ' ' + nbStock + '</span>' +
							'<span class="d-none d-lg-inline">' + $flag.data('only-text') + ' ' + nbStock + ' ' + remainingWord + '</span>');

						if ($buyButton.data('item-max-quantity')) {
							$buyButton.find('span.normal, span.hover').append('<br><small>(' + $buyButton.data('limited-to-text') + ' ' + $buyButton.data('item-max-quantity') + ' ' + $buyButton.data('per-purchase-text') + ')</small>');
						}
					} else {
						$parentProductDiv.addClass('sold-out');

						$buyButton.attr('disabled', true);
						$buyButton.attr('aria-disabled', true);
						$buyButton.find('span.normal, span.hover').html('<span>' + $buyButton.data('sold-out-text') +'</span>');

						$flag.html('<span>' + $flag.data('sold-out-text') + '</span>');
					}
				}
			});
		});

		getProductsDataInterval = setInterval(get_products_data, 5 * 1000);
	}

	ScrollTrigger.refresh();
}


/**
 * Blog logo anim
 */
function blogLogoKeyshapeJS() {
	var $blogLogo = $('.l-header-blog').find('h1 svg');

	if ($blogLogo.length) {
		/*
		KeyshapeJS v1.1.0 (c) 2018-2019 Pixofield Ltd | pixofield.com/keyshapejs/mit-license */
		window.KeyshapeJS=function(){function t(a){return"undefined"!==typeof a}function x(a,b){return a&&0==a.indexOf(b)}function H(a){if(!isFinite(a))throw Error("Non-finite value");}function R(a){if(14>=a)return 16;var b=S[a];b||(b=t(ca[a])?0|(a.toLowerCase().indexOf("color")==a.length-5?48:0):1);return b}function K(a){return 0<=a?Math.pow(a,1/3):-Math.pow(-a,1/3)}function da(a,b,c,d){if(0==a)return 0==b?b=-d/c:(a=Math.sqrt(c*c-4*b*d),d=(-c+a)/(2*b),0<=d&&1>=d?b=d:(d=(-c-a)/(2*b),b=0<=d&&1>=d?d:0)),b;
			var e=c/a-b*b/(a*a)/3;c=b*b*b/(a*a*a)/13.5-b*c/(a*a)/3+d/a;var n=c*c/4+e*e*e/27;b=-b/(3*a);if(0>=n){if(0==e&&0==c)return-K(d/a);a=Math.sqrt(c*c/4-n);d=Math.acos(-c/2/a);c=Math.cos(d/3);d=Math.sqrt(3)*Math.sin(d/3);a=K(a);e=2*a*c+b;if(0<=e&&1>=e)return e;e=-a*(c+d)+b;if(0<=e&&1>=e)return e;e=a*(d-c)+b;if(0<=e&&1>=e)return e}else{a=K(-c/2+Math.sqrt(n));c=K(-c/2-Math.sqrt(n));d=a+c+b;if(0<=d&&1>=d)return d;d=-(a+c)/2+b;if(0<=d&&1>=d)return d}return 0}function ea(a,b){if(48==a&&"number"===typeof b)return"rgba("+
			(b>>>24)+","+(b>>>16&255)+","+(b>>>8&255)+","+(b&255)/255+")";if(64==a)return b=b.map(function(a){return a+"px"}),b.join(",");if(96==a){a="";for(var c=b.length,d=0;d<c;d+=2)a+=b[d],a+=b[d+1].join(",");return a}if(80==a){if(0==b[0])return"none";a="";c=b.length;for(d=0;d<c;)a+=T[b[d]],1==b[d]?a+="("+b[d+1]+") ":5==b[d]?(a+="("+b[d+1]+"px "+b[d+2]+"px "+b[d+3]+"px rgba("+(b[d+4]>>>24)+","+(b[d+4]>>16&255)+","+(b[d+4]>>8&255)+","+(b[d+4]&255)/255+")) ",d+=3):a=2==b[d]?a+("("+b[d+1]+"px) "):7==b[d]?a+
			("("+b[d+1]+"deg) "):a+("("+(0>b[d+1]?0:b[d+1])+") "),d+=2;return a}return 32==a?b+"px":b}function y(a){return 0>=a?0:255<=a?255:a}function fa(a,b,c,d){if(16==a||32==a)return(c-b)*d+b;if(0==a)return.5>d?b:c;if(48==a){if("number"===typeof b&&"number"===typeof c){var e=1-d;return(y(e*(b>>>24)+d*(c>>>24))<<24|y(e*(b>>>16&255)+d*(c>>>16&255))<<16|y(e*(b>>>8&255)+d*(c>>>8&255))<<8|y(e*(b&255)+d*(c&255)))>>>0}return.5>d?b:c}if(64==a){0==b.length&&(b=[0]);0==c.length&&(c=[0]);var n=b.length;b.length!=c.length&&
		(n=b.length*c.length);var l=[];for(a=0;a<n;++a){var f=b[a%b.length];var h=(c[a%c.length]-f)*d+f;0>h&&(h=0);l.push(h)}return l}if(96==a){if(b.length!=c.length)return.5>d?b:c;n=b.length;l=[];for(a=0;a<n;a+=2){if(b[a]!==c[a])return.5>d?b:c;l[a]=b[a];l[a+1]=[];for(f=0;f<b[a+1].length;++f)l[a+1].push((c[a+1][f]-b[a+1][f])*d+b[a+1][f])}return l}if(80==a){n=b.length;if(n!=c.length)return.5>d?b:c;l=[];for(a=0;a<n;){if(b[a]!=c[a]||1==b[a])return.5>d?b:c;l[a]=b[a];l[a+1]=(c[a+1]-b[a+1])*d+b[a+1];if(5==b[a]){l[a+
		2]=(c[a+2]-b[a+2])*d+b[a+2];l[a+3]=(c[a+3]-b[a+3])*d+b[a+3];e=1-d;var g=b[a+4],q=c[a+4];h=e*(g>>>24)+d*(q>>>24);var m=e*(g>>16&255)+d*(q>>16&255);f=e*(g>>8&255)+d*(q>>8&255);e=e*(g&255)+d*(q&255);l[a+4]=(y(m)<<16|y(f)<<8|y(e))+16777216*(y(h)|0);a+=3}a+=2}return l}return 0}function U(a,b){a:{var c=a+b[2];var d=b[4].length;for(var e=0;e<d;++e)if(c<b[4][e]){c=e;break a}c=d-1}d=b[2];e=b[4][c-1]-d;a=(a-e)/(b[4][c]-d-e);if(b[6]&&b[6].length>c-1)if(d=b[6][c-1],1==d[0])if(0>=a)a=0;else if(1<=a)a=1;else{e=
			d[1];var n=d[3];a=da(3*e-3*n+1,-6*e+3*n,3*e,-a);a=3*a*(1-a)*(1-a)*d[2]+3*a*a*(1-a)*d[4]+a*a*a}else 2==d[0]?(d=d[1],a=Math.ceil(a*d)/d):3==d[0]&&(d=d[1],a=Math.floor(a*d)/d);return fa(b[1]&240,b[5][c-1],b[5][c],a)}function L(){u||(v=(new Date).getTime()+V)}function O(a){if(a||!E){for(var b=!1,c=0;c<w.length;++c)w[c].J(a)&&(b=!0);if(a)for(;0<I.length;)if(a=I.shift(),c=a[0],1==a[1])c.onfinish&&(c.onfinish(),b=!0),c.I();else if(2==a[1]&&c.onloop)c.onloop();return b}}function W(){L();O(!0)&&!u?(E=!0,M(W)):
			E=!1}function N(){E||(E=!0,M(W))}function X(a,b){var c=[];a.split(b).forEach(function(a){c.push(parseFloat(a))});return c}function A(a){-1==a.indexOf(",")&&(a=a.replace(" ",","));return X(a,",")}function Y(a){a._ks||(a._ks={});if(!a._ks.transform){for(var b=a._ks.transform=[],c=0;14>=c;++c)b[c]=0;b[10]=1;b[11]=1;if(a=a.getAttribute("transform")){a=a.trim().split(") ");for(c=a.length-2;0<=c;--c)if(x(a[c],"translate(")){for(var d=0;d<c;d++)a.shift();break}c=a.shift();x(c,"translate(")&&(c=A(c.substring(10)),
			b[1]=c[0],b[2]=t(c[1])?c[1]:0,c=a.shift());x(c,"rotate(")&&(c=A(c.substring(7)),b[6]=c[0],c=a.shift());x(c,"skewX(")&&(c=A(c.substring(6)),b[7]=c[0],c=a.shift());x(c,"skewY(")&&(c=A(c.substring(6)),b[8]=c[0],c=a.shift());x(c,"scale(")&&(c=A(c.substring(6)),b[10]=c[0],b[11]=t(c[1])?c[1]:c[0],c=a.shift());x(c,"translate(")&&(c=A(c.substring(10)),b[13]=c[0],b[14]=t(c[1])?c[1]:0)}}}function Z(a){this.l=a;this.A=[];this.C=[];this.v=0;this.s=this.a=this.c=null;this.h=this.f=this.g=0;this.b=1;this.i=this.F=
			this.o=!1}function J(a,b,c){b=a[b];void 0===b&&(b=a[c]);return b}function ha(a){return Array.isArray(a)?a:x(a,"cubic-bezier(")?(a=a.substring(13,a.length-1).split(","),[1,parseFloat(a[0]),parseFloat(a[1]),parseFloat(a[2]),parseFloat(a[3])]):x(a,"steps(")?(a=a.substring(6,a.length-1).split(","),[a[1]&&"start"==a[1].trim()?2:3,parseFloat(a[0])]):[0]}function ia(a){a=a.trim();return x(a,"#")?(parseInt(a.substring(1),16)<<8)+255:x(a,"rgba(")?(a=a.substring(5,a.length-1),a=a.split(","),(parseInt(a[0],
			10)<<24)+(parseInt(a[1],10)<<16)+(parseInt(a[2],10)<<8)+255*parseFloat(a[3])<<0):a}function aa(a){!1===a.i&&(w.push(a),a.i=!0,!1!==a.l.autoplay&&a.play());return this}function P(a){if(!0===a.i){a._cancel();var b=w.indexOf(a);-1<b&&w.splice(b,1);b=I.indexOf(a);-1<b&&I.splice(b,1);a.i=!1}return this}var Q=Error("Not in timeline list"),ba="mpath posX posY    rotate skewX skewY  scaleX scaleY  anchorX anchorY".split(" "),ja=" translate translate    rotate skewX skewY  scale scale  translate translate".split(" "),
			T="none url blur brightness contrast drop-shadow grayscale hue-rotate invert opacity saturate sepia".split(" "),M=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||null;M||(M=function(a){window.setTimeout(a,16)});var S={d:97,fill:48,fillOpacity:16,filter:80,height:33,opacity:16,offsetDistance:33,stroke:48,strokeDasharray:64,strokeDashoffset:32,strokeOpacity:16,strokeWidth:32,transform:1,
			width:33},ca=window.getComputedStyle(document.documentElement),E=!1,v=(new Date).getTime(),u,V=0,w=[],I=[];Z.prototype={B:function(a){var b=0;if(null!==this.c){var c=this.j();0<this.b&&null!==c&&c>=this.f?this.h?(this.c=v-this.g/this.b,this.h--,b=2):(b=1,a?this.a=c:this.a=this.s?Math.max(this.s,this.f):this.f):0>this.b&&null!==c&&c<=this.g?this.h&&Infinity!=this.f?(this.c=v-this.f/this.b,this.h--,b=2):(this.h=0,b=1,a?this.a=c:this.a=this.s?Math.min(this.s,this.g):this.g):null!==c&&0!=this.b&&(a&&
			null!==this.a&&(this.c=v-this.a/this.b),this.a=null)}this.s=this.j();return b},J:function(a){a&&(this.o&&(this.o=!1,null===this.c&&(0!=this.b&&null!==this.a?(this.c=v-this.a/this.b,this.a=null):this.c=v)),null===this.a&&null!==this.c&&(a=this.B(!1),0!=a&&I.push([this,a])));a=this.j();if(null===a)return!1;for(var b=this.A,c=this.C,d=0;d<b.length;++d){for(var e=b[d],n=!1,l=0;l<c[d].length;++l){var f=c[d][l],h=f[0];if(null!==h){var g=f[2];var q=f[4].length,m=f[4][q-1]-g;g=0==m?f[5][q-1]:a<=g?f[5][0]:
				a>=g+f[3]?0==f[3]%m?f[5][q-1]:U(f[3]%m,f):U((a-g)%m,f);0==h?(e._ks.mpath=f[8],e._ks.transform[h]=g,n=!0):14>=h?(e._ks.transform[h]=g,n=!0):(g=ea(f[1]&240,g),f[1]&1?e.setAttribute(h,g):e.style[h]=g)}}if(n){Y(e);n=e._ks.transform;l="";if(f=e._ks.mpath)g=n[0],0>g&&(g=0),100<g&&(g=100),g=g*f[2]/100,h=f[1].getPointAtLength(g),l="translate("+h.x+","+h.y+") ",f[0]&&(.5>g?(g=h,h=f[1].getPointAtLength(.5)):g=f[1].getPointAtLength(g-.5),l+="rotate("+180*Math.atan2(h.y-g.y,h.x-g.x)/Math.PI+") ");for(f=1;f<n.length;++f)h=
				n[f],h!=(10==f||11==f?1:0)&&(l+=" "+ja[f]+"(",l=2>=f?l+(1==f?h+",0":"0,"+h):13<=f?l+(13==f?h+",0":"0,"+h):10<=f?l+(10==f?h+",1":"1,"+h):l+h,l+=")");e.setAttribute("transform",l)}}return"running"==this.m()},I:function(){!1!==this.l.autoremove&&"finished"==this.m()&&P(this)},D:function(){if(!this.F){this.F=!0;for(var a=this.A,b=this.C,c=0;c<a.length;++c)for(var d=a[c],e=0;e<b[c].length;++e)14>=b[c][e][0]&&Y(d)}},u:function(a){if("number"==typeof a)return a;if(!t(this.l.markers)||!t(this.l.markers[a]))throw Error("Invalid marker: "+
				a);return+this.l.markers[a]},play:function(a){t(a)&&null!==a&&(a=this.u(a),H(a),0>this.b&&a<this.g&&(a=this.g),0<this.b&&a>this.f&&(a=this.f),this.w(a,!0));if(!this.i)throw Q;a=this.j();if(0<this.b&&(null===a||a>=this.f))this.a=this.g;else if(0>this.b&&(null===a||a<=this.g)){if(Infinity==this.f)throw Error("Cannot seek to Infinity");this.a=this.f}else 0==this.b&&null===a&&(this.a=this.g);if(null===this.a)return this;this.c=null;this.o=!0;this.D();N();return this},pause:function(a){if(!this.i)throw Q;
				t(a)&&(a=this.u(a),H(a));if("paused"!=this.m()){L();var b=this.j();if(null===b)if(0<=this.b)this.a=this.g;else{if(Infinity==this.f)throw Error("Cannot seek to Infinity");this.a=this.f}null!==this.c&&null===this.a&&(this.a=b);this.c=null;this.o=!1;this.B(!1);this.D();N()}t(a)&&this.w(a,!0);return this},range:function(a,b){if(0==arguments.length)return{"in":this.g,out:this.f};var c=this.u(a),d=this.v;t(b)&&(d=this.u(b));H(c);if(0>c||0>d||c>=d||isNaN(d))throw Error("Invalid range");var e=this.m();this.g=
				c;this.f=d;"finished"==e&&"running"==this.m()&&this.play();return this},loop:function(a){if(!t(a))return{count:this.h};this.h=!0===a?Infinity:Math.floor(a);if(0>this.h||isNaN(this.h))this.h=0;return this},j:function(){return null!==this.a?this.a:null===this.c?null:(v-this.c)*this.b},w:function(a,b){b&&L();null!==a&&(this.D(),null!==this.a||null===this.c||0==this.b?(this.a=a,O(!1)):this.c=v-a/this.b,this.i||(this.c=null),this.s=null,this.B(!0),N())},G:function(){return this.j()},time:function(a){if(t(a)){if(!this.i)throw Q;
				a=this.u(a);H(a);this.w(a,!0);return this}return this.G()},m:function(){var a=this.j();return this.o?"running":null===a?"idle":null===this.c?"paused":0<this.b&&a>=this.f||0>this.b&&a<=this.g?"finished":"running"},state:function(){return this.m()},duration:function(){return this.v},H:function(a){H(a);L();var b=this.j();this.b=a;null!==b&&this.w(b,!1)},rate:function(a){return t(a)?(this.H(a),this):this.b},marker:function(a){return t(this.l.markers)?this.l.markers[a]:void 0},_cancel:function(){if(!this.i||
				"idle"==this.m())return this;this.c=this.a=null;this.o=!1;return this}};return{version:"1.1.0",animate:function(){var a={};if(1==arguments.length%2){a=arguments[arguments.length-1];var b={};for(c in a)b[c]=a[c];a=b}var c=new Z(a);a=arguments;for(var d=b=0;d<a.length-1;d+=2){var e=a[d];var n=e instanceof Element?e:document.getElementById(e.substring(1));if(!n)throw Error("Invalid target: "+e);e=n;n=a[d+1];e._ks||(e._ks={});for(var l=[],f=0;f<n.length;++f){var h=n[f],g=J(h,"p","property");if("string"!=
				typeof g||-1!=g.indexOf("-")||""===g||!(0<S[g]||0<=ba.indexOf(g)))throw Error("Invalid property: "+g);var q=ba.indexOf(g);""!==g&&0<=q&&(g=q);q=R(g);var m=J(h,"t","times");if(!m||2>m.length)throw Error("Not enough times");m=m.slice();if(!isFinite(m[0])||0>m[0])throw Error("Invalid time: "+m[0]);for(var B=1;B<m.length;++B)if(!isFinite(m[B])||0>m[B]||m[B]<m[B-1])throw Error("Invalid time: "+m[B]);B=m[0];var v=m[m.length-1]-B,y=h.iterations||0;1>y&&(y=1);v*=y;b<v+B&&(b=v+B);var u=J(h,"v","values");if(!u||
				u.length!=m.length)throw Error("Values do not match times");u=u.slice();for(var C=g,k=u,w=R(C)&240,p=0;p<k.length;++p)if(96==w){for(var G=k[p].substring(6,k[p].length-2).match(/[A-DF-Za-df-z][-+0-9eE., ]*/ig),A=[],r=0;r<G.length;++r){A.push(G[r][0]);for(var z=1<G[r].trim().length?G[r].substring(1).split(","):[],F=0;F<z.length;++F)z[F]=parseFloat(z[F]);A.push(z)}k[p]=A}else if(48==w)x(k[p],"#")?(G=9==k[p].length,k[p]=parseInt(k[p].substring(1),16),G||(k[p]=256*k[p]|255)):x(k[p],"url(")||"none"==k[p]||
				(console.warn("unsupported color: "+k[p]),k[p]=0);else if(80==w){G=k;A=p;r=k[p];if("none"==r)r=[0];else{z=[];for(var D=r.indexOf("(");0<D;)if(F=T.indexOf(r.substring(0,D)),0<=F){z.push(F);var E=r.indexOf(") ");0>E&&(E=r.length-1);D=r.substring(D+1,E).split(" ");5==F?(z.push(parseFloat(D[0])),z.push(parseFloat(D[1])),z.push(parseFloat(D[2])),z.push(ia(D[3]))):1==F?z.push(D[0]):z.push(parseFloat(D[0]));r=r.substring(E+1).trim();D=r.indexOf("(")}else break;r=z}G[A]=r}else 64==w?"none"!=k[p]?/^[0-9 .]*$/.test(k[p])?
				k[p]=X(k[p]," "):(console.warn("unsupported value: "+k[p]),k[p]=[0]):k[p]=[0]:32==w?(H(k[p]),k[p]=parseFloat(k[p])):0===C&&(k[p]=parseFloat(k[p]));C=J(h,"e","easing");k=m.length;for(C||(C=[]);C.length<k;)C.push([1,0,0,.58,1]);for(k=0;k<C.length;++k)C[k]=ha(C[k]);q=[g,q,B,v,m,u,C,y];m=J(h,"mp","motionPath");t(m)&&0===g&&(q[8]=[],q[8][0]=h.motionRotate,h=document.createElementNS("http://www.w3.org/2000/svg","path"),m||(m="M0,0"),h.setAttribute("d",m),q[8][1]=h,q[8][2]=h.getTotalLength());l.push(q)}0<
			l.length&&(c.A.push(e),c.C.push(l))}c.v=b;c.g=0;c.f=c.v;aa(c);return c},add:aa,remove:P,removeAll:function(){for(var a=w.length-1;0<=a;--a)P(w[a]);return this},timelines:function(){return w.slice()},globalPlay:function(){u&&(V=u-(new Date).getTime(),u=void 0,N());return this},globalPause:function(){u||(u=v,O(!1));return this},globalState:function(){return u?"paused":"running"}}}();

		/**
		 * KeyshapeJS blog logo animation
		 */
		if(KeyshapeJS.version.indexOf('1.')!=0)throw Error('Expected KeyshapeJS v1.*.*');window.ks=document.ks=KeyshapeJS;(function(ks){
			ks.animate("#d24okslr63bnr8purtd4oc0v",[{p:'rotate',t:[0,600],v:[-29,-3],e:[[1,.645,.045,.355,1],[0]]}],
				"#j6nu3xv4n3xotzu9t0vjqhwx",[{p:'opacity',t:[2000,2750],v:[.8,0],e:[[0],[0]]}],
				"#bh65pauf9723igqbvzd7mc8l",[{p:'rotate',t:[1000,1500],v:[-29,-3],e:[[1,.645,.045,.355,1],[0]]}],
				"#nn5o408q522grr7g1qlxwl1x",[{p:'fill',t:[0,417],v:['#000000','#141414'],e:[[0],[0]]}],
				{autoplay: false,autoremove:false,markers:{"in":0,"rollover":1000,"rollout":2000}}).range(0,2767);
			if(document.location.search.substr(1).split('&').indexOf('global=paused')>=0)ks.globalPause()})(KeyshapeJS);

		ksTl = KeyshapeJS.timelines()[0];

		ksTl.pause();

		ksTl.play();
		ksTl.time("in");
		ksTl.range(0, 1000);

		$blogLogo.on('mouseenter', function() {
			ksTl.time("rollover");
			ksTl.range(1000, 2000);
		});

		$blogLogo.on('mouseleave', function() {
			ksTl.time("rollout");
			ksTl.range(2000, 3000);
		});
	}
}


/**
 * Barba
 * Remap jQuery to $
 */
(function ($) {
	var cLoadingAnimOut = 200; // Temps de l'anim out du loading

	$(function() {
		var loaded = false;
		var maxLoad = 3000;

		// On load
		// ==========================================================================
		$window.on('load', function() {
			loaded = true;

			setTimeout(function() {
				load();
			}, 100);
		});

		// Maximum load
		// ==========================================================================
		setTimeout(function() {
			if(!loaded) {
				load();
			}
		}, maxLoad);

		// Load
		// ==========================================================================
		function load() {
			$body.removeClass('is-loading');

			$body.addClass('dom-is-loaded');

			/**
			 * Set isFirstPageView
			 */
			isFirstPageView = false;

			scrollToHashtagOnLoad();

			setTimeout(function() {
				/**
				 * Scroll Appear Animations trigger
				 */
				$body.addClass('is-anim-ready');

				if (!$('.page-template-shop').length) {
					var $scrollAppear = $('.scroll-appear');

					$scrollAppear.each(function() {
						var $this = $(this);

						scrollAppear($this);
					});

					$window.on('scroll resize', function() {
						$scrollAppear.each(function() {
							var $this = $(this);

							scrollAppear($this);
						});
					});
				}


				/**
				 * On scroll lottie anim
				 */
				var $lotties = $('lottie-player');

				if ($lotties.length) {
					$lotties.each(function() {
						startLottieOnScroll($(this));
					});

					$window.on('scroll resize', function() {
						$lotties.each(function() {
							startLottieOnScroll($(this));
						});
					});
				}


				/**
				 * On scroll videos anim
				 */
				var $onScrollVideo = $('.on-scroll-video');

				if ($onScrollVideo.length) {
					if (Modernizr.video.webm && is.not.ios()) {
						$onScrollVideo.each(function() {
							startOnScrollVideo($(this));
						});

						$window.on('scroll resize', function() {
							$onScrollVideo.each(function() {
								startOnScrollVideo($(this));
							});
						});
					} else {
						$onScrollVideo.each(function() {
							var $this = $(this),
								$video = $this.find('video'),
								fallbackUrl = $video.data('fallback');

							if ($video.length) {
								$video.remove();

								$this.append('<img src="' + fallbackUrl + '" alt="" class="d-block">');
							}
						});
					}
				}


				/**
				 * Jobs title trigger anim after load
				 */
				var $jobsTitle = $('.jobs-title');

				if ($jobsTitle.length) {
					var $jobsTitleParent = $jobsTitle.parent();

					$jobsTitleParent.css({
						height: $jobsTitleParent.height()
					});

					$jobsTitle.remove();

					setTimeout(function() {
						$jobsTitleParent.prepend($jobsTitle);

						$jobsTitleParent.css({
							height: 'auto'
						});
					}, 200);
				}


				/**
				 * Blog logo anim after load
				 */
				blogLogoKeyshapeJS();
			}, cLoadingAnimOut);

			$('.barba-container').addClass('is-loaded');
		}
	});

	var PageTransition = Barba.BaseTransition.extend({
		start: function() {
			Promise
			.all([this.newContainerLoading, this.transitionOut()])
			.then(this.transitionIn.bind(this));
		},

		transitionOut: function() {
			$body.removeClass('page-is-loaded').addClass('is-changing-page');

			if ($body.hasClass('sliding-panel-is-open')) {
				setTimeout(function() {
					slidingPanel.close();
				}, 200); // Temps de l'anim out du Sliding Panel
			}

			return $(this.oldContainer).addClass('is-changing-page').delay(800).promise(); // Temps de l'anim in
		},

		transitionIn: function() {
			var _this = this;

			cLoadingAnimOut = 200; // Temps de l'anim out du loading

			$(this.newContainer).addClass('is-loaded');

			$(this.oldContainer).hide();

			$('html,body').animate({
				scrollTop: 0
			}, 1, '', function() {
				if ('scrollRestoration' in history) {
					history.scrollRestoration = 'manual';
				}

				$body.removeClass('is-changing-page').addClass('page-is-loaded');

				$body.removeClass('is-anim-ready');

				/**
				 * Set isFirstPageView
				 */
				isFirstPageView = false;

				scrollToHashtagOnLoad();

				clearTimeout(transitionInTimeout);

				transitionInTimeout = setTimeout(function() {
					/**
					 * Scroll Appear Animations trigger
					 */
					$body.addClass('is-anim-ready');

					if (!$('.page-template-shop').length) {
						var $scrollAppear = $('.scroll-appear');

						$scrollAppear.each(function() {
							var $this = $(this);

							scrollAppear($this);
						});

						$window.on('scroll resize', function() {
							$scrollAppear.each(function() {
								var $this = $(this);

								scrollAppear($this);
							});
						});
					}


					/**
					 * On scroll videos anim
					 */
					var $onScrollVideo = $('.on-scroll-video');

					if ($onScrollVideo.length) {
						if (Modernizr.video.webm && is.not.ios()) {
							$onScrollVideo.each(function() {
								startOnScrollVideo($(this));
							});

							$window.on('scroll resize', function() {
								$onScrollVideo.each(function() {
									startOnScrollVideo($(this));
								});
							});
						} else {
							$onScrollVideo.each(function() {
								var $this = $(this),
									$video = $this.find('video'),
									fallbackUrl = $video.data('fallback');

								if ($video.length) {
									$video.remove();

									$this.append('<img src="' + fallbackUrl + '" alt="" class="d-block">');
								}
							});
						}
					}


					/**
					 * On scroll lottie anim
					 */
					var $lotties = $('lottie-player');

					if ($lotties.length) {
						$lotties.each(function() {
							startLottieOnScroll($(this));
						});

						$window.on('scroll resize', function() {
							$lotties.each(function() {
								startLottieOnScroll($(this));
							});
						});
					}


					/**
					 * Jobs title trigger anim after load
					 */
					var $jobsTitle = $('.jobs-title');

					if ($jobsTitle.length) {
						var $jobsTitleParent = $jobsTitle.parent();

						$jobsTitleParent.css({
							height: $jobsTitleParent.height()
						});

						$jobsTitle.remove();

						setTimeout(function() {
							$jobsTitleParent.prepend($jobsTitle);

							$jobsTitleParent.css({
								height: 'auto'
							});
						}, 200);
					}


					/**
					 * Blog logo anim after load
					 */
					blogLogoKeyshapeJS();
				}, cLoadingAnimOut);
			});

			_this.done();
		}
	});

	Barba.Pjax.getTransition = function() {
		return PageTransition;
	};

	Barba.Dispatcher.on('transitionCompleted', function() {
		if (!isFirstPageView) {
			if (typeof __gaTracker === 'function') {
				__gaTracker('set', 'page', window.location.pathname);
				__gaTracker('send', 'pageview');
			}
		}

		initScript();
	});

	Barba.Pjax.start();
	Barba.Prefetch.init();

}(window.jQuery || window.$));
