import { Card, CardContent, CardHeader, CardActions, Avatar, Button, Typography, styled, Box } from '@mui/material';
import { ArrowRight, Edit, Star, Trash } from "lucide-react";

export default function SelectedEmployee({ employee, onBack, onDelete }) {
    const fields = [
        { label: "Website", value: employee.website },
        { label: "Email", value: employee.email },
        { label: "Phone", value: employee.phone },
        { label: "Address", value: `${employee.address.street}, ${employee.address.suite}, ${employee.address.city}, ${employee.address.zipcode}` },
        { label: "Company", value: employee.company.name },
        { label: "Catchphrase", value: employee.company.catchPhrase }
    ];
    return (
        <SelecteEmployeeStyle>
            <Button variant="outlined" onClick={onBack} style={{ marginBottom: '16px' }}>
                <ArrowRight className='arrowButton' /> Back to all employees
            </Button>
            <Card className='selectedCard'>
                <CardHeader
                    title={<Typography variant="h6" style={{ fontWeight: 'bold' }}>{employee.name}</Typography>}
                    subheader={<Typography variant="body2" className='Textstyle'>{employee.position}</Typography>}
                />
                <CardContent>
                    <div className='displayDetails'>
                        <Avatar src="" alt={`${employee.name}'s avatar`} className='avatarStyle'>
                        </Avatar>
                        <div>
                            {fields.map((field, index) => (
                                <Typography key={index} variant="body2" className='Textstyle'>
                                    <span className="labelStyle">{field.label}:</span> {field.value}
                                </Typography>
                            ))}
                        </div>
                    </div>
                </CardContent>
                <CardActions className='iconCardAction'>
                    <Button variant="outlined" size="small" className='buttonStyle'>
                        <Edit className='iconStyle' />
                    </Button>
                    <Button variant="outlined" size="small" className='buttonStyle'>
                        <Star className='iconStyle' />
                    </Button>
                    <Button variant="outlined" size="small" className='buttonStyle' onClick={() => onDelete(employee.id)}>
                        <Trash className='iconStyle' />
                    </Button>
                </CardActions>
            </Card>
        </SelecteEmployeeStyle>
    );
}

const SelecteEmployeeStyle = styled(Box)({
    "& .buttonStyle": {
        padding: '8px', borderRadius: '9999px'
    },
    "& .iconStyle": {
        height: '16px', width: '16px'
    },
    "& .iconCardAction": {
        display: 'flex', justifyContent: 'flex-end', gap: '8px'
    },
    "& .avatarStyle": {
        height: '90px', width: '90px', borderRadius: '9999px', backgroundColor: "lightblue",
    },
    "& .arrowButton": {
        marginRight: '8px', height: '16px', width: '16px', transform: 'rotate(180deg)'
    },
    "& .selectedCard": {
        maxWidth: '768px', margin: '0 auto', cursor: 'pointer'
    },
    "& .Textstyle": {
        color: '#6b7280'
    },
    "& .displayDetails": {
        display: 'flex', alignItems: 'center', gap: '16px', flexDirection: "column"
    },
    "& .labelStyle":{
        fontWeight: "bold",
        color: "darkblue",
        minWidth:"150px",
        width:"150px"
    }
})
