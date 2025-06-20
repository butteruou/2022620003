// 카드 클릭 시 ripple(물결) 효과 + 접근성 개선
document.querySelectorAll('.drug-card-link').forEach(link => {
  link.addEventListener('click', function(e) {
    // ripple 효과
    const card = this.querySelector('.drug-card');
    let ripple = document.createElement('span');
    ripple.className = 'ripple';
    card.appendChild(ripple);

    // 위치 계산
    const rect = card.getBoundingClientRect();
    ripple.style.left = (e.clientX - rect.left) + 'px';
    ripple.style.top = (e.clientY - rect.top) + 'px';

    // 애니메이션 후 삭제
    setTimeout(() => ripple.remove(), 500);
  });

  // 키보드 접근성 (Enter/Space로 이동)
  link.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      this.click();
    }
  });
});

// 헤더 메뉴 hover 시 살짝 underline + 애니메이션
document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('mouseenter', function() {
    this.classList.add('nav-underline');
  });
  a.addEventListener('mouseleave', function() {
    this.classList.remove('nav-underline');
  });
});