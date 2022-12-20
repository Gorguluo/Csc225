import axios from 'axios';

async function getEmployees() {
  try {
    const response = await axios.get('https://api.matgargano.com/employees/');
    const employees = response.data;
    console.log(employees);
  } catch (error) {
    console.error(error);
  }
}

getEmployees();


// OR

import axios from 'axios';

async function getEmployee(id) {
  try {
    const response = await axios.get(`https://api.matgargano.com/employees/${id}`);
    const employee = response.data;
    console.log(employee);
  } catch (error) {
    console.error(error);
  }
}

getEmployee(9912);