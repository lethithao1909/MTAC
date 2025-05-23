document.getElementById('sidebarToggle').addEventListener('click', function () {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('collapsed');

  const icon = this.querySelector('i');
  icon.classList.toggle('fa-chevron-left');
  icon.classList.toggle('fa-chevron-right');
});
//dathang
document.addEventListener('DOMContentLoaded', () => {
  const orderModal = document.getElementById('orderModal');
  const btnOrder = document.querySelector('.compare-buttonb');
  const btnCancel = orderModal.querySelector('.btn-cancel');
  const orderForm = document.getElementById('orderForm');
  const msgContainer = orderModal.querySelector('.order-message');

  btnOrder.addEventListener('click', () => {
    orderModal.classList.add('active');
  });

  btnCancel.addEventListener('click', () => {
    orderModal.classList.remove('active');
    msgContainer.textContent = '';
    msgContainer.classList.remove('success', 'error');
  });

  orderForm.addEventListener('submit', e => {
    e.preventDefault();
    msgContainer.textContent =
      'Cảm ơn quý khách đã sử dụng dịch vụ, chúng tôi sẽ liên lạc lại với bạn.';
    msgContainer.classList.add('success');
    msgContainer.classList.remove('error');
    orderForm.reset();
    setTimeout(() => {
      orderModal.classList.remove('active');
      msgContainer.textContent = '';
      msgContainer.classList.remove('success');
    }, 20000);
  });
});

//danhgia
const list = document.querySelector('.reviews__list');
const form = document.querySelector('.review-form');
const ta = form.querySelector('textarea');

list.addEventListener('click', e => {
  if (e.target.closest('.review__btn--heart')) {
    const btn = e.target.closest('button');
    const span = btn.querySelector('span');
    let n = parseInt(span.textContent);
    if (btn.classList.toggle('active')) span.textContent = n + 1;
    else span.textContent = n - 1;
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const text = ta.value.trim();
  if (!text) return;
  const div = document.createElement('div');
  div.className = 'review';
  div.innerHTML = `
    <div class="review__header">
      <p class="review__author">Bạn</p>
      <button class="review__btn review__btn--heart"><i class="fa-regular fa-heart"></i><span>0</span></button>
    </div>
    <p class="review__text">${text}</p>
  `;
  list.prepend(div);
  ta.value = '';
});