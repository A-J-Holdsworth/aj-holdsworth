import { Card, CardContent, CardHeader, Grid, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Component, ReactNode, useEffect } from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface ServiceProps {
    title: string;
    services: string[];
    icon: ReactNode
}

const Service = (props: ServiceProps) => {

    return (
        <Grid xs={12} sm={6} md={4} lg={3} item>
            <Card>
                <CardHeader title={props.title} avatar={props.icon} />
                <CardContent>
                    {/* <ul>
                        {props.services.map(x => <li key={x}>{x}</li>)}
                    </ul> */}
                    <List>
                        {
                            props.services.map(x => {
                                return (
                                    <ListItem key={x} disableGutters={true}>
                                        <ListItemIcon>
                                            <NavigateNextIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={x} />
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default Service;