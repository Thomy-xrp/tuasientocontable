// Función para llenar selects
function llenarSelect(selectId, filtro = "") {
  const select = document.getElementById(selectId);
  select.innerHTML = "";
  pcge
    .filter(cuenta =>
      cuenta.codigo.includes(filtro) ||
      cuenta.nombre.toLowerCase().includes(filtro.toLowerCase())
    )
    .forEach(cuenta => {
      const option = document.createElement("option");
      option.value = cuenta.codigo;
      option.textContent = `${cuenta.codigo} - ${cuenta.nombre}`;
      select.appendChild(option);
    });
}

// Inicializar selects
llenarSelect("debitAccount");
llenarSelect("creditAccount");

// Búsqueda dinámica
document.getElementById("searchDebit").addEventListener("input", e => {
  llenarSelect("debitAccount", e.target.value);
});
document.getElementById("searchCredit").addEventListener("input", e => {
  llenarSelect("creditAccount", e.target.value);
});

// Manejo del formulario
document.getElementById('entryForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const date = document.getElementById('date').value;
  const glosa = document.getElementById('description').value.trim();
  const debitCode = document.getElementById('debitAccount').value;
  const creditCode = document.getElementById('creditAccount').value;
  const amount = parseFloat(document.getElementById('amount').value);

  if (debitCode === creditCode) {
    alert("La cuenta de débito y crédito no pueden ser la misma.");
    return;
  }

  const debitAccount = pcge.find(c => c.codigo === debitCode);
  const creditAccount = pcge.find(c => c.codigo === creditCode);

  const asiento = [
    { cuenta: debitAccount.codigo, nombre: debitAccount.nombre, debe: amount.toFixed(2), haber: "" },
    { cuenta: creditAccount.codigo, nombre: creditAccount.nombre, debe: "", haber: amount.toFixed(2) }
  ];

  const container = document.getElementById('result');
  container.innerHTML = `
    <h3>Asiento Contable</h3>
    <p><strong>Fecha:</strong> ${date}</p>
    <table>
      <thead>
        <tr>
          <th>Cuenta</th>
          <th>Descripción</th>
          <th>Debe</th>
          <th>Haber</th>
        </tr>
      </thead>
      <tbody>
        ${asiento.map(line => `
          <tr>
            <td>${line.cuenta}</td>
            <td>${line.nombre}</td>
            <td>${line.debe}</td>
            <td>${line.haber}</td>
          </tr>
        `).join('')}
        <tr class="glosa">
          <td colspan="4">Glosa: ${glosa}</td>
        </tr>
      </tbody>
    </table>
  `;
});