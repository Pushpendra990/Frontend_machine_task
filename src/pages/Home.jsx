import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import { CircularProgress, RadioGroup, Radio, FormControlLabel, Button, styled, Box } from '@mui/material';

import SelectedEmployee from '../components/SelectedEmployee';
import EmployeeGrid from '../components/EmployeeGrid';

export default function EmployeeApp() {
  const [view, setView] = useState('grid');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [sampleEmployees, setSelectEmployees] = useState([]);
  const [isLoader, setLoader] = useState(false);

  const handleViewChange = (event) => setView(event.target.value);
  const handleEmployeeClick = (employee) => setSelectedEmployee(employee);
  const handleBackClick = () => setSelectedEmployee(null);

  const handleDeleteButton = (employeeId) => {
    const updatedEmployees = sampleEmployees.filter(employee => employee.id !== employeeId);
    setSelectEmployees(updatedEmployees);  
  }
  

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    const apiCallFunc = async () => {
      setLoader(true);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setSelectEmployees(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoader(false);
      }
    };
    apiCallFunc();
  }, []);

  return (
    <EmployeePageStyle>
    <div className='employeeMainPage'>
      {isLoader ? (
        <div className='circularStyle'>
          <CircularProgress />
        </div>
      ) : (
        <main className='mainPageStyle'>
          {selectedEmployee ? (
            <SelectedEmployee employee={selectedEmployee} onBack={handleBackClick} onDelete={handleDeleteButton}/>
          ) : (
            <>
              <div style={{ marginBottom: '16px' }}>
                <RadioGroup value={view} onChange={handleViewChange}>
                  <FormControlLabel value="grid" control={<Radio />} label="Grid View" className='radioLabel' />
                  <FormControlLabel value="tile" control={<Radio />} label="Tile View" className='radioLabel' />
                </RadioGroup>
              </div>
              <EmployeeGrid
                employees={sampleEmployees}
                view={view}
                onEmployeeClick={handleEmployeeClick}
                onDelete={handleDeleteButton}
              />
            </>
          )}
        </main>
      )}
    </div>
    </EmployeePageStyle>
  );
}


const EmployeePageStyle = styled(Box)({
  "& .employeeMainPage":{
    minHeight: '84vh', backgroundColor: 'white', maxHeight: "84vh", overflowY: "scroll"
  },
  "& .circularStyle":{
    display: "flex", justifyContent: "center"
  },
  "& .mainPageStyle":{
    flex: 1, padding: '16px', maxWidth: '1200px', margin: '0 auto'
  },
  "& .radioLabel":{
     color: "black"
  }
})