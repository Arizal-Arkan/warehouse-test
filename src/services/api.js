import axios from "axios";

export async function GetListWarehouse() {
  const URL = "https://api.belajartableau.com/api/WarehouseReps";

  const response = await axios.get(URL);

  return response
}

export async function GetDetail(id) {
    const URL = `https://api.belajartableau.com/api/WarehouseReps/${id}`;
  
    const response = await axios.get(URL);
  
    return response
  }