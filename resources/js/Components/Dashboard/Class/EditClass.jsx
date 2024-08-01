import { useForm } from '@inertiajs/inertia-react'
import React, { useEffect } from 'react'

export default function EditClass({ close, model }) {
    const { data, setData, put, reset, errors } = useForm({
        name: model.name || '',
        grade: model.grade || '',
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
            grade: model.grade || '',
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
                        <label htmlFor="grade" className="col-form-label">grade:</label>
                        <input type="text" className="form-control" name='grade' value={data.grade} onChange={onChange} id="grade" />
                        {errors.grade && <div className='text-danger mt-1'>{errors.grade}</div>}
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