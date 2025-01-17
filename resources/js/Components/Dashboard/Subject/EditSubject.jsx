import { useForm } from '@inertiajs/inertia-react'
import React, { useEffect } from 'react'

export default function EditSubject({ close, model }) {
    const { data, setData, put, reset, errors } = useForm({
        name: model.name || '',
        code: model.code || '',
    });

    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        put(route('subjects.update', model.id), {
            data,
            onSuccess: () => {
                reset(),
                close()
            },
        });
    }

    useEffect(() => {
        setData({
            name: model.name || '',
            code: model.code || '',
        });
    }, [model]);

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="modal-body">
                    <div className="form-group">
                        <label htmlFor="name" className="col-form-label">Name:</label>
                        <input type="text" className="form-control" name='name' value={data.name} onChange={onChange} id="name" />
                        {errors.name && <div className='text-danger mt-1'>{errors.name}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="code" className="col-form-label">code:</label>
                        <input type="text" className="form-control" name='code' value={data.code} onChange={onChange} id="code" />
                        {errors.code && <div className='text-danger mt-1'>{errors.code}</div>}
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn bg-gradient-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn bg-gradient-primary">Update</button>
                </div>
            </form>
        </>
    )
}
