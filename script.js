
    const textArray = ["Hello,I'm Sherangi Subhagya", "I'm a UI/UX Designer", "I build Web & Mobile Apps"];
    let index = 0;
    let charIndex = 0;
    const typingElement = document.getElementById('typed-text');

    function typeText() {
      if (charIndex <= textArray[index].length) {
        typingElement.textContent = textArray[index].substring(0, charIndex);
        charIndex++;
        setTimeout(typeText, 100);
      } else {
        setTimeout(eraseText, 1500);
      }
    }

    function eraseText() {
      if (charIndex >= 0) {
        typingElement.textContent = textArray[index].substring(0, charIndex);
        charIndex--;
        setTimeout(eraseText, 60);
      } else {
        index = (index + 1) % textArray.length;
        setTimeout(typeText, 300);
      }
    }

    document.addEventListener('DOMContentLoaded', typeText);

    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Show/hide scroll-top button
    window.addEventListener('scroll', function () {
      const scrollBtn = document.querySelector('.scroll-top');
      if (window.scrollY > 300) {
        scrollBtn.style.display = 'block';
      } else {
        scrollBtn.style.display = 'none';
      }
    });
 

 
  function confirmDownload() {
    const proceed = confirm("Do you want to download the resume?");
    if (proceed) {
      const resumeUrl = "https://drive.google.com/uc?export=download&id=1V1IjSq4o48zWy_HAS4x8Ad7beKjNpU8p";
      window.open(resumeUrl, "_blank");
    }
  }



function showDownloadModal() {
  const alreadyDownloaded = localStorage.getItem('resumeDownloaded');
  
  // Only show modal if previously downloaded
  if (alreadyDownloaded) {
    document.getElementById('downloadModal').classList.remove('hidden');
  } else {
    confirmAndDownload();
  }
}

function closeDownloadModal() {
  document.getElementById('downloadModal').classList.add('hidden');
}

function confirmAndDownload() {
  const resumeUrl = "https://drive.google.com/uc?export=download&id=1V1IjSq4o48zWy_HAS4x8Ad7beKjNpU8p";
  const a = document.createElement('a');
  a.href = resumeUrl;
  a.download = "Sherangi_Subhagya_Resume.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  localStorage.setItem('resumeDownloaded', 'true');
  closeDownloadModal();
}

const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

   function openGmail() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Try to open Gmail App (may prompt user)
      window.location.href = "googlegmail://co?to=gsherangi@gmail.com";
      // Fallback to mailto after short delay
      setTimeout(() => {
        window.location.href = "mailto:gsherangi@gmail.com";
      }, 1000);
    } else {
      // Open Gmail in web on desktop
      window.open("https://mail.google.com/mail/?view=cm&fs=1&to=gsherangi@gmail.com", "_blank");
    }
  }
