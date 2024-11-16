import React, { useState, useEffect, useMemo } from 'react';
import { useReactTable, getCoreRowModel, getPaginationRowModel, flexRender } from '@tanstack/react-table';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { FiChevronDown } from 'react-icons/fi';
import { formatDistanceToNow, parseISO, format } from 'date-fns';
import { es } from 'date-fns/locale';

// Define las columnas de la tabla
const columns = [
  {
      accessorKey: 'id',
      header: 'ID',
      cell: info => (
          <span className="text-gray-600 font-medium">{info.getValue()}</span>
      ),
  },
  {
      accessorKey: 'photo',
      header: 'Photo',
      cell: info => {
          const data = info.row.original;
          return (
              <div className="flex items-center justify-center">
                  <img
                      src={data.photo}
                      alt={`${data.name} ${data.last_name}`}
                      className="w-12 h-12 rounded-full border-2 border-gray-300"
                  />
              </div>
          );
      },
  },
  {
      accessorKey: 'name',
      header: 'Name',
      cell: info => {
          const data = info.row.original;
          return (
              <div className="flex flex-col">
                  <span className="text-gray-900 font-semibold">{data.name} {data.last_name}</span>
              </div>
          );
      },
  },
  {
      accessorKey: 'email',
      header: 'Email',
      cell: info => (
          <a
              href={`mailto:${info.getValue()}`}
              className="text-blue-500 hover:underline"
          >
              {info.getValue()}
          </a>
      ),
  },
  {
      accessorKey: 'phone',
      header: 'Phone',
      cell: info => (
          <div className="text-gray-700">
              {info.getValue()}
          </div>
      ),
  },
  {
      accessorKey: 'address',
      header: 'Address',
      cell: info => (
          <div className="text-gray-600 max-w-xs truncate">
              {info.getValue()}
          </div>
      ),
  },
  {
      accessorKey: 'updated_at',
      header: 'Last Updated',
      cell: info => {
          const updatedDate = info.row.original.updated_at;
          const formattedDate = format(parseISO(updatedDate), "dd/MM/yyyy HH:mm:ss", { locale: es });
          return (
              <span
                  title={`Actualizado el ${formattedDate}`}
                  className="text-gray-500 italic"
              >
                  Actualizado hace {formatDistanceToNow(parseISO(updatedDate), { addSuffix: false, locale: es })}
              </span>
          );
      },
  },
];

const ClientsTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const resultsPerPage = 8;

    const [sortOption, setSortOption] = useState('updated_at.desc'); 

    const fetchData = async () => {
        const token = localStorage.getItem('token');

        const [sortField, sortOrder] = sortOption.split('.');
        const apiUrl = `${process.env.API}/contacts/search?page=${currentPage}&limit=${resultsPerPage}&sortField=${sortField}&sortOrder=${sortOrder}`;

        try {
            setLoading(true);
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) throw new Error('Network response was not ok');
            const result = await response.json();

            setData(result.data.data);
            setTotalPages(result.data.last_page || 1); // Suponemos que el backend envía `last_page`
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [currentPage, sortOption]);

    const table = useReactTable({
        data,
        columns,
        pageCount: totalPages,
        manualSorting: true,
        manualPagination: true,
        state: {
            pagination: {
                pageIndex: currentPage - 1,
                pageSize: resultsPerPage,
            },
        },
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: (updater) => {
            const newPageIndex = typeof updater === 'function' ? updater({ pageIndex: currentPage - 1 }).pageIndex : updater.pageIndex;
            setCurrentPage(newPageIndex + 1);
        },
    });

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    const handleSortOptionChange = (e) => {
      setSortOption(e.target.value);
    };

    if (loading) return (
      <Layout>
          <div className='space-y-4'>
              <h1 className='text-4xl font-semibold'>Clients</h1>
              <div className='bg-white p-4 rounded-lg'>
                <h2>Loading...</h2>
              </div>
          </div>
      </Layout>
  );
  
    if (error) return (
      <Layout>
          <div className='space-y-4'>
              <h1 className='text-4xl font-semibold'>Clients</h1>
              <div className='bg-white p-4 rounded-lg'>
                <h2>{error.message}</h2>
              </div>
          </div>
      </Layout>
  );

  return (
    <Layout>
        <div className="space-y-4">
            <h1 className="text-4xl font-semibold">Clients</h1>

                {/* Contenedor flex para alinear el select a la derecha */}
                <div className="flex justify-end mb-4">
                    {/* Select estilizado para ordenación */}
                    <div className="relative w-64">
                        <label htmlFor="sortOption" className="block text-sm font-medium text-gray-700 mb-1">Sort by</label>
                        <div className="relative">
                            <select
                                id="sortOption"
                                value={sortOption}
                                onChange={handleSortOptionChange}
                                className="block w-full appearance-none bg-white border border-gray-300 text-gray-700 py-2 pl-3 pr-10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="id.asc">ID (Ascending)</option>
                                <option value="id.desc">ID (Descending)</option>
                                <option value="name.asc">Name (Ascending)</option>
                                <option value="name.desc">Name (Descending)</option>
                                <option value="email.asc">Email (Ascending)</option>
                                <option value="email.desc">Email (Descending)</option>
                                <option value="updated_at.asc">Last Updated (Ascending)</option>
                                <option value="updated_at.desc">Last Updated (Descending)</option>
                            </select>
                            {/* Icono en la parte derecha del select */}
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                <FiChevronDown className="h-5 w-5 text-gray-500" aria-hidden="true" />
                            </div>
                        </div>
                    </div>
                </div>

            {/* Tabla */}
            <div className="bg-white p-4 rounded-lg">
                <table className="min-w-full bg-white">
                    <thead>
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <th key={header.id} className="border-b border-gray-200 p-4 text-left">
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id} className="border-b border-gray-200 p-4">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Paginación */}
            <div className="flex justify-between items-center mt-4">
                <Button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</Button>
                <span>Page {currentPage} of {totalPages}</span>
                <Button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</Button>
            </div>
        </div>
    </Layout>
  );
};

export default ClientsTable;
