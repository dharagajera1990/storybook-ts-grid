import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Grid from './Grid';
import GridRuler from '../GridRuler/GridRuler';
import Box from '../Box/Box';



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Grid',
  component: Grid,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Basic: ComponentStory = (args) => <div style={{position:'relative'}}>

<Grid container spacing="sm" justifyContent="center" alignItem='center' style={{height:'100%'}} {...args}>
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Box>Box 1</Box>
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Box>Box 2</Box>
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Box>Box 3</Box>
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Box>Box 4</Box>
  </Grid>
</Grid>
</div>;

export const WithRuler: ComponentStory = (args) => 
<div style={{position:'relative',height:'100vh'}}>
<GridRuler spacing='sm'></GridRuler>
<Grid container spacing="sm" justifyContent="center" alignItem='center' style={{height:'100%'}} {...args}>
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Box>Box 1</Box>
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Box>Box 2</Box>
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Box>Box 3</Box>
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Box>Box 4</Box>
  </Grid>
</Grid>
</div>;

export const Interactive: ComponentStory = (args) => 
<div style={{position:'relative'}}>
<Grid container spacing="sm" justifyContent="center" alignItem='center' style={{height:'100%'}} {...args}>
  <Grid item xs={1}>
    <Box>Box 1</Box>
  </Grid>
  <Grid item xs={1}>
    <Box>Box 2</Box>
  </Grid>
  <Grid item xs={1}>
    <Box>Box 3</Box>
  </Grid>
  <Grid item xs={1}>
    <Box>Box 4</Box>
  </Grid>
</Grid>
</div>;
