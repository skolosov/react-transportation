import { SelectList } from '../../components/SelectList/SelectList';

export const getColumns = (options, onChange) => ([
    {
        title: '№ по порядку',
        dataIndex: 'id',
        width: 50,
        minWidth: '50px',
        //editable: true,
    },
    {
        title: 'Название',
        dataIndex: 'name',
        width: 300,
        minWidth: '100px',
        //editable: true,
    },
    {
        title: 'Описание',
        dataIndex: 'description',
        width: 'auto',
        minWidth: '300px',
        //editable: true,
    },
    {
        title: 'Подразделение погрузки/разгрузки',
        dataIndex: '',
        width: 200,
        minWidth: '200px',
        render: (_, record) => {
            return <SelectList
                options={options}
                selected={record.divisionId}
                onChange={(value) => onChange(record, value)}
            />;
        }
    },
]);