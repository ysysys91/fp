// 다크모드 기능
const darkModeBtn = document.getElementById('darkModeBtn');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  if (darkModeBtn) {
    darkModeBtn.textContent = 'Light';
  }
}

if (darkModeBtn) {
  darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
      darkModeBtn.textContent = 'Light';
      localStorage.setItem('theme', 'dark');
    } else {
      darkModeBtn.textContent = 'Dark';
      localStorage.setItem('theme', 'light');
    }
  });
}

// Team Project 페이지 탭 전환 기능
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

if (tabButtons.length > 0 && tabPanels.length > 0) {
  // 처음 페이지에 들어왔을 때 active 버튼에 맞는 탭 보여주기
  const activeButton = document.querySelector('.tab-btn.active');

  tabPanels.forEach((panel) => {
    panel.classList.add('hidden');
  });

  if (activeButton) {
    const activePanel = document.getElementById(activeButton.dataset.tab);

    if (activePanel) {
      activePanel.classList.remove('hidden');
    }
  }

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      tabButtons.forEach((btn) => {
        btn.classList.remove('active');
      });

      tabPanels.forEach((panel) => {
        panel.classList.add('hidden');
      });

      button.classList.add('active');

      const targetId = button.dataset.tab;
      const targetPanel = document.getElementById(targetId);

      if (targetPanel) {
        targetPanel.classList.remove('hidden');
      }
    });
  });
}

// Study 페이지 카테고리 클릭 기능
const categoryCards = document.querySelectorAll('.study-category-card');
const practiceSections = document.querySelectorAll('.practice-section');
const practiceCards = document.querySelectorAll('.practice-card');
const practiceDetails = document.querySelectorAll('.practice-detail');

if (categoryCards.length > 0) {
  categoryCards.forEach((card) => {
    card.addEventListener('click', () => {
      practiceSections.forEach((section) => {
        section.classList.add('hidden');
      });

      practiceDetails.forEach((detail) => {
        detail.classList.add('hidden');
      });

      const targetId = card.dataset.target;
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.classList.remove('hidden');
      }
    });
  });
}

if (practiceCards.length > 0) {
  practiceCards.forEach((card) => {
    card.addEventListener('click', () => {
      practiceDetails.forEach((detail) => {
        detail.classList.add('hidden');
      });

      const targetId = card.dataset.target;
      const targetDetail = document.getElementById(targetId);

      if (targetDetail) {
        targetDetail.classList.remove('hidden');
      }
    });
  });
}