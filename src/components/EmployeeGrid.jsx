import { Card, CardContent, CardHeader, Avatar, Button, Typography, CardActions, styled, Box } from '@mui/material';
import { Edit, Star, Trash } from "lucide-react";

export default function EmployeeGrid({ employees, onEmployeeClick, onDelete, view }) {
  return (
    <EmployeeStyleGrid view={view}>
      <div className='employee'>
        {employees.map((employee) => (
          <Card key={employee.id}>
            <div style={{ cursor: 'pointer' }} onClick={() => onEmployeeClick(employee)}>
              <CardHeader
                title={<Typography variant="h6" style={{ fontWeight: 'bold' }}>{employee.name}</Typography>}
                subheader={<Typography variant="body2" style={{ color: '#6b7280' }}>{employee.position}</Typography>}
              />
              <CardContent>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <Avatar style={{ height: '48px', width: '48px' }}>
                    <img src="https://github.com/nutlope.png" alt={`${employee.name}'s avatar`} style={{ height: '48px', width: '48px', borderRadius: '9999px' }} />
                  </Avatar>
                  <div>
                    <Typography variant="body2" style={{ color: '#6b7280' }}>Username: {employee.username}</Typography>
                    <Typography variant="body2" style={{ color: '#6b7280' }}>Email: {employee.email}</Typography>
                  </div>
                </div>
              </CardContent>
            </div>
            <CardActions className='actionConatiner'>
              <Button variant="outlined" size="small" className='buttonStyle'>
                <Edit className='iconStyle'/>
              </Button>
              <Button variant="outlined" size="small" className='buttonStyle'>
                <Star className='iconStyle' />
              </Button>
              <Button variant="outlined" size="small" className='buttonStyle' onClick={() => onDelete(employee.id)}>
                <Trash className='iconStyle'/>
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </EmployeeStyleGrid>
  );
}

const EmployeeStyleGrid = styled(Box)(({ theme, view }) => ({
  "& .employee": {
    display: view === 'grid' ? 'grid' : 'flex',
    gap: '16px',
    flexDirection: view === 'tile' ? 'column' : 'initial',
    gridTemplateColumns: view === 'grid' ? 'repeat(auto-fill, minmax(250px, 1fr))' : 'initial',
  },
  "& .buttonStyle": {
    padding: '8px', borderRadius: '9999px'
  },
  "& .iconStyle": {
    height: '16px', width: '16px'
  },
  "& .actionConatiner":{
     display: 'flex', justifyContent: 'flex-end', gap: '8px' 
  }
}));
