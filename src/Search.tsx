import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { TextField } from "@mui/material";
import { useState } from "react";

interface SearchProps {
    searchString: string,
    onSearchStringChanged: (searchString: string) => void
}
export const Search: React.FC<SearchProps> = ({ searchString, onSearchStringChanged }) => {
    return <TextField name='search' placeholder='Search for artist' value={searchString} onChange={(e) => onSearchStringChanged(e.target.value)} />
}