document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('comparisonResult');
  const stored = localStorage.getItem('packagesToCompare');
  if (!stored) {
    container.innerHTML = '<p class="error">Chưa có gói nào để so sánh.</p>';
    return;
  }
  const packages = JSON.parse(stored);
  if (packages.length < 2) {
    container.innerHTML = '<p class="error">Cần chọn ít nhất 2 gói để so sánh.</p>';
    return;
  }
  container.innerHTML = '<p class="loading">Đang tải dữ liệu chi tiết từ trang product-detail...</p>';
  const promises = packages.map(pkg => {
    return fetch(pkg.detailUrl)
      .then(resp => {
        if (!resp.ok) throw new Error('Không thể load ' + pkg.detailUrl);
        return resp.text();
      })
      .then(htmlString => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');
        const detailElement = doc.querySelector('.detail-content');
        const detailText = detailElement ? detailElement.innerHTML : '<i>Không có mô tả chi tiết.</i>';
        return Object.assign({}, pkg, { detailHTML: detailText });
      })
      .catch(err => {
        return Object.assign({}, pkg, {
          detailHTML: `<p class="error">Không tải được chi tiết từ ${pkg.detailUrl}</p>`
        });
      });
  });
  Promise.all(promises).then(results => {
    let tableHTML = '<table><thead><tr><th>Tiêu chí</th>';
    results.forEach(pkg => {
      tableHTML += `<th>${pkg.title}</th>`;
    });
    tableHTML += '</tr></thead><tbody>';
    tableHTML += '<tr><td>Giá</td>';
    results.forEach(pkg => {
      tableHTML += `<td>${pkg.price}</td>`;
    });
    tableHTML += '</tr>';
    tableHTML += '<tr><td>Đối Tượng</td>';
    results.forEach(pkg => {
      tableHTML += `<td>${pkg.target}</td>`;
    });
    tableHTML += '</tr>';
    tableHTML += '<tr><td>Mô tả chi tiết</td>';
    results.forEach(pkg => {
      tableHTML += `<td>${pkg.detailHTML}</td>`;
    });
    tableHTML += '</tr>';
    tableHTML += '</tbody></table>';
    container.innerHTML = tableHTML;
  });
});
