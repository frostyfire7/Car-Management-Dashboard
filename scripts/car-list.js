const carListContainer = document.getElementById("car-list-container");

async function getDetailCars(cars_id) {
  const response = await fetch(`/cars/${cars_id}`);

  return response;
}

function renderList() {
  carListContainer.innerHTML = "";

  for (let i = 0; i < carList.length; i++) {
    const carElement = document.createElement("div");
    carElement.innerHTML = `
        <div>
            id mobil: ${carList[i].id}
            <button type="button" onclick="getDetailCars(${carList[i].id})"></button>
        </div>
        `;

    carListContainer.appendChild(carElement);
  }
}
