import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

export default function ImgMediaCard() {
    return (
        <Card>
            <CardContent>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Implement Micro-Services using NextJS" />
                </FormGroup>
            </CardContent>
            <CardActions>
                <Button variant="contained" size="small" color="error">Delete</Button>
                <Button variant="contained" size="small" color="success">Save</Button>
            </CardActions>
        </Card>
    );
}
