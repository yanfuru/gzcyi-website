/* ============================================
   广州创益信息技术有限公司 - 全局脚本
   ============================================ */

/* ========== 图片保护 / 反爬措施 ========== */
(function() {
  'use strict';

  // 1. 禁止图片右键菜单（对包含证书、资质、案例的敏感目录图片）
  document.addEventListener('contextmenu', function(e) {
    var target = e.target;
    if (target.tagName === 'IMG') {
      var src = target.src || target.getAttribute('data-src') || '';
      if (src.indexOf('certificates') !== -1 ||
          src.indexOf('honors') !== -1 ||
          src.indexOf('copyrights') !== -1 ||
          src.indexOf('team') !== -1 ||
          src.indexOf('craft') !== -1) {
        e.preventDefault();
        return false;
      }
    }
  });

  // 2. 禁止拖拽保存图片
  document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
      return false;
    }
  });

  // 3. 禁止 F12 / Ctrl+Shift+I / Ctrl+U
  document.addEventListener('keydown', function(e) {
    // F12
    if (e.keyCode === 123) {
      e.preventDefault();
      return false;
    }
    // Ctrl+Shift+I / Cmd+Shift+I / Cmd+Opt+I
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) {
      e.preventDefault();
      return false;
    }
    // Ctrl+U / Cmd+U
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 85) {
      e.preventDefault();
      return false;
    }
    // Ctrl+S / Cmd+S
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 83) {
      e.preventDefault();
      return false;
    }
    // Ctrl+Shift+C
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.keyCode === 67) {
      e.preventDefault();
      return false;
    }
  });

  // 4. 控制台安全警告
  console.log('%c⚠️ 安全警告', 'font-size:20px;color:red;font-weight:bold;');
  console.log('%c请勿在此处粘贴任何代码。如果您不理解此操作的风险，请立即关闭此窗口。', 'font-size:14px;');
  console.log('%c广州创益信息技术有限公司 © ' + new Date().getFullYear(), 'font-size:12px;color:#666;');
})();

document.addEventListener('DOMContentLoaded', function () {
  // 移动端菜单切换
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      this.classList.toggle('active');
      nav.classList.toggle('open');
    });

    // 点击导航链接后关闭菜单
    nav.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('active');
        nav.classList.remove('open');
      });
    });
  }

  // 头部滚动效果
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // 回到顶部按钮
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 滚动动画
  const fadeElements = document.querySelectorAll('.fade-in');
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(function (el) {
    observer.observe(el);
  });

  // 统计数字动画
  const statNumbers = document.querySelectorAll('.stat-number[data-count]');
  const statObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-count'), 10);
          const duration = 2000;
          const startTime = performance.now();

          function updateNumber(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(target * eased);
            el.textContent = current.toLocaleString();

            if (progress < 1) {
              requestAnimationFrame(updateNumber);
            } else {
              el.textContent = target.toLocaleString();
            }
          }

          requestAnimationFrame(updateNumber);
          statObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  statNumbers.forEach(function (el) {
    statObserver.observe(el);
  });

  // 导航高亮
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath.endsWith('/') && href === 'index.html')) {
      link.classList.add('active');
    } else if (href && currentPath.includes(href.replace('./', '').replace('../', ''))) {
      link.classList.add('active');
    }
  });
});
