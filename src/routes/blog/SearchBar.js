import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export default function SearchBar(props) {
    const { func } = props;
    const [ searchWords, setSearchWords ] = useState();
  return (
    <Paper
      data-testid="searchbar"
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "30%" }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Articles"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={e => setSearchWords(e.target.value)}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon onClick={()=>func(searchWords)} data-testid= "searchIcon" />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
  );
}
