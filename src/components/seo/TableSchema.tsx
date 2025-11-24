interface TableRow {
  [key: string]: string | number;
}

interface TableSchemaProps {
  about: string; // What the table is about (e.g., "Roofing Material Cost Comparison")
  columns: string[]; // Column headers
  rows: TableRow[]; // Table data rows
}

export default function TableSchema({ about, columns, rows }: TableSchemaProps) {
  // Build the schema rows from the data
  const schemaRows = rows.map((row) => {
    return {
      '@type': 'TableRow',
      cells: columns.map((col) => ({
        '@type': 'TableCell',
        text: String(row[col] || ''),
      })),
    };
  });

  // Add header row
  const headerRow = {
    '@type': 'TableRow',
    cells: columns.map((col) => ({
      '@type': 'TableCell',
      text: col,
    })),
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Table',
    about: {
      '@type': 'Thing',
      name: about,
    },
    tableRows: [headerRow, ...schemaRows],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
