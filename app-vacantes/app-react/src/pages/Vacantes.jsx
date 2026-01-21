import PageLayout from "../components/layouts/PageLayout";
import { DataGrid, GridActionsCellItem, GridActionsCell } from '@mui/x-data-grid';
import { Eye, Trash } from "lucide-react";

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'nombre', headerName: 'Vacante', flex: 1 },
    { field: 'publicado', headerName: 'Publicado', width: 150 },
    {
        field: 'acciones', type: 'actions', headerName: 'Acciones', width: 150, renderCell: (params) => (
            <GridActionsCell {...params}>
                <GridActionsCellItem
                    icon={<Eye />}
                    label="Ver Detalles"
                />
                <GridActionsCellItem
                    icon={<Trash />}
                    label="Eliminar"
                />
            </GridActionsCell>
        ),
    }
];

const rows = [
    { id: 1, nombre: 'Programador Junior', publicado: '12-01-2026' },
    { id: 2, nombre: 'Chef', publicado: '12-01-2026' },
    { id: 3, nombre: 'Diseñador Gráfico', publicado: '12-01-2026' },
];

export default function Vacantes() {
    return (
        <PageLayout>
            <div className="w-full flex flex-col items-center justify-center">
                <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in">
                    <div className="bg-[var(--color-secundario)] px-6 py-4">
                        <h2 className="text-[var(--color-texto-secundario)] text-lg font-semibold">
                            Lista de Vacantes
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto p-6" style={{ width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSizeOptions={[5, 10]}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};