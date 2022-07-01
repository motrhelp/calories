import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Accordion, AccordionDetails, AccordionSummary, AppBar, Autocomplete, Button, Checkbox, Grid, IconButton, TextField, Toolbar, Typography } from '@mui/material';

import { ArrowBackIos } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import DeleteIcon from '@mui/icons-material/Delete';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function loadRecords() {
    return [
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
        {
            disabled: true
        },
    ]
}

export default function Demo() {

    const [records, setRecords] = React.useState();
    const [food, setFood] = React.useState();
    const [adding, setAdding] = React.useState(null);
    const [addingAmount, setAddingAmount] = React.useState();
    const [expanded, setExpanded] = React.useState(false);
    const [showBottomMenu, setShowBottomMenu] = React.useState(false);
    const [selecting, setSelecting] = React.useState(false);
    const [selectedRecords, setSelectedRecords] = React.useState([]);

    React.useEffect(() => {
        setRecords(loadRecords());
        setFood(loadRecords());
    }, [])

    const handleAccordionChange = index => (event, isExpanded) => {
        if (selecting) {
            if (selectedRecords.includes(index)) {
                setSelectedRecords(selectedRecords.filter(i => i !== index));
            } else {
                setSelectedRecords([...selectedRecords, index]);
            }
        } else {
            let newExpanded = isExpanded ? index : false
            setExpanded(newExpanded);
            setShowBottomMenu(newExpanded);
        }
    }

    // Check if the difference between two dates is smaller than 10 seconds
    const isCloseToNow = (date) => {
        const now = new Date();
        const diff = Math.abs(now - date);
        return diff < 10000;
    }

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

            {records?.map((record, index) =>
                <Accordion
                    key={index}
                    expanded={expanded === index}
                    onChange={handleAccordionChange(index)}
                    sx={{
                        backgroundColor: selecting ? (selectedRecords.includes(index) ? 'info.light' : null) : null,
                    }}
                >
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{
                            backgroundColor: isCloseToNow(record.created) ? 'success.light' : null
                        }}
                    >
                        <Stack
                            direction={'row'}
                            sx={{
                                width: '100%',
                            }}>
                            {
                                record.disabled ?
                                    <AddIcon
                                        sx={{ width: '100%' }}
                                    />
                                    : null
                            }
                            {record && !record.disabled ?
                                <React.Fragment>
                                    <Typography variant='subtitle2' sx={{ width: '80%', alignSelf: 'center' }}>{record.title}</Typography>
                                    <Typography variant='body2' sx={{ width: '10%', alignSelf: 'center' }}>{record.amount}</Typography>
                                    <Typography variant='subtitle2' sx={{ width: '10%', alignSelf: 'center', textAlign: 'right' }}>
                                        {Math.round(record.amount / 100 * record.calories)}
                                    </Typography>
                                </React.Fragment>
                                : null}
                        </Stack>
                    </AccordionSummary>
                    <AccordionDetails>
                        {record.disabled ?
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Autocomplete
                                        options={food.filter((food) => food.title != null)}
                                        renderInput={(params) => <TextField {...params} label="Food" />}
                                        getOptionLabel={(food) => food.title}
                                        onChange={(event, newValue) => {
                                            setAdding(food.find((food) => food.title === newValue.title));
                                        }}
                                    />
                                </Grid>
                                {adding ?
                                    <React.Fragment>
                                        <Grid item xs={7} sx={{ alignSelf: 'center' }}>
                                            <Typography variant='subtitle2'>{adding.title}</Typography>
                                        </Grid>
                                        <Grid item xs={3} sx={{ alignSelf: 'center' }}>
                                            <TextField
                                                size='small'
                                                label="Amount"
                                                value={addingAmount}
                                                onChange={(event) => {
                                                    setAddingAmount(event.target.value);
                                                }}
                                                type="number"
                                            />
                                        </Grid>
                                        <Grid item xs={2} sx={{ alignSelf: 'center', textAlign: 'right' }}>
                                            <Typography variant='subtitle2'>
                                                {addingAmount ?
                                                    Math.round(addingAmount / 100 * adding.calories)
                                                    : 0
                                                }
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={10} />
                                        <Grid item xs={2}>
                                            <Button onClick={() => {
                                                records.splice(index, 0, {
                                                    title: adding.title,
                                                    amount: addingAmount,
                                                    calories: adding.calories,
                                                    created: new Date(),
                                                })

                                                setAddingAmount(null);
                                                setAdding(false);
                                                setExpanded(false);
                                            }}>
                                                ADD
                                            </Button>
                                        </Grid>
                                    </React.Fragment>
                                    : null}
                            </Grid>
                            :
                            <TableContainer component={Paper}>
                                <Table sx={{ width: '100%' }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">Protein</TableCell>
                                            <TableCell align="center">Fat</TableCell>
                                            <TableCell align="center">Carbs</TableCell>
                                            <TableCell align="center">Calories</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow
                                            key={record.name}
                                        // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="center">10</TableCell>
                                            <TableCell align="center">12</TableCell>
                                            <TableCell align="center">1</TableCell>
                                            <TableCell align="center">10</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        }

                    </AccordionDetails>
                </Accordion>
            )}

            {showBottomMenu ?
                <AppBar position="sticky" sx={{ top: 'auto', bottom: 0 }}>
                    <Toolbar sx={{ justifyContent: 'space-evenly', }}>
                        <IconButton color="inherit">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton color="inherit"
                            onClick={() => {
                                if (selecting) {
                                    setSelectedRecords([]);
                                    setSelecting(false);
                                } else {
                                    setSelecting(true);
                                    setSelectedRecords([expanded]);
                                    setExpanded(false);
                                }
                            }}>
                            <LibraryAddCheckIcon
                            />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                : null
            }

        </Box>
    );
}