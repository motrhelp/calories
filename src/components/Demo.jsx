import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Accordion, AccordionDetails, AccordionSummary, AppBar, Card, CardActions, CardContent, IconButton, Toolbar, Typography } from '@mui/material';
import { ArrowBackIos } from '@mui/icons-material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function Demo() {

    function Row({ food, disabled }) {
        return (
            <Accordion disabled={disabled}>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    {food ?
                        <Stack
                            direction={'row'}
                            sx={{
                                width: '100%',
                            }}>
                            <Typography variant='subtitle2' sx={{ width: '80%' }}>{food.title}</Typography>
                            <Typography variant='body2' sx={{ width: '10%', alignSelf: 'center' }}>{food.amount}</Typography>
                            <Typography variant='subtitle2' sx={{ width: '10%', alignSelf: 'center', textAlign: 'right' }}>{food.calories}</Typography>
                        </Stack>
                        : null}
                </AccordionSummary>
                <AccordionDetails>

                    <TableContainer component={Paper}>
                        <Table sx={{ width: '100%' }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Protein</TableCell>
                                    <TableCell align="center">Fat</TableCell>
                                    <TableCell align="center">Carbs</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                    <TableRow
                                        key={food.name}
                                        // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="center">10</TableCell>
                                        <TableCell align="center">12</TableCell>
                                        <TableCell align="center">1</TableCell>
                                    </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                </AccordionDetails>
            </Accordion>
        )
    }

    var items = [
        {
            title: "AH Muesli fruit овсянка",
            amount: 70,
            calories: 241.5
        },
        {
            title: "AH Marie biscuits печенье мрия (1±4g)",
            amount: 12,
            calories: 53.8
        },
        {
            disabled: true
        },
        {
            title: "De Cecco Fusilli integrali n° 34 коричневая паста",
            amount: 50,
            calories: 173
        },
        {
            title: "Heinz Tomaten blokjes naturel консервированые помидоры кубиками (390g)",
            amount: 130,
            calories: 136.5
        },
        {
            title: "Zanetti Parmigiano Reggiano пармезан",
            amount: 30,
            calories: 120.6
        },
        {
            title: "AH Gesneden spitskool капуста нарезанная",
            amount: 43,
            calories: 18.1
        },
        {
            disabled: true
        },
        {
            title: "Starbucks Tall Cappuccino (per portion)",
            amount: 75,
            calories: 75
        },
        {
            title: "Cheesecake чизкейк (slice ±100g)",
            amount: 100,
            calories: 321
        },
        {
            disabled: true
        },
        {
            title: "AH Sable druif виноград",
            amount: 50,
            calories: 37.5
        },
        {
            title: "Castello Creamy blue 70+ (150g)",
            amount: 75,
            calories: 323.3
        },
        {
            title: "Le Rustique Camembert камамбер (250g)",
            amount: 125,
            calories: 335
        },
        {
            title: "Unox Gelderse rookworst роукворст колбаса (XXL = 375g)",
            amount: 50,
            calories: 148
        },
        {
            title: "Jumbo Rauwe ham gerookt (175g, 1±14,6g)",
            amount: 87.5,
            calories: 182
        },
        {
            title: "AH Salami Milano салями (100g, 1±6,3g)",
            amount: 50,
            calories: 179
        },
        {
            title: "Bolletje Zoute pepsels paluszki",
            amount: 50,
            calories: 193
        }, ,
        {
            title: "AH Pistachenoten gezouten фисташки соленые",
            amount: 40,
            calories: 255.6
        },
    ]

    return (
        <Box sx={{ width: '100%' }}>
            <AppBar position='sticky'>
                <Toolbar >
                    <IconButton
                        edge="start"
                        color="inherit"
                    >
                        <ArrowBackIos />
                    </IconButton>
                    <Typography variant="h6" sx={{
                        flexGrow: 1
                    }}>
                        12 Feb 2022
                    </Typography>
                    <Typography variant="h6">
                        1800 / 2000
                    </Typography>
                </Toolbar>
            </AppBar>

            {items.map(item =>
                <Row food={item} disabled={item.disabled} />
            )}
        </Box>
    );
}