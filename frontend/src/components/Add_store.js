import React, {useState} from "react";

export const Add_store = () => {

    const [name, setName]= useState('');

    const [price, setPrice]= useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("send");
    }

    return(
        <div className="row">
            <div className="col-md-4"></div>
            <legend>Agregar Items</legend>
            <form onSubmit={handleSubmit} className={"card card-body"}>
                <div className="form-group">
                    <input
                        type="text"
                        onChange={e => setName(e.target.value)}
                        value={name}
                        className="form-control"
                        placeholder="Nombre"
                        autoFocus
                    />
                    <div className="form-group">
                        <input
                            type="text"
                            onChange={e => setPrice(e.target.value)}
                            value={price}
                            className="form-control"
                            placeholder="Precio"
                        />
                    </div>
                </div>
                <button className={"btn btn-primary btn-block"} type={"button"}>Add</button>
            </form>
            <div className={"col-md-6"}></div>
        </div>

    )
}