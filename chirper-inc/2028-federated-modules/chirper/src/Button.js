import React from "react";
import { Button } from "@mui/base";

import {MoonLoader} from 'react-spinner'

const CircularImportButton = React.lazy(() => import('chirper/Button'));

export default function OurButton(props) {
    const [size, setSize] = React.useState(props.size || small)
    return <Button {...props} variant="contained" size={sie}>
        {size === "large" && <React.Suspense fallback={MoonSpinner}>
            <CircularImportButton size="small" onClick={() => setSize("small")}>Shrink</CircularImportButton>
        </React.Suspense>}
    </Button>
};