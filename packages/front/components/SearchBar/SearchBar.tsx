"use client";

import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./SearchBar.module.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getAllMainCategories } from "../../app/helpers/mainCategories.helper";

type Props = {};

const SearchBar = (props: Props) => {
  const [category, setCategory] = useState("all");
  const [allCategories, setAllCategories] = useState([]);

  const handlegetAllMainCategories = async () => {
    const response = await getAllMainCategories();
    console.log(response, " is the response");
    setAllCategories(response.map((cat) => cat.name));
  };

  useEffect(() => {
    handlegetAllMainCategories();
  }, []);

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
          <MenuItem value={"all"}>Toutes nos catégories</MenuItem>
          {allCategories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Autocomplete
        fullWidth
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={allCategories}
        renderInput={(params) => (
          <TextField
            {...params}
            InputProps={{
              ...params.InputProps,
              type: "search",
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
