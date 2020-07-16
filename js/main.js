$(function () {
    $('.clients_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: true,
        prevArrow: '<button class="slider_btn slider_btn_left"><svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip - path = "url(#clip0)"><path d = "M2.35559 4.50495L6.65903 0.205244C6.93278 -0.06841 7.37662 -0.0684101 7.65024 0.205244C7.92388 0.478655 7.92388 0.922102 7.65024 1.19549L3.84236 5.00007L7.65013 8.80452C7.92377 9.07805 7.92377 9.52145 7.65013 9.79486C7.37649 10.0684 6.93267 10.0684 6.65892 9.79486L2.35548 5.49509C2.21866 5.35831 2.15033 5.17925 2.15033 5.0001C2.15033 4.82085 2.2188 4.64166 2.35559 4.50495Z" fill = "white" /></g><defs><clipPath id = "clip0"><rect width = "10.0083" height = "10" fill = "white" transform = "translate(10.0078 10) rotate(180)" /></clipPath></defs></svg></button>',
        nextArrow: '<button class="slider_btn slider_btn_right"><svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip - path = "url(#clip0)"><path d = "M7.66394 5.49505L3.3605 9.79476C3.08675 10.0684 2.64291 10.0684 2.36929 9.79476C2.09565 9.52134 2.09565 9.0779 2.36929 8.80451L6.17717 4.99993L2.3694 1.19548C2.09576 0.921954 2.09576 0.478552 2.3694 0.205141C2.64304 -0.0683804 3.08686 -0.0683804 3.36061 0.205141L7.66405 4.50491C7.80087 4.64169 7.8692 4.82075 7.8692 4.9999C7.8692 5.17915 7.80073 5.35834 7.66394 5.49505Z" fill = "white" /></g><defs><clipPath id = "clip0"><rect width = "10.0083" height = "10" fill = "white" transform = "translate(0.0117188)" /></clipPath></defs></svg></button >',
        infinite: false
    });
    $('.benefits_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slider_btn slider_btn_left"><svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip - path = "url(#clip0)"><path d = "M2.35559 4.50495L6.65903 0.205244C6.93278 -0.06841 7.37662 -0.0684101 7.65024 0.205244C7.92388 0.478655 7.92388 0.922102 7.65024 1.19549L3.84236 5.00007L7.65013 8.80452C7.92377 9.07805 7.92377 9.52145 7.65013 9.79486C7.37649 10.0684 6.93267 10.0684 6.65892 9.79486L2.35548 5.49509C2.21866 5.35831 2.15033 5.17925 2.15033 5.0001C2.15033 4.82085 2.2188 4.64166 2.35559 4.50495Z" fill = "white" /></g><defs><clipPath id = "clip0"><rect width = "10.0083" height = "10" fill = "white" transform = "translate(10.0078 10) rotate(180)" /></clipPath></defs></svg></button>',
        nextArrow: '<button class="slider_btn slider_btn_right"><svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip - path = "url(#clip0)"><path d = "M7.66394 5.49505L3.3605 9.79476C3.08675 10.0684 2.64291 10.0684 2.36929 9.79476C2.09565 9.52134 2.09565 9.0779 2.36929 8.80451L6.17717 4.99993L2.3694 1.19548C2.09576 0.921954 2.09576 0.478552 2.3694 0.205141C2.64304 -0.0683804 3.08686 -0.0683804 3.36061 0.205141L7.66405 4.50491C7.80087 4.64169 7.8692 4.82075 7.8692 4.9999C7.8692 5.17915 7.80073 5.35834 7.66394 5.49505Z" fill = "white" /></g><defs><clipPath id = "clip0"><rect width = "10.0083" height = "10" fill = "white" transform = "translate(0.0117188)" /></clipPath></defs></svg></button >',
        infinite: false,
        dots: true,

    });
    $('.contacts_info_title').on('click', function () {
        // $('.contacts_item').removeClass('contacts_item_active');
        $(this).parent().toggleClass('contacts_item_active');
    });


    const selectElement = document.querySelector('[data-shops-select]');
    const selectReal = document.querySelector('.header_top_select');
    console.log('selectReal: ', selectReal);
    selectElement.addEventListener('click', function (event) {
        if (event.target.hasAttribute('data-shops-item')) {
            const itemTitle = event.target.getAttribute('data-shops-item');
            event.target.closest('[data-shops-select]').querySelector('[data-shops-title]').textContent = itemTitle;
            event.target.closest('[data-shops-select]').querySelector('.shops_dropdown').classList.toggle('hidden');
            selectReal.value = itemTitle;
        } else {
            this.querySelector('.shops_dropdown').classList.toggle('hidden');
        }
    });

    $('.select_cities').styler();

});