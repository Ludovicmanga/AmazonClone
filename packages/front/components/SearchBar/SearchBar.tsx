"use client";

import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./SearchBar.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

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
      <InputBase
        sx={{ ml: 2, flex: 1 }}
        placeholder="Chercher sur Amazon..."
        inputProps={{ "aria-label": "chercher sur Amazon" }}
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
