"use client";

import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./SearchBar.module.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useAppSelector } from "../../redux/hooks";

type Props = {};

const SearchBar = (props: Props) => {
  const [category, setCategory] = useState<{ id: number; name: string }>({
    id: 0,
    name: "all",
  });

  const allCategories = useAppSelector((state) => state.mainCategories);
  const allProducts: string[] = [];

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
    >
      <FormControl className={styles.categorySelectContainer}>
        <Select
          value={category?.id}
          onChange={(e) =>
            setCategory(
              allCategories.find((cat) => cat.id === e.target.value) || {
                id: 0,
                name: "all",
              }
            )
          }
        >
          <MenuItem value={0}>Toutes nos catégories</MenuItem>
          {allCategories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Autocomplete
        fullWidth
        freeSolo
        disableClearable
        options={allProducts}
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
