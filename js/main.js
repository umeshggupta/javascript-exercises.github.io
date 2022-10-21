$(document).ready(function () {
    // Mobile hamburger Menu JS
    $(".m-menu-btn").click(function () {
        $(".header-section").toggleClass("menu-open");
        $(this).toggleClass("m-menu-btn-ext");
    });

    // close when click off of header
    $(document).on('click touchstart', function (e) {
        if (!$(e.target).is('.m-menu-btn, .m-menu-btn , .header-section, .header-section *')) {
            $('.m-menu-btn, .header-section').removeClass('menu-open');
            if ($(".m-menu-btn").hasClass("m-menu-btn-ext")) {
                $(".m-menu-btn").removeClass("m-menu-btn-ext");
            }
        }

    });
    $(".menu-close-btn").click(function () {
        $(".header-section").removeClass("menu-open");
        $(".m-menu-btn").removeClass("m-menu-btn-ext");
    });

    // Copy Content JS
    $(".copy-content .content a").on("click", function () {
        var copyText = $(this).parent().text();
        copyText = copyText.trim();
        var copiedText = $(this).parent().find(".copiedtext");
        navigator.clipboard.writeText(copyText);
        $(copiedText).addClass("copied").text("Copied");
    });

    // Hide p tag content to show more button JS
    $('.show-more-btn').click(function () {
        $('.moretext').slideToggle();
        if ($('.show-more-btn').text() == "Read more") {
            $(this).text("Read less")
        } else {
            $(this).text("Read more")
        }
    });

    $(".scroll-btn").click(function () {
        $('html,body').animate({
            scrollTop: $(".copy-content-clipboard-button-section").offset().top
        },
            'slow');
    });

    // Add forms data in a table with a button click and remove with Filters JS
    $(".add-row").click(function () {
        var company = $("#company").val();
        var contact = $("#contact").val();
        var country = $("#country").val();
        var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + company + "</td><td>" + contact + "</td><td>" + country + "</td></tr>";
        $("table tbody").append(markup);
    });
    $(".delete-row").click(function () {
        $("table tbody").find('input[name="record"]').each(function () {
            if ($(this).is(":checked")) {
                $(this).parents("tr").remove();
            }
        });
    });
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    // Our Team  JS
    $(".our-team-list li a").on("click", function (e) {
        e.preventDefault(); // prevent hard jump, the default behavior
        var target = $(this).attr("href"); // Set the target as variable
        $("html, body").animate(
            {
                scrollTop: $(target).offset().top - 50,
            },
            1000
        );
    });
    var trackingSidebar = throttle(function () {
        var scrollDistance = $(window).scrollTop();
        $(".our-team-block").each(function (i) {
            if ($(this).position().top - 100 <= scrollDistance) {
                $(".our-team-list li a.active").removeClass("active");
                $(".our-team-list li a").eq(i).addClass("active");
            }
        });
    }, 100);

    window.addEventListener("scroll", trackingSidebar);

});