"use client";

import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./SearchBar.module.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

type Props = {};

const SearchBar = (props: Props) => {
  const [category, setCategory] = useState(0);

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
    >
      <FormControl className={styles.categorySelectContainer}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value={0}>Toutes nos catégories</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Autocomplete
      fullWidth
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={['Produit A', 'Produit B']}
        renderInput={(params) => (
          <TextField
            {...params}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
      <div className={styles.searchIconContainer}>
        <IconButton type="button" aria-label="search">
          <SearchIcon />
        </IconButton>
      </div>
    </Paper>
  );
};

export default SearchBar;
