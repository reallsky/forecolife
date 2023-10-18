document.addEventListener('DOMContentLoaded', function() {
    //추천 제품 카드 설정//
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const productCarousel = document.querySelector(".product-carousel");
    const cardWidth = productCarousel.offsetWidth / 3; // 한 번에 표시되는 카드 수

    let currentPosition = 0;

    nextBtn.addEventListener("click", () => {
        currentPosition -= cardWidth;
        if (currentPosition < -2 * cardWidth) {
            currentPosition = 0; // 마지막 카드에서 다시 처음으로 순환
        }
        productCarousel.style.transform = `translateX(${currentPosition}px)`;
    });

    prevBtn.addEventListener("click", () => {
        currentPosition += cardWidth;
        if (currentPosition > 0) {
            currentPosition = -2 * cardWidth; // 처음 카드에서 다시 마지막으로 순환
        }
        productCarousel.style.transform = `translateX(${currentPosition}px)`;
    });

    // 모든 <a> 태그 가져오기
    const allLinks = document.querySelectorAll('a');

    // 모든 <a> 태그를 반복하면서 외부 링크에 target="_blank" 속성 추가
    allLinks.forEach(link => {
        const href = link.getAttribute('href');

        // 외부 링크 여부를 확인
        if (href && href.startsWith('http://') || href.startsWith('https://')) {
            link.setAttribute('target', '_blank');
        }
    });



    //둘러보기//
    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");

    searchBtn.addEventListener("click", function() {
        const searchQuery = searchInput.value; // 검색어 가져오기
        // 검색 페이지로 이동하면서 검색어를 쿼리 문자열로 전달
        window.location.href = "검색페이지의URL?query=" + searchQuery;
    });



    // 스태프, 코디 탭 변경

    function Change_Brand_Tab(obj, kind) {
        $("#brand_kind").val(kind);     //현재 선택한 브랜드 카테고리를 나타내기 위한 값
        $("#brand_tab > a").removeClass("active");      //탭 내의 모든 링크 (a 태그)에서 "active" 클래스를 제거
        $(obj).addClass('active');      //클릭된 링크 (a 태그)에 "active" 클래스를 추가하여 해당 링크를 활성 상태로 표시
        if(kind == "donggubat_area") {
            $("#donggubat_area").show();
            $("#mamaforest_area").hide();
            $('#moreformore_area').hide();
            $('#samcraft_area').hide();
        } else if(kind == "mamaforest_area") {
            $("#donggubat_area").hide();
            $("#mamaforest_area").show();
            $('#moreformore_area').hide();
            $('#samcraft_area').hide();
        } else if (kind == "moreformore_area") {
            $("#donggubat_area").hide();
            $("#mamaforest_area").hide();
            $('#moreformore_area').show();
            $('#samcraft_area').hide();
        } else if (kind == 'samcraft_area') {
            $("#donggubat_area").hide();
            $("#mamaforest_area").hide();
            $('#moreformore_area').hide();
            $('#samcraft_area').show();
        }
    }
});

    

