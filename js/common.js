$(function () {
	var topBtn = $(".toTop");
	topBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
		var scrollHeight = $(document).height(); //ページ全体の高さ
		var scrollPos = $(window).height() + $(window).scrollTop(); //現在地
		var footerHeight = $("footer").innerHeight(); //フッタの高さ
		if (scrollHeight - scrollPos <= footerHeight) {
			//ドキュメントの高さと現在地の差がfooterの高さ以下になったら
			topBtn.css({
				position: "absolute",
				bottom: footerHeight + 60 + "px",
			});
		} else {
			topBtn.css({
				position: "fixed",
				bottom: "20px",
			});
		}
	});
	topBtn.click(function () {
		$("body,html").animate(
			{
				scrollTop: 0,
			},
			500
		);
		return false;
	});
});

$(function () {
	$(window).on("load scroll resize", function () {
		$(".fadeIn").each(function () {
			// HTMLのfadeInさせたいクラスにfadeIn fadeDなどクラス名つける
			var imgPosition = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > imgPosition - windowHeight + windowHeight / 5) {
				$(this).addClass("active");
				// fadeInクラスに activeクラスを付与
				// CSSで activeクラス と下記fade~クラスに処理をあてる
				// 例 fadeU fadeR fadeD fadeL
			}
		});
	});
});
