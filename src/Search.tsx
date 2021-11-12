import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Input, MenuItem, Select, TextField, Autocomplete, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { SearchedArtist } from "./types";

interface SearchProps {
    searchString: string,
    onSearchStringChanged: (searchString: string) => void
    matchedArtists: {
        mbid: string
        name: string
    }[]
    onArtistSelected: (selectedArtistMBID: string | null) => void
}
export const Search: React.FC<SearchProps> = ({ searchString, onSearchStringChanged, matchedArtists, onArtistSelected }) => {
    const [open, setOpen] = useState(false);
    return (
        <Autocomplete
            fullWidth
            id="search"
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            onChange={(e, value) => {
                onArtistSelected(value?.mbid || null);
            }}
            isOptionEqualToValue={(option, value) => option.mbid === value.mbid}
            getOptionLabel={(option) => option.name}
            options={matchedArtists}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search for artists"
                    value={searchString}
                    onChange={(e) => onSearchStringChanged(e.target.value)}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    )
}