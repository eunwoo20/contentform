
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import {useState}  from 'react';
import { Typography } from '@mui/material';
 



const Details = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Handle file upload logic here, e.g., send the file to the server
    console.log(selectedFile);
    // Reset selected file after upload
    setSelectedFile(null);
  };

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Container>
      <Box>
        <Grid container spacing={2} direction="column" justifyContent="center"alignItems="center">
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <h1>Audition Form for Dancer</h1>
        </Grid>
        < Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm ={6} md={12}  sx={{background:"white"}}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
             <DatePicker label="Date of Birth" />
          </DemoContainer>
        </LocalizationProvider>
         </Grid>
         <Grid item xs={12} sm ={6} md={12}  sx={{background:"white"}}>
        <TextField id="outlined-basic" label="Address" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <TextField id="outlined-basic" label="City" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <TextField id="outlined-basic" label="State/Province" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <TextField id="outlined-basic" label="Zip/Postal Code" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <TextField id="outlined-basic" label="Country" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <TextField id="outlined-basic" label="Phone no" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <TextField id="outlined-basic" label="Email Address" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm ={6} md={12}sx={{background:"white"}}>
        <TextField id="outlined-basic" label="Insta Id" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <TextField id="outlined-basic" label="FB Id " variant="outlined" />
        </Grid>
        <Grid item xs={12} sm ={6} md={12}sx={{background:"white"}}>
        <TextField id="outlined-basic" label="Dance Experience " variant="outlined" />
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <InputLabel id="demo-simple-select-label">Upload Audition Video:</InputLabel>
        </Grid>
        <Grid item xs={12} sm ={6} md={12}sx={{background:"white"}}>
          <input accept="video/*"style={{ display: 'none' }} id="raised-button-file" multiple type="file" onChange={handleFileChange}/>
      <label htmlFor="raised-button-file">
        <Button variant="outlined" component="span"> Choose File</Button>
      </label>
      <Typography variant="body1">
        {selectedFile ? `Selected File: ${selectedFile.name}` : 'No file chosen'}
      </Typography>
      <Button variant="contained"color="primary" onClick={handleUpload} disabled={!selectedFile}>Upload</Button>
        </Grid>
        <Grid item xs={12} sm ={6} md={12}sx={{background:"white"}}>
        <InputLabel id="demo-simple-select-label">Dance Styles (e.g., ballet, contemporary, jazz, hip-hop, tap, etc.)</InputLabel>
        </Grid>
        <Grid item xs={12} sm ={6} md={12}sx={{background:"white"}}>
        <TextField id="basic" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">No.ofYearsTraining</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}>
          <MenuItem value={1}>one</MenuItem>
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={3}>Three</MenuItem>
          <MenuItem value={4}>Four</MenuItem>
          <MenuItem value={5}>Five</MenuItem>
          <MenuItem value={6}>Six</MenuItem>
          <MenuItem value={7}>Seven</MenuItem>
          <MenuItem value={8}>Eight</MenuItem>
          <MenuItem value={9}>Nine</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
           </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <InputLabel id="demo-simple-select-label" >Training Institutions/Teachers</InputLabel>
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <TextField id="basic"  variant="outlined" />
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <InputLabel id="demo-simple-select-label">Performance Experience (Provide details of significant performances)</InputLabel>
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <TextField id="basic"  variant="outlined" />
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <InputLabel id="demo-simple-select-label">Any Awards or Recognitions</InputLabel>
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <TextField id="basic"  variant="outlined" />
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}} >
        <InputLabel id="demo-simple-select-label">Skills</InputLabel>
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <TextField id="basic"  variant="outlined" />
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <InputLabel id="demo-simple-select-label">Improvisational Skills</InputLabel>
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <TextField id="basic"  variant="outlined" />
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <InputLabel id="demo-simple-select-label">Partnering Experience (if applicable):</InputLabel>
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <TextField id="basic"  variant="outlined" />
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <InputLabel id="demo-simple-select-label">Availability:</InputLabel>
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <TextField id="basic"  variant="outlined" />
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <InputLabel id="demo-simple-select-label">Days/Times Available for Rehearsals:</InputLabel>
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <TextField id="basic"  variant="outlined" />
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <InputLabel id="demo-simple-select-label">Willingness to Travel (if required):</InputLabel>
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <TextField id="basic"  variant="outlined" />
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <InputLabel id="demo-simple-select-label">Any Potential Conflicts (upcoming commitments, vacations, etc.):</InputLabel>
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <TextField id="basic"  variant="outlined" />
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <InputLabel id="demo-simple-select-label">Website-Specific Information</InputLabel>
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <TextField id="basic"  variant="outlined" />
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <InputLabel id="demo-simple-select-label">Are you comfortable being featured on a website or online platform?</InputLabel>
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <TextField id="basic"  variant="outlined" />
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <InputLabel id="demo-simple-select-label">Have you worked on any web-based dance projects before? If so, please provide details</InputLabel>
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <TextField id="basic"  variant="outlined" />
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <InputLabel id="demo-simple-select-label">Additional Information:</InputLabel>
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <TextField id="basic"  variant="outlined" />
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <InputLabel id="demo-simple-select-label">Why are you interested in auditioning for this website project?</InputLabel>
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <TextField id="basic"  variant="outlined" />
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <InputLabel id="demo-simple-select-label">What do you hope to contribute to the project?</InputLabel>
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <TextField id="basic"  variant="outlined" />
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <InputLabel id="demo-simple-select-label">Any other relevant information you would like to share:</InputLabel>
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <TextField id="basic"  variant="outlined" />
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
        <InputLabel id="demo-simple-select-label">References:Please provide the names and contact information of at least two references who can speak to your dance abilities and work ethic.</InputLabel>
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
           <TextField id="basic"  variant="outlined" />
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
           <FormControlLabel required control={<Checkbox />} label="Declaration:"/>
           <InputLabel id="demo-simple-select-label">By signing below, I confirm that the information provided in this audition form is accurate and complete to the best of my knowledge. I understand that any false information may result in disqualification from the audition process.</InputLabel>
        </Grid>
        <Grid item xs={12} sm ={6} md={12} sx={{background:"white"}}>
             <Button variant="contained">Submit</Button>
        </Grid>
        </Grid>
        </Box>
        </Container>
  );
}

export default Details;


