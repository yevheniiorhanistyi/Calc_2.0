import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({rows, columns, loading, sx}) => {
  
    return(
        <DataGrid
            sx={sx}
            rows={rows}
            columns={columns}
            loading={loading}
            autoHeight
            checkboxSelection
        />
    )
}

export default DataTable;