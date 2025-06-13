document.addEventListener('DOMContentLoaded', function() {

    // 1. ハンバーガーメニュー
    const hamburger = document.getElementById('hamburger-menu');
    const nav = document.getElementById('global-nav');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            // クラスを付け外し
            this.classList.toggle('active');
            nav.classList.toggle('open');
            // 背景のスクロールを制御
            document.body.classList.toggle('no-scroll');
        });
    }

    // 2. スクロールに応じたフェードイン
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2 // 20%表示されたら実行
    });

    fadeInElements.forEach(el => {
        observer.observe(el);
    });

    // 3. ギャラリーページのモーダル機能
    const modal = document.getElementById('modal');
    if (modal) {
        const modalImg = document.getElementById('modal-img');
        const galleryImages = document.querySelectorAll('.gallery-item img');
        const closeBtn = document.querySelector('.close-btn');

        galleryImages.forEach(img => {
            img.addEventListener('click', function() {
                modal.style.display = 'block';
                modalImg.src = this.src;
            });
        });

        // 閉じるボタン
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        // モーダル背景クリックで閉じる
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});