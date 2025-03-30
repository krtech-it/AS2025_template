export type ColumnType = {
  name: string;
  label: string;
  field: string | ((row: any) => any);
  required?: boolean | undefined;
  align?: 'left' | 'right' | 'center' | undefined;
  sortable?: boolean | undefined;
  sort?: ((a: any, b: any, rowA: any, rowB: any) => number) | undefined;
  format?: (val: any) => any | undefined;
  headerClasses?: string | undefined;
}
