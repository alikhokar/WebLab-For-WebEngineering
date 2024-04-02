document.addEventListener('DOMContentLoaded', function() {

  const img = document.querySelectorAll('.simg');
  const pbtn = document.querySelector('.prev');
  const nbtn = document.querySelector('.next');
  const thumb = document.querySelector('.container');

  let cur = 0;

  function showImage(indx) {
    img.forEach((image, i) => {
      if (i === indx) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
    update(indx);
  }

  function update(indx) {
    thumb.innerHTML = '';
    img.forEach((_, i) => {
      const thumbnail = document.createElement('img');
      thumbnail.src = img[i].src;
      thumbnail.classList.add('thumbnail');
      if (i === indx) {
        thumbnail.classList.add('active-thumbnail');
      }
      thumbnail.addEventListener('click', () => showImage(i));
      thumb.appendChild(thumbnail);
    });
  }

  pbtn.addEventListener('click', () => {
    cur = (cur - 1 + img.length) % img.length;
    showImage(cur);
  });

  nbtn.addEventListener('click', () => {
    cur = (cur + 1) % img.length;
    showImage(cur);
  });

  showImage(cur);
});
