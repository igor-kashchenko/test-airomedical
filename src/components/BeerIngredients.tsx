import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

type Props = {
  malt: {
    name: string;
    amount: {
      value: number;
      unit: string;
    };
  }[];
  hops: {
    name: string;
    amount: {
      value: number;
      unit: string;
    };
    add: string;
    attribute: string;
  }[];
};

export const BeerIngredients: React.FC<Props> = ({ malt, hops }) => {
  return (
    <>
      <Typography
        color={'primary'}
        variant='h6'
        fontWeight={'bold'}
        textAlign={'center'}
      >
        Ingredients
      </Typography>

      <Grid container columnSpacing={2} mb={4}>
        <Grid item xs={6}>
          <Typography
            color={'primary'}
            variant='h6'
            fontWeight={'bold'}
            textAlign={'center'}
          >
            Malt
          </Typography>

          <TableContainer
            sx={{ border: '1px solid', borderColor: 'primary.main' }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {malt.map((maltItem, index) => (
                  <TableRow key={index}>
                    <TableCell>{maltItem.name}</TableCell>
                    <TableCell>
                      {maltItem.amount.value} {maltItem.amount.unit}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item xs={6}>
          <Typography
            color={'primary'}
            variant='h6'
            fontWeight={'bold'}
            textAlign={'center'}
          >
            Hops
          </Typography>

          <TableContainer
            sx={{ border: '1px solid', borderColor: 'primary.main' }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Add</TableCell>
                  <TableCell>Attribute</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {hops.map((hopsItem, index) => (
                  <TableRow key={index}>
                    <TableCell>{hopsItem.name}</TableCell>
                    <TableCell>
                      {hopsItem.amount.value} {hopsItem.amount.unit}
                    </TableCell>
                    <TableCell>{hopsItem.add}</TableCell>
                    <TableCell>{hopsItem.attribute}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};
